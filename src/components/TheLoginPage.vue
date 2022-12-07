<template>
  <div class="main_div_login">
    <q-form method="post">
    <q-input
      outlined
      v-model="email"
      label="Username"
      placeholder="Email"
      :dense="dense"
    />
    <br />
    <q-input
      outlined
      type="password"
      v-model="password"
      label="Password"
      placeholder="Password"
      :dense="dense"
    />
    <br />
    <q-btn class="q-button" color="secondary" label="Login" />
    <br />
  </q-form>
    <p style="margin: 0px 105px 16px">
      don't have an account?
      <router-link to="/signup" style="color: #26a69a; border: none; padding: 0;">
        Signup
      </router-link>
    </p>
  </div>
</template>

<script>
import { userData } from 'src/stores/TheUserData';
import { storeToRefs } from 'pinia';
export default {
  setup() {
    let userDataFromStore = userData();
    const { email } = storeToRefs(userDataFromStore);
    const { password } = storeToRefs(userDataFromStore)

    return{
      userDataFromStore,  
      email,
      password
  }
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
.q-button{
  justify-content: center;
  margin: auto;
  display: flex;
}
</style>
