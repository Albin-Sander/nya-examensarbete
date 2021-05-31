<template>
  <form v-on:submit.prevent="signIn()" class="form card">
    <div class="fields-container">
      <div class="">
        <label for="exampleInputEmail1" class="label">Email address</label>
        <input
          type="email"
          v-model="email"
          class="form-control"
          v-bind:class="{
                wrong: couldNotFindUser == true,
          }"
          placeholder="Enter email"
          required
        />
      </div>
      <div class="specific-padding">
        <label for="exampleInputPassword1" class="label">Password</label>
        <input
          type="password"
          v-model="password"
          class="form-control"
          v-bind:class="{
                wrong: passwordDoesNotMatch == true,
          }"
          id="exampleInputPassword1"
          placeholder="Password"
          required
        />
        <div v-if="passwordDoesNotMatch">
          <p class="credentials-taken">Password does not match!</p>
        </div>
        <div v-if="couldNotFindUser">
          <p class="credentials-taken">Password does not match!</p>
        </div>
        <div class="">
          <NuxtLink class="link" to="/login/registration"
            >Create new account</NuxtLink
          >
        </div>
      </div>
    </div>
    <div class="button-container">
      <button
        type="submit"
        id="global-button"
        class="btn btn-primary"
        v-bind:class="{ globalBtnActive: email.length > 0 && password.length > 0, globalBtnInactive: email.length == 0 || password.length == 0 }"
      >
        LOGIN
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data: () => {
    return {
      email: '',
      password: '',
      btnActive: false,
      passwordDoesNotMatch: false,
      couldNotFindUser: false,
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
            if (error.code == 'auth/wrong-password') {
              // Do this
              return (vm.passwordDoesNotMatch = true)
            } else if (error.code == 'auth/user-not-found') {
              // Do that
              return (vm.couldNotFindUser = true)
            } else {
              console.log(error.code)
            }
            // "auth/wrong-password"
            // "auth/user-not-found"
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

input:active {
  border: solid white 1px
}

.wrong {
  border: solid rgb(255, 0, 0) 1px;
}


.form {
  color: white;
  background-color: #1e1133;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 20rem;
  width: 70%;
  max-width: 20rem;
  padding: 1rem;
  border-radius: 0.2rem;
}

.fields-container {
  display: flex;
  flex-direction: column;
  height: 60%;
}

.specific-padding {
  padding-top: 1rem;
}

.label {
  background-color: #1e1133;
  color: white;
  margin-bottom: -11px;
  position: relative;
  display: table;
  margin-left: 0.8rem;
  z-index: 2;
}

.form-control {
  background-color: #1e1133;
  z-index: 1;
}

.credentials-taken {
  margin: 0px;
}

.link {
  color: #17a2b8;
  font-weight: 600;
}

.link:hover {
  color: aqua;
  text-decoration: none;
}

.button-container {
  display: flex;
  width: 100%;
  height: 40%;
  justify-content: center;
  padding-top: 2rem;
}

.btn {
  width: 10rem;
  height: 3rem;
  font-weight: 900;
  font-size: 20px;
  border: none;
}
</style>
