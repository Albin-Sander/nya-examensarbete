<template>
  <!-- This page should be reachable if user user exists -->
  <div class="registraion-container">
    <LazyRegisterForm v-if="user.user == false"/>
    <div v-else> 
      <h2> Loading... </h2>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      email: '',
      password: '',
      user: "",
      registration: false
    }
  },
  props: {

  },
  methods: {
    async createUser() {
      try {
        console.log("inside the try")
        await this.$fire.auth.createUserWithEmailAndPassword(
          this.email,
          this.password
        )
      } catch (e) {
        console.log(e)
      }
    },
    async signIn() {
      let vm = this
      try {
        console.log("inside the try")
        await this.$fire.auth.signInWithEmailAndPassword(
          vm.email,
          vm.password
        ).then((userCredential) => {
          let user = userCredential.user
          console.log(user.email)
        })
        .catch((error) => {
          console.log(error)
        })
      } catch (e) {
        console.log(e)
      }
    }, 
    async switchForm() {
      this.registration = !this.registration
    },
    //FireStore

    //Get data from db test an document test
    async getData() {
      // const db = this.$fire.firestore
      //   .collection('test')
      //   .doc('GJhjnGSWINKcHjMsnUrj')
      // try {
      //   const doc = await db.get()
      //   console.log(doc.data())
      // } catch (e) {
      //   console.error(e)
      // }
    },

    // Add Document
    async addUser() {
      // THS IS JUST A EXAMPLE. DO NOT ADD A USER THIS WAY
      // const db = this.$fire.firestore.collection('users')
      // const x = await db.get()
      // console.log('Inside addUser')
      // this.getAllData()
      // await db.doc('UUID').set({
      //   username: 'Markus',
      // })
    },

    // Get data from db test
    async getAllData() {
      // const snapshot = await this.$fire.firestore.collection('users').get()
      // const readable = snapshot.docs.map((doc) => doc.data())
      // console.log(readable)
    },
    async checkUser() {
      let vm = this;
      let result = await this.$fire.auth.onAuthStateChanged(async function(user) {
        let obj
        if (user) {
          console.log(user.email)
          obj = {user: true, email: await user.email}
          return (window.location.href = '/')
        } else {
          console.log("no user")
          obj = {user: false, email: ""}
          
        }
        console.log(obj)
        vm.user = obj
      })
    },
    async signOut() {
      let vm = this
      await this.$fire.auth.signOut().then(() => {
        console.log("Logged out")
        let obj = {user: false, email: ""}
        vm.user = obj
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  computed: {
  
  },
  mounted() {
    this.checkUser()
  }
}
</script>

<style scoped>

.registraion-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding-bottom: 15rem;
}
</style>
