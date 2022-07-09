<template>
  <div class="container" :class="theme">
    <TodoHeader @on-toggle="onToggle" />
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
export default {
  name: "App",
  components: {
    TodoHeader,
  },
  data() {
    const theme = localStorage.getItem("todoTheme");
    return {
      theme: theme || "light",
    };
  },
  methods: {
    onToggle() {
      if (this.theme == "dark") {
        this.theme = "light";
        localStorage.setItem("todoTheme", "light");
      } else {
        this.theme = "dark";
        localStorage.setItem("todoTheme", "dark");
      }
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Josefin Sans", sans-serif;
}

:root {
  --primary-blue: hsl(220, 98%, 61%);
  --check-background: linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%);
}

.light {
  --todo-bg: hsl(0, 0%, 98%);
  --main-bg: hsl(236, 33%, 92%);
  --text-light: hsl(233, 11%, 84%);
  --text-light-hover: hsl(235, 19%, 35%);
  --text-dark: hsl(236, 9%, 61%);
  --text-very-dark: hsl(235, 19%, 35%);
  background-image: url("../src/assets/bg-mobile-light.jpg");
}

.dark {
  --main-bg: hsl(235, 21%, 11%);
  --todo-bg: hsl(235, 24%, 19%);
  --text-light: hsl(234, 39%, 85%);
  --text-light-hover: hsl(236, 33%, 92%);
  --text-dark: hsl(234, 11%, 52%);
  --text-very-dark: hsl(233, 14%, 35%);
  --text-very-dark-2: hsl(237, 14%, 26%);
  background-image: url("../src/assets/bg-mobile-dark.jpg");
}

.container {
  min-height: 100vh;
  background-repeat: no-repeat;
  background-color: var(--main-bg);
  background-size: contain;
  padding: 2.5rem 1.5rem;
}

@media only screen and (min-width: 1280px) {
  .light {
    background-image: url("../src/assets/bg-desktop-light.jpg");
  }

  .dark {
    background-image: url("../src/assets/bg-desktop-dark.jpg");
  }
}
</style>
