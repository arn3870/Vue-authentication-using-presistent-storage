import { defineStore } from "pinia";

export const userData = defineStore("userData", {

  state: () => {
    const userDataCollection = [];
    // localStorage.setItem("userDataCollection", JSON.stringify(userDataCollection.value));
    
    return {
      userDataCollection,
    };
  },

  actions: {},
});
