<template>
  <div>
    <header class="header">
      <img class="logo" src="Brown Cat illustrated Cat Lover Logo.png" />
      <div class="anchor-tags">
        <router-link to="/">Login</router-link>
        <router-link to="/signup">Signup</router-link>
      </div>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>
<style>
.header {
  height: 80px;
  background-color: #26a69a;
  display: flex;
  flex-direction: row;
}
.logo {
  height: 100px;
  width: 130px;
  margin-left: 20px;
  /* justify-content: left; */
  align-content: left;
}

a.router-link-exact-active {
  color: rgb(253, 253, 85);
}

a.router-link-exact-active:hover {
  background-color: rgb(61, 248, 139);
}

a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid;
  color: white;
  text-decoration: none;
  margin: auto;
}
.anchor-tags{
  margin: auto 0 auto auto;
  right: 0;
}

</style>
