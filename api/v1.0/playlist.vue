<template>
  <div id="main">
    <ul id="v-for-object">
      <li v-for="(value, index) in playLists" :key="index">
        <b-card :title="value.name" class="b-card-title text-center">
          <b-button v-bind:href="value.shorturl" variant="primary"
            >Go to playlist <img src="~/assets/arrow-right_white.svg"
          /></b-button>
          <b-button v-bind:href="value.zip" variant="primary"
            >Download <img src="~/assets/downloadbutton_white.svg"
          /></b-button>
          <b-button @click="playAudio">test</b-button>
        </b-card>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      playLists: {},
    }
  },
  methods: {
    getPlaylist() {
      var vm = this

      let today =
        new Date().getFullYear() +
        '-' +
        ('0' + (new Date().getMonth() + 1)).slice(-2) +
        '-' +
        ('0' + new Date().getDate()).slice(-2)
      let yesterday =
        new Date().getFullYear() +
        '-' +
        ('0' + (new Date().getMonth() + 1)).slice(-2) +
        '-' +
        ('0' + (new Date().getDate() - 1)).slice(-2)
      console.log(today)
      console.log(yesterday)

      let url =
        'https://api.jamendo.com/v3.0/playlists/?client_id=a31f0360&format=jsonpretty&datebetween=' +
        yesterday +
        '_' +
        today

      axios
        .get(url)
        .then(function (response) {
          // handle success
          console.log(response)
          vm.playLists = response.data.results
          console.log(JSON.stringify(vm.playLists))
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    },

    goToPlayList() {
      let url = axios
        .get(url)
        .then(function (response) {
          // handle success
          console.log(response.data)
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    },
    play() {
      let audio = new Audio('https://mp3d.jamendo.com/stream/p500606942/mp32/')
      audio.play()
    },
    playAudio() {
      let url =
        'https://api.jamendo.com/v3.0/playlists/tracks/?client_id=a31f0360&format=jsonpretty&limit=2&name=Instrumental&track_type=albumtrack'
      axios
        .get(url)
        .then(function (response) {
          // handle success
          console.log(response.data.results)
          response.play()
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    },
  },
  mounted() {
    this.getPlaylist()
  },
}
</script>

<style>
li {
  list-style: none;
  border-style: solid;

  margin-top: 7px;
  display: flex;
  justify-content: center;
}

li:hover {
  background-color: blue;
  cursor: pointer;
}

ul {
  display: flex;
  flex-direction: column;
}

.b-card-title {
}
</style>
