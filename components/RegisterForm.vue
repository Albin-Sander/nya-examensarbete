<template>
  <form v-on:submit.prevent="registerUser()" class="form">
    <div class="fields-container">
      <div class="credentials-field">
        <div class="form-group">
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
        <div class="form-group">
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
        </div>
      </div>
    </div>
    <div class="button-container">
      <button type="submit" class="btn btn-primary">Submit</button>
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
    }
  },
  methods: {
    ...mapActions({
      createUser: 'newUser',
    }),
    async registerUser() {
      if (this.password !== this.passwordMatch) {
        return alert('Password does not match')
      }
      let vm = this
      try {
        console.log('inside the try')
        const obj = {
          email: vm.email,
          userName: vm.userName,
        }
        //console.log(user.email)
        let result = await vm.createUser(obj)
        console.log(result)
          // await this.$fire.auth
          //   .createUserWithEmailAndPassword(vm.email, vm.password)
          //   .then((userCredential) => {
          //     let user = userCredential.user
          //     
          //     console.log(user.email)
          //   
          //     return (window.location.href = '/')
          //   })
          .catch((error) => {
            console.log(error)
            if (error.code == 'auth/email-already-in-use') {
              return alert('This email is already in use!')
            }
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
  height: 27rem;
  width: 70%;
  max-width: 20rem;
  padding: 1rem;
  border-radius: 0.2rem;
}

.fields-container {
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.credentials-field {
}

.password-fields {
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
  justify-content: center;
  height: 40%;
  align-items: center;
}

.btn {
  width: 10rem;
  height: 3rem;
  font-family: 'Lato', sans-serif;
  font-weight: 900;
  font-size: 20px;
  background-color: #17a2b8;
  border: #17a2b8;
}
</style>
