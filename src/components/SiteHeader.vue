<template>
  <header id="site-header" class="desktop">
    <TopHeader></TopHeader>
    <div id="main-header">
      <div class="row">
        <div id="header-menu" class="col-md-4">
          <div class="col-full">
            <div id="logo-small">
              <img src="../assets/upload/img/script-white-total.png" alt="" />
            </div>
            <MenuHeader></MenuHeader>
          </div>
        </div>
        <div
          class="col-md-8 d-flex justify-content-center vinile-wrap-container"
        >
          <VinileAnimation2></VinileAnimation2>
        </div>

        <!-- /#header-menu -->
        <!-- <div
          class="col-md-8 d-flex justify-content-center vinile-wrap-container"
        >
          <VinileAnimation></VinileAnimation>
        </div> -->
      </div>
    </div>
  </header>
  <header id="site-header" class="mobile">
    <TopHeader></TopHeader>
    <div id="main-header">
      <div class="row">
        <div id="header-menu" class="col-md-4">
          <div class="col-full">
            <div id="logo-small">
              <img src="../assets/upload/img/script-white-total.png" alt="" />
            </div>
            <MenuHeader></MenuHeader>
          </div>
        </div>
        <div
          class="col-md-8 d-flex justify-content-center vinile-wrap-container"
        >
          <VinileAnimation2></VinileAnimation2>
        </div>
        <CarouselServiceMobile/>
      </div>
    </div>
  </header>
</template>

<script>
import TopHeader from "./TopHeader.vue";
import MenuHeader from "./MenuHeader.vue";
/* import VinileAnimation from "./VinileAnimation.vue"; */
import VinileAnimation2 from "./VinileAnimation2.vue";
import CarouselServiceMobile from "./CarouselServiceMobile.vue";
export default {
  components: {
    TopHeader,
    MenuHeader,
    /* VinileAnimation, */
    VinileAnimation2,
    CarouselServiceMobile
  },
};
</script>
