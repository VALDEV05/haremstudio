<template>
  <div class="menu-top-header mobile">
    <div id="menu-item-1" class="menu-item">
      <div class="icon-wrap">
        <icon_position></icon_position>
      </div>
    </div>
    <!-- /#menu-item-1 -->
    <div id="menu-item-2" class="menu-item">
      <div class="icon-wrap">
        <icon_clock></icon_clock>
      </div>
    </div>
    <!-- /#menu-item-2 -->
    <div id="menu-item-3" class="menu-item sendEmailHarem">
      <div class="icon-wrap">
        <icon_mail></icon_mail>
      </div>
    </div>
    <!-- /#menu-item-3 -->
    <div id="hambuerger-menu">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="58.045"
        height="51.959"
        viewBox="0 0 58.045 51.959"
      >
        <g
          id="Raggruppa_23"
          data-name="Raggruppa 23"
          transform="translate(-348.972 -23.995)"
        >
          <path
            id="Tracciato_1"
            data-name="Tracciato 1"
            d="M1014.487,4508.345c-.893.791-1.584.2-3.847,9.259s-4.2,16.253-4.2,16.253a15.725,15.725,0,0,0,9.211,15.491c10.442,4.915,23.4,8.58,33.771,7.052s13.629-10.448,12.867-17.031-11.728-29.257-25.65-31.482S1015.381,4507.555,1014.487,4508.345Z"
            transform="translate(-656.392 -4481.839)"
            fill="none"
            stroke="#fff"
            stroke-width="2"
          />
          <line
            id="Linea_1"
            data-name="Linea 1"
            x2="29.036"
            transform="translate(363.482 42.657)"
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-width="2"
          />
          <line
            id="Linea_2"
            data-name="Linea 2"
            x2="29.036"
            transform="translate(363.482 49.957)"
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-width="2"
          />
          <line
            id="Linea_3"
            data-name="Linea 3"
            x2="29.036"
            transform="translate(363.482 57.257)"
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-width="2"
          />
        </g>
      </svg>
    </div>
    <!-- /.btn-contattaci-top-header -->
  </div>
  <!-- /.menu-top-header mobile-->
</template>

<script>
import icon_mail from "./icon/icon_mail.vue";
import icon_clock from "./icon/icon_clock.vue";
import icon_position from "./icon/icon_position.vue";
export default {
  components: {
    icon_mail,
    icon_clock,
    icon_position,
  },
};
</script>

<style>
</style>