<template>
  <div class="todoList">
    <div class="todo" v-for="todo in todos" :key="todo.id">
      <div
        class="checkIcon"
        :class="todo.status"
        @click="$emit('toggle-todo', todo.id)"
      >
        <img
          v-show="todo.status == 'completed'"
          src="../assets/icon-check.svg"
          alt="Check Icon"
        />
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
      <p class="clear" @click="$emit('clear-todos')">Clear Completed</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    todos: Array,
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
  },
};
</script>

<style scoped>
.todoList {
  display: flex;
  flex-direction: column;
  gap: 1px;
  border-radius: 0.25rem;
  background-color: var(--text-very-dark);
}
.todo {
  background-color: var(--todo-bg);
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.25rem;
}

.todo:first-child {
  border-radius: 0.25rem 0.25rem 0 0;
}

.todoText {
  flex-grow: 1;
  font-size: 12px;
  height: 100%;
  cursor: pointer;
}

.todoText.active {
  color: var(--text-light);
  /* font-weight: 700; */
}

.todoText.completed {
  color: var(--text-very-dark);
  text-decoration: line-through;
}

.checkIcon {
  height: 1.25rem;
  width: 1.25rem;
  border: 1px solid var(--text-very-dark);
  border-radius: 100%;
  display: grid;
  place-items: center;
  cursor: pointer;
}

.checkIcon.completed {
  background: var(--check-background);
  border: none;
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
  font-size: 12px;
  color: var(--text-very-dark);
  border-radius: 0 0 0.25rem 0.25rem;
}

.todoDashboard .clear {
  cursor: pointer;
}

.todoDashboard .clear:hover,
.todoDashboard .clear:focus {
  color: var(--text-light);
}
</style>
