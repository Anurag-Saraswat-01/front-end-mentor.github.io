<template>
  <div class="header">
    <h1 class="title">calc</h1>
    <div class="theme-wrapper">
      <p>THEME</p>
      <div class="toggle-wrapper">
        <div class="toggle-labels">
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>
        <div class="toggle">
          <div
            class="slider"
            :class="`theme${theme} ${
              oldTheme ? `from${oldTheme}to${theme}` : ''
            }`"
          ></div>
          <div class="input-wrapper" @click="onClick(1)">
            <input type="radio" name="theme1" id="theme1" />
            <label for="theme1">1</label>
          </div>

          <div class="input-wrapper" @click="onClick(2)">
            <input type="radio" name="theme2" id="theme2" />
            <label for="theme2">2</label>
          </div>

          <div class="input-wrapper" @click="onClick(3)">
            <input type="radio" name="theme3" id="theme3" />
            <label for="theme3">3</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalcHeader",
  props: {
    theme: Number,
  },
  data() {
    return {
      oldTheme: null,
    };
  },
  methods: {
    onClick(val) {
      if (val === this.theme) return;
      this.oldTheme = this.theme;
      this.$emit("switch-theme", val);
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: var(--text-primary);
}

p {
  font-size: 12px;
}

.title {
  font-weight: 700;
}

.theme-wrapper {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 2rem;
}

.toggle-labels {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.toggle {
  background-color: var(--toggle-keypad-bg);
  height: 1.5rem;
  width: 4.5rem;
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
}

.slider {
  height: 1rem;
  width: 1rem;
  background-color: var(--key-bg-equal);
  position: absolute;
  border-radius: 1rem;
}

.slider:hover,
.slider:active,
.slider:focus {
  background-color: var(--key-bg-equal-hover);
}

.slider.theme1 {
  left: 0.25rem;
  right: calc(100% - 1.25rem);
}

.slider.theme2 {
  left: calc(50% - 0.5rem);
  right: calc(50% - 0.5rem);
}

.slider.theme3 {
  left: calc(100% - 1.25rem);
  right: 0.25rem;
}

.from1to2 {
  animation: 0.1s slide1to2 linear forwards;
  -webkit-animation: 0.1s slide1to2 linear forwards;
  -moz-animation: 0.1s slide1to2 linear forwards;
}

.from2to1 {
  animation: 0.1s slide1to2 linear reverse;
  -webkit-animation: 0.1s slide1to2 linear reverse;
  -moz-animation: 0.1s slide1to2 linear reverse;
}

.from2to3 {
  animation: 0.1s slide2to3 linear forwards;
  -webkit-animation: 0.1s slide2to3 linear forwards;
  -moz-animation: 0.1s slide2to3 linear forwards;
}

.from3to2 {
  animation: 0.1s slide2to3 linear reverse forwards;
  -webkit-animation: 0.1s slide2to3 linear reverse forwards;
  -moz-animation: 0.1s slide2to3 linear reverse forwards;
}

.from1to3 {
  animation: 0.1s slide1to3 linear forwards;
  -webkit-animation: 0.1s slide1to3 linear forwards;
  -moz-animation: 0.1s slide1to3 linear forwards;
}

.from3to1 {
  animation: 0.1s slide1to3 linear reverse forwards;
  -webkit-animation: 0.1s slide1to3 linear reverse forwards;
  -moz-animation: 0.1s slide1to3 linear reverse forwards;
}

@keyframes slide1to2 {
  0% {
    left: 0.25rem;
    right: calc(100% - 1.25rem);
  }
  100% {
    left: calc(50% - 0.5rem);
    right: calc(50% - 0.5rem);
  }
}

@keyframes slide2to3 {
  0% {
    left: calc(50% - 0.5rem);
    right: calc(50% - 0.5rem);
  }
  100% {
    left: calc(100% - 1.25rem);
    right: 0.25rem;
  }
}

@keyframes slide1to3 {
  0% {
    left: 0.25rem;
    right: calc(100% - 1.25rem);
  }
  100% {
    left: calc(100% - 1.25rem);
    right: 0.25rem;
  }
}

.input-wrapper {
  width: 1.5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.input-wrapper input,
label {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}
</style>
