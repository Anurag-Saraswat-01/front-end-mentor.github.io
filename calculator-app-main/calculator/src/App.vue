<template>
  <div class="container" :class="`theme${theme}`">
    <CalcContainer @switch-theme="switchTheme" :theme="theme" />
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
    let localTheme = window.localStorage.getItem("theme");
    return {
      theme: parseInt(localTheme) || 1,
    };
  },
  methods: {
    switchTheme(val) {
      this.theme = val;
      window.localStorage.setItem("theme", val);
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

.theme1 {
  --main-bg: hsl(222, 26%, 31%);
  --toggle-keypad-bg: hsl(223, 31%, 20%);
  --screen-bg: hsl(224, 36%, 15%);
  --key-bg: hsl(30, 25%, 89%);
  --key-shadow: hsl(28, 16%, 65%);
  --key-bg-equal: hsl(6, 63%, 50%);
  --key-shadow-equal: hsl(6, 70%, 34%);
  --key-bg-utility: hsl(225, 21%, 49%);
  --key-shadow-utility: hsl(224, 28%, 35%);
  --text-primary: white;
  --text-secondary: hsl(221, 14%, 31%);
  --text-tertiary: white;
}

.theme2 {
  --main-bg: hsl(0, 0%, 90%);
  --toggle-keypad-bg: hsl(0, 5%, 81%);
  --screen-bg: hsl(0, 0%, 93%);
  --key-bg: hsl(45, 7%, 89%);
  --key-shadow: hsl(35, 11%, 61%);
  --key-bg-equal: hsl(25, 98%, 40%);
  --key-shadow-equal: hsl(25, 99%, 27%);
  --key-bg-utility: hsl(185, 42%, 37%);
  --key-shadow-utility: hsl(185, 58%, 25%);
  --text-primary: hsl(60, 10%, 19%);
  --text-secondary: hsl(60, 10%, 19%);
}

.theme3 {
  --main-bg: hsl(268, 75%, 9%);
  --toggle-keypad-bg: hsl(268, 71%, 12%);
  --screen-bg: hsl(268, 71%, 12%);
  --key-bg: hsl(268, 47%, 21%);
  --key-shadow: hsl(290, 70%, 36%);
  --key-bg-equal: hsl(176, 100%, 44%);
  --key-shadow-equal: hsl(177, 92%, 70%);
  --key-bg-utility: hsl(281, 89%, 26%);
  --key-shadow-utility: hsl(285, 91%, 52%);
  --text-primary: hsl(52, 100%, 62%);
  --text-secondary: hsl(52, 100%, 62%);
  --text-tertiary: hsl(198, 20%, 13%);
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
