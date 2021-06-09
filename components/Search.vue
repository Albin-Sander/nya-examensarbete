<template>
  <div>
    <div id="app-instasearch">
      <div class="input-container">
        <input
          class="input-field"
          @click="displayComponent"
          type="text"
          placeholder="search..."
          v-model="term"
        />
        <b-button @click="search" type="button" class="btn btn-outline-primary"
          >Search
        </b-button>
        <b-button
          v-bind:class="{ active: isActive }"
          @click="hideComponent"
          size="sm"
          class="my-2 my-sm-0"
          type="submit"
          >Hide list</b-button
        >
      </div>

      <div
        v-bind:class="{ active: isActive }"
        id="list-group"
        tag="ul"
        name="list-animation"
      >
        <b-card class="mb-2" v-for="result in results" :key="result.id">
          <!--create click function to share button-->

          <img v-bind:src="result.image" />
          <span class="author">{{ result.album_name }}</span>
          <button
            @click="
              $store.commit('setMusic', {
                url: result.audio,
              })
            "
          >
            &#9658; Play Sample
          </button>

          <b-button @click="addTrack(result.id)"> add to library </b-button>
          <audio>
            <source v-bind:src="result.audio" />
          </audio>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Popupmodal from './Popupmodal.vue'
export default {
  components: { Popupmodal },
  data: () => {
    return {
      SearchString: '',
      term: '',
      results: [],
      data: null,
      audio: null,
      isActive: true,
    }
  },

  computed: {
    ...mapState(['credentialsExist']),
    filteredFeed: function () {
      var results = this.data
      var SearchString = this.SearchString

      if (!SearchString) {
        return results
      }

      this.searchString = SearchString.trim().toLowerCase()

      results = results.filter(function (item) {
        if (
          item.album_name.toLowerCase().indexOf(SearchString) !== -1 ||
          item.album_name.toUpperCase().indexOf(SearchString) !== -1
        ) {
          return item
        }
      })

      return results
    },
    webShareApiSupported() {
      return navigator.share
    },
  },

  methods: {
    ...mapActions({
      saveTrack: 'saveTrack',
    }),

    search: function () {
      let CLIENT_ID = process.env.clientId
      if (this.audio) {
        this.audio.pause()
        this.audio.currentTime = 0
      }

      fetch(
        `https://api.jamendo.com/v3.0/tracks/?client_id=${CLIENT_ID}&search=${encodeURIComponent(
          this.term
        )}&limit=5&order=downloads_week&groupby=artist_id`
      )
        .then((res) => res.json())
        .then((res) => {
          this.results = res.results
        })
      console.log(this.results)
    },
    play: function (s) {
      if (this.audio) {
        this.audio.pause()
        this.audio.currentTime = 0
      }
      this.audio = new Audio(s)
      this.audio.play()
    },
    addTrack: async function (trackId) {
      let vm = this
      await this.$fire.auth.onAuthStateChanged(async function (user) {
        if (user) {
          console.log('hej')
          for (var index in vm.results) {
            if (vm.results[index].id == trackId) {
              const email = user.email
              const track = vm.results[index]
              vm.saveTrack({ email, track })
            }
          }
        } else {
          console.log('you need to be logged in')
          return (window.location.href = '/login')
        }
      })
    },
    test() {
      this.$store.dispatch('checkUserExists')
    },
    displayComponent() {
      this.isActive = false
    },
    hideComponent() {
      this.isActive = true
    },
  },
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.svg {
  width: 3rem;
}
button {
  font-weight: 700;
  background-color: #17a2b8;
  color: white;
}
button:hover {
  font-weight: 700;
  background-color: #007bff;
  color: white;
}
input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}

html {
  overflow-y: scroll;
}

body {
  display: grid;
  grid-template-rows: 9.375rem 1fr;
  background-color: #f5f5f5;
  font-family: 'Roboto Slab', serif;
  margin-bottom: 0.625rem;
}

header {
  display: grid;
  color: white;
  background: #6d25bc;
}

header h1 {
  place-self: center;
  font-size: 2.625rem;
}

#app-instasearch {
  place-self: center;
  margin-top: 1.875rem;
  width: 37.5rem;
}

.input-container {
  max-width: 70%;
  border-radius: 0.3125rem;
  background: #1e1133;
  padding: 0.625rem;
}

.input-container input {
  border: none;
  background: transparent;
  color: white;
  padding: 0.375rem 0.9375rem;
  font-size: 1.125rem;
}

::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #a6b0ba;
  opacity: 1; /* Firefox */
}

.photo {
  list-style: none;
  display: grid;
  grid-template-columns: 12.5rem auto;
  margin-top: 1.25rem;
  align-items: center;
  background-color: #e9edf0;
  padding: 1.875rem 3.125rem;
  border-radius: 0.3125rem;
  border: 0.0625rem solid #e3e3e3;
}

.author {
  font-size: 1.125rem;
  margin-left: 0.125rem;
  color: white;
  display: flex;
}

.title {
  border-radius: 0.3125rem;
  width: 12.5rem;
}

.photo-animated {
  transition: all 0.5s;
}

.list-animation-enter,
.list-animation-leave-to {
  opacity: 0;
  transform: translateY(1.875rem);
}
#list-group {
  padding-right: 15%;
  max-width: 85%;
  height: 0;
}

.list-animation-leave-active {
  position: absolute;
}
img {
  max-width: 5rem;
}
ul {
  background: #3b2460;
  padding: 5%;
  overflow-y: scroll;
  height: 50rem;
}

.mb-2 {
  transition: all 0.5s;
  background-color: #1e1133;
}
.active {
  display: none;
}

@media only screen and (max-width: 48.125rem) {
  #app-instasearch {
    margin-left: 0;
    width: 100%;
  }
  .input-container {
    margin-right: 0;
    padding: 0;
    position: relative;
    top: -2rem;
    max-width: 100%;
    width: 100vw;
  }
  img {
    max-width: 5rem;
  }
  #list-group {
    max-width: 100%;
    position: relative;
    top: -2rem;
  }
  .author {
    font-size: 1.125rem;
    text-align: center;
    margin-left: 0.125rem;
    display: table-cell;
    color: white;
  }
}
@media only screen and (min-width: 80.0625rem) {
  .input-container {
    margin-left: 17%;
    padding: 0;
  }
  #list-group {
    margin-left: 17%;
    padding-right: 13%;
  }
  #app-instasearch {
    margin-left: 60%;
    /* margin-bottom: 16%; */
    margin-top: -2.5rem;
  }
}

@media (min-width: 67.1875rem) {
}

@media (min-width: 64.0625rem) {
  .input-container {
    margin-left: 17%;
  }
  #list-group {
    margin-left: 17%;
    padding-right: 13%;
  }
}
@media only screen and (min-device-width: 48rem) and (max-device-width: 64rem) {
  .input-container {
    margin-right: 0;
    padding: 0;
    max-width: 50%;
    width: 100vw;
  }
  #list-group[data-v-7a642ec3] {
    max-width: 65%;
    z-index: 50;
  }
}
@media only screen and (max-width: 48.125rem){
#list-group[data-v-7a642ec3] {
    max-width: 100%;
    position: relative;
    top: -2rem;
        z-index: 50;

}
}
</style>
