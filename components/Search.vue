<template>
  <div>
    <!--
    <b-navbar-nav class="ml-auto">
      <b-nav-form>
        <b-form-input
          size="sm"
          class="mr-sm-2"
          placeholder="Search"
        ></b-form-input>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form>
    </b-navbar-nav>
    -->
    <button @click="getResult()">click me</button>

    <div id="app-instasearch">
      <div class="input-container">
        <input type="text" placeholder="search..." v-model="SearchString" />
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </div>

      <transition-group id="list-group" tag="ul" name="list-animation">
        <b-card
    class="mb-2"
          v-for="results in filteredFeed"
          v-bind:key="results.id"
        >
        <!--create click function to share button-->
      <img @click="shareFunction" class="svg" v-bind:src="require(`../assets/icon.svg`)">
				<img v-bind:src="results.image" />
          <span class="author">{{ results.album_name }}</span>
          <Popupmodal />

          <audio>  
            <source v-bind:src="results.audio">
            </audio>
        </b-card>
      </transition-group>
    </div>

  </div>
</template>

<script>
import Popupmodal from './Popupmodal.vue'
export default {
  components: { Popupmodal },
  data: () => {
    return {
      SearchString: '',
      data: null,
    }
  },
  created() {
    this.$axios
      .get(
        'https://api.jamendo.com/v3.0/tracks/?client_id=a31f0360&limit=50&order=popularity_total&lang=en'
      )
      .then((response) => {
        this.data = response.data.results
        console.log(response.data.results)
      })
      .catch((error) => console.log(error))
  },
    mounted() {
      var results = this.data
      try{
         navigator.share(results.shareurl)
      }catch(err) {
        console.log('error' + err)
      }
    },

  computed: {
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
  },

  methods: {
    shareFunction: () => {
     let fetch = this.$axios
      .get(
        'https://api.jamendo.com/v3.0/tracks/?client_id=a31f0360&limit=15&order=popularity_total&lang=en'
      )
      .then((response) => {
        this.data = response.data.results
        console.log(response.data.results)
      })
      
      let results = fetch.data.results.shareurl
      try{
         navigator.share(results)
      }catch(err) {
        console.log('error' + err)
      }
    }
  },
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.svg{
  width: 3rem;
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
  border-radius: 5px;
  background: #1E1133;
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
  font-size: 25px;
  margin-left: 20px;
  color: white;
    display: flex;
    justify-content: center;
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

.list-animation-leave-active {
  position: absolute;
}
img{
  max-width: 20rem;
}
ul {
    background: #3B2460;
    padding: 5%;
    overflow-y: scroll;
    height: 800px;
  }

  .mb-2{
      transition: all 0.5s;
    background-color: #1E1133;
  }
</style>
