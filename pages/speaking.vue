<script setup>
let speakers = [
  {
    title: "",
    image: "",
    description: "",
    url: "",
    year: 2023,
  },
  {
    title: "",
    image: "",
    description: "",
    url: "",
    year: 2023,
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
  <UContainer data-aos="fade-left" class="py-12">
    <Typing :texts="['I Have been Speakers since 2020']" :deleting-text="false" class="text-xl lg:text-3xl" />
  </UContainer>
  <UContainer>
    <UDivider label="2023" class="mt-6 text-lg lg:text-2xl" data-aos="fade-left"/>
    <div class="grid grid-cols-3 gap-x-6 py-6 min-w-fit overflow-x-auto">
      <UCard data-aos="fade-up" class="min-w-[300px]" v-for="speaker in speakers" :key="speaker.title">
        <template #header>
          <img :src="speaker.image" :alt="speaker.title" class="rounded-t-lg">
        </template>
        <p>{{ speaker.description }}</p>

        <template #footer>
          <UButton>
            <ULink :to="speaker.url" target="_blank">
              Read More
            </ULink>
          </UButton>
        </template>
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