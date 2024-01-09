<template>
  <div>
    <h2>child页面</h2>
    <div>
      <h5>展示父组件传过来的参数</h5>
      <div>props.fatherInfo: {{ JSON.stringify(fatherInfo, null, 2) }}</div>
      <el-button type="info" @click="sendData">
        子组件发送数据给父组件
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChildPage",
  props: {
    fatherInfo: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      childData: [1, 2, 3, 4, 5],
      msg: "世界你好啊",
    };
  },
  methods: {
    sendData() {
      this.$emit("send", { a: "我是子组件啊", b: "你好啊,父组件!" });
      return "ChildPage.sendDta() 被调用了";
    },
  },
};
</script>

<style lang="less" scoped>
</style>