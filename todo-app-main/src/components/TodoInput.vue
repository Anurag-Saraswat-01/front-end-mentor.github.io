<template>
  <form class="inputWrapper" @submit="onSubmit">
    <div class="checkIcon" @click="onSubmit">
      <div class="checkIconInner"></div>
    </div>
    <label for="todo">
      <input
        id="todo"
        type="text"
        placeholder="Create a new todo..."
        v-model="value"
      />
    </label>
  </form>
</template>

<script>
export default {
  name: "TodoInput",
  data() {
    return {
      value: "",
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      if (this.value === "") {
        return;
      }
      this.$emit("add-todo", this.value);
      this.value = "";
    },
  },
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
  padding: 1px;
  border-radius: 100%;
  cursor: pointer;
}

.dark .checkIcon {
  background: var(--text-very-dark);
}

.light .checkIcon {
  background: var(--text-light);
}

.checkIcon:hover,
.checkIcon:focus {
  background: var(--check-background);
  border: none;
}

.checkIconInner {
  background-color: var(--todo-bg);
  width: 100%;
  height: 100%;
  border-radius: 100%;
}

label {
  flex-grow: 1;
}

input {
  background-color: inherit;
  border: none;
  font-weight: 700;
  color: var(--text-dark);
  width: 100%;
}

.light input:focus-visible,
.light input:active {
  color: var(--text-very-dark);
}

input:focus-visible,
input:active {
  border: none;
  outline: none;
}
</style>
