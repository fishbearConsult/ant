<template>
  <div>
    <a-drawer placement="right" :closable="false" @close="onClose" :visible="visible">
      <template v-slot:handle>
        <div class="handle" @click="visible=!visible">
          <a-icon :type="visible? 'close': 'setting'"></a-icon>
        </div>
      </template>
      <div>
        <h3>整体风格</h3>
        <a-radio-group @change="navThumeChange" :value="$route.query.navThume || 'dark'">
          <a-radio value="dark">深色</a-radio>
          <a-radio value="light">浅色</a-radio>
        </a-radio-group>
      </div>
      <div>
        <h3>导航模式</h3>
        <a-radio-group @change="navPositionChange"  :value="$route.query.navPosition || 'left'">
          <a-radio value="left">左侧</a-radio>
          <a-radio value="top">顶部</a-radio>
        </a-radio-group>
      </div>
    </a-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      navThume: "dark",
      navPosition: "left"
    };
  },
  methods: {
    onClose() {
      this.visible = false;
    },
    navThumeChange(e) {
      this.$router.push({
        query: { ...this.$route.query, navThume: e.target.value }
      });
    },
    navPositionChange(e) {
      this.$router.push({
        query: { ...this.$route.query, navPosition: e.target.value }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.handle {
  position: absolute;
  top: 240px;
  right: 260px;
  width: 36px;
  line-height: 36px;
  border-radius: 3px;
  background-color: #1890ff;
  font-size: 16px;
  text-align: center;
  color: #fff;
}
</style>
