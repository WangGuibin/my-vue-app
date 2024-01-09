<template>
  <div>
    <el-select v-model="selected" :remote="true" :remote-method="remoteMethod">
      <template #prefix>
        <div class="el-input-group__prepend">
          <i class="el-input-group__icon el-icon-search"></i>
        </div>
      </template>
    </el-select>
  </div>
</template>

<script>
export default {
  name: "MyVueAppSelectAppendPrefix",
  data() {
    return {
      selected: "",
    };
  },

  mounted() {},

  methods: {
    remoteMethod() {},
  },
};
</script>



<style lang="less" scoped>
/deep/ .el-input__inner {
  padding-left: 60px;
}
/deep/ .el-input-group__prepend {
  display: flex;
  align-items: center;
  padding-right: 10px;
  padding-left: 0px;
  color: #c0c4cc;
  height: 100%;
  width: 30px;
}
/deep/ .el-input-group__icon {
  font-size: 14px;
  color: #c0c4cc;
}
</style>