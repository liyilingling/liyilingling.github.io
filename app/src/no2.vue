<template>
  <div id="no2">
    <div v-for="i in data" v-if='i.id==$route.params.value' v-html="i.content"></div>

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
  mounted() {
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
  },
  methods: {
    ajax() {
      console.log("ok");
    },
    local(l) {
      location.href = "#/no2/" + l;
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
