<template>
  <div class="row row-footer-desktop">
    <div class="col-10 offset-md-1">
      <div class="row w-100">
        <div class="col-2 back-top">
          <img src="../assets/upload/img/logo_small-white.png" alt="" />
        </div>
        <div class="col-2">
          <MenuHeader></MenuHeader>
        </div>
        <div class="col-4">
          <LeftMenu></LeftMenu>
        </div>
        <div class="col-4">
          <LegalPageMenu></LegalPageMenu>
        </div>
      </div>
    </div>
    <div class="col-12 col-bottom">
     <p>Powered by <a href="https://valeriocorda.com">valeriocorda.com</a> | P.IVA 16189901008</p>
    </div>
  </div>
</template>

<script>
import MenuHeader from "./MenuHeader.vue";
import LeftMenu from "./LeftMenu.vue";
import LegalPageMenu from "./LegalPageMenu.vue";
export default {
  components: {
    MenuHeader,
    LeftMenu,
    LegalPageMenu,
  },
};
</script>

<style>
.cls-footer {
  fill: #121212;
}
</style>