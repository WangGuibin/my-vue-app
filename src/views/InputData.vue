<template>
  <div ref="sections" class="bg">
    <div class="select-container">
      <div class="search-icon"><i class="el-icon-search"></i></div>
      <el-select
        v-model="selectValue"
        filterable
        remote
        :remote-method="remoteMethod"
      ></el-select>
    </div>

    <SelectAppendPrefix />

    <el-button plain @click="goBack"> 返回🔙 </el-button>

    <el-input v-model="input" placeholder="请输入内容"></el-input>

    <h3>{{ input }}</h3>
    <MyChild v-model="input"></MyChild>

    <input-number controls-position="right" v-model="num" />
    <div class="btn">
      <input class="switch" type="checkbox" />
    </div>

    <DefaultSlot class="def-slot">
      <div>这是一个默认的插槽坑位</div>
      <template #header>
        <div>这是具名插槽 header</div>
      </template>
      <template #footer>
        <div>这是具名插槽 footer</div>
      </template>
    </DefaultSlot>
    <br />
    <ScopeSlot>
      <template slot-scope="{ dataSet }">
        <div>{{ dataSet }}</div>
      </template>
    </ScopeSlot>
    <ScrollLayout />
    <div class="bookmarks">
      <BookMarkGrid :bookmarks="bookmarksData" />
      <BookMarkGrid :bookmarks="bookmarksData" />
      <BookMarkGrid :bookmarks="bookmarksData" />
    </div>
  </div>
</template>

<script>
import MyChild from "@/components/MyChild";
import InputNumber from "../components/InputNumber.vue";
import DefaultSlot from "./Slot/DefaultSlot.vue";
import ScopeSlot from "./Slot/ScopeSlot.vue";
import ScrollLayout from "@/views/Layout/ScrollLayout.vue";
import SelectAppendPrefix from "@/components/SelectAppendPrefix.vue";
import BookMarkGrid from "@/components/BookMarkGrid.vue";

export default {
  name: "InputData",
  components: {
    MyChild,
    InputNumber,
    DefaultSlot,
    ScopeSlot,
    ScrollLayout,
    SelectAppendPrefix,
    BookMarkGrid,
  },
  data() {
    return {
      input: "",
      num: 0,
      selectValue: "",
      bookmarksData: [
        {
          title: "Google",
          link: "https://www.google.com",
          cover:
            "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        },
        {
          title: "Vue.js",
          link: "https://vuejs.org/",
          cover: "https://vuejs.org/images/logo.png",
        },
        {
          title: "GitHub",
          link: "https://github.com/",
          cover:
            "https://github.githubassets.com/images/modules/logos_page/Octocat.png",
        },
      ],
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
  mounted() {},
  methods: {
    remoteMethod() {},
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
.bookmarks {
  padding: 20px;
  width: 60%;
  background: #e9e9eb;
}
.select-container {
  position: relative;
}

.search-icon {
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
}
.search-icon i {
  font-size: 18px;
  color: #c0c4cc;
}

.el-select .el-input__inner {
  padding-left: 40px;
}
.bg {
  height: 1800px;
}
.def-slot {
  margin: 30px;
}

.btn {
  border-radius: 31px;
  width: 102px;
  height: 62px;
  background-color: #e9e9eb;
}
.switch {
  position: relative;
  appearance: none;
  cursor: pointer;
  transition: all 100ms;

  &::before {
    position: absolute;
    content: "";
    transition: all 300ms cubic-bezier(0.45, 1, 0.4, 1);
  }
  &::after {
    position: absolute;
    left: 4px;
    top: 4px;
    border-radius: 27px;
    width: 54px;
    height: 54px;
    background-color: #fff;
    box-shadow: 1px 1px 5px rgba(#000, 0.3);
    content: "";
    transition: all 300ms cubic-bezier(0.4, 0.4, 0.25, 1.35);
  }
  &:checked {
    background-color: #5eb662;
    &::before {
      transform: scale(0);
    }
    &::after {
      transform: translateX(40px);
    }
  }
}
</style>