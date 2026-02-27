<template>
  <!-- Import de Tailwind -->
  <!--
    This example requires updating your template:

    ```
    <html class="h-full">
    <body class="h-full">
    ```
  -->
  <main class="grid min-h-full place-items-center bg-[#222] px-6 py-24 sm:py-32 lg:px-8">
    <div class="text-center">
      <p class="text-3xl font-semibold text-indigo-400">404</p>
      <h1 class="mt-4 text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">Página no encontrada</h1>
      <p class="mt-6 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">Lo sentimos, no pudimos encontrar la página que estabas buscando.</p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <ion-button router-link="/" class="text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Volver a home</ion-button>
        <a @click="goToLogin" class="text-sm font-semibold text-white white">Iniciar Sesión <span aria-hidden="true">&rarr;</span></a>
      </div>
    </div>
  </main>
</template>

<script setup>
import { IonButton } from '@ionic/vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goToLogin = () => {
  router.push("/login")
}
</script>

<style scoped>
a {
  color: white;
}

ion-button {
  --padding-start: 1.5vw;
  --padding-end: 1.5vw;
}
</style>