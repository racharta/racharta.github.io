<script setup>
useHead({
    title: 'Rachmawati Ari Taurisia',
    meta: [
        { name: 'description', content: `Rachmawati Ari Taurisia - Hi I\'m Senior Curriculum at Eudeka ID. Transform your learning journey in Data/AI/ML using Python and GCP with me! As a senior curriculum developer, 
                    I craft engaging curriculum, offer mentorship, and provide comprehensive training in Data/AI/ML using Python and GCP.` },
        { name: 'keywords', content: 'Rachmawati, Ari, Taurisia, Racharta Personal, Portfolio' },
        { property: 'og:title', content: 'Rachmawati Ari Taurisia - Personal Website' },
        { property: 'og:image', content: '/images/profile.jpeg' },
        { property: 'og:image:alt', content: 'Rachmawati Personal Website' },
        { property: 'og:description', content: `Transform your learning journey in Data/AI/ML using Python and GCP with me! As a senior curriculum developer, 
                    I craft engaging curriculum, offer mentorship, and provide comprehensive training in Data/AI/ML using Python and GCP.` },
        { name: 'twitter:title', content: 'Rachmawati Personal Website' },
        { name: 'twitter:image', content: '/images/profile.jpeg' },
    ],
    htmlAttrs: {
        lang: 'en',
        class: 'h-screen dark',
    },
    link: [
        {rel: 'icon', type: 'image/x-icon', href: '/images/profile.jpeg'},
    ]
})
</script>
<template>
    <NavBar />
    <slot />
    <Footer />
</template>