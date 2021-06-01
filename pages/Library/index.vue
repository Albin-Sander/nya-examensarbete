<template>
  <h1>Secret</h1>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data: () => {
    return {
        user: {},
        library: {}
    }
  },
  methods: {
      ...mapActions({
      getUserLibrary: 'getUserLibrary',
    }),
    async checkUser() {
      let vm = this
      await this.$fire.auth.onAuthStateChanged(async function (user) {
        let obj
        if (user) {
          console.log(user.email)
          obj = { user: true, email: await user.email }
          console.log(obj)
          vm.user = obj
          await vm.getUserLibrary(obj)
          return vm.getLibrary()
        } else {
          console.log('no user')
          return (window.location.href = '/login')
        }
      })
    },
    async getLibrary() {
        let data = this.$store.state.userLibrary
        this.library = data
        console.log(data)
    }
  },
  computed: {
    //   async library() {
    //       console.log("Library updated")
    //       return this.library = this.$store.state.userLibrary
    //   }
  },
  mounted() {
      this.checkUser()
  }
}
</script>

<style lang="scss" scoped></style>
