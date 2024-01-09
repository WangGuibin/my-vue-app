<template>
  <div>
    <el-container style="margin-top: -10px">
      <el-aside width="200px">
        <el-menu :default-openeds="['1']" router>
          <el-submenu index="1">
            <template slot="title"
              ><i class="el-icon-message"></i>导航一</template
            >
            <el-menu-item-group>
              <el-menu-item index="/demo">测试Demo</el-menu-item>
              <el-menu-item index="fatherChildSendArgs"
                >父子组件相互传参</el-menu-item
              >
              <el-menu-item index="/layout">各种布局</el-menu-item>
              <el-menu-item index="1-4">选项4</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>导航二</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"
              ><i class="el-icon-setting"></i>导航三</template
            >
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title">选项4</template>
              <el-menu-item index="3-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"> 菜单</i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>菜单1</el-dropdown-item>
              <el-dropdown-item>菜单2</el-dropdown-item>
              <el-dropdown-item>菜单3</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>

        <el-main>
          <el-table :data="tableData" @row-click="rowClick">
            <el-table-column prop="title" label="Demo标题"> </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      tableData: [
        { title: "vuex的使用", router: "/InputData" },
        { title: "row布局和高斯模糊", router: "/demo/rowlayout" },
        { title: "弹窗消息", router: "/demo" },
        { title: "每日新闻简报", router: "/News" },
      ],
    };
  },
  methods: {
    rowClick(row, column, event) {
      console.log(row);
      this.$router.push(row.router);
    },
  },
};
</script>

<style lang="less" scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>