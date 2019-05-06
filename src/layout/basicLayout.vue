<template>
    <div>
        <Header></Header>
        
        <side-menu></side-menu>
        <router-view></router-view>
        <Footer></Footer>
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
