<template>
  <div id="app">
    <div style="background:#000;padding-bottom:20px;">
      <mt-header title="">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
      <div style="color:#fff;padding:20px 0;text-align:center;">
        <div style="width:30%;margin:0 auto;"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575538729140&di=50aba88d719b53d66742555c4496d3f4&imgtype=0&src=http%3A%2F%2Fupload.newhua.com%2F2018%2F0731%2F1533000193299.png" alt="" style="width:100%;height:100%;border-radius: 50%;"></div>
        <h4 style="line-height:30px;">TakWolf</h4>
        <div><a href="#" style="color:#fff;">TakWolf@github.com</a></div>
      </div>
      <div class="clearfix" style="padding:0 10px;line-height:40px;"><span style="font-size:12px;color:#fff;float:left;">注册时间：2014-10-15</span><span style="color:green;font-size:12px;float:right;">积分：5</span></div>
    </div>
    <div class="nav">
      <div style="" @click="job()"><a>最近回复</a></div>
      <div @click="share()"><a>最新发布</a></div>
      <div @click="good()"><a>收藏话题</a></div>
      <div @click="ask()"><a>收藏话题</a></div>
    </div>
    <div style="">
      <div class="item clearfix" v-for="(i,$index) in data" style="padding:10px;margin-bottom:10px;">
        <div style="float:left;width:100px;height:100px;margin-right:15px;"><img :src="i.author.avatar_url" alt="" style="width:100%;" @click="local($index)"></div>
        <div style="float:left;">
          <div class="item-title" style="padding:10px;">
            <div @click="local($index)">{{i.title.length>10?i.title.substring(0,10)+'...':i.title}}</div>
          </div>
          <div class="clearfix" style="padding:10px;"><span class="item-author" style="float:left;">{{i.author.loginname}}</span><span class="item-time" style="float:right;">{{i.create_at}}</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      data: ""
    };
  },
  created() {},
  methods: {
    job() {
      this.$http
        .get("https://cnodejs.org/api/v1/topics", {
          params: { page: "1", tab: "job", limit: 10, mdrender: "true" }
        })
        .then(data => {
          console.log(data);
          this.data = data.data.data;
        });
    },
    share() {
      this.$http
        .get("https://cnodejs.org/api/v1/topics", {
          params: { page: "1", tab: "share", limit: 10, mdrender: "true" }
        })
        .then(data => {
          console.log(data);
          this.data = data.data.data;
        });
    },
    ask() {
      this.$http
        .get("https://cnodejs.org/api/v1/topics", {
          params: { page: "1", tab: "ask", limit: 10, mdrender: "true" }
        })
        .then(data => {
          console.log(data);
          this.data = data.data.data;
        });
    },
    good() {
      this.$http
        .get("https://cnodejs.org/api/v1/topics", {
          params: { page: "1", tab: "good", limit: 10, mdrender: "true" }
        })
        .then(data => {
          console.log(data);
          this.data = data.data.data;
        });
    },
    local(l) {
      location.href = "#/no1/" + l;
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
.mint-header {
  background: transparent !important;
  border: 1px solid #fff;
}
.nav {
  display: flex;
  flex-direction: row;
}
.nav > div {
  width: 25%;
  text-align: center;

  background: #000;
  line-height: 32px;
}
.nav > div > a {
  color: #fff;
  text-decoration: none;
}
.nav > div .active {
  border-bottom: 2px solid #f3ac14;
}
.item {
  background: #fff;
  border-bottom: 1px solid #f5f5f5;
  padding: 10px;
}
</style>
i