<template>
  <div>
    <div>父组件页面</div>
    <div>
      <div>
        <ChildPageVue ref="child" @send="getChildData" />
      </div>
      <h5>展示子组件发过来的数据:</h5>
      <div>@send.$emit: {{ JSON.stringify(childData, null, 2) }}</div>

      <el-button type="info" @click="getChildInfo">
        父组件调用子组件方法和属性
      </el-button>
      <div>child.fn + msg: {{ msg }}</div>
    </div>
  </div>
</template>

<script>
import ChildPageVue from "./ChildPage.vue";

export default {
  components: {
    ChildPageVue,
  },
  data() {
    return {
      childData: {},
      msg: "",
    };
  },
  methods: {
    getChildData(info) {
      this.childData = info;
    },
    getChildInfo() {
      this.msg = `${this.$refs.child.sendData()} -- ${this.$refs.child.msg}`;
    },
  },
};
</script>

<style lang="less" scoped>
</style>