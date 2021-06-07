<template>
  <form v-on:submit.prevent="registerUser()" class="form card">
    <div class="fields-container">
      <div class="credentials-fields">
        <div class="form-group">
          <label for="exampleInputEmail1" class="label">Email address</label>
          <input
            type="email"
            v-model="email"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Enter email"
            required
          />
        </div>
        <div class="form-group">
          <label for="" class="label">Username</label>
          <input
            type="text"
            v-model="userName"
            class="form-control"
            id=""
            aria-describedby=""
            placeholder="Username"
            required
          />
          <div v-if="showCredentialsTaken">
            <p class="credentials-taken">Username or email is already in use</p>
          </div>
          <div v-if="emailTaken">
            <p class="credentials-taken">Email is already in use!</p>
          </div>
        </div>
      </div>
      <div class="password-fields">
        <div class="form-group">
          <label for="exampleInputPassword1" class="label">Password</label>
          <input
            type="password"
            v-model="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            required
          />
        </div>
        <div class="form-group contain-errormsg">
          <label for="exampleInputPassword1" class="label"
            >Repeat password</label
          >
          <input
            type="password"
            v-model="passwordMatch"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            required
          />
          <div v-if="passwordDoesNotMatch">
            <p class="credentials-taken">Password does not match!</p>
          </div>
          <div v-if="passwordToWeak">
            <p class="credentials-taken">Password to short!</p>
          </div>
        </div>
      </div>
    </div>
    <div class="button-container">
      <button
        type="submit"
        class="btn"
        v-bind:class="{
          globalBtnActive:
            email.length > 0 &&
            password.length > 0 &&
            userName.length > 0 &&
            passwordMatch.length > 0,
          globalBtnInactive: email.length == 0 ||
            password.length == 0 ||
            userName.length == 0 ||
            passwordMatch.length == 0,
        }"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data: () => {
    return {
      email: '',
      userName: '',
      password: '',
      passwordMatch: '',
      passwordDoesNotMatch: false,
      showCredentialsTaken: false,
      emailTaken: false,
      passwordToWeak: false,
    }
  },
  methods: {
    ...mapActions({
      checkUserCredentials: 'checkUserCredentials',
      addNewUser: 'addNewUser',
    }),
    async registerUser() {
      this.passwordDoesNotMatch = false
      if (this.password !== this.passwordMatch) {
        this.showCredentialsTaken = false
        this.passwordToWeak = false
        this.emailTaken = false
        return (this.passwordDoesNotMatch = true)
      }
      this.passwordMatch = ''
      this.passwordToWeak = false
      this.emailTaken = false
      let vm = this
      try {
        const obj = {
          email: vm.email,
          userName: vm.userName,
        }

        await vm.checkUserCredentials(obj)
        if (!this.credentialsTaken) {
          console.log(this.credentialsTaken)
          console.log('Inside if credentialsTaken is not true')
          await this.$fire.auth
            .createUserWithEmailAndPassword(vm.email, vm.password)
            .then(async (userCredential) => {
              let user = userCredential.user
              console.log(user.email)
              await vm.addNewUser(obj)
              await this.$fire.auth
                .signOut()
                .then(() => {
                  console.log('Logged out')
                })
                .catch((error) => {
                  console.log(error)
                })
              return (window.location.href = '/login')
            })
            .catch((error) => {
              console.log(error)
              if (error.code == 'auth/email-already-in-use') {
                // The error codes we should display to the user
                // "auth/email-already-in-use"
                // "auth/weak-password"
                return (vm.emailTaken = true)
              } else if (error.code == 'auth/weak-password') {
                return (vm.passwordToWeak = true)
              } else {
                vm.passwordToWeak = false
                vm.emailTaken = false
                console.log(error)
                return
              }
            })
        } else {
          return (vm.showCredentialsTaken = true)
        }
      } catch (error) {
        console.log(error)
      }
    },
  },
  computed: {
    credentialsTaken() {
      return this.$store.state.credentialsExist
    },
  },
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
  height: 28rem;
  width: 70%;
  max-width: 20rem;
  padding: 1rem;
  border-radius: 0.2rem;
}

.form-group {
  margin-bottom: 0.4rem;
}

.fields-container {
  height: 70%;
  display: flex;
  flex-direction: column;
}

.credentials-fields {
  height: 9rem;
}

.password-fields {
  height: 9rem;
}

.credentials-taken {
  color: white;
}

.contain-errormsg {
  height: 4rem;
}

.label {
  background-color: #1e1133;
  color: #00ddff;
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

.form-control:focus,
.form-control:active,
text-area:focus,
text-area:active,
input:focus,
input:active {
  box-shadow: none;
  outline: 0;
  outline-style: none;
}

button.active.focus,
button.active:focus,
button.focus,
button:active.focus,
button:active:focus,
button:focus {
  outline: none;
  box-shadow: none;
}

.link {
  color: #00dcff;
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
  height: 30%;
  align-items: center;
}

.btn {
  width: 10rem;
  height: 3rem;
  font-family: 'Lato', sans-serif;
  font-weight: 900;
  font-size: 20px;
  border: none;
}

</style>
