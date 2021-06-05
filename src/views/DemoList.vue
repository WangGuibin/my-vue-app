<template>
  <div>
    <el-card class="card">
      <div
        class="item"
        v-for="item in listData"
        :key="item.key"
        @click="clickItem(item)"
      >
        <p>{{ item.title }}</p>
        <el-divider></el-divider>
      </div>
    </el-card>
    <el-alert
      v-show="showAlert"
      title="成功提示的文案"
      type="success"
      description="文字说明文字说明文字说明文字说明文字说明文字说明"
      show-icon
      @close="closeAlert"
    >
    </el-alert>
  </div>
</template>

<script>
export default {
  name: "Demo List",
  components: {},
  data() {
    return {
      listData: [
        { title: "Alert提示消息", key: "Alert" },
        { title: "Message消息提示", key: "Message" },
        { title: "messageBox弹窗", key: "messageBox" },
        { title: "Notification通知", key: "Notification" },
      ],
      showAlert: false,
    };
  },
  methods: {
    clickItem(item) {
      const key = item.key;
      if (key == "Alert") {
        this.showAlert = true;
      } else if (key == "Message") {
        const index = Math.round(Math.random() * 3);
        const type = ["success", "warning", "info", "error"][index];
        this.$message({
          message: `注意! 注意!! 这是一条${type}消息`,
          type: type,
        });
      } else if (key == "messageBox") {
        this.showMessageBoxAlert();
      } else if (key == "Notification") {
        const index = Math.round(Math.random() * 3);
        const type = ["success", "warning", "info", "error"][index];
        const position = [
          "top-right",
          "top-left",
          "bottom-right",
          "bottom-left",
        ][index];
        this.$notify({
          title: "通知消息",
          type: type,
          message: `这是一条${type}通知消息`,
          position: position,
        });
      }
    },
    closeAlert() {
      this.showAlert = false;
    },
    showMessageBoxAlert() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true,
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>

<style lang="less" scoped>
.card {
  width: 50%;
  margin: 0 auto;
  p {
    margin-top: 20px;
  }
  .item {
    cursor: pointer;
  }
}
</style>