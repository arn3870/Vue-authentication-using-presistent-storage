<template>
    <div>
      <header class="header">
      <img class="logo" src="Brown Cat illustrated Cat Lover Logo.png" />
      <div class="anchor-tags">
        <router-link to="/">Login</router-link>
        <router-link to="/signup">Signup</router-link>
      </div>
    </header>
        <the-signup-page></the-signup-page>
    </div>
  </template>

  <script>
import TheSignupPage from '../components/TheSignupPage.vue';
  export default {
    components: {
        TheSignupPage
    },
    setup(){

    }
  }
  </script>
