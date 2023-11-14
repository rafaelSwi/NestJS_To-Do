<template>
    <div>
      <div v-for="task in tasks" :key="task.title" class="task">
        <div class="task-details">
          <strong>{{ task.title }}</strong>
          <p>{{ task.desc }}</p>
          <p class="priority">Prioridade: {{ pText(task.priority) }}</p>
        </div>
        <button @click="completeTask(task)" class="complete-button">Marcar como Concluído</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      tasks: Array,
    },
    methods: {
      completeTask(task) {
        this.$emit("task-completed", task);
      },
      pText(value) {
        switch (value) {
            case 1:
            return "Alta";
            case 2:
            return "Normal";
            case 3:
            return "Baixa";
            default:
            return "Não definido";
      }
    },
    },
  };
  </script>
  
  <style scoped>
  .task {
    max-width: 600px;
    margin: 0 auto;
    font-family: 'Segoe UI', Tahoma;
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 10px;
    background-color: #ecf0f1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .task-details strong {
    font-size: large;
    color: #2c3e50;
  }
  
  .task-details p {
    margin: 5px 0;
    color: #7f8c8d;
  }
  
  .complete-button {
    padding: 8px 15px;
    background-color: #29cf3f;
    color: #ffffff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
  
  .complete-button:hover {
    background-color: rgb(84, 213, 101);
  }
  </style>
  