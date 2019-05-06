<template>
  <div>
    <a-drawer
     
      placement="right"
      :closable="false"
      @close="onClose"
      :visible="visible"
    >
      <template v-slot:handle>
        <div class="handle"  @click="visible=!visible">
          <a-icon :type="visible? 'close': 'setting'"></a-icon>
        </div>
      </template>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false
    };
  },
  methods: {
    onClose() {
      this.visible = false;
    }
  }
};
</script>
<style lang="less" scoped>
    .handle{
            position: absolute;
    top: 240px;
    right: 260px;
    width: 36px;
    line-height: 36px;
    border-radius: 3px;
    background-color: #1890ff;
    font-size: 16px;
    text-align: center;
        color:#fff;
    }
</style>
