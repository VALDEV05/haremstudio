<template>
  <div class="row row-footer-mobile">
    <div class="row w-100">
      <div class="col-md-12">
        <div class="logo-script">
          <img src="../assets/upload/img/script-white-total.png" alt="" />
        </div>
      </div>
      <div class="col-md-12">
        <LegalPageMenu></LegalPageMenu>
      </div>

      <row class="legal-contact">
        <div>P.IVA 16189901008</div>
        <div>Via Antonio Maria Lorgna 22</div>
      </row>
    </div>
  </div>
</template>

<script>
import LegalPageMenu from "./LegalPageMenu.vue";
export default {
  components: {
    LegalPageMenu,
  },
};
</script>

<style>
.cls-footer {
  fill: #121212;
}
</style>