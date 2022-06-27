<template>
  <div class="display">{{ value }}</div>
</template>

<script>
export default {
  name: "CalcDisplay",
  props: {
    value: String,
  },
};
</script>

<style scoped>
.display {
  padding: 0.5rem;
  border: 2px solid black;
  text-align: right;
}
</style>
