<template>
  <div class="todoFilters">
    <div class="todoFilter all applied" @click="onClick('all')">All</div>
    <div class="todoFilter active" @click="onClick('active')">Active</div>
    <div class="todoFilter completed" @click="onClick('completed')">
      Completed
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoFilters",
  methods: {
    onClick(filter) {
      console.log(filter);
      const applied = document.querySelector(".applied");
      console.log(applied);
      applied.classList.remove("applied");
      const current = document.querySelector(`.todoFilter.${filter}`);
      console.log(current);
      current.classList.add("applied");
      this.$emit("on-filter", filter);
    },
  },
};
</script>

<style scoped>
.todoFilters {
  background-color: var(--todo-bg);
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.25rem;
  font-size: 12px;
  font-weight: 700;
  color: var(--text-dark);
  border-radius: 0.25rem;
}

.todoFilter {
  cursor: pointer;
}

.dark .todoFilter:hover,
.dark .todoFilter:focus {
  color: var(--text-light);
}

.light .todoFilter:hover,
.light .todoFilter:focus {
  color: var(--text-light-hover);
}

.todoFilter.applied {
  color: var(--primary-blue);
}

.todoFilters:nth-child(2) {
  display: none;
}

@media only screen and (min-width: 1280px) {
  .todoFilters:last-child {
    display: none;
  }

  .todoFilters:nth-child(2) {
    display: flex;
    padding: 0;
  }
}
</style>
