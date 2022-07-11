<template>
  <div class="todoWrapper">
    <TodoInput @add-todo="addTodo" />
    <TodoList
      :todos="todos"
      @toggle-todo="toggleTodo"
      @delete-todo="deleteTodo"
      @clear-todos="$emit('clear-todos')"
      @on-filter="onFilter"
    />
    <TodoFilters @on-filter="onFilter" />
  </div>
</template>

<script>
import TodoInput from "./TodoInput.vue";
import TodoList from "./TodoList.vue";
import TodoFilters from "./TodoFilters.vue";

export default {
  name: "TodoMain",
  components: {
    TodoInput,
    TodoList,
    TodoFilters,
  },
  props: {
    todos: Array,
  },
  methods: {
    onFilter(filter) {
      this.$emit("on-filter", filter);
    },
    toggleTodo(id) {
      this.$emit("toggle-todo", id);
    },
    deleteTodo(id) {
      this.$emit("delete-todo", id);
    },
    addTodo(text) {
      this.$emit("add-todo", text);
    },
  },
};
</script>

<style scoped>
.todoWrapper {
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media only screen and (min-width: 1280px) {
  .todoWrapper {
    margin: 3rem 0 2rem;
    gap: 1.5rem;
  }
}
</style>
