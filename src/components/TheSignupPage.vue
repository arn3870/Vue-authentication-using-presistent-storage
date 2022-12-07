<template>
  <div>
    <div class="main_div_login">
      <q-form>
        <q-input
          outlined
          v-model="name"
          label="Name"
          placeholder="Name"
          :dense="dense"
        />
        <br />
        <q-input
          outlined
          v-model="email"
          label="Email"
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
        <q-input
          outlined
          type="password"
          v-model="confirmPassword"
          label="Confirm Password"
          placeholder="Confirm Password"
          :dense="dense"
        />
        <br />
        <q-btn
          class="sign-up-button"
          color="secondary"
          label="Signup"
          v-model="signupSubmitButton"
        />
        <br />
      </q-form>
      <p style="margin: 0px 100px 16px">
        Already have an account?
        <router-link to="/" style="color: #26a69a; border: none; padding: 0">
          Login
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { storeToRefs } from 'pinia';
import { userData } from '../stores/TheUserData'
export default {
  setup() {
    let usersDataFromStore = userData();
    const { name } = storeToRefs(usersDataFromStore);
    const { email } = storeToRefs(usersDataFromStore);
    const { password } = storeToRefs(usersDataFromStore);
    const { confirmPassword } = storeToRefs(usersDataFromStore);
    const { signupSubmitButton } = storeToRefs(usersDataFromStore);
    
    return {
      name,
      email,
      password,
      confirmPassword,
      signupSubmitButton,

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
  height: 500px;
  margin: auto;
  justify-content: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 20px;
}
.sign-up-button {
  justify-content: center;
  margin: auto;
  display: flex;
}
</style>
