<template>
  <div>
    <ul class="nav-ul nav justify-content-center">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page">
          <NuxtLink to="/">Home</NuxtLink>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link">
          <NuxtLink to="/library">Library</NuxtLink>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link">
          <NuxtLink to="/login">Log in</NuxtLink>
        </a>
      </li>
      <li class="search-icon">
        <img @click="showSearch" v-bind:src="require(`../assets/menu/search-icon.svg`)">
      </li>
    </ul>
    <Search v-if="showInput" />
  </div>
</template>

<script>
export default {
  props: {
    showInput: Boolean,
  },
  methods: {
    showSearch() {
      this.$emit('showsearch')
    },
  },
}
</script>

<style scoped>
.nav-ul {
  display: none;
  background-color: #271642;
}

a {
  color: white;
  font-size: 1.3rem;
}

@media only screen and (min-width: 770px) {
  .nav-ul {
    display: flex;
  }
  .search-icon{
    cursor: pointer;
        margin-top: 0.7%;
    margin-left: 2%;
  }
}
</style>
