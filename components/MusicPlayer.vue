<template>
  <div class="media-controls">
    <audio controls ref="player">
      <source :src="$store.state.music" type="audio/ogg" />
      <source :src="$store.state.music" type="audio/mpeg" />
      Your browser does not support the audio element.
      <p>Hello</p>
    </audio>
    <!-- <button
      @click="
        $store.commit(
          'setMusic', {
            'https://mp3l.jamendo.com/?trackid=1561379&format=mp31&from=iDywHKCe+xqfg1wwxV7eiA==|GmIQIvUjuucTL+rzbvj6XA=='
          });">Click</button> -->

    <button
      @click="
        $store.commit('setMusic', {
          url: 'https://mp3l.jamendo.com/?trackid=1561379&format=mp31&from=iDywHKCe+xqfg1wwxV7eiA==|GmIQIvUjuucTL+rzbvj6XA==',
        })
      "
    >
      Click
    </button>
    <button @click="this.test">test</button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    test() {
      this.$refs.player.load()
    },
  },
  watch: {
    '$store.state.music'(value, oldValue) {
      console.log(value)
      console.log(oldValue)
      this.$refs.player.load()
    },
  },
}
</script>

<style scoped>
audio {
  background-color: blue !important;
  border-radius: 2rem;
  width: 50rem;
  margin-bottom: 5rem;
}
</style>
