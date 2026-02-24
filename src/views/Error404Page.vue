<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full">
    <body class="h-full">
    ```
  -->
  <main class="grid min-h-full place-items-center bg-[#333] px-6 py-24 sm:py-32 lg:px-8">
    <div class="text-center">
      <p class="text-base font-semibold text-danger">404</p>
      <h1 class="mt-4 text-5xl font-bold tracking-tight text-balance text-gray-300 sm:text-7xl">Página no encontrada</h1>
      <p class="mt-6 text-lg font-medium text-pretty text-gray-200 sm:text-xl/8">Lo siento, no encontramos la página que buscaba.</p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <ion-button router-link="/home" class="rounded-md warning text-sm font-semibold ">Volver a la lista de Servidores</ion-button>
        <ion-button router-link="/login" class="text-sm font-semibold">Volver a Iniciar Sesión <span aria-hidden="true">&rarr;</span></ion-button>
      </div>
    </div>
  </main>
</template>

<script setup>
import { IonButton } from '@ionic/vue';
</script>