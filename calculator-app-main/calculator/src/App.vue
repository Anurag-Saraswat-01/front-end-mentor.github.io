<template>
  <div class="container">
    <CalcContainer />
    <FooterAttr />
  </div>
</template>

<script>
import FooterAttr from "./components/FooterAttr.vue";
import CalcContainer from "./components/CalcContainer.vue";
export default {
  name: "App",
  components: {
    FooterAttr,
    CalcContainer,
  },
};
</script>

<style></style>
