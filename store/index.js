import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++
    },
  },
  actions: {
    async writeToFirestore() {
      const messageRef = this.$fire.firestore.collection('test').doc('message')
      try {
        await messageRef.set({
          message: 'Nuxt-Fire with Firestore rocks!',
        })
      } catch (e) {
        alert(e)
        return
      }
      alert('Success.')
    },
  },
})
