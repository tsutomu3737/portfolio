<template>
  <nav>
    <router-link 
      to="/"
      active-class="link--active"
      exact
      class="link"
    >Home</router-link>
    <router-link
      to="/about"
      active-class="link--active"
      exact
      class="link"
    >About</router-link>
    <router-link
      to="/work"
      active-class="link--active"
      exact
      class="link"
    >Work</router-link>
    <router-link
      to="/favorite"
      active-class="link--active"
      exact
      class="link"
    >Favorite</router-link>
    <router-link
      to="/contact"
      active-class="link--active"
      exact
      class="link"
    >Contact</router-link>
  </nav>
  <!-- <nav>
    <h1>home</h1>
    <h1>about</h1>
    <h1>favorite</h1>
    <h1>work</h1>
    <h1>contact</h1>
  </nav>  -->
</template>
<style scoped>
  .link {
    margin-right: 10px;
  }

  .link--active {
    font-size: 20px;
  }
</style>