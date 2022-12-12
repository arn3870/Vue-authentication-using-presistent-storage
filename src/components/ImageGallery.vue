<template>
  <div>
    <div class="mainLibrary">
      <h1>Image gallery</h1>
      <hr style="width: 250px; margin-bottom: 30px" />
      <div class="imagesDiv">
        <div v-for="i in urls" class="imgSize" :key="i">
          <img :src="i" alt="image not found" />
        </div>
      </div>
      <button @click="getImages">click to get 10 cat images</button>
    </div>
  </div>
</template>

<script>
import { computed, ref, onBeforeMount } from "vue";
import { catStore } from "../stores/TheCatData";
import { storeToRefs } from "pinia";
export default {
  setup() {
    let catImagesData = catStore();
    const { fetchNewCat } = catImagesData;
    const { urls } = storeToRefs(catImagesData);
    const getImages = () => {
      fetchNewCat();
    };
    let checkLogin
    return {
      getImages,
      urls,
    };
  },
};
</script>

<style scoped>
button {
  position: relative;
}
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
  color: rgb(0, 0, 0);
}

h3 {
  font-size: 1.2rem;
}

.mainLibrary {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.imagesDiv {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.imgSize {
  height: 300px;
  width: 300px;
  margin: 10px;
}
img {
  height: 300px;
  width: 300px;
}
</style>
