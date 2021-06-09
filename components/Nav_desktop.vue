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
      <li>
        <b-button @click="showSearch">Search</b-button>
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
}
</style>
