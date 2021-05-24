import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
  counter: 0,
})

export const actions = {
  async writeToFirestore() {
    return console.log('hi')
  },
  async newUser(context, params) {
    let cancelOperation = false
    const ref = this.$fire.firestore.collection('users')

    // Checks have been resolved and should work, test additionaly
    
    const matchingEmails = await ref.where('email', '==', params.email).get()
    const matchingUserNames = await ref.where('displayName', '==', params.userName).get()
    if (matchingEmails.empty && matchingUserNames.empty) {
      console.log("No matching documents")
    } else {
      cancelOperation = true
      console.log("Found matching documents")
    }

    try { // Checks have been resolved and should work, test additionaly
      if (!cancelOperation) {
        console.log(cancelOperation)
        console.log(params) 
        const data = {
          email: params.email,
          displayName: params.userName,
          library: { likedTracks: [], likedPlaylists: {}, playlists: {} },
        }
        await ref.add(data)
      } else {
        return alert("username or email is already taken")
      }
    } catch (e) {
      return Promise.reject(e)
    }
  },
}
