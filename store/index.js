import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
  credentialsExist: false,
})

export const mutations = {
  setCredentialsExist (state) {
    console.log('hi')
    state.credentialsExist = true
  },
  setCredentialsDoesNotExist (state) {
    console.log('hi')
    state.credentialsExist = false
  }
}

export const actions = {
  async writeToFirestore() {
    return console.log('hi')
  },
  async newUser(context, params) {
    console.log(context)
    console.log("--------------------------------------")
    console.log(state)
    console.log("--------------------------------------")
    let cancelOperation = false
    const ref = this.$fire.firestore.collection('users')

    // Checks have been resolved and should work, test additionaly
    
    const matchingEmails = await ref.where('email', '==', params.email).get()
    const matchingUserNames = await ref.where('displayName', '==', params.userName).get()
    if (matchingEmails.empty && matchingUserNames.empty) {
      console.log("No matching documents")
      context.commit("setCredentialsDoesNotExist")
    } else {
      cancelOperation = true
      console.log("Found matching documents")
      context.commit("setCredentialsExist")
    }

    try { // Checks have been resolved and should work, test additionaly
      console.log(context.state.credentialsExist)
      if (!context.state.credentialsExist) {
        console.log(params) 
        const data = {
          email: params.email,
          displayName: params.userName,
          library: { likedTracks: [], likedPlaylists: {}, playlists: {} },
        }
        await ref.add(data)
      } else {
        return 
      }
    } catch (e) {
      return Promise.reject(e)
    }
  },
}

// async newUser(context, params) {
//   return (
//     new Promise( async (resolve, reject) => {
//       const matchingEmails = await ref
//         .where('email', '==', params.email)
//         .get()
//       const matchingUserNames = await ref
//         .where('displayName', '==', params.userName)
//         .get()
//       if (matchingEmails.empty && matchingUserNames.empty) {
//         console.log('No matching documents')
//       } else {
//         cancelOperation = true
//         console.log('Found matching documents')
//         throw error
//       }

//       try {
//         // Checks have been resolved and should work, test additionaly
//         if (!cancelOperation) {
//           console.log(cancelOperation)
//           console.log(params)
//           const data = {
//             email: params.email,
//             displayName: params.userName,
//             library: { likedTracks: [], likedPlaylists: {}, playlists: {} },
//           }
//           await ref.add(data)
//         } else {
//           return alert('username or email is already taken')
//         }
//       } catch (e) {
//         return Promise.reject(e)
//       }
//     }),
//     (error) => {
//       reject(error)
//     }
//   )
// },