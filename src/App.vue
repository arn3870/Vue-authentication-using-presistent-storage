<template>
  <div>
    <div>
      <header class="header">
        <img class="logo" src="Brown Cat illustrated Cat Lover Logo.png" />
        <div class="anchor-tags" v-if="boolLogin === false">
          <router-link to="/">Login</router-link>
          <router-link to="/signup">Signup</router-link>
        </div>
        <div class="anchor-tags" v-if="boolLogin === true">
          <router-link to="/home">Home</router-link>
          <router-link to="/search">Search</router-link>
          <a @click="Logout">Logout</a>
        </div>
      </header>
    </div>
    <router-view />
  </div>
</template>

<script>
import { userData } from "./stores/TheUserData.js";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { ref } from "vue";

export default {
  setup() {
    const router = useRouter();
    let userDatainApp = userData();
    let { isLoggedIn } = storeToRefs(userDatainApp);
    let { LoginStatus } = storeToRefs(userDatainApp);
    let { boolLogin } = storeToRefs(userDatainApp);

    let Logout = () => {
      boolLogin.value = !boolLogin.value;
      router.push({ path: "/login" });
    };
    return {
      isLoggedIn,
      Logout,
      boolLogin,
    };
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
}

.anchor-tags {
  display: inline-block;
  padding: 0 1rem;
  color: white;
  text-decoration: none;
  margin: auto 0 auto auto;
  right: 0;
}
</style>
