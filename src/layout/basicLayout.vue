<template>
    <div>
        <Header></Header>
        <Footer></Footer>
        <side-menu></side-menu>
        <router-view></router-view>
    </div>
</template>

<script>
import Header from "./header.vue";
import Footer from "./footer.vue";
import sideMenu from "./sideMenu.vue";
export default {
    components:{
        Header,Footer,sideMenu
    }
}
</script>

<style>

</style>
