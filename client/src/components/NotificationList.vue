<script setup lang="ts">
import { ref } from 'vue';

    const notifications = ref([
        {text: 'This is a notification', type: 'info'},
        {text: 'This is another notification', type: 'warning'},
        {text: 'This is a third notification', type: 'danger'},
        {text: 'This is a fourth notification', type: 'success'}

    ]);

    function removeNotification(index: number) {
        notifications.value.splice(index, 1);
    }

    
</script>

<template>
    <div>
        <div v-for="(message, index) in notifications" :key="index" class="notification is-light"
        :class="`is-${message.type}`">
            <button class="delete" @click="removeNotification(index)"></button>
            {{ message.text }}
        </div>
    </div>
</template>

<style scoped>

</style>