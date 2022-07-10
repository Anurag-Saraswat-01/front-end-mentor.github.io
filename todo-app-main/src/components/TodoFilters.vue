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
      const applied = document.querySelector(".applied");
      applied.classList.remove("applied");
      const current = document.querySelector(`.todoFilter.${filter}`);
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
  font-size: 14px;
  font-weight: 700;
  color: var(--text-dark);
  border-radius: 0 0 0.25rem 0.25rem;
}

.todoFilter {
  cursor: pointer;
}

.todoFilter:hover,
.todoFilter:focus {
  color: var(--text-light);
}

.todoFilter.applied {
  color: var(--primary-blue);
}
</style>
