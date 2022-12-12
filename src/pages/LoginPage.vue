<template>
  <div>
    <header class="header">
      <img class="logo" src="Brown Cat illustrated Cat Lover Logo.png" />
      <div class="anchor-tags">
        <router-link to="/">Login</router-link>
        <router-link to="/signup">Signup</router-link>
      </div>
    </header>
    <the-login-page></the-login-page>
  </div>
</template>

<script>
import TheLoginPage from 'src/components/TheLoginPage.vue';
export default {
  components: {
    TheLoginPage
  },
  setup(){

  }
}
</script>
