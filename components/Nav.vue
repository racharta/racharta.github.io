<script setup>
let showMenu = ref(true);

if (typeof window !== 'undefined') {
    let windowWidth = window.innerWidth;

    window.onresize = () => {
        windowWidth = window.innerWidth;
    }
    
    if (windowWidth < 768) {
        showMenu.value = false;
    }
}
</script>

<template>
    <UContainer class="h-16 flex flex-col md:flex-row justify-between items-start md:items-center py-2 z-50">
        <!-- title -->
        <div class="flex items-center justify-between w-full md:w-fit">
            <h1 class="text-3xl font-bold text-start w-1/3">Racharta</h1>
            <div class="md:hidden">
                <Icon name="fe:bar" size="40" class="md:hidden" @click="showMenu = !showMenu" v-if="!showMenu"/>
                <Icon name="material-symbols:close" size="40" class="md:hidden" @click="showMenu = !showMenu" v-if="showMenu"/>
            </div>
        </div>

            <ul :class="{ 'hidden': !showMenu }" class="bg-slate-800 md:bg-transparent rounded-lg flex flex-col md:flex-row gap-4 justify-end w-fit lg:w-[40%] mt-4 py-4 md:py-0 z-50 absolute md:static top-10 right-4">
                <li class="px-4 md:px-0">
                    <ULink to="/">Home</ULink>
                </li>
                <li class="px-4 md:px-0">
                    <ULink to="/writing">Writing</ULink>
                </li>
                <li class="px-4 md:px-0">
                    <ULink to="/speaking">Speaking</ULink>
                </li>
                <li class="px-4 md:px-0">
                    <ULink to="/projects">Projects</ULink>
                </li>
                <li class="px-4 md:px-0">
                    <ULink to="/publications">Publications</ULink>
                </li>
                <li class="px-4 md:px-0">
                    <ULink to="/contact">Contact</ULink>
                </li>
            </ul>


    </UContainer>
</template>