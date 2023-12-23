<template>
    <UContainer class="py-12">
        <Typing :texts="['Contact Us']" :deleting-text="false" :typing-speed="50" class="text-3xl" />
        <UCard class="my-12">
            <UFormGroup label="Email">
                <UInput placeholder="Enter your email" />
            </UFormGroup>
            <UFormGroup label="Message" class="mt-2">
                <UTextarea placeholder="Enter your message"/>
            </UFormGroup>
            <UButton class="w-fit mt-2">Send</UButton>
        </UCard>
    </UContainer>
</template>