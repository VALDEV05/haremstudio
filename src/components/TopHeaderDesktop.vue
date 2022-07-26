<template>
  <div class="menu-top-header desktop">
        <div class="left-menu">
          <div id="menu-item-1" class="menu-item">
            <div class="icon-wrap">
              <icon_position></icon_position>
            </div>
            Via Antonio Maria Lorgna 22 - 00143 - RM
          </div>
          <!-- /#menu-item-1 -->
          <div id="menu-item-2" class="menu-item">
            <div class="icon-wrap">
              <icon_clock></icon_clock>
            </div>
            Lun - Ven 10.00/19.00
          </div>
          <!-- /#menu-item-2 -->
          <div id="menu-item-3" class="menu-item sendEmailHarem">
            <div class="icon-wrap">
              <icon_mail></icon_mail>
            </div>
            studio@millenarigroup.com
          </div>
          <!-- /#menu-item-3 -->
        </div>
        <!-- /.left-menu -->
        <div class="right-menu">
          <a class="btn btn-lg btn-contattaci-top-header">
            PRENOTA UNA SESSIONE
          </a>
          <!-- /.btn-contattaci-top-header -->
        </div>
        <!-- /.right-menu -->
      </div>
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