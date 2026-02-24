<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="ion-text-center">Messages</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div class="my-10">
        <div v-for="amigo in amigos" class="flex flex-col items-center mt-6 sm:mt-7 sm:items-start sm:ml-15">
          <Amigo 
            :name=amigo.name 
            :lastMessage=amigo.lastMessage 
            :img=amigo.img
            :noLeido=amigo.noLeido>
          </Amigo>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import Amigo from '@/components/Amigo.vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { ref } from 'vue';
import { dbamigos } from '@/components/datos';

let amigos = ref(dbamigos);

</script>

<style scoped>

</style>