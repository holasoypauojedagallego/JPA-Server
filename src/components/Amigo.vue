<template>
    <div class="flex w-[90%] max-w-100 h-24 sm:h-26 bg-[#2F2F2F] rounded-2xl items-center px-3 active:scale-99 hover:scale-101 transition duration-150 cursor-pointer">
        <Image imageClass="w-15 h-15 rounded-full object-cover" :src="img" alt="Avatar" preview/>
        <div class="flex-row ml-5 gap-1 min-w-0">
            <p class="mb-1 truncate sm:text-lg text-white">{{name}}</p>
            <p class="mx-0.5 mt-1 text-white/60 sm:text-[16px] text-sm sm:text-base truncate">{{lastMessage}}</p>
        </div>
        <div v-if="noLeido > 0" class="self-end ml-auto mb-2 ">
            <ion-badge class="rounded-3xl">{{noLeido}}</ion-badge>
        </div>
    </div>
</template>

<script setup>
import { IonBadge } from '@ionic/vue';
import Image from 'primevue/image';

    defineProps({
        name: String,
        lastMessage: String,
        img: String,
        noLeido: Number
    });
</script>