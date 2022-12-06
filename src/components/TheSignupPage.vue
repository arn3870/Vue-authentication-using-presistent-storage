<template>
  <div>
    <div class="main_div_login">
      <q-form>
        <q-input
          outlined
          v-model="ph"
          label="Name"
          placeholder="Name"
          :dense="dense"
        />
        <br />
        <q-input
          outlined
          v-model="ph"
          label="Email"
          placeholder="Email"
          :dense="dense"
        />
        <br />
        <q-input
          outlined
          type="password"
          v-model="ph"
          label="Password"
          placeholder="Password"
          :dense="dense"
        />
        <br />
        <q-input
          outlined
          type="password"
          v-model="ph"
          label="Confirm Password"
          placeholder="Confirm Password"
          :dense="dense"
        />
        <br />
        <q-btn color="secondary" label="Signup" />
        <br />
      </q-form>
        <p style="margin: 0px 100px 16px">
          Already have an account?
          <router-link to="/" style="color: #26a69a; border: none; padding: 0;">
            Login
          </router-link>
        </p>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
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
</style>
