import { defineStore } from "pinia";
export const userData = defineStore("userData", {
  state: () => {
    const userDataCollection = [];
    let LoginStatus = false;
    localStorage.setItem("LoginStatus", JSON.stringify(LoginStatus));
    let boolLogin = JSON.parse(localStorage.getItem("LoginStatus"));

    return {
      userDataCollection,
      LoginStatus,
      boolLogin,
    };
  },

  getters: {
    isLoggedIn: (state) => {
      state.boolLogin = !state.boolLogin;
      return boolLogin;
    },
  },

  actions: {},
});
