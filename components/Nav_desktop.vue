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
          <NuxtLink to="/login">Library</NuxtLink>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link">
          <NuxtLink to="/login">Log in</NuxtLink>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"
          >Disabled</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style>
.nav-ul {
  display: none;
}

@media only screen and (min-width: 770px) {
  .nav-ul {
    display: flex;
  }
}
</style>
