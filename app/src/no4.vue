<template>
  <div>
    <ul>
      <li style="padding:20px 0;" v-for="i in data">{{i}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      data: ""
    };
  },
  components: {},
  created() {
    this.$http
      .get("https://cnodejs.org/api/v1/topics", {
        params: { page: "1", tab: "share", limit: 10, mdrender: "true" }
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
