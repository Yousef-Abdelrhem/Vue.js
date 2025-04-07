<script>
import TaskState from "./TaskState.vue";

export default {
  components: { TaskState },
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },

  mounted() {
    console.log("taskList", this.tasks);
  },
//   watch: {
//     handler(newTask) {
//       tasks: {
//         console.log("Task updated", newTasks);
//         deep: true;
//       }
//     },
//   },
  methods: {
    handelUpdatedTasks(tasks) {
      this.tasks = tasks;
    },
  },
};
</script>

<template>
  <div class="flex">
    <div class="m-2 w-[30%] rounded bg-blue-200 p-4">
      <h1 class="text-bold text-gray-700">Pending</h1>
      <div
        v-for="(task, index) in tasks"
        class="text-semibold mt-4 rounded border-1 p-3"
      >
        <TaskState
          v-if="task.status == 'pending'"
          @updatedTasks="handelUpdatedTasks"
          :tasks="this.tasks"
          :index="index"
        ></TaskState>
      </div>
    </div>

    <div class="m-2 w-[30%] rounded bg-yellow-200 p-4">
      <h1 class="text-bold text-gray-700">inProgress</h1>
      <div
        v-for="(task, index) in tasks"
        class="text-semibold mt-4 rounded border-1 p-3"
      >
        <TaskState
          v-if="task.status == 'inprogress'"
          @updatedTasks="handelUpdatedTasks"
          :tasks="this.tasks"
          :index="index"
        ></TaskState>
      </div>
    </div>

    <div class="m-2 w-[30%] rounded bg-green-200 p-4">
      <h1 class="text-bold bg-green-200 text-gray-700">Done</h1>
      <div
        v-for="(task, index) in tasks"
        class="text-semibold mt-4 rounded border-1 p-3"
      >
        <TaskState
          v-if="task.status == 'done'"
          @updatedTasks="handelUpdatedTasks"
          :tasks="this.tasks"
          :index="index"
        ></TaskState>
      </div>
    </div>
    
  </div>
</template>

//bg-yellow-200
