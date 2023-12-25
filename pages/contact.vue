<script setup>
const { database, ID } = useAppwrite()

let email = ref('');
let message = ref('');
const DATABASE_ID = '6589769b66e7050f6b32'
const COLLECTION_ID = 'messages'

const sendMessage = async () => {
    database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
        email: email.value, message: message.value
    }).then(() => {
        email.value = '';
        message.value = '';
        alert('Thank you for sending message, we will get back to you!')
    }).catch((error) => {
        console.log(error)
    });
}

</script>
<template>
    <UContainer class="py-12">
        <Typing :texts="['Contact Us']" :deleting-text="false" :typing-speed="50" class="text-3xl" />
        <UCard class="my-12">
            <UFormGroup label="Email">
                <UInput placeholder="Enter your email" v-model="email" />
            </UFormGroup>
            <UFormGroup label="Message" class="mt-2">
                <UTextarea placeholder="Enter your message" v-model="message"/>
            </UFormGroup>
            <UButton class="w-fit mt-2" @click="sendMessage">Send</UButton>
        </UCard>
    </UContainer>
</template>