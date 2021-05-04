<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane style="background-color: red" label="用户管理" name="first"
      >用户管理</el-tab-pane
    >
    <el-tab-pane style="background-color: black" label="配置管理" name="second"
      >配置管理</el-tab-pane
    >
    <el-tab-pane style="background-color: green" label="角色管理" name="third"
      >角色管理</el-tab-pane
    >
    <el-tab-pane
      style="background-color: orange"
      label="定时任务补偿"
      name="fourth"
      >定时任务补偿</el-tab-pane
    >
  </el-tabs>
</template>

<script>
export default {
  name: "NavMenu",
  data() {
    return {
      activeName: "second",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style lang="less" scoped>
.el-tab-pane {
  margin-left: 200px;
  height: 600px;
}
</style>