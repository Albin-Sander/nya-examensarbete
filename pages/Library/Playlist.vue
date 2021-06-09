<template>
  <div></div>
</template>

<script>
export default {
  data: () => {
    return {
        playlistToShow: {}
    }
  },
  methods: {
    async getPlaylist() {
      let data = await this.$store.state.playlistToShow
      console.log(await data)
      return this.playlistToShow = data
    },
  },
  mounted() {
      this.getPlaylist()
  }
}
</script>

<style lang="scss" scoped></style>
