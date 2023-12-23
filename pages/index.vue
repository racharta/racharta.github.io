<script setup>
let email = ref('');

</script>
<template>
    <UContainer class="py-16 flex justify-between items-center w-full h-[80vh]">
        <Profile class="w-1/2" data-aos="fade-right"/>
        <div class="w-1/2 flex flex-col gap-2">
            <Typing :texts="['👋 Hi, I\'m Rachmawati Ari Taurisia.', 'I\'m A Curriculum Developer']"
                class="text-2xl"/>

                <p class="mt-2">Transform your learning journey in Data/AI/ML with me! As a senior curriculum developer, I craft engaging experiences, offer expert mentorship, and provide comprehensive training in Python and GCP.</p>

            <UFormGroup class=" mt-6">
                <UInput class="w-1/4" placeholder="Enter your email" v-model="email"/>
                <UButton class="mt-3 text-xs">subscribe newsletter</UButton>
            </UFormGroup>
        </div>
    </UContainer>
</template>