<template>
  <div class="musicplayer">
    <img src="~/assets/previoussong.svg" />
    <img :src="playButton" />
    <img src="~/assets/nextsong.svg" />
  </div>
</template>

<script>
import playButton from '/assets/playbutton.svg'
import pauseButton from '/assets/pauseButton.svg'
export default {
  data() {
    return {
      playButton: playButton,
      pauseButton: pauseButton,
    }
  },
}
</script>

<style scoped>
.musicplayer {
  background-color: white;
  width: 50rem;
  height: 3.5rem;
  display: flex;
  justify-content: space-around;
  border-radius: 2rem;
  margin-bottom: 5rem;
}

img:hover {
  cursor: pointer;
}
</style>
