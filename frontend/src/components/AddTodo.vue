<template>
  <div class="task-form">
    <div class="form-group">
      <label for="title">Título:</label>
      <textarea v-model="title" id="title" placeholder="Digite o título"></textarea>
    </div>
    <div class="form-group">
      <label for="desc">Descrição:</label>
      <textarea v-model="desc" id="desc" placeholder="Digite a descrição"></textarea>
    </div>
    <div class="form-group">
      <label for="priority">Prioridade:</label>
      <select v-model="priority" id="priority">
        <option value="1">Alta</option>
        <option value="2">Comum</option>
        <option value="3">Baixa</option>
      </select>
    </div>
    <button @click="addTask" class="add-button">Adicionar</button>
  </div>
</template>

<script>
import Task from "@/components/Task";
import axios from "axios";

export default {
  data() {
    return {
      title: '',
      desc: '',
      priority: '1',
    };
  },
  methods: {
    async addTask() {

      if (this.title == "") {
        return null
      }

      const titulo = this.title.slice(0, 30);
      const descricao = this.desc.slice(0, 50);
      const newTask = new Task(titulo, descricao, this.priority);

      try {

        await axios.post("http://127.0.0.1:3000/tasks", {
          title: newTask.title,
          description: newTask.desc,
          date: new Date(),
          priority: parseInt(newTask.priority),
        });

        this.$emit("task-added", newTask);

        this.title = '';
        this.desc = '';
        this.priority = '1';
        location.reload()
      } catch (error) {
        console.error("Error:", error);
      }
    },
  },
};
</script>

<style scoped>
.task-form {
  font-family: 'Segoe UI', Tahoma;
  max-width: 300px;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 20px;
  background-color: #ecf0f1;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
}

textarea,
select {
  width: 95%;
  padding: 8px;
  border: 1px solid #1987d0;
  border-radius: 5px;
  margin-top: 3px;
}

.add-button {
  padding: 10px 15px;
  background-color: #29cf3f;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.add-button:hover {
  background-color: rgb(84, 213, 101);
}
</style>
