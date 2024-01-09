<template>
  <div class="bg">
    <div class="sw">
      <span>高斯模糊</span> <el-switch v-model="filterSwitch"></el-switch>
    </div>
    <el-row :gutter="20">
      <el-col
        :span="6"
        v-for="(item, index) in dataSource"
        :key="`item${index}`"
      >
        <div
          @click="clickRow(item)"
          class="item-class"
          v-bind:style="{
            backgroundColor:
              '#' + Math.floor(Math.random() * (2 << 23)).toString(16),
          }"
        >
          <p
            v-bind:style="{
              color: 'white',
              filter: filterSwitch ? `blur(10px)` : `blur(0px)`,
            }"
          >
            {{ item.title }}
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Rowlayout",
  data() {
    return {
      filterSwitch: false,
      dataSource: [
        {
          title: "百度",
          link: "http://www.baidu.com",
        },
        {
          title: "饿了么UI",
          link: "https://element.eleme.cn",
        },
        {
          title: "博客园",
          link: "https://www.cnblogs.com/wgb1234/",
        },
        {
          title: "Flutter中文网",
          link: "https://flutterchina.club/docs/",
        },
        {
          title: "微信开放平台",
          link: "https://open.weixin.qq.com",
        },
        {
          title: "Youtube",
          link: "https://www.youtube.com/",
        },
        {
          title: "新浪",
          link: "http://www.sina.com",
        },
        {
          title: "千图网",
          link: "http://www.58pic.com",
        },
        {
          title: "github",
          link: "http://www.github.com",
        },
        {
          title: "Grid布局",
          link: "http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html",
        },
        {
          title: "猫眼电影票",
          link: "https://maoyan.com",
        },
        {
          title: "日历📆",
          link: "https://wannianrili.bmcx.com",
        },
        {
          title: "百度文库",
          link: "https://wenku.baidu.com",
        },
        {
          title: "酷狗音乐",
          link: "http://www.kugou.com",
        },
        {
          title: "当当",
          link: "http://book.dangdang.com",
        },
      ],
      //   filterStyle: this.filterSwitch ? "blur(10px)" : "blur(0px)",
    };
  },
  methods: {
    clickRow(item) {
      //   this.$message(`点击了~ ${item.title}`);
      window.open(item.link, "_blank");
    },
  },
};
</script>

<style lang="less" scoped>
.bg {
  background-color: lightgray;
  margin-top: 50px;
  padding-bottom: 100px;
  user-select: none;
}

.sw {
  margin-left: 10px;
  padding: 20px;
}
.item-class {
  height: 300px;
  width: 300px;
  margin: 20px;
  border-radius: 30px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  /** filter: grayscale(100%); 悼念模式: 袁老今天逝世,为了缅怀袁老 博客园我设置了这种模式 */
  p {
    text-align: center;
    line-height: 250px;
    margin-bottom: 100px;
    font-size: 40px;
    font-weight: bold;
    z-index: 1;
    position: relative;
  }
}
</style>