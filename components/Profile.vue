<template>
    <UContainer class="flex flex-col gap-4 justify-center items-center">
        <div class="">
            <img src="/images/profile.jpeg" alt="racharta" width="200" height="200" class="rounded-xl">
        </div>
        <div class="text-center">
            <h1 class="text-3xl text-center font-bold">Socials</h1>
            <div class="mt-3 flex gap-2 items-start text-xs">
                <ULink to="https://www.linkedin.com/in/racharta/" class="flex gap-1 items-center">
                    <Icon name="mdi:linkedin" size="30"/>
                    
                </ULink>
                <ULink to="mailto:innodigitalindonesia@gmail" class="flex gap-1 items-center">
                    <Icon name="mdi:gmail" size="30"/>
                </ULink>
                <ULink to="https://www.youtube.com/@innodigital5496" class="flex gap-1 items-center">
                    <Icon name="mdi:youtube" size="30"/>
                </ULink>  
            </div>
        </div>
    </UContainer>
</template>