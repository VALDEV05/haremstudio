<template>
  <div id="site-main">
    <ChiSiamo></ChiSiamo>
    <Servizio01></Servizio01>
    <Servizio02></Servizio02>
    <Servizio03></Servizio03>
    <Contatti></Contatti>
  </div>
</template>

<script>
import ChiSiamo from "./ChiSiamo.vue";
import Servizio01 from "./servizio-01.vue";
import Servizio02 from "./servizio-02.vue";
import Servizio03 from "./servizio-03.vue";
import Contatti from "./section-contatti.vue";

export default {
  components: {
    ChiSiamo,
    Servizio01,
    Servizio02,
    Servizio03,
    Contatti,

}
};
</script>

<style>
</style>