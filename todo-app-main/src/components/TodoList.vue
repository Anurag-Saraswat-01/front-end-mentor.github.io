<template>
  <div class="todoList">
    <div v-if="todos.length === 0" class="todo todoText">No Todos</div>
    <div class="todo" v-for="todo in todos" :key="todo.id">
      <div
        class="checkIcon"
        :class="todo.status"
        @click="$emit('toggle-todo', todo.id)"
      >
        <div class="checkIconInner">
          <img
            v-show="todo.status == 'completed'"
            src="../assets/icon-check.svg"
            alt="Check Icon"
          />
        </div>
      </div>
      <div
        class="todoText"
        :class="todo.status"
        @click="$emit('toggle-todo', todo.id)"
      >
        {{ todo.text }}
      </div>
      <div class="crossIcon" @click="$emit('delete-todo', todo.id)">
        <img src="../assets/icon-cross.svg" alt="Cross Icon" />
      </div>
    </div>
    <div class="todoDashboard">
      <p>{{ activeCount() }} items left</p>
      <TodoFilters @on-filter="onFilter" />
      <p class="clear" @click="$emit('clear-todos')">Clear Completed</p>
    </div>
  </div>
</template>

<script>
import TodoFilters from "./TodoFilters.vue";

export default {
  name: "TodoList",
  props: {
    todos: Array,
  },
  components: {
    TodoFilters,
  },
  methods: {
    activeCount() {
      let count = 0;
      this.todos.forEach((todo) => {
        if (todo.status == "active") {
          count++;
        }
      });
      return count;
    },
    onFilter(filter) {
      this.$emit("on-filter", filter);
    },
  },
};
</script>

<style scoped>
.todoList {
  display: flex;
  flex-direction: column;
  border-radius: 0.25rem;
  background-color: inherit;
}

.dark .todoList {
  box-shadow: 0 8px 8px -4px black;
}

.light .todoList {
  box-shadow: 0 8px 8px -4px var(--text-light);
}

.dark .todo {
  border-bottom: 1px solid var(--text-very-dark);
}

.light .todo {
  border-bottom: 1px solid var(--main-bg);
}

.todo {
  background-color: var(--todo-bg);
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.25rem;
}

.todo.todoText {
  color: var(--text-dark);
  font-weight: 700;
}

.todo:first-child {
  border-radius: 0.25rem 0.25rem 0 0;
}

.todoText {
  flex-grow: 1;
  height: 100%;
  cursor: pointer;
}

.dark .todoText.active {
  color: var(--text-light);
  /* font-weight: 700; */
}

.dark .todoText.completed {
  color: var(--text-very-dark);
  text-decoration: line-through;
}

.light .todoText.active {
  color: var(--text-very-dark);
  /* font-weight: 700; */
}

.light .todoText.completed {
  color: var(--text-light);
  text-decoration: line-through;
}

.checkIcon {
  height: 1.25rem;
  width: 1.25rem;
  border-radius: 100%;
  cursor: pointer;
  padding: 1px;
  display: grid;
  place-items: center;
}

.dark .checkIcon {
  background: var(--text-very-dark);
}

.light .checkIcon {
  background: var(--text-light);
}

.checkIcon:hover,
.checkIcon:focus,
.checkIcon.completed {
  background: var(--check-background);
  border: none;
}

.checkIconInner {
  background: var(--todo-bg);
  width: 100%;
  height: 100%;
  border-radius: 100%;
  display: grid;
  place-items: center;
}

.checkIcon.completed .checkIconInner {
  background: inherit;
}

.crossIcon img {
  height: 0.75rem;
  width: 0.75rem;
  cursor: pointer;
}

.todoDashboard {
  background-color: var(--todo-bg);
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  border-radius: 0 0 0.25rem 0.25rem;
  font-size: 12px;
}

.todoDashboard:first-child {
  border-radius: 0.25rem;
}

.dark .todoDashboard {
  color: var(--text-very-dark);
}

.light .todoDashboard {
  color: var(--text-dark);
}

.todoDashboard .clear {
  cursor: pointer;
}

.dark .todoDashboard .clear:hover,
.dark .todoDashboard .clear:focus {
  color: var(--text-light);
}

.light .todoDashboard .clear:hover,
.light .todoDashboard .clear:focus {
  color: var(--text-light-hover);
}

@media only screen and (min-width: 1280px) {
  .todo {
    padding: 1.25rem 1.5rem;
  }

  .todoDashboard {
    padding: 1rem 1.5rem;
  }
}
</style>
