<template>
  <div>
    <form v-if="user == false" v-on:submit.prevent="getRequest">
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
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" @click="createUser()" class="btn btn-primary">
        Submit
      </button>
    </form>
    <h2 v-else>Logged in as {{user.email}} </h2>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      email: '',
      password: '',
      user: "",
    } 
  },
  methods: {
    async getRequest() {

    },
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

    //FireStore

    //Get data from db test an document test
    async getData() {
      const db = this.$fire.firestore
        .collection('test')
        .doc('GJhjnGSWINKcHjMsnUrj')
      try {
        const doc = await db.get()
        console.log(doc.data())
      } catch (e) {
        console.error(e)
      }
    },

    // Add Document
    async addUser() {
      const db = this.$fire.firestore.collection('users')
      const x = await db.get()
      console.log('Inside addUser')
      this.getAllData()
      await db.doc('UUID').set({
        username: 'Markus',
      })
    },

    // Get data from db test
    async getAllData() {
      const snapshot = await this.$fire.firestore.collection('users').get()
      const readable = snapshot.docs.map((doc) => doc.data())
      console.log(readable)
    },
    async checkUser() {
      let vm = this;
      let result = await this.$fire.auth.onAuthStateChanged(async function(user) {
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
  },
  computed: {
  
  },
  mounted() {
    this.checkUser()
  }
}
</script>

<style lang="scss" scoped></style>
