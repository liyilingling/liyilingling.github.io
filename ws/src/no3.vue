<template>
  <div id="no3">
    <ul>
      <li style="padding:20px 0;" v-for="i in data">{{i}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "no3",
  props: [],
  data() {
    return {
      data: "",
      change: ""
    };
  },
  components: {},
  created() {
    this.$http
      .get("https://cnodejs.org/api/v1/topics", {
        params: { page: "1", tab: "ask", limit: 10, mdrender: "true" }
      })
      .then(data => {
        console.log(data);
        this.data = data.data.data;
      });
  }
};
</script>

<style>
</style>