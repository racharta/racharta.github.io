<script setup>
let nav = ref(null);
let hamburger = ref(null);

const toggleMenu = () => {
    nav.value.classList.toggle('nav-active');
    hamburger.value.classList.toggle('hamburger-active');
}

const route = useRoute();
watch(
    () => route.fullPath, 
    () => {
        nav.value.classList.remove('nav-active');
        hamburger.value.classList.remove('hamburger-active');
        console.log('route changed');
});
</script>
<template>
    <UContainer class="py-6 flex justify-between items-center">
        <div class="flex justify-between w-full md:w-fit">
            <h1 class="text-3xl font-semibold">Racharta</h1>
            <button class="md:hidden" @click="toggleMenu()" ref="hamburger">
                <span class="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                <span class="hamburger-line transition duration-300 ease-in-out"></span>
                <span class="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
            </button>
        </div>
        <ul class="nav" ref="nav">
            <li class="nav-item">
                <ULink to="/">Home</ULink>
            </li>
            <li class="nav-item">
                <ULink to="/speaking">Speaking</ULink>
            </li>
            <li class="nav-item">
                <ULink to="/writing">Writing</ULink>
            </li>
            <li class="nav-item">
                <ULink to="/projects">Projects</ULink>
            </li>
            <li class="nav-item">
                <ULink to="/publications">Publications</ULink>
            </li>
            <li class="nav-item">
                <ULink to="/contact">Contact</ULink>
            </li>
        </ul>
    </UContainer>
</template>

<style scoped>
.nav {
    @apply bg-slate-700 md:bg-transparent opacity-0 md:opacity-100 md:flex gap-3 absolute md:static top-16 right-6 rounded-lg transition-opacity z-50;
}

.nav-item {
    @apply text-sm hover:text-blue-300 py-2 px-4;
}

.nav-active {
    @apply !opacity-100;
}

.hamburger-line {
    @apply block w-[30px] h-[2px] my-2 bg-white;
}

.hamburger-active>span:nth-child(1) {
    @apply rotate-45;
}

.hamburger-active>span:nth-child(2) {
    @apply scale-0;
}

.hamburger-active>span:nth-child(3) {
    @apply -rotate-45;
}
</style>