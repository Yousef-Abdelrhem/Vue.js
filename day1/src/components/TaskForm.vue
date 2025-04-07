<script>
import TaskList from './TaskList.vue'
export default {
  components: {TaskList},
  data() {
    return {
      tasks: [],
      taskInput: "",
    };
  },
  methods: {
    addTask() {
        this.tasks.push({ task : this.taskInput, status :'pending'});
        console.log(this.tasks);
    },
  },
};
</script>

<template>
  <div class="m-3 bg-blue-300 p-12">
    <input
      type="text"
      class="m-3 w-full rounded border-none bg-white p-3"
      v-model="taskInput"
    />
    <button
      class="text-bold ml-2 rounded-2xl bg-black p-3 text-lg text-white disabled:opacity-70"
      :disabled="!taskInput"
      @click="addTask"
    >
      Add Task
    </button>
  </div>
  <TaskList :tasks="tasks" />
</template>

<style lang="scss" scoped></style>
