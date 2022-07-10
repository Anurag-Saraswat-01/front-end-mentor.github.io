<template>
  <div class="todoWrapper">
    <TodoInput />
    <TodoList
      :todos="todos"
      @toggle-todo="toggleTodo"
      @delete-todo="deleteTodo"
      @clear-todos="$emit('clear-todos')"
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
      this.$emit("deleteTodo", id);
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
</style>
