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
        id="Livello_2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 37.09 37.09"
      >
        <g id="Livello_1-2">
          <g id="Livello_2-2">
            <g id="Livello_1-2">
              <path
                d="M22.59,0H14.51C6.5,0,0,6.5,0,14.51H0v8.08c0,8.01,6.5,14.5,14.51,14.5h8.08c8.01,0,14.49-6.49,14.5-14.5V14.51c0-8.01-6.49-14.5-14.5-14.51Z"
              />
              <g id="Livello_1-2-2">
                <line
                  id="Linea_1"
                  class="hamburger-icon"
                  x1="6.41"
                  y1="12.03"
                  x2="31.39"
                  y2="12.03"
                />
                <line
                  id="Linea_2"
                  class="hamburger-icon"
                  x1="6.41"
                  y1="18.48"
                  x2="31.39"
                  y2="18.48"
                />
                <line
                  id="Linea_3"
                  class="hamburger-icon"
                  x1="6.41"
                  y1="24.93"
                  x2="31.39"
                  y2="24.93"
                />
              </g>
            </g>
          </g>
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

<style lang="scss">
.hamburger-icon {
  fill: none;
  stroke: #fff;
  stroke-linecap: round;
  stroke-width: 2px;
}
</style>