<template>
  <div class="mainAppDiv">
    <the-welcome-page></the-welcome-page>
  </div>
  <router-view />
</template>
<script>
import { storeToRefs } from "pinia";
import TheWelcomePage from "../components/TheWelcomePage.vue";
import { userData } from "../stores/TheUserData.js";
import { useRouter } from "vue-router";
import { onBeforeMount, ref } from "vue";
export default {
  components: {
    TheWelcomePage,
  },
  setup() {
    let userDataInAfterLogin = userData();
    let { boolLogin } = storeToRefs(userDataInAfterLogin);
    const router = useRouter();
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>", boolLogin);

    // onBeforeMount(() => {
    //   if ((boolLogin.value = true)) {
    //     console.log("i am before mounted");
    //     return true;
    //   }
    //   else {
    //     router.push({ path: "/home" });
    //   }
    // });
    return {
    };
  },
};
</script>

<style scoped>
.mainAppDiv {
  /* background-image: url("https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGlnaHRpbmd8ZW58MHx8MHx8&w=1000&q=80"); */
  background-attachment: fixed;
  background-position: center;
  margin: -8px -8px -8px -8px;
  min-height: 665px;
}
a.router-link-exact-active {
  color: rgb(253, 253, 85);
}

a.router-link-exact-active:hover {
  background-color: rgb(61, 248, 139);
}

a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid;
  color: white;
  text-decoration: none;
  margin: 10px;
}
</style>
