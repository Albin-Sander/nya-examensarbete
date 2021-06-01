<template>
  <div class="library">
    <header>
      <ul class="playlists-grid">
        <!--<li class="" v-for="playlist in userPlaylists" :key="playlist.name">
          <article class="playlist-preview card"></article>
          <footer class="playlist-info">
            <p class="mini-text">{{ playlist.name }}</p>
            <p class="mini-text">{{ playlist.author }}</p>
          </footer>
        </li>-->
        <li class="playlist-item">
          <article class="playlist-preview card">
              <ul class="playlist-tracks">
                  <li class="playlist-track">
                      <div class="play"></div>
                      <div class="track-info-container">
                          <p class="track-info">Levels</p>
                          <p class="track-info">Avicii </p>
                      </div>
                  </li>
                  <li class="playlist-track"></li>
                  <li class="playlist-track"></li>
              </ul>
          </article>
          <footer class="playlist-info">
            <p class="mini-text">Avicii 2018</p>
            <p class="mini-text">David Andersen</p>
          </footer>
        </li>
        <li class="playlist-item">
          <article class="playlist-preview card"></article>
          <footer class="playlist-info">
            <p class="mini-text">Avicii 2018</p>
            <p class="mini-text">David Andersen</p>
          </footer>
        </li>
        <li class="playlist-item">
          <article class="playlist-preview card"></article>
          <footer class="playlist-info">
            <p class="mini-text">Avicii 2018</p>
            <p class="mini-text">David Andersen</p>
          </footer>
        </li>
        <li class="playlist-item">
          <article class="playlist-preview card"></article>
          <footer class="playlist-info">
            <p class="mini-text">Avicii 2018</p>
            <p class="mini-text">David Andersen</p>
          </footer>
        </li>
      </ul>
    </header>
    <main>
      <ul>
        <li></li>
      </ul>
    </main>
    <footer></footer>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data: () => {
    return {
      user: {},
      likedTracks: [],
      userPlaylists: {},
    }
  },
  methods: {
    ...mapActions({
      getUserLibrary: 'getUserLibrary',
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
          await vm.getUserLibrary(obj)
          return vm.getLibrary()
        } else {
          console.log('no user')
          return (window.location.href = '/login')
        }
      })
    },
    async getLibrary() {
      let data = this.$store.state.userLibrary
      this.likedTracks = data.likedTracks
      this.likedPlaylists = data.likedPlaylists
      console.log(data)
    },
  },
  computed: {
    //   async library() {
    //       console.log("Library updated")
    //       return this.library = this.$store.state.userLibrary
    //   }
  },
  mounted() {
    this.checkUser()
  },
}
</script>

<style scoped>
.library {
  height: 100vh;
}

header {
  background-color: transparent;
  padding: 1rem;
}

.playlist-item {
  list-style: none;
  height: 10rem;
  width: 9rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.playlists-grid {
  display: grid;
  justify-content: space-around;
  align-items: center;
  grid-row-gap: 1.5rem;
  grid-column-gap: 1rem;
  grid-template-columns: repeat(2, auto);
  list-style: none;
  margin: 0;
  padding: 0;
  padding-top: 0.5rem;
  list-style: none;
}

.playlist-preview {
  height: 80%;
  width: 100%;
  background-color: white;
  list-style: none;
  margin: 0px;
}

.playlist-tracks {
    height: 100%;
    background-color: gray;
    margin: 0px;
    margin-top: auto;
    list-style: none;
    padding-left: 0;
    padding: 0.5rem;
    display: grid;
    grid-gap: 0;
    grid-template-columns: repeat(1, auto);
}

.playlist-track {
    height: 2rem;
    width: 100%;
    background-color: red;
    display: flex;
}

.play {
    background-color: yellow;
    height: 100%;
    width: 2.5rem;
}

.track-info-container {
    display: flex;
    padding-left: 0.2rem;
    flex-direction: column;
}

.track-info {
    margin: 0;
    font-size: 10px;
}

.playlist-info {
  height: 20%;
  width: 97%;
  padding-top: 0.2rem;
  background-color: transparent;
}

.mini-text {
  margin: 0px;
  font-size: 11px;
  color: #00ddff;
}

main {
  height: 50%;
  background-color: black;
}

footer {
  height: 10%;
  background-color: gray;
}

@media only screen and (min-width: 500px) {
  .playlists-container {
    grid-template-columns: repeat(3, auto);
  }
}

@media only screen and (max-width: 350px) {
  .playlist-preview {
    width: 8rem;
    height: 7rem;
  }
}
</style>
