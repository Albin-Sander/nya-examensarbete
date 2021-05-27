<template>
  <!-- This page should be reachable if user user exists -->
  <div v-if="user" class="login-container">
    <LazyLoginForm v-if="user.user == false"/>
    <div v-else class="example">  
      <h2> Logged in as {{user.email}} </h2>
      <button @click="signOut()"> sign out </button>
    </div>
  </div>
  <div v-else class="login-container">
    <h2>Loading...</h2>
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

    async checkUser() {
      let vm = this;
      await this.$fire.auth.onAuthStateChanged(async function(user) {
        let obj
        if (user) {
          console.log(user.email)
          obj = {user: true, email: await user.email}
       
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
  mounted() {
    this.checkUser()
  }
}
</script>

<style scoped>

.example {
  margin-bottom: auto;
  padding: 2rem;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding-bottom: 15rem;
}
</style>
