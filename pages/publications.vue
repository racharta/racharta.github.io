<script setup>
const publications = [
    {
        title: "Bagaimana seorang ibu asal Bandung melihat masa depan cloud computing terkait dengan dirinya",
        excerpt: "Menjelang peluncuran Google Cloud Platform di region Indonesia pada 24 Juni 2020, kami membuat empat profil masyarakat Indonesia yang telah berpartisipasi di pelatihan pembelajaran daring, JuaraGCP, yang diharapkan bisa meningkatkan karir dan ambisi mereka. Berikut adalah kisah mereka:",
        image: "/images/publications/cloud_next19_bdg.png",
        url: "https://indonesia.googleblog.com/2020/06/bagaimana-seorang-ibu-asal-bandung.html",
    },
    {
        title: "The Journey to Becoming a Coding Mom Notes",
        excerpt: "Berkomunitas bukan tentang meminta apa yang kita butuhkan. Sebaliknya seizin Allah kita akan bisa mendapatkan apa yang dibutuhkan jika kita tidak pelit berbagi, termasuk soal ilmu -- Noor Siti Hamilah",
        image: '/images/publications/my_book_with_coding_mom_community.jpeg',
        url: "",
    }
];

let iconFloat = "mdi:chevron-double-down";
function scrollToBottom() {
    if (typeof window === 'undefined') {
        return;
    }

    // Scroll to the bottom of the page
    window.scrollTo({
        top: window.scrollY + 500,
        behavior: 'smooth',
    });
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    console.log(window.scrollY, maxScroll, window.innerHeight, document.documentElement.scrollHeight);
}
</script>
<template>
    <UContainer class="py-12" data-aos="fade-up">
        <Typing :texts="['Publications']" :deleting-text="false" :typing-speed="50" class="text-3xl mt-2" />
    </UContainer>
    <UContainer class="flex flex-col gap-6">
        <PublicationCard v-for="publication in publications" :key="publication.title" :publication="publication" data-aos="fade-up"/>
    </UContainer>
    
    <!-- floating button -->
    <div class="fixed bottom-4 right-4 animate-bounce">
        <UButton @click="scrollToBottom">
            <Icon :name="iconFloat" size="50" />
        </UButton>
    </div>
</template>