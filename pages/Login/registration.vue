<template>
  <!-- This page should be reachable if user user exists -->
  <div class="registraion-container">
    <LazyRegisterForm/>
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
    async checkUser() {
      let vm = this;
      let result = await this.$fire.auth.onAuthStateChanged(async function(user) {
        let obj
        if (user) {
          console.log(user.email)
          obj = {user: true, email: await user.email}
          return //vm.signOut()
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
h2 {
  color: white;
}

.registraion-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding-bottom: 15rem;
}
</style>
