<template>
  <div>
    <el-button plain @click="goBack"> 返回🔙 </el-button>
    <br /><br />
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <br />
    <h3>{{ input }}</h3>
    <MyChild v-model="input"></MyChild>
  </div>
</template>

<script>
import MyChild from "@/components/MyChild";
export default {
  name: "InputData",
  components: {
    MyChild,
  },
  data() {
    return {
      input: "",
    };
  },
  computed: {
    saveText() {
      return this.$store.getters.getInputTextValue;
    },
  },
  watch: {
    input(val, oldVal) {
      console.log(val);
      this.$store.dispatch("setInputTextValue", val);
    },
  },
  created() {
    this.input = this.saveText;
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    changeValue(val) {
      console.log(val);
    },
  },
};
</script>


<style lang="less" scoped>
</style>