<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="ion-text-center">Messages12</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div class="mt-33">
        <div v-for="amigo in amigos" class="flex flex-col items-center mt-7 sm:items-start sm:ml-15">
          <Amigo 
            :name=amigo.name 
            :lastMessage=amigo.lastMessage 
            :img=amigo.img>
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

let amigos = ref([
  {id: 1, name: 'Adrian Luque Diaz', lastMessage: 'Crema de dientes', img: '/aluque.png'},
  {id: 2, name: 'Jose Gitanillo', lastMessage: 'Alcachofas', img: '/jjimenez.png'},
  {id: 3, name: 'Justin Gaylvaréz', lastMessage: 'Mena', img: '/jalvarez.png'}
  ]);
</script>

<style scoped>

</style>