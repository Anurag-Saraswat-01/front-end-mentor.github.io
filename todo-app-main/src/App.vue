<template>
  <div class="container" :class="theme">
    <TodoHeader @on-toggle="onToggle" />
    <TodoMain
      :todos="getTodos()"
      @on-filter="onFilter"
      @toggle-todo="toggleTodo"
      @delete-todo="deleteTodo"
      @clear-todos="clearTodos"
      @add-todo="addTodo"
    />
    <TodoAttribution />
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoMain from "./components/TodoMain.vue";
import TodoAttribution from "./components/TodoAttribution.vue";
export default {
  name: "App",
  components: {
    TodoHeader,
    TodoMain,
    TodoAttribution,
  },
  data() {
    const theme = localStorage.getItem("todoTheme");
    const todos = localStorage.getItem("todoList");
    return {
      theme: theme || "light",
      todos: !todos || todos === "undefined" ? [] : JSON.parse(todos),
      filter: "all",
    };
  },
  methods: {
    onToggle() {
      if (this.theme == "dark") {
        this.theme = "light";
      } else {
        this.theme = "dark";
      }
    },
    onFilter(filter) {
      this.filter = filter;
    },
    getTodos() {
      if (this.filter == "all") {
        return this.todos;
      } else {
        return this.todos.filter((todo) => todo.status === this.filter);
      }
    },
    toggleTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) {
          if (todo.status === "active") {
            todo.status = "completed";
          } else {
            todo.status = "active";
          }
        }
      });
      localStorage.setItem("todoList", JSON.stringify(this.todos));
    },
    addTodo(text) {
      const newTodo = {
        id: Math.floor(Math.random() * 10e5),
        text: text,
        status: "active",
      };
      this.todos = [...this.todos, newTodo];
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    clearTodos() {
      this.todos = this.todos.filter((todo) => todo.status === "active");
    },
  },
  watch: {
    todos(newTodo) {
      localStorage.setItem("todoList", JSON.stringify(newTodo));
    },
    theme(newTheme) {
      localStorage.setItem("todoTheme", newTheme);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Josefin Sans", sans-serif;
}

:root {
  --primary-blue: hsl(220, 98%, 61%);
  --check-background: linear-gradient(
    to bottom right,
    hsl(192, 100%, 67%),
    hsl(280, 87%, 65%)
  );
}

.light {
  --todo-bg: hsl(0, 0%, 98%);
  --main-bg: hsl(236, 33%, 92%);
  --text-light: hsl(233, 11%, 84%);
  --text-light-hover: hsl(235, 19%, 35%);
  --text-dark: hsl(236, 9%, 61%);
  --text-very-dark: hsl(235, 19%, 35%);
  background-image: url("../src/assets/bg-mobile-light.jpg");
}

.dark {
  --main-bg: hsl(235, 21%, 11%);
  --todo-bg: hsl(235, 24%, 19%);
  --text-light: hsl(234, 39%, 85%);
  --text-light-hover: hsl(236, 33%, 92%);
  --text-dark: hsl(234, 11%, 52%);
  --text-very-dark: hsl(233, 14%, 35%);
  --text-very-dark-2: hsl(237, 14%, 26%);
  background-image: url("../src/assets/bg-mobile-dark.jpg");
}

.container {
  min-height: 100vh;
  background-repeat: no-repeat;
  background-color: var(--main-bg);
  background-size: contain;
  padding: 2.5rem 1.5rem;
  font-size: 12px;
}

@media only screen and (min-width: 768px) {
  .container {
    padding: 5rem 3rem;
  }
}

@media only screen and (min-width: 1280px) {
  .light {
    background-image: url("../src/assets/bg-desktop-light.jpg");
  }

  .dark {
    background-image: url("../src/assets/bg-desktop-dark.jpg");
  }

  .container {
    padding: 4rem calc(50% - 300px + 1rem);
    font-size: 14px;
  }
}
</style>
