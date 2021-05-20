<template>
  <div>
    <h1>Hello</h1>
    <ul>
      <li v-for="(playlist, index) in playListName" :key="index">
        {{ playlist }}
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
      let url =
        'https://api.jamendo.com/v3.0/playlists/?client_id=a31f0360&format=jsonpretty&datebetween=2021-05-15_2021-05-16'

      axios
        .get(url)
        .then(function (response) {
          // handle success
          console.log(response.data)
          vm.playLists = response.data.results
          console.log(JSON.stringify(vm.playLists[0].name))

          for (let i = 0; i < 9; i++) {
            vm.playListName.push(vm.playLists[i].name)
          }
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

<style></style>
