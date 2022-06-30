<template>
  <button @click="$emit('btn-click')" type="button" class="btn" :class="type">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "KeypadBtn",
  props: {
    type: String,
    text: String,
  },
};
</script>

<style>
.btn {
  padding: 0.5rem;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  font-size: 18px;
}

.operator {
  background-color: var(--key-bg);
  box-shadow: 0px 0.25rem var(--key-shadow);
  color: var(--text-secondary);
  font-size: 32px;
}

.delete,
.reset {
  background-color: var(--key-bg-utility);
  color: white;
  box-shadow: 0px 0.25rem var(--key-shadow-utility);
  padding: 1rem 0.5rem;
}

.reset {
  grid-column: 1/3;
}

.equal {
  padding: 1rem 0.5rem;
  background-color: var(--key-bg-equal);
  color: var(--text-tertiary);
  box-shadow: 0px 0.25rem var(--key-shadow-equal);
  grid-column: 3/5;
}
</style>
