import { defineStore } from 'pinia';

export const useUtilStore = defineStore('util', {
  state: () => ({
    // counter: 0,
    darkTheme: false,
    // language: "en-US",
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    // increment() {
    //   this.counter++;
    // },
  },
});
