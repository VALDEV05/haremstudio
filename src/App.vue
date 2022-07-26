<template>
  <SiteHeader></SiteHeader>
  <!-- /#site-header -->
  <SiteMain></SiteMain>
  <!-- /#site-main -->
  <SiteFooter></SiteFooter>
  <!-- /#site-footer -->
  <SiteMenuLeft></SiteMenuLeft>
</template>

<script>
import SiteHeader from "./components/SiteHeader.vue";
import SiteMain from "./components/SiteMain.vue";
import SiteFooter from "./components/SiteFooter.vue";
import SiteMenuLeft from "./components/SiteMenuLeft.vue"

export default {
  name: "App",
  components: {
    SiteHeader,
    SiteMain,
    SiteFooter,
    SiteMenuLeft
  },
};
</script>

<style lang="scss">
@import "./assets/scss/custom.scss";
</style>
