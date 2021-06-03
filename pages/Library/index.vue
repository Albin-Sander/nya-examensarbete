<template>
  <div class="library">
    <header>
      <ul class="playlists-grid">
        <li
          class="playlist-item"
          v-for="playlist in userPlaylists"
          :key="playlist.name"
        >
          <article class="playlist-preview card">
            <ul class="playlist-tracks">
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
            </ul>
          </article>
          <footer class="playlist-info">
            <p class="mini-text">{{ playlist.name }}</p>
            <p class="mini-text">{{ playlist.author }}</p>
          </footer>
        </li>

        <!-- v-for ends here -->

        <!--<li class="playlist-item" @click="newPlaylist()">
          <article class="playlist-preview card">
            <ul class="playlist-tracks">
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
              <li class="playlist-track">
                <div class="play"></div>
                <div class="track-info-container">
                  <p class="track-preview-info">Levels</p>
                  <p class="track-preview-info">Avicii</p>
                </div>
              </li>
            </ul>
          </article>
          <footer class="playlist-info">
            <p class="mini-text">Avicii 2018</p>
            <p class="mini-text">David Andersen</p>
          </footer>
        </li>-->
        <li class="playlist-item">
          <article class="playlist-preview card">
            <button class="add-playlist-btn"></button>
            <div class="add-playlist-title">
              <h5>Add</h5>
              <h5>Playlist</h5>
            </div>
          </article>
          <footer class="playlist-info">
            <p class="mini-text">Avicii 2018</p>
            <p class="mini-text">David Andersen</p>
          </footer>
        </li>
        <!--<li class="playlist-item">
          <article class="playlist-preview card"></article>
          <footer class="playlist-info">
            <p class="mini-text">Avicii 2018</p>
            <p class="mini-text">David Andersen</p>
          </footer>
        </li>-->
      </ul>
    </header>
    <main>
      <ul class="track-list">
        <li
          class="track-container"
          v-for="track in likedTracks"
          :key="track.id"
        >
          <div class="music-icon"></div>
          <div class="track-info">
            <p class="mini-text-track">{{ track.name }}</p>
            <p class="mini-text-author">{{ track.artist_name }}</p>
          </div>
        </li>
        <li class="track-container">
          <div class="music-icon"></div>
          <div class="track-info">
            <p class="mini-text-track">Sunshine</p>
            <p class="mini-text-author">Avicii</p>
          </div>
        </li>
        <li class="track-container">
          <div class="music-icon"></div>
          <div class="track-info">
            <p class="mini-text-track">Sunshine</p>
            <p class="mini-text-author">Avicii</p>
          </div>
        </li>
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
      addNewPlaylist: 'addNewPlaylist',
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
    async newPlaylist() {
      let obj = {
        email: this.user.email,
        tracklist: [],
        playlist: 'Newplaylist',
      }
      console.log(obj)
      this.addNewPlaylist(obj)
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
  min-height: 14rem;
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
  align-items: center;
  grid-row-gap: 1.5rem;
  grid-column-gap: 1rem;
  grid-template-columns: repeat(2, auto);
  list-style: none;
  margin: 0;
  padding: 0;
  padding-top: 0.5rem;
  list-style: none;
  grid-template-columns: repeat(auto-fill, minmax(9rem, 1fr));
  grid-auto-flow: column;
  grid-auto-columns: minmax(160px, 1fr);
  overflow-x: auto;
  overflow-y: clip;
  grid-template-rows: 2;
  grid-template-rows: repeat(2, auto);
}

.playlist-preview {
  height: 80%;
  width: 100%;
  list-style: none;
  margin: 0px;
}

.playlist-tracks {
  height: 100%;
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
  background-color: transparent;
  display: flex;
}

.play {
  height: 100%;
  width: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('~@/assets/menu/home-icon2.svg');
  background-repeat: no-repeat;
  background-size: contain;
}

.track-info-container {
  display: flex;
  padding-left: 0.2rem;
  flex-direction: column;
}

.track-preview-info {
  margin: 0;
  font-size: 11px;
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

.track-list {
  width: 95%;
  list-style: none;
  margin: 0;
  padding-left: 0rem;
  padding-top: 0.5rem;
}

.track-container {
  margin: 0 0 5px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.322);
  display: flex;
  align-items: center;
  padding-bottom: 0.5rem;
  margin-top: 1rem;
}

.music-icon {
  width: 2.2rem;
  height: 2.2rem;
  background-image: url('~@/assets/library/vinyl-icon.svg');
  background-repeat: no-repeat;
  background-size: contain;
}

.track-info {
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
}

.mini-text-author {
  color: white;
  margin: 0px;
  font-size: 11px;
}

.track-info-seperator {
  color: white;
  padding-left: 0.5rem;
  margin: 0px;
}

.mini-text-track {
  color: white;
  margin: 0px;
}

main {
  background-color: transparent;
  padding: 1rem;
  display: flex;
  justify-content: center;
}

footer {
  height: 10%;
  background-color: transparent;
  color: white;
}

@media only screen and (min-width: 500px) {
  .playlists-container {
    grid-template-columns: repeat(3, auto);
  }
}

@media only screen and (max-width: 350px) {
  .playlist-item {
    width: 8rem;
    height: 10rem;
  }

  .playlists-grid {
    grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
  }
}

@media only screen and (max-width: 768px) {
}
</style>
