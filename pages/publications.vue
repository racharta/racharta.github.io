<script setup>
const publications = [
    {
        title: "Bagaimana seorang ibu asal Bandung melihat masa depan cloud computing terkait dengan dirinya",
        excerpt: "Menjelang peluncuran Google Cloud Platform di region Indonesia pada 24 Juni 2020, kami membuat empat profil masyarakat Indonesia yang telah berpartisipasi di pelatihan pembelajaran daring, JuaraGCP, yang diharapkan bisa meningkatkan karir dan ambisi mereka. Berikut adalah kisah mereka:",
        image: "/images/publications/cloud_next19_bdg.png",
        url: "https://indonesia.googleblog.com/2020/06/bagaimana-seorang-ibu-asal-bandung.html",
    }
]
</script>
<template>
    <UContainer class="py-12" data-aos="fade-up">
        <Typing :texts="['My Publications']" :deleting-text="false" :typing-speed="50" class="text-3xl mt-2" />
    </UContainer>
    <UContainer>
        <PublicationCard v-for="publication in publications" :key="publication.title" :publication="publication" data-aos="fade-up"/>
    </UContainer>
</template>