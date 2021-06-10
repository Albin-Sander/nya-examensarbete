<template>
  <div v-if="user.user === true" class="library">
    <div class="desktop-container">
      <createPlaylist
        v-if="showNewPlaylistModal"
        v-on:closeModal="toggleNewPlaylistModal()"
      />
      <addToPlaylist
        v-if="showAddToPlaylist"
        v-on:closeModal="toggleAddToPlaylistModal()"
        :track="trackToAdd"
        :playlists="userPlaylists"
      />
      <header>
        <ul class="playlists-grid">
          <li class="playlist-item">
            <article class="playlist-preview card">
              <button
                class="add-playlist-btn globalBtnActive"
                @click="toggleNewPlaylistModal()"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 0C9.29837 0 9.58452 0.118526 9.79549 0.329505C10.0065 0.540483 10.125 0.826631 10.125 1.125V7.875H16.875C17.1734 7.875 17.4595 7.99353 17.6705 8.20451C17.8815 8.41548 18 8.70163 18 9C18 9.29837 17.8815 9.58452 17.6705 9.79549C17.4595 10.0065 17.1734 10.125 16.875 10.125H10.125V16.875C10.125 17.1734 10.0065 17.4595 9.79549 17.6705C9.58452 17.8815 9.29837 18 9 18C8.70163 18 8.41548 17.8815 8.20451 17.6705C7.99353 17.4595 7.875 17.1734 7.875 16.875V10.125H1.125C0.826631 10.125 0.540483 10.0065 0.329505 9.79549C0.118526 9.58452 0 9.29837 0 9C0 8.70163 0.118526 8.41548 0.329505 8.20451C0.540483 7.99353 0.826631 7.875 1.125 7.875H7.875V1.125C7.875 0.826631 7.99353 0.540483 8.20451 0.329505C8.41548 0.118526 8.70163 0 9 0V0Z"
                    fill="white"
                  />
                </svg>
              </button>
              <div class="add-playlist-title-container">
                <h5 class="add-playlist-title">Add new</h5>
                <h5 class="add-playlist-title">Playlist</h5>
              </div>
            </article>
            <footer class="playlist-info">
              <p class="mini-text">Title</p>
              <p class="mini-text">Author</p>
            </footer>
          </li>

          <li
            class="playlist-item"
            v-for="(playlist) in userPlaylists"
            :key="playlist.playlist"
          >
            <NuxtLink
              class="playlist-preview card"
              
              :to="{ path: '/playlist', query: { id: playlist.playlist } }"
            >
                <ul class="playlist-tracks">
                  <li
                    v-for="(track, index) in playlist.tracks.slice(0, 3)"
                    :key="index"
                    class="playlist-track"
                  >
                    <div
                      class="play card"
                      v-bind:style="{
                        backgroundImage: 'url(' + track.album_image + ')',
                      }"
                    ></div>
                    <div class="track-info-container">
                      <p class="track-preview-info">
                        {{ track.name | trackPreviewTruncate() }}
                      </p>
                      <p class="track-preview-info">
                        {{ track.artist_name | trackPreviewTruncate() }}
                      </p>
                    </div>
                  </li>
                </ul>
              </NuxtLink>
              <footer class="playlist-info">
                <p class="mini-text">{{ playlist.playlist }}</p>
                <p class="mini-text">{{ playlist.author }}</p>
              </footer>
          </li>
        </ul>
      </header>
      <main>
        <h1 v-if="likedTracks.length == 0">You have no liked tracks</h1>
        <ul v-else class="track-list">
          <li
            class="track-list-item-container"
            v-for="(track, index) in likedTracks"
            :key="track.id"
          >
            <div class="track-container">
              <div
                class="music-icon"
                @click="
                  $store.commit('setMusic', {
                    url: track.audio,
                  })
                "
              ></div>
              <div class="track-info">
                <p class="mini-text-track">
                  {{ track.name | trackTruncate() }}
                </p>
                <p class="mini-text-author">{{ track.artist_name }}</p>
              </div>
              <div
                class="track-under-menu-icon"
                @click="toggleUnderMenu(track.id)"
              ></div>
            </div>
            <div
              v-bind:class="{
                trackUnderMenu: activeUnderMenu == track.id,
                trackNoUnderMenu: activeUnderMenu !== track.id,
              }"
            >
              <p
                class="mini-text-under-menu"
                @click="addTrackToPlaylist(index)"
              >
                Add to playlist
              </p>
            </div>
          </li>
        </ul>
      </main>
      <footer class="mobile-footer"><p>Powered by Jamendo</p></footer>
    </div>
  </div>
</template>

<script>
import CreatePlaylist from '../../components/CreatePlaylist'
import AddToPlaylist from '../../components/AddToPlaylist'
import { mapActions } from 'vuex'
import { mapMutations } from 'vuex'

export default {
  components: {
    createPlaylist: CreatePlaylist,
    addToPlaylist: AddToPlaylist,
  },
  data: () => {
    return {
      user: {},
      likedTracks: [],
      userPlaylists: [],
      activeUnderMenu: '',
      showNewPlaylistModal: false,
      showAddToPlaylist: false,
      trackToAdd: {},
    }
  },
  filters: {
    trackPreviewTruncate: function (str) {
      let length = str.length
      let ending = '...'

      if (length > 13) {
        console.log(str)
        let newStr = str.slice(0, 13)
        console.log('hi')
        return newStr.concat(ending)
      } else {
        return str
      }
    },
    trackTruncate: function (str) {
      let length = str.length
      let ending = '...'

      if (length > 30) {
        console.log(str)
        let newStr = str.slice(0, 30)
        console.log('hi')
        return newStr.concat(ending)
      } else {
        return str
      }
    },
  },
  methods: {
    ...mapActions({
      getUserLibrary: 'getUserLibrary',
      addNewPlaylist: 'addNewPlaylist',
    }),
    ...mapMutations({
      setPlaylist: 'setPlaylist',
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
      this.userPlaylists = data.playlists
    },
    async toggleNewPlaylistModal() {
      return (this.showNewPlaylistModal = !this.showNewPlaylistModal)
    },
    toggleAddToPlaylistModal() {
      return (this.showAddToPlaylist = !this.showAddToPlaylist)
    },
    toggleUnderMenu(param) {
      if (this.activeUnderMenu === param) {
        return (this.activeUnderMenu = '')
      }
      this.activeUnderMenu = param
    },
    async addTrackToPlaylist(param) {
      let track = this.likedTracks[param]
      this.trackToAdd = track
      return (this.showAddToPlaylist = !this.showAddToPlaylist)
    },
    showPlaylist(param) {
      this.setPlaylist(this.userPlaylists[param])
      return (window.location.href = '/library/playlist')
    },
  },

  computed: {},
  mounted() {
    this.checkUser()
  },
}
// grid-template-columns: repeat(6, calc(50% - 40px));
</script>

<style scoped>
.desktop-container {
  display: hidden;
}

.library {
  height: 100vh;
}

header {
  background-color: transparent;
  padding: 1rem;
  min-height: 14rem;
  display: flex;
  justify-content: flex-start;
}

a {
  color: white !important;
  text-decoration: none !important;
}

.playlist-item {
  list-style: none;
  height: 10rem;
  width: 9rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.playlists-grid {
  display: grid;
  align-items: center;
  margin: 0;
  padding: 0;
  padding-top: 0.5rem;
  list-style: none;
  grid-auto-flow: column;
  grid-auto-columns: minmax(160px, 1fr);
  overflow-x: auto;
  overflow-y: clip;
  grid-template-rows: repeat(2, auto);
  grid-gap: 0.3rem;
  row-gap: 1.5rem;
  padding-bottom: 2rem;
}

.playlist-preview {
  height: 80%;
  width: 100%;
  list-style: none;
  margin: 0px;
  padding: 0.5rem;
}

h1 {
  color: white;
}

.playlist-tracks {
  height: 100%;
  margin: 0px;
  margin-top: auto;
  list-style: none;
  padding-left: 0;
  display: grid;
  grid-gap: 0;
  grid-template-columns: repeat(1, auto);
}

.add-playlist-btn {
  height: 3rem;
  width: 3rem;
  border-radius: 100%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.add-playlist-title-container {
  margin-top: auto;
}

.add-playlist-title {
  margin: 0;
  font-weight: 900;
}

.plus {
  margin: 0;
  font-weight: 600;
  font-size: 50px;
}

.playlist-track {
  height: 2rem;
  width: 100%;
  background-color: transparent;
  display: flex;
}

.play {
  height: 100%;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('~@/assets/menu/home-icon2.svg');
  background-repeat: no-repeat;
  background-size: contain;
}

.track-info-container {
  display: flex;
  padding-left: 0.4rem;
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
}

.track-list-item-container {
  margin: 0 0 5px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.322);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 0.5rem;
  margin-top: 1rem;
  height: max-content;
}

.track-container {
  width: 100%;
  display: flex;
}

.music-icon {
  width: 2.2rem;
  height: 2.2rem;
  background-image: url('~@/assets/library/vinyl-icon.svg');
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
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

.track-under-menu-icon {
  width: 2rem;
  height: 2rem;
  color: white;
  margin-left: auto;
  display: flex;
  justify-content: center;
  background-image: url('~@/assets/library/menu-dots.svg');
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
}

.trackUnderMenu {
  height: 2.2rem;
  width: 100%;
  padding: 0.2rem 0.2rem 0rem 0.2rem;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
}

.trackNoUnderMenu {
  display: none;
}

.mini-text-under-menu {
  margin: 0px;
  font-size: 12px;
  color: #00ddff;
}

.mini-text-track {
  color: white;
  margin: 0px;
}

main {
  background-color: transparent;
  padding: 1rem;
  padding-top: 0;
  display: flex;
  justify-content: center;
}

footer {
  height: 6rem;
  background-color: transparent;
  color: #00ddff;
}

.mobile-footer {
  background-color: transparent;
  color: #00ddff;
  padding-left: 1.5rem;
  margin-bottom: auto;
}

@media only screen and (min-width: 500px) {
  .playlists-container {
    grid-template-columns: repeat(3, auto);
  }
}

@media only screen and (min-width: 768px) {
  header {
    display: flex;
    justify-content: flex-start;
    width: 95%;
  }

  .library {
    display: flex;
    justify-content: center;
    min-height: 55rem;
  }

  .desktop-container {
    width: 90vw;
    background-color: transparent;
    height: max-content;
  }

  .playlists-grid {
    width: max-content;
  }

  .track-list {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
    padding-right: 0rem;
    padding-left: 0rem;
    width: 100%;
  }

  .trackNoUnderMenu {
    height: 2.2rem;
    width: 100%;
    padding: 0.2rem 0.2rem 0rem 0.2rem;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
  }

  .track-under-menu-icon {
    display: none;
  }
}

@media only screen and (min-width: 1200px) {
  .mobile-footer {
    height: 0%;
  }

  .library {
    display: flex;
    justify-content: center;
    min-height: 55rem;
  }

  .desktop-container {
    width: 65vw;
    background-color: transparent;
    height: max-content;
  }

  .playlists-grid {
    grid-template-rows: repeat(3, auto);
  }

  .track-list {
    width: 100%;
    grid-gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (min-width: 1500px) {
  .track-list {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
