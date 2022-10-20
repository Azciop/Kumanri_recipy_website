<template>

  <body>
    <header>
      <nav>
        <div class="nav-content">
          <a href="./"><img class="header-logo" src="../assets/logo-website.png" alt="logo du site" /></a>

          <div>
            <a href="./">Acceuil</a>
          </div>
        </div>
      </nav>
    </header>
    <main class="app">
      <section class="create-todo">
        <h3>Créer une liste</h3>
        <form class="create-form" @submit.prevent="addTodo">
          <h3>Que comptez vous achetez ?</h3>
          <input class="input-content input-todo" type="text" placeholder="pommes, poulet, saumon, ..."
            v-model="input_content" />
          <input class="add-btn btn" type="submit" value="Ajouter" />
        </form>
      </section>
      <section class="todo-list">
        <h3>Shopping list</h3>
        <div class="list">
          <div v-for="todo in todos" :key="todo" :class="`todo-item ${todo.done && 'done'}`">
            <div class="todo-content">
              <input class="input-todo" type="text" v-model="todo.content" />
              <button class="delete-btn btn" @click="removeToDo(todo)">
                <font-awesome-icon icon="fa-solid fa-xmark" />
              </button>
            </div>
          </div>
          <button class="btn delete-all-btn" @click="deleteToDo()">Supprimer</button>
        </div>
      </section>
    </main>
  </body>
</template>

<script>
export default {
  methods: {
    deleteToDo() {
      localStorage.removeItem('todos')
      this.todos = []
    }
  }
}
</script>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';

const todos = ref([]);
const name = ref('');

const input_content = ref('');

const todo_asc = computed(() => todos.value.sort((a, b) => {
  return b.createdAt - a.createdAt
}));

const addTodo = () => {
  if (input_content.value.trim() === '') {
    return
  }

  todos.value.push({
    content: input_content.value,
    done: false,
    createdAt: new Date().getTime()
  })

  input_content.value = ''
}

const removeToDo = todo => {
  todos.value = todos.value.filter(t => t !== todo)
}

watch(todos, newVal => {
  localStorage.setItem('todos', JSON.stringify(newVal))
},
  { deep: true });

watch(name, (newVal) => {
  localStorage.setItem('name', newVal)
});

onMounted(() => {
  name.value = localStorage.getItem('name') || ''
  todos.value = JSON.parse(localStorage.getItem('todos')) || []
});
</script>

<style scoped>
main {
  margin: 20px auto;
  padding: 0;
  max-width: 450px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 4rem;
  -webkit-box-shadow: 0px 0px 15px 0px #000000;
  box-shadow: 0px 0px 15px 0px #000000;
}

.app h3 {
  color: #000000;
  padding: 10px 0;
  font-size: 25px;
}

.input-content {
  text-overflow: ellipsis;
}

.todo-content {
  padding-bottom: 10px;
}

.input-todo {
  height: 35px;
  border: 2px #4b8f29 solid;
  border-right: none;
  border-radius: 16px 0 0 16px;
  padding: 0 20px;
}

.btn {
  box-shadow: inset 0px 0px 0px 0px #3e7327;
  background: linear-gradient(to bottom, #77b55a 5%, #72b352 100%);
  background-color: #77b55a;
  border-radius: 0 16px 16px 0;
  border: 2px solid #4b8f29;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 13px;
  font-weight: bold;
  padding: 8px 20px;
  text-decoration: none;
}

.btn:hover {
  background: linear-gradient(to bottom, #72b352 5%, #77b55a 100%);
  background-color: #72b352;
}

.delete-all-btn {
  border-radius: 16px;
  margin-bottom: 10px;
}

@media all and (max-width: 450px) {
  main {
    border-radius: 0;
    margin: 0;
  }
}
</style>