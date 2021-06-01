import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
  credentialsExist: false,
  userLibrary: {}
})

export const mutations = {
  setCredentialsExist(state) {
    state.credentialsExist = true
  },
  setCredentialsDoesNotExist(state) {
    state.credentialsExist = false
  },
  setUserLibrary(state, payload) {
    state.userLibrary = payload.library
    console.log(payload.library)
  }
}

export const actions = {
  async writeToFirestore() {
    return console.log('hi')
  },

  async checkUserCredentials(context, params) {
    console.log(context)
    console.log('--------------------------------------')
    console.log(state)
    console.log('--------------------------------------')
    const ref = await this.$fire.firestore.collection('users')

    // This a action that checks if the credentials already exist or not without actually
    // writing anything to firestore, this is to prevent creating a user object in firestore
    // incase the firebase auth throws "weak password" error upon calling createUser function

    const matchingEmails = await ref.where('email', '==', params.email).get()
    const matchingUserNames = await ref
      .where('displayName', '==', params.userName)
      .get()
    if (matchingEmails.empty && matchingUserNames.empty) {
      console.log('No matching documents')
      await context.commit('setCredentialsDoesNotExist')
      return
    } else {
      console.log('Found matching documents')
      context.commit('setCredentialsExist')
      return
    }
  },

  async addNewUser(context, params) {
    const ref = this.$fire.firestore.collection('users')
    try {
      console.log(context.state.credentialsExist)
      if (!context.state.credentialsExist) {
        console.log('Inside if in addNewUser action')
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

  async getUserLibrary(context, param) {
    try {
      console.log("hi")
      const ref = this.$fire.firestore.collection('users')
      const snapshot = await ref.where('email', '==', param.email).get()
      let result = 
      await snapshot.forEach(doc => {
        console.log(doc.data());
        result = doc.data()
        context.commit("setUserLibrary", result)
      });
    } catch (e) {
      console.log(e)
    }
  },
}

