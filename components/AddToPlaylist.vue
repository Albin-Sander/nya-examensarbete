<template>
  <div class="playlist-form card">
    <div class="header">
      <button class="close-btn" @click="closeMe()">X</button>
      <h4 class="title">Select a playlist</h4>
    </div>
    <ul class="playlists-container">
        <li v-for="(item, index) in playlists" :key="index">
            <p @click="addTrackToPlaylist(item, index)">{{item.playlist}}</p>
        </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
      track: Object,
      playlists: Array
  },
  data: () => {
    return {
      playlist: '',
      user: {},
    }
  },
  methods: {
    ...mapActions({
      addTrackAction: 'addTrackToPlaylist',
    }),

    async checkUser() {
      let vm = this
      await this.$fire.auth.onAuthStateChanged(async function (user) {
        let obj
        if (user) {
          console.log(user.email)
          obj = { user: true, email: await user.email }
          console.log(obj)
          vm.user = obj
        } else {
          console.log('no user')
          return (window.location.href = '/login')
        }
      })
    },

    closeMe() {
      return this.$emit('closeModal')
    },

    async addTrackToPlaylist(playlistObj, index) {
        let obj = {
            email: this.user.email,
            position: index,
            track: this.track
        }
        console.log(obj)
        await this.addTrackAction(obj)
    }
  },
  mounted() {
    this.checkUser()
  },
}
</script>

<style scoped>
.playlist-form {
  width: 17rem;
  height: 20rem;
  max-height: 20rem;
  position: fixed;
  z-index: 50;
  top: 40%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  padding: 0.5rem 0.8rem 0.5rem 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.header {
    border-bottom: 1px solid #645777;
}

.title {
    font-weight: 900;
    text-align: center;
}

.close-btn {
  color: white;
  display: block;
  margin-left: auto;
  background-color: transparent;
  border: none;
  margin-right: -0.9rem;
  margin-top: -0.6rem;
}

.playlists-container {
    list-style: none;
    padding: 0;
    margin: 0;
    margin-top: 1rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    overflow-y: auto;
}

p {
    color: #03cbee;
}
</style>
