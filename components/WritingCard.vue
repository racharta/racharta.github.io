<script setup lang="ts">
const props = defineProps(['article']);
const { title, subtitle, excerpt, date, from, url } = props.article;
function getIcon(name: String) {
    return `mdi:${name}`
}
</script>
<template>
    <UCard data-aos="fade-up" data-aos-offset="10" clas="py-0">
            <template #header>
                <h2 class="text-2xl lg:text-4xl">{{ title }}</h2>
                <h3 class="text-lg lg:text-2xl text-gray-700 dark:text-gray-300">{{ subtitle }}</h3>
                <div class="flex items-center gap-1 mt-2"><Icon :name="getIcon(from)" size="25"/> - <span class="text-lg">{{ date }}</span></div>
            </template>
            <p>{{ excerpt }}</p>

            <template #footer>
                <UButton>
                    <ULink :to="url" target="_blank">
                        Read More
                    </ULink>
                </UButton>
            </template>
        </UCard>
</template>