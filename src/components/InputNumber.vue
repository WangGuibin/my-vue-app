<style lang="less" scoped>
.add-yuan:before {
  content: "¥";
  position: absolute;
  left: 10px;
  top: 50%;
  color: #333333;
  background: white;
  z-index: 100;
  transform: translateY(-50%);
}
</style>
<template>
  <div>
    <el-input-number
      class="add-yuan"
      v-bind="$attrs"
      v-on="$listeners"
    ></el-input-number>
  </div>
</template>

<script>
export default {};
</script>

