<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">examensarbete</h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async createUser() {
      try {
        await this.$fire.auth.createUserWithEmailAndPassword(
          'foo@foo.foo',
          'test123'
        )
      } catch (e) {
        console.log(e)
      }
    },

    async readFromFirestore() {
      const messageRef = this.$fire.firestore.collection('test').doc('test')
      console.log(messageRef.get())

      try {
        const messageDoc = await messageRef.get()
      } catch (e) {
        alert(e)
        console.log(e)
      }
    },
  },
  mounted() {
    this.createUser(), this.readFromFirestore()
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
