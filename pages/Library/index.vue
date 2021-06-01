<template>
  <div></div>
</template>

<script>
export default {
  data: () => {
    return {
        user: {}
    }
  },
  methods: {
    async checkUser() {
      let vm = this
      await this.$fire.auth.onAuthStateChanged(async function (user) {
        let obj
        if (user) {
          console.log(user.email)
          obj = { user: true, email: await user.email }
          console.log(obj)
          return vm.user = obj
        } else {
          console.log('no user')
          return
        }
      })
    },
  },
  mounted() {
      this.checkUser()
  }
}
</script>

<style lang="scss" scoped></style>
