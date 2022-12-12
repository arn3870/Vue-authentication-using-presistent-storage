<template>
  <div>
    <WelcomeView></WelcomeView>
    <home-view></home-view>
    <BreedSearchView></BreedSearchView>
  </div>
</template>

<script>
import HomeView from "src/pages/HomeView.vue";
import BreedSearchView from "src/pages/BreedSearchView.vue";
import WelcomeView from "src/pages/WelcomeView.vue";
export default {
  components: {
    HomeView,
    BreedSearchView,
    WelcomeView,
  },
  setup() {},
};
</script>

<style></style>
