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
    // Auth
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

    //FireStore

    //Get data from db test an document test
    async getData() {
      const db = this.$fire.firestore
        .collection('test')
        .doc('GJhjnGSWINKcHjMsnUrj')
      try {
        const doc = await db.get()
        console.log(doc.data())
      } catch (e) {
        console.error(e)
      }
    },

    // Add Document
    async addUser() {
      const db = this.$fire.firestore.collection('test')
      const x = await db.get()
      console.log('Inside addUser')
      this.getAllData()
      await db.doc('UUID').set({
        username: 'Markus',
      })
    },

    // Get data from db test
    async getAllData() {
      const snapshot = await this.$fire.firestore.collection('test').get()
      const readable = snapshot.docs.map((doc) => doc.data())
      console.log(readable)
    },
  },

  mounted() {
    this.getData(), this.createUser()
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
