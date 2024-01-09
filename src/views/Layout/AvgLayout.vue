<template>
  <div class="bg">
    <div class="item" style="background: #119911"></div>
    <div class="item" style="background: #991199"></div>
    <div class="item" style="background: #119999"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.bg {
  display: flex;
  flex-direction: row;
  .item {
    margin: 20px;
    flex: 1;
    width: 100%;
    height: 300px;
    border-radius: 30px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
}
</style>