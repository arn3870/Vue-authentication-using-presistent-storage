<template>
  <div class="main_div_login">
    <q-form @submit.prevent="userAuthentication">
      <q-input
        outlined
        v-model="emailAtLogin"
        label="Email"
        placeholder="Email"
        :dense="dense"
      />
      <br />
      <q-input
        outlined
        type="password"
        v-model="passwordAtLogin"
        label="Password"
        placeholder="Password"
        :dense="dense"
      />
      <br />
      <q-btn class="q-button" color="secondary" label="Login" type="submit" />
      <br />
    </q-form>
    <p style="margin: 0px 105px 16px">
      don't have an account?
      <router-link
        to="/signup"
        style="color: #26a69a; border: none; padding: 0"
      >
        Signup
      </router-link>
    </p>
  </div>
</template>

<script>
import { ref } from "vue";
import { userData } from "../stores/TheUserData";
import { storeToRefs } from "pinia";
export default {
  setup() {
    let emailAtLogin = ref("");
    let passwordAtLogin = ref("");
    let userDataFromStore = userData();
    let { userDataCollection } = storeToRefs(userDataFromStore);

    let userAuthentication = () => {
      localStorage.getItem("userDataCollection");
      console.log(':::::', userDataCollection);
      for (let i in userDataCollection) {
        console.log(':::::', i);
        // if (
        //   emailAtLogin.value === i.email
        //   ) {
        //     // alert('it worked!')
        //     // this.$router.push({ path: "/home" });
        //   } else {
        //   // alert("email or password is not correct");
        // }
      }
      alert("wrong credentials");
      return false;
      }
    return {
      emailAtLogin,
      passwordAtLogin,
      userDataFromStore,
      userDataCollection,
      userAuthentication,
    };
  },
};
</script>

<style scoped>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.main_div_login {
  display: flex;
  flex-direction: column;
  margin-top: 50px !important;
  width: 500px;
  padding: 30px;
  height: auto;
  margin: auto;
  justify-content: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 20px;
}
.q-button {
  justify-content: center;
  margin: auto;
  display: flex;
}
</style>
