import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
  credentialsExist: false,
  userLibrary: {},
  music: '',
})

export const mutations = {
  setCredentialsExist(state) {
    state.credentialsExist = true
  },
  setCredentialsDoesNotExist(state) {
    state.credentialsExist = false
  },

  setUserLibrary(state, payload) {
    console.log("hi")
    state.userLibrary = payload.library
    console.log(payload.library)
  },

  setMusic(state, { url }) {
    state.music = url
  },
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
          library: { likedTracks: [], likedPlaylists: {}, playlists: [] },
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
      const ref = this.$fire.firestore.collection('users')
      const snapshot = await ref.where('email', '==', param.email).get()
      let result = await snapshot.forEach((doc) => {
        result = doc.data()
        context.commit('setUserLibrary', result)
      })
    } catch (e) {
      console.log(e)
    }
  },

  async addNewPlaylist(context, param) {
    try {
      const ref = this.$fire.firestore.collection('users')
      const snapshot = await ref.where('email', '==', param.email).get()
      await snapshot.forEach(async (doc) => {
        let data = doc.data()
        console.log(data)
        let playLists = data.library.playlists
        console.log(playLists)
        let playlistName = param.playlist
        let playlistObj = {
          playlist: playlistName,
          author: data.displayName,
          tracks: param.tracklist,
        }
        console.log(playlistObj)
        playLists.push(playlistObj)
        console.log(await playLists)
        await ref.doc(doc.id).update({
          'library.playlists': playLists,
        })
      })
    } catch (e) {
      console.log(e)
    }
  },

  async addTrackToPlaylist(context, payload) {
    console.log("hi")
    try {
      const ref = this.$fire.firestore.collection('users')
      const snapshot = await ref.where('email', '==', payload.email).get()
      await snapshot.forEach(async (doc) => {
        let data = doc.data()
        let playLists = data.library.playlists
        let index = payload.position
        console.log(payload.position)
        playLists[index].tracks.push(payload.track)
        await ref.doc(doc.id).update({
          'library.playlists': playLists,
        })
      })
    } catch (e) {
      console.log(e)
    }
  },

  async saveTrack(context, payload) {
    console.log(payload)
    const ref = await this.$fire.firestore.collection('users')
    const snapshot = await ref.where('email', '==', payload.email).get()
    let result = await snapshot.forEach(async (doc) => {
      let data = doc.data()
      console.log(data)
      let trackList = data.library.likedTracks
      if (trackList.length == 0) {
        trackList.push(payload.track)
        const res = await ref.doc(doc.id).update({
          'library.likedTracks': trackList,
        })
        return console.log('Added track')
      }

      let result = await trackList.filter(
        (track) => track.id == payload.track.id
      )
      console.log(result)

      if (result.length > 0) {
        console.log('Found matching tracks')
        console.log('-------------------')
        console.log(result[0].id + ' ' + payload.track.id)
        return
      } else {
        console.log('In the else')
        trackList.push(payload.track)
        const res = await ref.doc(doc.id).update({
          'library.likedTracks': trackList,
        })
        return
      }
      // for(var index in trackList) {
      //   console.log(trackList[index].id)
      //   console.log(payload.track.id)
      //   if(trackList[index].id === payload.track.id) {
      //       console.log("Found matching tracks")
      //       console.log("-------------------")
      //       console.log(trackList[index].id + ' ' +  payload.track.id)
      //       return
      //   // }
      //   // var obj =  vm.results[track].album_name
      //   // console.log(obj)
      //   } else{
      //     console.log("Hej")
      //     console.log(payload.track)
      //     trackList.push(payload.track);
      //     const res = await ref.doc(doc.id).update({
      //       'library.likedTracks': trackList
      //     });
      //     return
      //   }
      // }
    })
  },
}
