<template>
  <div class="playlist-container">
    <header class="playlist-header">
      <div>
        <h1>{{ playlistToShow.playlist }}</h1>
        <h2>{{ playlistToShow.author }}</h2>
      </div>
      <div class="goBack" @click="backToLibrary()">ᐊ</div>
    </header>
    <main>
      <h1 class="no-tracks" v-if="tracks.length === 0">No tracks :(</h1>
      <ul v-else class="track-list">
        <li
          class="track-list-item-container"
          v-for="track in tracks"
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
          <!--<div
            v-bind:class="{
              trackUnderMenu: activeUnderMenu == track.id,
              trackNoUnderMenu: activeUnderMenu !== track.id,
            }"
          >
            <p class="mini-text-under-menu" @click="addTrackToPlaylist(index)">
              Add to playlist
            </p>
          </div>-->
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
      playlistToShow: {},
      tracks: [],
    }
  },
  filters: {
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
      getUserPlaylist: 'getUserPlaylist',
    }),
    async setPlaylist() {
      let vm = this
      await this.$fire.auth.onAuthStateChanged(async function (user) {
        let obj
        if (user) {
          console.log(user.email)
          let playlistName = vm.$route.query.id
          obj = { user: true, email: await user.email, playlist: playlistName }
          await vm.getUserPlaylist(obj)
          return vm.getPlaylist()
        } else {
          console.log('no user')
          return (window.location.href = '/login')
        }
      })
    },

    async getPlaylist() {
      this.tracks = this.$store.state.playlistToShow.tracks
      return (this.playlistToShow = this.$store.state.playlistToShow)
    },

    backToLibrary() {
      return (window.location.href = '/library')
    },
  },
  mounted() {
    this.setPlaylist()
  },
}
</script>

<style scoped>
.no-tracks {
  color: white;
  margin-right: auto;
}

.playlist-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.playlist-header {
  color: #00ddff;
  padding-top: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid white;
  width: 90%;
  display: flex;
  justify-content: space-between;
  min-height: 7rem;
}

h1 {
  font-size: 24px;
}

h2 {
  font-size: 20px;
}

.goBack {
  color: white;
  cursor: pointer;
  font-size: 20px;
}

main {
  background-color: transparent;
  padding: 0;
  padding-top: 1rem;
  display: flex;
  justify-content: center;
  width: 90%;
}

.track-list {
  width: 100%;
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

footer {
  height: 6rem;
  background-color: transparent;
  color: #00ddff;
}

@media only screen and (min-width: 768px) {
  .playlist-header {
    min-height: 9rem;
  }

  h1 {
    font-size: 36px;
  }

  h2 {
    font-size: 30px;
  }

  main {
    padding-top: 2rem;
  }

  .goBack {
    font-size: 30px;
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

@media only screen and (min-width: 900px) {
  .playlist-header {
    width: 80%;
  }

  main {
    width: 80%;
    padding-top: 3rem;
  }
}

@media only screen and (min-width: 1200px) {
  .playlist-header {
    width: 70%;
  }

  main {
    width: 70%;
  }

  .track-list {
    width: 100%;
    grid-gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (min-width: 1500px) {
  .playlist-header {
    width: 60%;
  }
  main {
    width: 60%;
  }
}

@media only screen and (min-width: 1660px) {
  .track-list {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
