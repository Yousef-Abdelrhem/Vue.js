<script>
export default{
        data(){
            return {
                inProgressIndex: undefined
            }
        },
        props:
        {
            tasks:{
                type: Array,
                required: true
            },
            index: {
                type: Number,
                required: true
            }
        },

    methods : {
        updateInprogressTask()
        {
            if(this.inProgressIndex === this.index){
                this.tasks[this.index].status = 'done';
            }else {
                if(this.inProgressIndex) this.tasks[this.inProgressIndex].status = 'pending';
                this.tasks[this.index].status = 'inprogress';
                this.inProgressIndex = this.index;
            }
            this.$emit('updatedTasks', this.tasks);
        }
    }
}
</script>

<template>

    <button 
        @click="updateInprogressTask" 
        class="cursor-pointer hover:bg-opacity-50"
    >
        {{ tasks[index].task }}
    </button>

</template>
<style lang="scss" scoped></style>
