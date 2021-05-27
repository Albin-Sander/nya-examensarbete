<template>
  <div id="main">
    <h1>Test site</h1>
    <playlist />
  </div>
</template>

<script>
import playlist from '~/api/v1.0/playlist.vue'

export default {
  components: { playlist },
}
</script>

<style>
#main {
  display: flex;
  justify-content: center;
}
</style>
