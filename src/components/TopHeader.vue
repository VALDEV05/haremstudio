<template>
  <header id="top-header">
    <div class="col-full">
      <TopHeaderDesktop></TopHeaderDesktop>
      <!-- /.menu-top-header desktop-->
      <TopHeaderMobile></TopHeaderMobile>
      
    </div>
  </header>
  <!-- /#top-header -->
</template>

<script>
import TopHeaderMobile from "./TopHeaderMobile.vue";
import TopHeaderDesktop from "./TopHeaderDesktop.vue";
/* import icon_calendar from "./icon/icon_calendar.vue"; */
export default {
  components: {
    TopHeaderDesktop,
    TopHeaderMobile
  },
};
</script>
