import { defineStore } from "pinia";

export const userData = defineStore("userData", {
  state: () => {
    const userDataCollection = []

    return {
      userDataCollection,
    };
  },

  actions: {},
});
