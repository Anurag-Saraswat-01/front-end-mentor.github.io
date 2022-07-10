<template>
  <div class="inputWrapper">
    <div class="checkIcon"></div>
    <input type="text" placeholder="Create a new todo..." />
  </div>
</template>

<script>
export default {
  name: "TodoInput",
};
</script>

<style scoped>
.inputWrapper {
  background-color: var(--todo-bg);
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.25rem;
  border-radius: 0.25rem;
}

.checkIcon {
  height: 1.25rem;
  width: 1.25rem;
  border: 1px solid var(--text-very-dark);
  border-radius: 100%;
}

input {
  flex-grow: 1;
  background-color: inherit;
  border: none;
  color: var(--text-dark);
  font-weight: 700;
}

input:focus-visible,
input:active {
  border: none;
  outline: none;
}
</style>
