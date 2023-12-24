<script setup lang="ts">
function getIcon(name: string) {
    return `mdi:${name}`
}

let articles = [
    {
        title: "Navigating the Data Landscape",
        subtitle: "Discovering the Perfect Fit for Your Data Analyst Journey",
        excerpt: `Starting a career as a data analyst is an exhilarating voyage, brimming with endless opportunities and obstacles. A pivotal choice that awaits you is identifying the type of data analyst that resonates most with your distinct passions and goals.  In this exploration, we'll delve into the steps and considerations that can guide you toward discovering the perfect fit for your data analyst career.`,
        url: "https://www.linkedin.com/pulse/navigating-data-landscape-discovering-perfect-fit-ari-taurisia-gjo0c/?trackingId=CuzwixYWQ6GvZYtk2PtWrQ%3D%3D",
        from: "linkedin",
        date: "2022-10-06",
    },
    {
        title: "The power of data analysis for strategic decision-making",
        subtitle: "",
        excerpt: `Plunge into the vibrant world of data–driven decision making, in which each bit and byte narrates a tale of business prosperity. With plenty of information around, see how data analytics becomes a compass as it leads businesses through an ocean of opportunities`,
        url: "https://aritaurisia.medium.com/the-power-of-data-analysis-for-strategic-decision-making-44ce04d64d22",
        from: "medium",
        date: "2023-11-25",
    },
    {
        title: "What Should You Know about Data, ML, AI, and DeepLearning?",
        subtitle: "",
        excerpt: "Understanding Basics knowledge for beginners — So, What do you think? A huge amount of data from day today. What will do with this",
        url: "https://aritaurisia.medium.com/understanding-basics-knowledge-7f98ede81fe",
        from: "medium",
        date: "2020-08-13",
    },
    {
        title: "How I Solved The Challenge Lab: Insights from Data With BigQuery",
        subtitle: "",
        excerpt: "BigQuery is a data warehouse on Google Cloud you can use to store and analyze data. Imagine that you have a huge amount of data",
        url: "https://aritaurisia.medium.com/how-i-solved-the-challenge-lab-from-data-to-insights-with-bigquery-f4e2759bf056",
        from: "medium",
        date: "2021-07-24"
    }
]

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
    <UContainer class="py-12" data-aos="fade-left">
        <Typing
            :texts="['I Write in Medium', 'I write in LinkedIn', 'I write in Eudeka blog', 'I write in SMKDEV blog']"
            :delete-delay="1500" class="text-xl lg:text-3xl" />
        <!-- <hr class="mt-2"> -->
    </UContainer>
    <UContainer class="flex flex-col gap-6">
        <UCard v-for="article in articles" :key="article.title" data-aos="fade-up" data-aos-offset="10" clas="py-0">
            <template #header>
                <h2 class="text-2xl lg:text-4xl">{{ article.title }}</h2>
                <h3 class="text-lg lg:text-2xl text-gray-700 dark:text-gray-300">{{ article.subtitle }}</h3>
                <div class="flex items-center gap-1 mt-2"><Icon :name="getIcon(article.from)" size="25"/> - <span class="text-lg">{{ article.date }}</span></div>
            </template>
            <p>{{ article.excerpt }}</p>

            <template #footer>
                <UButton>
                    <ULink :to="article.url" target="_blank">
                        Read More
                    </ULink>
                </UButton>
            </template>
        </UCard>
    </UContainer>

    <!-- floating button -->
    <div class="fixed bottom-4 right-4 animate-bounce">
        <UButton @click="scrollToBottom">
            <Icon :name="iconFloat" size="50" />
        </UButton>
    </div>
</template>