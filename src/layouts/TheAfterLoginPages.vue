<template>
    <div>
    <home-view></home-view>
    <BreedSearchView></BreedSearchView>
</div>
</template>

<script>
import HomeView from 'src/pages/HomeView.vue';
import BreedSearchView from 'src/pages/BreedSearchView.vue';
export default {
    components:{
        HomeView,
        BreedSearchView,
    },
    setup() {
        
    },
}
</script>

<style>

</style>