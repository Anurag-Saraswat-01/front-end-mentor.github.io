<template>
  <div class="container" :style="cssProps">
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
  data() {
    return {
      // theme 1
      mainBackground: "hsl(222, 26%, 31%)",
      toggleKeypadBackground: "hsl(223, 31%, 20%)",
      screenBackground: "hsl(224, 36%, 15%)",
      keyBackground: "hsl(30, 25%, 89%)",
      keyShadow: "hsl(28, 16%, 65%)",
      keyBackgroundEqual: "hsl(6, 63%, 50%)",
      keyShadowEqual: "hsl(6, 70%, 34%)",
      keyBackgroundUtility: "hsl(225, 21%, 49%)",
      keyShadowUtility: "hsl(224, 28%, 35%)",
      textPrimary: "hsl(221, 14%, 31%)",
      textSecondary: "hsl(221, 14%, 31%)",
    };
  },
  computed: {
    cssProps() {
      return {
        "--main-bg": this.mainBackground,
        "--toggle-keypad-bg": this.toggleKeypadBackground,
        "--screen-bg": this.screenBackground,
        "--key-bg": this.keyBackground,
        "--key-shadow": this.keyShadow,
        "--key-bg-equal": this.keyBackgroundEqual,
        "--key-shadow-equal": this.keyShadowEqual,
        "--key-bg-utility": this.keyBackgroundUtility,
        "--key-shadow-utility": this.keyShadowUtility,
        "--text-primary": this.textPrimary,
        "--text-secondary": this.textSecondary,
      };
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=League+Spartan:wght@700&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "League Spartan", sans-serif;
}

.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1.5rem;
  background-color: var(--main-bg);
  color: white;
}
</style>
