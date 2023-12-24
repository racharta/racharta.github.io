<template>
    <NavBar />
    <slot />
    <Footer />
</template>

<script setup>
useHead({
    title: 'Rachmawati Ari Taurisia',
    meta: [
        { name: 'description', content: 'Racharta Personal Website' },
        { name: 'keywords', content: 'Racharta, Ari, Taurisia, Personal, Portfolio' },
    ],
    htmlAttrs: {
        lang: 'en',
        class: 'h-full dark',
    }
})
</script>