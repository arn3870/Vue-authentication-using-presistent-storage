import { defineStore } from "pinia";

export const userData = defineStore("userData", {
  state: () => {
    const name = [''];
    const email = [''];
    const password = [''];
    const confirmPassword = [''];
    const signupSubmitButton = () => {};
    return {
      name,
      email,
      password,
      confirmPassword,
      signupSubmitButton,
    };
  },

  actions: {},
});
