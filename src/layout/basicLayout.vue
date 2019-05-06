<template>
  <div>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
      <a-layout-sider :trigger="null" collapsible v-model="collapsed">
        <div class="logo"/>
        <side-menu></side-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon
            class="trigger"
            :type="collapsed ?  'menu-unfold' : 'menu-fold'"
            @click="collapsed=!collapsed"
          ></a-icon>

          <Header></Header>
        </a-layout-header>
        <a-layout-content style="margin: 0 16px">
          <router-view></router-view>
        </a-layout-content>
        <a-layout-footer style="text-align: center"></a-layout-footer>
        <Footer></Footer>
      </a-layout>
    </a-layout>
    <layoutSettings></layoutSettings>
  </div>
</template>

<script>
import Header from "./header.vue";
import Footer from "./footer.vue";
import sideMenu from "./sideMenu.vue";
import layoutSettings from "./../components/layoutSettings"
export default {
  components: {
    Header,
    Footer,
    sideMenu,
    layoutSettings
  },
  data() {
    return {
      collapsed: false
    };
  }
};
</script>

<style lang="less" scoped>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.trigger {
  padding: 0 20px;
  line-height: 64px;
  font-size: 20px;
}
.trigger:hover {
  background-color: #eee;
  font-size: 20px;
}
</style>
