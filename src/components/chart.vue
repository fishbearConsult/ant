<template>
  <div ref="main" class="chartContainer"></div>
</template>

<script>
import echarts from "echarts";
import { addListener, removeListener } from "resize-detector";
import debounce from "lodash/debounce";
export default {
  props: {
    chartOptions: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    chartOptions(val) {
        this.myChart.setOption(val)
    }
    /* chartOptions:{
        handler(val){
              this.myChart.setOption(val)
        },
        deep:true
    } */
  },
  created() {
    this.resize = debounce(this.resize, 300);
  },
  mounted() {
    this.rendChart();
    addListener(this.$refs.main, this.resize);
  },
  beforeDestroy() {
    removeListener(this.$refs.main, this.resize);
    this.myChart.dispose();
    this.myChart = null;
  },
  methods: {
    resize() {
      this.myChart.resize();
    },
    rendChart() {
      // 基于准备好的dom，初始化echarts实例
      this.myChart = echarts.init(this.$refs.main);
      this.myChart.setOption(this.chartOptions);
    }
  }
};
</script>

<style scoped>
.chartContainer {
  height: 100%;
}
</style>
