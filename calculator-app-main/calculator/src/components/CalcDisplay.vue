<template>
  <div class="display">
    <p class="display-value">
      {{ value }}
    </p>
  </div>
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
  width: 100%;
  padding: 1rem 1.5rem;
  text-align: right;
  background-color: var(--screen-bg);
  border-radius: 0.5rem;
}

.display-value {
  font-weight: 700;
  margin: 0;
  font-size: 32px;
}
</style>
