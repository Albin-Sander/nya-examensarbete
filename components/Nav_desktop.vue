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
      <!-- <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"
          >Disabled</a
        >
      </li> -->
    </ul>
              <Search v-if="showInput"/>

  </div>
</template>

<script>
export default {
  props: {
    showInput: Boolean
  }
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
