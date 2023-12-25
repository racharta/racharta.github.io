<script setup>
let projects = [
    {
        name: 'Simply Chatty Bot',
        description: `Simple Project to learn Python at Jetbrain Academy Create a simple Chatty Bot with Python`,
        skills: ['Python', 'Chatbot'],
        url: ''
    },
    {
        name: 'Digital interactive Ebook for students',
        description: `The Google Cloud Foundations

Video Hands-on Google Cloud relates to Google Cloud Foundations
FlashCards Google Cloud Foundations: Fundamentals.
Quiz Google Cloud Foundations: Infrastructure`,
        skills: ['Teaching', 'Google Cloud', 'Google Cloud Foundation'],
        url: 'https://read.bookcreator.com/ewLsBVwRKCTQMo31CDcRGmBlyqF3/XhizjRHbTWqD8LlpkqCtXg/b0Eaz3DNR8KZqilQBkIGqQ',
    },
    {
        name: 'Image Prediction Classification',
        description: `Project Assignment to submission machine learning for beginner class at dicoding

The dataset must be divided into train sets and validation sets. 
The size of the validation set must be 40% of the total dataset (the training data has 1314 samples, and the validation data is 874 samples). 
Must implement image augmentation. 
Using image data generator. The model must use a sequential model. 
Model training does not exceed 30 minutes. 
The program is working on Google Colaboratory. 
The accuracy of the model is at least 85%.
Only the recruiters, event organizers and training and education of institutions/organizations/corporate companies can request to see this project`,
        skills: ['Python', 'Machine Learning', 'Tensorflow', 'Numpy'],
    },
    {
        name: 'Library Information System Management',
        description: `Design and Implementation Library Information System Management at PusInfohlahta (Pusat Informasi Pengolahan Data), Indonesian Army Embassy, Jakarta, Indonesia.
Create database
Programming Language : MS-Visual Foxpro 5.0`,
        skills: ['MYSQL', 'Visual Foxpro 5.0'],
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
        <Typing :texts="['My Projects']" :deleting-text="false" :typing-speed="50" class="text-3xl mt-2" />
    </UContainer>
    <UContainer class="flex flex-col gap-6">
        <ProjectCard v-for="project in projects" :key="project.name" :project="project" data-aos="fade-up"/>
    </UContainer>
    <!-- floating button -->
    <div class="fixed bottom-4 right-4 animate-bounce">
        <UButton @click="scrollToBottom">
            <Icon :name="iconFloat" size="50" />
        </UButton>
    </div>
</template>