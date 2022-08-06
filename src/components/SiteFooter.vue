<template>
  <div id="site-footer">
    <div id="back-top">
      <svg
        id="Livello_2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 274.76 87.67"
      >
        <g id="Livello_1-2">
          <path
            class="cls-footer"
            d="M274.76,87.67c-22.78-17.9-38.42-32.25-48.76-42.36-2.98-2.91-9.27-9.15-18.63-16.62-10.32-8.23-18.58-14.82-30.87-20.2C160.67,1.56,146.65,.36,140.24,.09c-19.61-.82-34.44,4.3-40.07,6.49-13.12,5.09-21.7,11.77-37.21,23.85-7.21,5.62-11.95,9.86-19.08,16.22-9.45,8.44-23.57,21.03-43.88,39.11l274.76,1.91Z"
          />
        </g>
      </svg>
      <div class="icona">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33.706"
          height="18.225"
          viewBox="0 0 33.706 18.225"
        >
          <path
            id="Tracciato_6"
            data-name="Tracciato 6"
            d="M1175,488l15.4,15.811L1205.878,488"
            transform="translate(1207.292 504.811) rotate(180)"
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </svg>
      </div>
    </div>
    <div class="col-full">
      <RowFooterDesktop></RowFooterDesktop> 
      <RowFooterMobile></RowFooterMobile>
    </div>
  </div>
  <!-- /#site-footer -->
</template>

<script>
import RowFooterDesktop from "./row-footer-desktop.vue"
import RowFooterMobile from "./row-footer-mobile.vue"
export default {
  components: {
    RowFooterDesktop,
    RowFooterMobile
},
};
</script>

<style>

</style>