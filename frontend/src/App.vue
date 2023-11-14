<!-- App.vue -->
<template>
  <div>
    <AddTodo @task-added="addTask" />
    <TodoList :tasks="tasks" @task-completed="completeTask" />
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import Task from "@/components/Task";
import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";

export default {
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    addTask(task) {
      this.tasks.push(task);
    },
    completeTask(task) {
      const i = this.tasks.indexOf(task);
      if (i !== -1) {
        this.tasks.splice(i, 1);
      }
    },
  },
  components: {
    AddTodo,
    TodoList,
  },
};
</script>

<style>

</style>