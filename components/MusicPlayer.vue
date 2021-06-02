<template>
  <div class="media-controls">
    <audio controls>
      <source
        src="https://mp3l.jamendo.com/?trackid=1561379&format=mp31&from=iDywHKCe+xqfg1wwxV7eiA==|GmIQIvUjuucTL+rzbvj6XA=="
        type="audio/ogg"
      />
      <source
        src="https://mp3l.jamendo.com/?trackid=1561379&format=mp31&from=iDywHKCe+xqfg1wwxV7eiA==|GmIQIvUjuucTL+rzbvj6XA=="
        type="audio/mpeg"
      />
      Your browser does not support the audio element.
      <p>Hello</p>
    </audio>
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
audio {
  background-color: white;
  border-radius: 2rem;
  width: 50rem;
  margin-bottom: 5rem;
}
</style>
