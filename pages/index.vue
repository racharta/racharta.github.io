<script setup>
let email = ref('');

</script>
<template>
    <UContainer class="py-3 md:py-16 flex flex-wrap gap-6 items-center w-full lg:h-[75vh]">
        <Profile class="" data-aos="fade-right"/>
        <div class="w-full lg:w-2/3 flex flex-col items-center md:items-start gap-2 ">
            <Typing 
                :texts="['👋 Hi, I\'m Rachmawati Ari Taurisia.', 'I\'m A Curriculum Developer']"
                :typing-speed="70"
                :deleting-speed="10"
                class="text-xl lg:text-2xl min-w-60 lg:!text-start font-semibold"
                data-aos="fade-left"/>

                <p class="mt-2 w-[90%]" data-aos="fade-up">
                    Transform your learning journey in Data/AI/ML using Python and GCP with me! As a senior curriculum developer, 
                    I craft engaging curriculum, offer mentorship, and provide comprehensive training in Data/AI/ML using Python and GCP.
                </p>

                <div class="py-2 lg:py-12 animate-fade-in-left">
                    <UInput class="w-56" placeholder="Enter your email" v-model="email"/>
                    <UButton class="mt-2 text-xs text-center w-fit">subscribe</UButton>
                </div>
        </div>
    </UContainer>
</template>