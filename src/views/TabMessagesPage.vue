<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="ion-text-center text-2xl uppercase font-semibold">Mensajes</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">

      <div class="flex h-full">

        <div v-if="!amigoSeleccionado || windowWidth >= 640" class="sm:w-3/7 lg:w-2/7 w-full sm:border-r sm:border-gray-700 justify-items-center sm:overflow-y-auto overflow-x-hidden">

          <div v-for="amigo in amigos" :key="amigo.id" class="w-full flex flex-col items-center my-6 sm:ml-2 sm:mr-1">

            <Amigo
              :name="amigo.name"
              :lastMessage="amigo.lastMessage"
              :img="amigo.img"
              :noLeido="amigo.noLeido"
              @click="seleccionarAmigo(amigo)"
              class="w-[90%]">
            </Amigo>

          </div>
        </div>


        <div v-if="amigoSeleccionado" class="w-full sm:w-2/3 lg:w-6/7 flex flex-col">

          <div class="flex flex-col h-full">

            <div class="p-4 border-b border-gray-700 flex flex-row gap-5 items-center">

              <button class="sm:hidden text-white text-xl" @click="amigoSeleccionado = null">
                <ion-icon :icon="arrowBackOutline"></ion-icon>
              </button>

              <Image :src="amigoSeleccionado.img"  imageClass="w-14 h-14 rounded-full" preview/>

              <h2 class="text-lg font-bold truncate">
                {{ amigoSeleccionado.name }}
              </h2>
            </div>

            <div class="flex-1 p-4 overflow-y-auto">
              <div class="mb-2 flex justify-start flex-col gap-4">
                <MensajeRival texto="Hola, a esto se le conoce como un mensaje de prueba, para ver el correcto funcionamiento del componente, y que el docente pueda ver que funciona correctamente, y abajo hay un mensaje que cambia dependiendo de la persona, de hecho si escribe y pulsa el boton de enviar, se enviara texto, lo cual es una función chula a mi parecer"></MensajeRival>
                <div v-for="i in 7">
                  <MensajeRival texto="Mensaje de prueba porque el docente lo necesita"></MensajeRival>
                </div>
                <MensajeRival texto="Ahora, el mensaje concreto de cada usuario:"/>
                <MensajeRival :texto="amigoSeleccionado.lastMessage"></MensajeRival>
              </div>

              <div v-for="mensajito in mensajes" class="flex justify-end mb-4">
                <Mensaje :texto="mensajito"></Mensaje>
              </div>
            </div>

            <div class="p-4 border-t border-gray-700 flex items-center gap-3">
              <input 
                type="text"
                class="flex-1 p-2.5 rounded-xl bg-gray-800 text-white"
                placeholder="Escribe un mensaje..."
                v-model="mensaje"
              />
              <button @click="mensajeVolver">
                <ion-icon :icon="send" class="w-6 h-6" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import Amigo from '@/components/Amigo.vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon } from '@ionic/vue';
import { arrowBackOutline } from 'ionicons/icons';
import { ref } from 'vue';
import { dbamigos } from '@/components/datos';
import Image from 'primevue/image';
import { send } from 'ionicons/icons';
import Mensaje from '@/components/Mensaje.vue';
import MensajeRival from '@/components/MensajeRival.vue';

let amigos = ref(dbamigos);

const amigoSeleccionado = ref();

const seleccionarAmigo = (amigo:any) => {
  amigoSeleccionado.value = amigo;
}

const mensaje = ref();

let mensajes: string[] = [];

const mensajeVolver = () => {
  if (mensaje.value != "" ){
    mensajes.push(mensaje.value);
    mensaje.value = "";
  }
}

import { onMounted, onUnmounted } from 'vue';

const windowWidth = ref(window.innerWidth);

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

</script>
