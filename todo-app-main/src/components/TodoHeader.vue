<template>
  <div class="header">
    <h1 class="title">TODO</h1>
    <div class="toggle" @click="$emit('on-toggle')"></div>
  </div>
</template>

<script>
export default {
  name: "TodoHeader",
};
</script>

<style scope>
.header {
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title {
  letter-spacing: 0.5rem;
  font-size: 32px;
  height: 32px;
}

.toggle {
  background-repeat: no-repeat;
  background-size: contain;
  width: 26px;
  height: 26px;
  cursor: pointer;
}

.light .toggle {
  background-image: url("../assets/icon-moon.svg");
}

.dark .toggle {
  background-image: url("../assets/icon-sun.svg");
}
</style>
