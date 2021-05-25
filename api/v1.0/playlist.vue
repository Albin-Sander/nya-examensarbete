<template>
  <div id="main">
    <ul>
      <li v-for="(playlist, index) in playListName" :key="index">
        <b-card
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          {{ playlist }}
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
      playLists: [],
      playListName: [],
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

          for (let i = 0; i < 9; i++) {
            vm.playListName.push(vm.playLists[i].name)
          }
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
  padding: 15px;
  margin-top: 7px;
  display: flex;
  justify-content: center;
}

li:hover {
  background-color: blue;
  cursor: pointer;
}
</style>
