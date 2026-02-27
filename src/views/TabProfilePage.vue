<template>
  <ion-page>
    <ion-content class="ion-padding bg-[#121212] --background-none">
      <div class="flex flex-col min-h-full px-6 py-10 font-sans text-gray-300">
        
        <h1 class="text-4xl text-center font-light italic tracking-widest text-white mb-12 uppercase">
          Mi Perfil
        </h1>

        <div class="space-y-6">
          
          <section>
            <h2 class="text-lg font-bold text-white mb-1">Nombre:</h2>
            <p class="text-xl font-light opacity-80">Daniel M.M</p>
          </section>

          <div class="flex justify-between items-start">
            <section>
              <h2 class="text-lg font-bold text-white mb-1">Número:</h2>
              <p class="text-2xl font-light opacity-80 text-center sm:text-left">67</p>
            </section>

            <section class="flex flex-col items-center">
              <h2 class="text-lg font-bold text-white mb-2 italic">Podios</h2>
              <div class="flex items-end gap-1 h-20">
                <div class="flex flex-col items-center">
                  <span class="text-xs font-bold text-white mb-1">27</span>
                  <div class="w-10 h-14 bg-gray-400"></div>
                </div>
                <div class="flex flex-col items-center">
                  <span class="text-xs font-bold text-white mb-1">04</span>
                  <div class="w-10 h-20 bg-yellow-500"></div>
                </div>
                <div class="flex flex-col items-center">
                  <span class="text-xs font-bold text-white mb-1">24</span>
                  <div class="w-10 h-10 bg-amber-700"></div>
                </div>
              </div>
            </section>
          </div>

          <section>
            <h2 class="text-lg font-bold text-white mb-2">Foto:</h2>
            <div class="w-24 h-24 overflow-hidden rounded-md border-b-2 border-gray-600">
              <img 
                src="https://via.placeholder.com/150" 
                alt="Profile" 
                class="object-cover w-full h-full grayscale"
              />
            </div>
          </section>

          <section>
            <h2 class="text-lg font-bold text-white mb-1">Nombre Usuario:</h2>
            <p class="text-xl font-light opacity-80">Daniel Martinez Montserrat</p>
          </section>

          <section>
            <h2 class="text-lg font-bold text-white mb-1">Contraseña:</h2>
            <div class="flex flex-col">
              <a href="#" class="text-lg underline decoration-gray-500 text-gray-400">
                Recuperar contraseña...
              </a>
              <span class="text-xs text-gray-500">(Se cerraría Sesión)</span>
            </div>
          </section>
        </div>

        <div class="mt-auto pt-10 flex justify-center">
          <button class="bg-[#c21818] text-white px-10 py-3 rounded-xl text-lg font-medium shadow-lg active:scale-95 transition-transform">
            Cerrar Sesión
          </button>
        </div>

      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonContent } from '@ionic/vue';
</script>

<style scoped>
/* Para asegurar que el fondo de Ionic no interfiera con Tailwind */
ion-content {
  --background: #121212;
}

/* Tipografía similar a la de la imagen (puedes importar una similar como Montserrat o Rajdhani) */
h1 {
  font-family: 'Courier New', Courier, monospace; /* Placeholder de fuente estilizada */
}
</style>