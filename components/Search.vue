<template>
  <div>
    <div id="app-instasearch">
      <div class="input-container">
        <input
          class="input-field"
          @click="displayComponent"
          type="text"
          placeholder="search..."
          v-model="term"
        />
        <b-button @click="search" type="button" class="btn btn-outline-primary"
          >Search
        </b-button>
        <b-button
          v-bind:class="{ active: isActive }"
          @click="hideComponent"
          size="sm"
          class="my-2 my-sm-0"
          type="submit"
          >Hide list</b-button
        >
      </div>

      <div
        v-bind:class="{ active: isActive }"
        id="list-group"
        tag="ul"
        name="list-animation"
      >
        <b-card class="mb-2" v-for="result in results" :key="result.id">
          <!--create click function to share button-->

          <img v-bind:src="result.image" />
          <span class="author">{{ result.album_name }}</span>
          <button @click="play(result.audio)">&#9658; Play Sample</button>

          <b-button @click="addTrack(result.id)"> add to library </b-button>
          <audio>
            <source v-bind:src="result.audio" />
          </audio>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import Popupmodal from './Popupmodal.vue'
export default {
  components: { Popupmodal },
  data: () => {
    return {
      SearchString: '',
      term: '',
      results: [],
      data: null,
      audio: null,
      isActive: true,
    }
  },

  computed: {
    ...mapState(['credentialsExist']),
    filteredFeed: function () {
      var results = this.data
      var SearchString = this.SearchString

      if (!SearchString) {
        return results
      }

      this.searchString = SearchString.trim().toLowerCase()

      results = results.filter(function (item) {
        if (
          item.album_name.toLowerCase().indexOf(SearchString) !== -1 ||
          item.album_name.toUpperCase().indexOf(SearchString) !== -1
        ) {
          return item
        }
      })

      return results
    },
    webShareApiSupported() {
      return navigator.share
    },
  },

  methods: {
    ...mapActions({
      saveTrack:'saveTrack'
    }),
    
    search: function () {
      let CLIENT_ID = process.env.clientId
      if (this.audio) {
        this.audio.pause()
        this.audio.currentTime = 0
      }

      fetch(
        `https://api.jamendo.com/v3.0/tracks/?client_id=${CLIENT_ID}&search=${encodeURIComponent(
          this.term
        )}&limit=5&order=downloads_week&groupby=artist_id`
      )
        .then((res) => res.json())
        .then((res) => {
          this.results = res.results
        })
      console.log(this.results)
    },
    play: function (s) {
      if (this.audio) {
        this.audio.pause()
        this.audio.currentTime = 0
      }
      this.audio = new Audio(s)
      this.audio.play()
    },
    addTrack: async function (trackId) {
      /* try {
        let ref = this.results

        for (var key in ref) {
          var obj = ref[key].album_name
          this.$fire.firestore
            .collection('test')
            .doc('GJhjnGSWINKcHjMsnUrj')
            .set({
              track: obj,
            })
          console.log('added:', obj)
        }
      } catch (e) {
        console.log(e)
      } */
      let vm = this
      await this.$fire.auth.onAuthStateChanged(async function (user) {

        if (user) {
          console.log("hej")
          for(var index in vm.results){
            if(vm.results[index].id == trackId) {
              const email = user.email
              const track = vm.results[index]
              vm.saveTrack({email, track})
            //   console.log(track)
            // }
            // var obj =  vm.results[track].album_name
            // console.log(obj)
          }
          //vm.checkFunction(user.email)
         
        }
        }else {
          console.log('you need to be logged in')
          return (window.location.href = '/login')
        }


      })
      
      
    },
test (){
        this.$store.dispatch('checkUserExists')

},
    displayComponent() {
      this.isActive = false
    },
    hideComponent() {
      this.isActive = true
    },
  },
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.svg {
  width: 3rem;
}
button{
  font-weight: 700;
    background-color: #17A2B8;
    color: white;

}
button:hover{
  font-weight: 700;
    background-color: #007bff;
    color: white;

}
input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}

html {
  overflow-y: scroll;
}

body {
  display: grid;
  grid-template-rows: 150px 1fr;
  background-color: #f5f5f5;
  font-family: 'Roboto Slab', serif;
  margin-bottom: 10px;
}

header {
  display: grid;
  color: white;
  background: #6d25bc;
}

header h1 {
  place-self: center;
  font-size: 42px;
}

#app-instasearch {
  place-self: center;
  margin-top: 30px;
  width: 600px;
}

.input-container {
max-width: 70%;
  border-radius: 5px;
  background: #1e1133;
  padding: 10px;
}

.input-container input {
  border: none;
  background: transparent;
  color: white;
  padding: 6px 15px;
  font-size: 18px;
}

::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #a6b0ba;
  opacity: 1; /* Firefox */
}

.photo {
  list-style: none;
  display: grid;
  grid-template-columns: 200px auto;
  margin-top: 20px;
  align-items: center;
  background-color: #e9edf0;
  padding: 30px 50px;
  border-radius: 5px;
  border: 1px solid #e3e3e3;
}

.author {
  font-size: 18px;
  margin-left: 2px;
  color: white;
  display: flex;  
}

.title {
  border-radius: 5px;
  width: 200px;
}

.photo-animated {
  transition: all 0.5s;
}

.list-animation-enter,
.list-animation-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
#list-group {
  padding-right: 15%;
  max-width: 85%;
  height: 0;
}

.list-animation-leave-active {
  position: absolute;
}
img {
max-width: 5rem;
}
ul {
  background: #3b2460;
  padding: 5%;
  overflow-y: scroll;
  height: 800px;
}

.mb-2 {
  transition: all 0.5s;
  background-color: #1e1133;
}
.active {
  display: none;
}

@media only screen and (max-width: 770px) {
  #app-instasearch{
    margin-left: 0;
        width: 100%;
  }
  .input-container{
    margin-right: 0;
    padding: 0;
        position: relative;
    top: -2rem;
        max-width: 100%;
            width: 100vw;
  }
  img{
    max-width: 5rem;
  }
  #list-group{
        max-width: 100%;
            position: relative;
    top: -2rem;
  }
  .author{
    font-size: 18px;
    text-align: center;
    margin-left: 2px;
    display: table-cell;
    color: white;
  }

}
@media  only screen and  (min-width:1281px){
.input-container{
  margin-left: 17%;
  padding: 0;
}
#list-group{
  margin-left: 17%;
      padding-right: 13%;
      
}
#app-instasearch{
      margin-left: 60%;
    /* margin-bottom: 16%; */
    margin-top: -6%;
}
}

@media (min-width:1075px){

}

@media (min-width:1025px){
.input-container{
  margin-left: 17%;
}
#list-group{
  margin-left: 17%;
      padding-right: 13%;
}
}
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .input-container{
        margin-right: 0;
    padding: 0;
    max-width: 50%;
    width: 100vw;
  }
  #list-group{
    max-width: 65%;
  }
}
</style>
