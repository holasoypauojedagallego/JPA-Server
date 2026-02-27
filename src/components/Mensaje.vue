<template>
    <div class="flex w-fit max-w-[80%]">
        <div class="w-full p-1.5 px-3 bg-green-700 border border-black rounded-3xl">
            <p>{{ texto }}</p>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    texto: {
        type: String,
        required: true
    }
});
    

</script>