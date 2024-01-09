<style lang="less" scoped>
.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  width: 200px;
  height: 100%;
  background-color: #f0f0f0;
  border-right: 1px solid #ddd;
}
.sidebar ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.sidebar li {
  padding: 10px;
}
.sidebar li.active {
  background-color: rgb(208, 234, 246);
}
.content {
  margin: 20px 220px 20px 100px;
}
.content h2 {
  margin-top: 30px;
}
.content p {
  line-height: 1.8;
}
.a-tag {
  text-decoration: none;
}
</style>

<template>
  <div class="bg">
    <div class="content">
      <div v-for="section in sections" :key="section.id" :id="section.id">
        <h2>{{ section.title }}</h2>
        <p>{{ section.content }}</p>
      </div>
    </div>
    <div class="sidebar">
      <ul>
        <li
          v-for="section in sections"
          :key="section.id"
          :class="{ active: section.id === activeSection }"
        >
          <a
            class="a-tag"
            :href="`#${section.id}`"
            @click="setActiveSection(section)"
            >{{ section.title }}</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sections: [
        {
          id: "section1",
          title: "第一部分",
          content:
            "第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......",
        },
        {
          id: "section2",
          title: "第二部分",
          content:
            "第二部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......",
        },
        {
          id: "section3",
          title: "第三部分",
          content:
            "第三部分的内容...第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容......第一部分的内容.........",
        },
      ],
      activeSection: "",
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      let scrollPosition =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      for (let i = 0; i < this.sections.length; i++) {
        let currentSection = this.sections[i];
        let sectionTop = document.getElementById(currentSection.id).offsetTop;
        let sectionHeight = document.getElementById(
          currentSection.id
        ).offsetHeight;
        if (
          scrollPosition >= sectionTop - sectionHeight / 3 &&
          scrollPosition < sectionTop + sectionHeight - sectionHeight / 3
        ) {
          this.activeSection = currentSection.id;
        }
      }
    },
    setActiveSection(section) {
      this.activeSection = section.id;
    },
  },
};
</script>
