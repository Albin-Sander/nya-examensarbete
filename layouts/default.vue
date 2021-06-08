<template>
  <div class="layout">
    <Nav />

    <Nuxt />
    <MusicPlayer />

    <LazyMobileNav />
  </div>
</template>

<script>
import Nav from '../components/Nav_desktop'
import MusicPlayer from '../components/MusicPlayer'

export default {
  components: { Nav, MusicPlayer },
}
</script>

<style>
.layout {
  width: 100%
}

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

h1,
h2,
h4,
h4,
h5,
h6 {
  font-family: 'Montserrat', sans-serif;
}

p,
input {
  font-family: 'Lato', sans-serif;
}

.card {
  background-color: #1e1133;
  border: solid white 1px;
  border-radius: 0.2rem;
  color: white;
}

body {
  background-color: #271642;
}

.globalBtnActive {
  background-color: #17a2b8;
  color: white;
  font-family: 'Lato', sans-serif;
}

.globalBtnActive:hover {
  background-color: #17a2b8;
  color: white;
}

.globalBtnInactive {
  background-color: #17a2b89e;
  /* #106B79 */
  font-family: 'Lato', sans-serif;
  color: white;
}

.globalBtnInactive:hover {
  background-color: #17a2b89e;
  color: white;
}
</style>
