<template>
  <div class="container">
    <Playlist />
  </div>
</template>

<script>
import PlayList from '../components/Playlist.vue'
export default {
  components: {
    PlayList,
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.title {
  font-family: 'Montserrat', sans-serif;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links {
  padding-top: 15px;
}
</style>
