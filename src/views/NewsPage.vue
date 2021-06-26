<template>
  <div>
    <h3 style="text-align: center">每日新闻简报</h3>
    <div class="date-container">
      <p>
        今天是 {{ results.calendar.cYear }}年{{ results.calendar.cMonth }}月{{
          results.calendar.cDay
        }}日
        {{ results.calendar.ncWeek }}
        农历{{ results.calendar.monthCn }}{{ results.calendar.dayCn }}
      </p>
    </div>

    <div class="history-container">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>历史上的今天</span>
        </div>
        <div
          v-for="(item, index) in results.historyList"
          :key="index"
          class="text item"
        >
          {{ index + 1 }}. {{ item.event }}
        </div>
      </el-card>
    </div>

    <div class="news-container">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>今日新闻简报</span>
        </div>
        <div
          v-for="(item, index) in results.newsList"
          :key="index"
          class="text item"
        >
          <p class="link">
            <a :href="item.url" target="_blank"
              >{{ index + 1 }}. {{ item.title }} #{{ item.category }}</a
            >
          </p>
        </div>
      </el-card>
    </div>

    <div class="news-container">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>每日成语</span>
        </div>
        <div>
          <h1>{{ results.phrase.phrase }}</h1>
          <span>读音: {{ results.phrase.pinyin }}</span>
          <p>含义: {{ results.phrase.explain }}</p>
          <p>出处: {{ results.phrase.from }}</p>
          <p>举例: {{ results.phrase.example }}</p>
        </div>
      </el-card>
    </div>

    <div class="news-container">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>每日一言</span>
        </div>
        <div>
          <p>
            {{ results.sentence.sentence }} --- {{ results.sentence.author }}
          </p>
        </div>
      </el-card>
    </div>

    <div class="news-container">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>每日一诗</span>
        </div>
        <div>
          <h3>{{ results.poem.title }}</h3>
          <span>{{ results.poem.author }}</span>
          <div v-for="(str, index) in results.poem.content" :key="index">
            <p style="font-style: italic; font-weight: 800">{{ str }}</p>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { requestData } from "../http/index";

export default {
  name: "News",
  data() {
    return {
      results: {
        calendar: {},
        historyList: [],
        newsList: [],
        phrase: {},
        sentence: {},
        poem: {},
        weather: {},
      },
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$http({
        url: "/api?ip=112.97.57.70&count=12",
        method: "get",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((result) => {
          this.results = result.data.data;
        })
        .catch((err) => {
          this.$message(err.message);
        });
    },
  },
};
</script>

<style lang="less" scoped>
.date-container {
  background-color: lightskyblue;
  color: orangered;
  opacity: 0.75;
  margin: 0 auto;
  width: 500px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
}

.history-container {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.news-container {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 500px;
}
.link a {
  text-decoration: none;
  color: black;
}
</style>