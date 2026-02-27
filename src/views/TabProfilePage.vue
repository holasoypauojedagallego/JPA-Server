<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="ion-text-center text-2xl uppercase font-semibold">PERFIL</ion-title>
    </ion-toolbar>
    </ion-header>
    <ion-content class="sm:ion-padding">
      <div class="flex flex-col items-center min-h-full max-w-7xl mx-auto px-4 sm:px-6 text-gray-300">
        
        <div class="sm:space-y-8">
          <section class="sm:text-center sm:mt-7 italic">
            <h2 class="text-sm sm:text-base font-bold text-white mb-1 uppercase tracking-wider">Usuario:</h2>
            <p class="text-xl sm:text-2xl font-light opacity-80">Daniel M.M</p>
          </section>

          <div class="grid grid-flow-row">
            <div class="flex flex-col sm:flex-row justify-between items-start">
              <section class="w-full sm:w-auto">
                <h2 class="text-sm sm:text-base font-bold text-white mb-1 uppercase tracking-wider">Número:</h2>
                <p class="text-xl sm:text-2xl font-light opacity-80 text-left">67</p>
              </section>

              <section class="w-full sm:w-auto grid gap-3.5">
                <h2 class="text-sm sm:text-base font-bold text-white uppercase tracking-wider sm:text-center">Podios</h2>
                <div class="flex items-end gap-2 sm:gap-3 h-20">
                  <div class="flex flex-col items-center">
                    <span class="text-xs font-bold text-white mb-1">27</span>
                    <div class="w-8 sm:w-10 h-14 bg-gray-400 rounded-t-md"></div>
                  </div>
                  <div class="flex flex-col items-center">
                    <span class="text-xs font-bold text-white mb-1">04</span>
                    <div class="w-8 sm:w-10 h-20 bg-yellow-500 rounded-t-md"></div>
                  </div>
                  <div class="flex flex-col items-center">
                    <span class="text-xs font-bold text-white mb-1">24</span>
                    <div class="w-8 sm:w-10 h-10 bg-amber-700 rounded-t-md"></div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <section>
            <h2 class="text-sm sm:text-base font-bold text-white mb-2 uppercase tracking-wider">Foto:</h2>
            <div class="w-20 h-20 sm:w-24 sm:h-24 overflow-hidden rounded-xl border-2 border-gray-700 shadow-lg">
              <Image imageClass="w-full h-full object-cover" src="/Daniel.png" alt="Avatar" preview></Image>
            </div>
          </section>
          
          <div class="md:flex gap-[15vw]">
            <section>
              <h2 class="text-sm sm:text-base font-bold text-white mb-1 uppercase tracking-wider">Nombre:</h2>
              <p class="text-base sm:text-lg font-light opacity-80">Daniel Martinez Montserrat</p>
            </section>

            <section>
              <h2 class="text-sm sm:text-base font-bold text-white uppercase tracking-wider">Contraseña:</h2>
              <div class="flex flex-col gap-1">
                <ion-text routerLink="/recover" class=" text-[#f2f2f2]/52 text-base sm:text-lg underline decoration-gray-500 hover:text-[#F2F2F2]/42 transition duration-200 cursor-pointer">
                  Recuperar contraseña...
                </ion-text>
                <span class="text-xs text-gray-500">(Se cerraría la sesión)</span>
              </div>
            </section>
          </div>
        </div>

        <div class="mt-auto lg:mt-15 pt-8 sm:pt-10 pb-4 flex justify-center">
          <ion-button routerLink="/login">Cerrar Sesión</ion-button>
        </div>

      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonText } from '@ionic/vue';
import Image from 'primevue/image';
</script>

<style scoped>
</style>