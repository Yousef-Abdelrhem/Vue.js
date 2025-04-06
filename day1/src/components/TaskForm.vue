<script>
export default {
  data() {
    return {
      task: [],
      taskInput: "",
    };
  },
  methods: {
    addTask() {
      console.log("wrong", this.taskInput);
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
      class="text-bold ml-2 rounded-2xl bg-black p-3 text-lg text-white"
      :disabled="!taskInput"
      @click="addTask"
    >
      Add Task
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
