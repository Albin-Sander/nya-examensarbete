<template>
  <form v-on:submit.prevent="signIn()" class="form">
    <div class="fields-container">
      <div class="">
        <label for="exampleInputEmail1" class="label">Email address</label>
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
      <div class="">
        <label for="exampleInputPassword1" class="label">Password</label>
        <input
          type="password"
          v-model="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          required
        />
        <div class="">
          <NuxtLink class="link" to="/signup/registration">Create new account</NuxtLink>
        </div>
      </div>
    </div>
    <div class="button-container">
      <button type="submit" class="btn btn-primary"> LOGIN </button>
    </div>
  </form>
</template>

<script>
export default {
  data: () => {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    accountCreation() {
      return this.$emit('account-creation')
    },
    async signIn() {
      let vm = this
      try {
        console.log('inside the try')
        await this.$fire.auth
          .signInWithEmailAndPassword(vm.email, vm.password)
          .then((userCredential) => {
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
  },
  computed: {},
  mounted() {},
}
</script>

<style scoped>
::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: white;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: white;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: white;
}

input {
  color: white;
}

.form {
  color: white;
  background-color: #1e1133;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 18rem;
  width: 70%;
  max-width: 20rem;
  padding: 1rem;
  border-radius: 0.2rem;
}

.fields-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50%;
}

.label {
  background-color: #1e1133;
  color: white;
  margin: 0px;
  margin-bottom: -3rem;
  margin-top: -0.8rem;
  position: fixed;
  margin-left: 0.8rem;
}

.form-control {
  background-color: #1e1133;
}

.link {
  color: #17A2B8;
  font-weight: 600;
}

.link:hover {
  color: aqua;
  text-decoration: none;
}

.button-container {
  display: flex;
  width: 100%;
  justify-content: center;
  padding-bottom: 1rem;
}

.btn {
  width: 10rem;
  height: 3rem;
  font-family: 'Lato', sans-serif;
  font-weight: 900;
  font-size: 20px;
  background-color: #17A2B8;
  border: #17A2B8;
}
</style>
