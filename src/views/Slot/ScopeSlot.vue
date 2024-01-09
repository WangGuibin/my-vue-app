<template>
  <div>
    <div>这是一个作用域插槽</div>
    <slot :dataSet="{...dataSet}"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataSet: {
        num: 666,
        str: "世界你好",
        row: {
          a: "1",
          b: "2",
          c: "3",
        },
        arr: [1, 2, 3],
      },
    };
  },
};
</script>

<style lang="less" scoped>
</style>