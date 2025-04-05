<script>
    export default {
        props: {
            status: {
                type:String,
                required: true
            },
            contentLength: {
                type: Number,
                required: true
            }
        }
    };
</script>
<template>

<template v-if="status === 'success'">
    <template v-if="contentLength">
      <slot></slot>
    </template>
    <template v-else>
        <slot name="empty">Empty_state</slot>
    </template>
</template>
<template v-else-if="status === 'loading'">
    <slot name="loading">Loading_state</slot>
</template>
<template v-else-if="status === 'error'">
    <slot name="loading">Error_state</slot>
</template>

</template>