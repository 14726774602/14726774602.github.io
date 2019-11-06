<template>
  <div>
    浅水游鱼忧几许，<br>
    深山飞鸟空自语；<br>
    落木飘飘随风行，<br>
    独留空枝去无地。
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
    };
  },
  props: {
    //接收父组件传递过来的参数
    map: {
      //type:String
    }
  },
  methods: {
    //定义方法的地方
    //监听方法click事件等，执行drawFeatures方法
  },
  created() {
    //初始化数据
  },
  mounted() {
    //页面初始化方法
  }
};
</script>

<style scoped>
</style>
