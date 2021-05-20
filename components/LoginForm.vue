<template>
    <form
      v-on:submit.prevent="signIn()"
      class="form"
    >
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          v-model="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          required
        />
        <small id="emailHelp" class="form-text text-muted"
          >We'll never share your email with anyone else.</small
        >
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          v-model="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          required
        />
      </div>
      <div class="form-check">
        <NuxtLink to="/">Don't have a account? Click here!</NuxtLink>
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
</template>

<script>
export default {
  data: () => {
    return {
      email: '',
      password: ''
    } 
  },
  methods: {
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
    }
  },
  computed: {
  
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped></style>
