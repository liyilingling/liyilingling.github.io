<template>
  <div id="no1">
    <div class="item clearfix" v-for="(i,$index) in data" style="padding:10px;margin-bottom:10px;">
      <a :href="'#/no2/'+i.id+'/'+i.tab">
        <div style="float:left;width:100px;height:100px;margin-right:15px;"><img :src="i.author.avatar_url" alt="" style="width:100%;"></div>
        <div style="float:left;">
          <div class="item-title" style="padding:10px;">
            <div>{{i.title.length>10?i.title.substring(0,10)+'...':i.title}}</div>
          </div>
          <div class="clearfix" style="padding:10px;"><span class="item-author" style="float:left;">{{i.author.loginname}}</span><span class="item-time" style="float:right;">{{i.create_at}}</span></div>
        </div>
      </a>
    </div>

  </div>
</template>

<script>
export default {
  name: "no1",
  props: [],
  data() {
    return {
      data: "",
      bee: ""
    };
  },
  components: {},
  created() {
    this.ajax();
  },
  methods: {
    ajax() {
      this.$http
        .get("https://cnodejs.org/api/v1/topics", {
          params: {
            page: "1",
            tab: this.$route.params.tab,
            limit: 10,
            mdrender: "true"
          }
        })
        .then(data => {
          console.log(data);
          this.data = data.data.data;
        });
    }
  },
  watch: {
    $route() {
      this.ajax();
    }
  }
};
</script>

<style>
</style>
