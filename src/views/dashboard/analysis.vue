<template>
  <charts :chartOptions="chartOptions" style="height:400px"></charts>
</template>

<script>
import charts from "./../../components/chart";
import { setInterval } from 'timers';
export default {
  components: {
    charts
  },
 mounted(){
     this.interval=setInterval(()=>{
         console.log(this.chartOptions.series[0])
         this.chartOptions.series[0].data[2]=this.chartOptions.series[0].data[2]+10;
         this.chartOptions={...this.chartOptions}
     },3000)
 },
  data() {
    return {
      chartOptions: {
        title: {
          text: "ECharts 入门示例"
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }
    };
  }
};
</script>

<style>
</style>
