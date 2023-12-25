<script setup>
let speakers = [
  {
    title: "Tech Talk Webinar - Learn Kubernetes & Cloud Run",
    image: "/images/speakers/gdgc_learn Kubernetes & Cloud Run.png",
    description: `As one of the speakers to share her journey in learning IT at the Sharing Session at the Tech Talk Webinar - Learn Kubernetes & Cloud Run event organized by Google Developer Groups with other speakers Xin Ying Lim (GDG Brunei, Software Developer at Encore Sendirian Berhad) and Farhan Naufal Ghani - DevOps GITS Indonesia & Google Cloud certified Associate Cloud Engineer (ACE).
Youtube: https://www.youtube.com/watch?v=bVsF02PlbBU`,
    url: "https://gdg.community.dev/events/details/google-gdg-cloud-bandung-presents-tech-talk-webinar-learn-kubernetes-cloud-run/",
    year: 2020,
  },
  {
    title: "The Spirit of Youth from a Mother",
    image: "/images/speakers/semangat_anak_muda_dari_seorang_ibu.jpeg",
    description: "As one of the Speakers \"The Spirit of Youth from a Mother\" at the WTM Surabaya Celebrate ID Mother's Day event on Dec 22, 2021, 12:00 - 1:00 PM GMT+7 organized by WomenTech Maker and Google Developer Groups of Surabaya (GDG Surabaya) with another speaker Mrs. Heni Prasetyorini.",
    url: "https://gdg.community.dev/events/details/google-gdg-surabaya-presents-wtm-surabaya-celebrate-id-mothers-day/",
    year: 2021,
  },
  {
    title: "The Reason You Should Upgrade Skills In Google Cloud Technology",
    image: "/images/speakers/wtm_speakers.jpeg",
    description: "As a Speaker presenting the topic \"The Reason You Should Upgrade Skills In Google Cloud Technology\" at the Global Womentech Network event in 2021 organized by the WomenTech Network community",
    url: "https://www.womentech.net/speaker/Rachmawati%20Ari%20/Taurisia/57617",
    year: 2021,
  },
  {
    title: "Demo and Practice using Google Cloud Platform",
    image: "/images/speakers/intro_to_gcp.jpeg",
    description: "As a Speaker presented the topic \"Demo and Practice using Google Cloud Platform\" at the Studium Generale of the Kampus Merdeka x GITS Indonesia Batch 1 program event in 2021 organized by Eudeka.id",
    url: "",
    year: 2021,
  },
  {
    title: "",
    image: "/images/speakers/verzeo_gcp_2021.jpeg",
    description: "As the Speaker presented the topic \"Are you Ready to Upgrade Skills in Google Cloud Technology?\" at Verzeo's webinar on May 22, 2021 organized by Verzeo, India's EdTech Platform.",
    url: "",
    year: 2021,
  },
];
// As a Speaker presented the topic "Are you Ready to Upgrade Skills in Google Cloud Technology?" at the Studium Generale event on May 22, 2021 organized by Verzeo, India's EdTech Platform.
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
  <UContainer data-aos="fade-left" class="py-12">
    <Typing :texts="['My Speaking Journey']" :deleting-text="false" class="text-xl lg:text-3xl" />
  </UContainer>
  <UContainer>
    <!-- <UDivider label="2023" class="mt-6 text-lg lg:text-2xl" data-aos="fade-left"/> -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6 min-w-fit overflow-x-auto overflow-y-hidden">
      <UCard data-aos="fade-up" class="min-w-[300px] max-h-[550px] " v-for="speaker in speakers" :key="speaker.title">
        <template #header>
          <img :src="speaker.image" :alt="speaker.title" class="rounded-t-lg w-full h-[250px] object-cover">
          <h3 class="text-xl font-semibold mt-3 line-clamp-2">{{ speaker.title }}</h3>
        </template>
        <p class="text-sm line-clamp-3">{{ speaker.description }}</p>

          <UButton class="mt-3">
            <ULink :to="speaker.url" target="_blank">
              Read More
            </ULink>
          </UButton>
      </UCard>
    </div>
  </UContainer>

  <!-- floating button -->
    <div class="fixed bottom-4 right-4 animate-bounce">
        <UButton @click="scrollToBottom">
            <Icon :name="iconFloat" size="50" />
        </UButton>
    </div>
</template>