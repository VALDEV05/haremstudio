<template>
  <PageLoader></PageLoader>
  <!-- /#PageLoader -->
  <SiteHeader></SiteHeader>
  <!-- /#site-header -->
  <SiteMain></SiteMain>
  <!-- /#site-main -->
  <SiteFooter></SiteFooter>
  <!-- /#site-footer -->
  <SiteMenuMobile></SiteMenuMobile>
  <!-- /#site-footer-left -->
</template>

<script>
import PageLoader from "./components/PageLoader.vue"
import SiteHeader from "./components/SiteHeader.vue";
import SiteMain from "./components/SiteMain.vue";
import SiteFooter from "./components/SiteFooter.vue";
import SiteMenuMobile from "./components/SiteMenuLeft.vue"

export default {
  name: "App",
  components: {
    SiteHeader,
    SiteMain,
    SiteFooter,
    SiteMenuMobile,
    PageLoader
  },
};
</script>

<style lang="scss">
@import "./assets/scss/custom.scss";
</style>
