<template>
  <div class="child-container">
    <div class="demo">
      <h5>{{ value }}</h5>
      <button @click="clickButton">按钮</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyChild",
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  model: {
    // 属性绑定事件 该事件外部可以不用监听 value内部更新 外部一样可以获取到改变
    props: "value",
    event: "bindEvent",
  },
  methods: {
    clickButton() {
      // 双向绑定 外层父组件的v-model绑定的属性
      this.$emit("bindEvent", this.value);
    },
  },
};
</script>

<style lang="less">
.child-container {
  width: 400px;
  height: 400px;
  background-color: white;
}
.demo {
  width: 200px;
  height: 200px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
  border-radius: 15px;
  background-color: thistle;
}
</style>