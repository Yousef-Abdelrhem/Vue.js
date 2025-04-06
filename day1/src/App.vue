<script>
import TaskForm from './components/TaskForm.vue';
import TaskList from './components/TaskList.vue';
import TaskState from './components/TaskState.vue';

  export default {
    components : 
    {
      TaskState,
      TaskForm,
      TaskList
    }
  }
</script>
<template>
  <TaskForm></TaskForm>
</template>