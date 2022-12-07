<template>
  <div>
    <div class="main_div_login">
      <q-form>
        <q-input
          outlined
          v-model="name1"
          label="Name"
          placeholder="Name"
          :dense="dense"
        />
        <br />
        <q-input
          outlined
          v-model="email1"
          label="Email"
          placeholder="Email"
          :dense="dense"
        />
        <br />
        <q-input
          outlined
          type="password"
          v-model="password1"
          label="Password"
          placeholder="Password"
          :dense="dense"
        />
        <br />
        <q-input
          outlined
          type="password"
          v-model="confirmPassword1"
          label="Confirm Password"
          placeholder="Confirm Password"
          :dense="dense"
        />
        <br />
        <q-btn
          class="sign-up-button"
          color="secondary"
          label="Signup"
          @click="getVals"
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
import { computed, ref } from 'vue'
export default {
  setup() {
    let email1 = ref('');
    let name1 = ref('');
    let password1 = ref('');
    let confirmPassword1 = ref('');
    let usersDataFromStore = userData();
    let { name } = storeToRefs(usersDataFromStore);
    let { email } = storeToRefs(usersDataFromStore);
    let { password } = storeToRefs(usersDataFromStore);
    let { confirmPassword } = storeToRefs(usersDataFromStore);

    let getVals = () => {
    name.value.push(name1.value);
    email.value.push(email1.value);
    password.value.push(password.value);
    confirmPassword.value.push(confirmPassword.value)
    }

    // console.log(">>>>>>>>>>>>", name);
    // console.log(">>>>>>>>>>>>", email);
    // console.log(">>>>>>>>>>>>", password);
    // console.log(">>>>>>>>>>>>", confirmPassword);
    console.log(">>>>>>>>>>>>>>>", getVals);
    
    return {
      name1,
      email1,
      password1,
      confirmPassword1,
      getVals
      
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
