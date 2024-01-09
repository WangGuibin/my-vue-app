<template>
  <div>
    <div class="title">这是一个自带默认插槽的组件</div>
    <slot> 这叫后备内容 </slot>
    <slot name="header">header 占位</slot>
    <slot name="footer">footer 占位</slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.title {
  font-size: 20px;
  font-weight: bold;
  line-height: 26px;
  color: #333333;
  background: #fefefe;
}
</style>