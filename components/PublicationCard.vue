<script setup>
const props = defineProps(['publication']);
const { publication } = props;
const { title, excerpt, image, url } = publication;
</script>
<template>
    <UCard>
        <template #header>
            <img :src="image" :alt="title" class="w-full max-h-80 object-cover rounded-t-md">
            <h1 class="text-2xl font-semibold mt-3">{{ title }}</h1>
        </template>
        <p>{{ excerpt }}</p>
            <UButton class="w-fit mt-3" :href="url" target="_blank">Read More</UButton>
        
    </UCard>
</template>