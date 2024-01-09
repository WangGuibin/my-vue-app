<style lang="less" scoped>
</style>
<template>
  <div>
    <el-table :data="tableData" @row-click="rowClick">
      <el-table-column prop="title" label=""> </el-table-column>
    </el-table>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{ title: "平分布局", router: "/avgLayout" }],
    };
  },
  methods: {
    rowClick(row) {
      this.$router.push(row.router);
    },
  },
};
</script>

