<template>
    <form
      v-on:submit.prevent="registerUser()"
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
      <div class="form-group">
        <label for="exampleInputPassword1">Repeat password</label>
        <input
          type="password"
          v-model="passwordMatch"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          required
        />
      </div>
      <div class="form-check">
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
      password: '',
      passwordMatch: ''
    } 
  },
  methods: {
    async registerUser() {
        if (this.password !== this.passwordMatch) {
            return alert("Password does not match")
        }
      let vm = this
      try {
        console.log("inside the try")
        await this.$fire.auth.createUserWithEmailAndPassword(
          vm.email,
          vm.password
        ).then((userCredential) => {
          let user = userCredential.user
          console.log(user.email)
          return window.location.href = '/'

        })
        .catch((error) => {
          console.log(error)
          if(error.code == "auth/email-already-in-use") {
              return alert("This email is already in use!")
          }
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
