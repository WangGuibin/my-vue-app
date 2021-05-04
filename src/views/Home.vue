<template>
  <div class="container">
    <el-container>
      <el-header>
        <!--导航菜单-->
        <nav-menu></nav-menu>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <!-- 侧边菜单 -->
          <my-aside></my-aside>
        </el-aside>
        <el-container>
          <el-main>
            <!-- 主要内容 -->
            主要内容
          </el-main>
          <el-footer>
            <!-- 页脚 -->
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>活动管理</el-breadcrumb-item>
              <el-breadcrumb-item>活动列表</el-breadcrumb-item>
              <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import NavMenu from "@/components/NavMenu.vue";
import MyAside from "@/components/Aside.vue";

export default {
  components: { NavMenu, MyAside },
  name: "Home",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.container {
  margin: 0;
  padding: 0;
}
.el-header {
  background-color: rgba(84, 92, 100, 0.35);
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-footer {
  background-color: white;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 600px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 600px;
}
.el-breadcrumb {
  margin: 20px;
  color: white;
}
</style>