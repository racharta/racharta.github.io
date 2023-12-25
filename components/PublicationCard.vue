<script setup>
const props = defineProps(['publication']);
const { publication } = props;
const { title, excerpt, image, url } = publication;
</script>
<template>
    <UCard>
        <template #header>
            <img :src="image" :alt="title" class="w-full max-h-80 object-cover">
            <h1 class="text-2xl font-semibold">{{ title }}</h1>
        </template>
        <p>{{ excerpt }}</p>
        <template #footer>
            <UButton class="w-fit" :href="url" target="_blank">Read More</UButton>
        </template>
    </UCard>
</template>