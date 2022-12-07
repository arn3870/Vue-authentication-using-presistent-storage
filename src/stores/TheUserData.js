import { defineStore } from "pinia";

export const userData = defineStore("userData", {
  state: () => {
    const name = [''];
    const email = [''];
    const password = [''];
    const confirmPassword = [''];
    // const userDataCollection = []
    const signupSubmitButton = () => {

    };
    return {
      name,
      email,
      password,
      confirmPassword,
      // userDataCollection,
      signupSubmitButton,
    };
  },

  actions: {},
});
