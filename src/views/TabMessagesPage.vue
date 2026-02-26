<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="ion-text-center">Messages</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">

      <div class="flex h-full">
        <!-- 1 parte de la pagina, contactos -->

        <div class="sm:w-3/7 lg:w-2/7 w-full sm:border-r sm:border-gray-700 justify-items-center sm:overflow-y-auto">
          <div v-for="amigo in amigos" :key="amigo.id" class="flex flex-col items-center mt-6 sm:mt-7 sm:items-start sm:ml-15">
            <Amigo
              :name=amigo.name 
              :lastMessage=amigo.lastMessage 
              :img=amigo.img
              :noLeido=amigo.noLeido
              @click="seleccionarAmigo(amigo)">
            </Amigo>
          </div>
        </div>

        <!-- 2 parte de la pagina, ordenador (chat) -->
        <div class="hidden sm:w-2/3 lg:w-6/7 sm:flex flex-col">
          
          <div v-if="amigoSeleccionado" class="flex flex-col h-full">

            <div class="p-4 border-b border-gray-700 flex flex-row gap-5">
              <Image :src="amigoSeleccionado.img" imageClass="w-20 h-20 rounded-full ml-[3vw]" preview/>
              <h2 class="text-lg font-bold m-auto truncate">
                {{ amigoSeleccionado.name }}
              </h2>            
            </div>

            <div class="flex-1 p-4 overflow-y-auto">
              <div class="mb-2">
                {{ amigoSeleccionado.lastMessage }}
              </div>
            </div>

            <div class="p-4 rounded-xl border-t border-gray-700">
              <input 
                type="text"
                class="w-[85%] p-2.5 rounded-xl bg-gray-800 text-white"
                placeholder="Escribe un mensaje..."
              />
              <ion-icon aria-hidden="true" :icon="constructOutline" role="img" />
            </div>

          </div>

          <!-- Si no hay chat seleccionado -->
          <div v-else class="flex items-center justify-center h-full text-gray-500">
            Selecciona una conversación
          </div>

        </div>

      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import Amigo from '@/components/Amigo.vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon } from '@ionic/vue';
import { ref } from 'vue';
import { dbamigos } from '@/components/datos';
import Image from 'primevue/image';

let amigos = ref(dbamigos);

const amigoSeleccionado = ref();

const seleccionarAmigo = (amigo:any) => {
  amigoSeleccionado.value = amigo;
}

</script>

<style scoped>

</style>