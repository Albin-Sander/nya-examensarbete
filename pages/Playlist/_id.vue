<template>
  <div class="playlist-container">
    <header class="playlist-header">
      <h1>{{ playlistToShow.playlist }}</h1>
      <h2>{{ playlistToShow.author }}</h2>
    </header>
    <main>
      <h1 v-if="tracks.length === 0">No tracks :(</h1>
      <ul v-else class="track-list">
        <li
          class="track-list-item-container"
          v-for="(track, index) in tracks"
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
            <p class="mini-text-under-menu" @click="addTrackToPlaylist(index)">
              Add to playlist
            </p>
          </div>
        </li>
      </ul>
    </main>
    <footer></footer>
  </div>
</template>

v-bind:style="{ backgroundImage: 'url(' + playlist.album_image + ')', }"

<script>
import { mapActions } from 'vuex'
export default {
  data: () => {
    return {
      playlistToShow: {},
      tracks: [],
    }
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
  },
  mounted() {
    this.setPlaylist()
  },
}
</script>

<style scoped>
.playlist-header {
  color: white;
  padding: 1rem;
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


@media only screen and (min-width: 768px) {

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
