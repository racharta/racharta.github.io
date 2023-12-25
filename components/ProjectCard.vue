<script setup>
const props = defineProps(['project']);
const { name, description, skills, url } = props.project;
</script>
<template>
  <UCard>
    <template #header>
        <h1 class="text-2xl font-semibold">{{ name }}</h1>
    </template>
    <p>{{ description }}</p>
    <div class="flex gap-2 mt-2">
        <span v-for="skill in skills" :key="skill" class="text-xs px-2 py-1 bg-gray-700 rounded-full">{{ skill }}</span>
    </div>
    <UButton class="w-fit mt-2" :href="url" target="_blank">View Project</UButton>
  </UCard>
</template>