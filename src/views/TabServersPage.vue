<template>
  <ion-page>
    <header class="flex justify-around items-center bg-[#1a1a1a] py-3 border-b border-[#333] z-10">
      <div class="flex flex-col items-center text-white border-b-2 border-[#c31d1d] pb-1">
        <ion-icon :icon="searchOutline" class="text-2xl mb-1"></ion-icon>
        <span class="text-[11px]">Servidores</span>
      </div>
      <div class="flex flex-col items-center text-[#888]">
        <ion-icon :icon="gridOutline" class="text-2xl mb-1"></ion-icon>
        <span class="text-[11px]">Crear Servidor</span>
      </div>
      <div class="flex flex-col items-center text-[#888]">
        <ion-icon :icon="chatbubbleOutline" class="text-2xl mb-1"></ion-icon>
        <span class="text-[11px]">Mensajes</span>
      </div>
      <div class="flex flex-col items-center text-[#888]">
        <ion-icon :icon="personOutline" class="text-2xl mb-1"></ion-icon>
        <span class="text-[11px]">Perfil</span>
      </div>
    </header>

    <ion-content :fullscreen="true" class="main-bg">
      <div class="flex flex-col items-center p-5">
        <h1 class="text-white text-3xl tracking-[2px] font-light my-4 italic">SERVIDORES</h1>

        <div class="flex items-center gap-4 w-full max-w-150 mb-6">
          <div class="flex-1 flex items-center bg-[#2d2d2d]/90 rounded-full px-5 py-2 border border-[#444]">
            <input 
              type="text" 
              placeholder="Escribir Mensaje..." 
              class="bg-transparent border-none text-[#ccc] italic w-full outline-none text-sm"
            />
            <ion-icon :icon="searchOutline" class="text-[#ccc] text-xl"></ion-icon>
          </div>
          <ion-icon 
            :icon="pricetagOutline" 
            class="text-[#5d6d7e] text-3xl cursor-pointer rotate-45 hover:text-white transition-colors"
            @click="showFilters = true"
          ></ion-icon>
        </div>

        <div class="flex flex-col gap-4 w-full max-w-175">
          <div v-for="server in servers" :key="server.id" class="bg-[#8b0000] rounded-[18px] p-4 flex justify-between items-center shadow-lg transition-transform active:scale-[0.98]">
            <div class="flex items-center gap-4">
              <img :src="server.image" class="w-14 h-14 rounded-full border-2 border-white/10" />
              <div class="flex flex-col">
                <h3 class="text-white text-lg font-bold leading-tight">{{ server.name }}</h3>
                <p class="text-white/80 text-sm italic">{{ server.track }}</p>
                <div class="flex items-center gap-3 mt-1">
                  <div class="flex items-end gap-0.75 h-3.75">
                    <div v-for="i in 4" :key="i" 
                         class="w-1 rounded-sm transition-colors" 
                         :class="[server.signal >= i ? 'bg-[#39ff14]' : 'bg-white/20', i === 1 ? 'h-[30%]' : i === 2 ? 'h-[50%]' : i === 3 ? 'h-[75%]' : 'h-full']">
                    </div>
                  </div>
                  <div class="flex">
                    <div v-for="i in 5" :key="i" 
                              class="text-[14px] mr-px" 
                              :class="i <= server.stars ? 'text-[#ffd700]' : 'text-black/30'"></div>
                  </div>
                  <span class="text-white text-xs font-semibold">{{ server.users }}</span>
                </div>
              </div>
            </div>
            <div class="cursor-pointer p-2" @click="toggleFavorite(server)">
              <ion-icon 
                :icon="server.isFavorite ? bookmark : bookmarkOutline" 
                class="text-2xl transition-all"
                :class="server.isFavorite ? 'text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]' : 'text-white/40'"
              ></ion-icon>
            </div>
          </div>
        </div>
      </div>

      <div v-if="showFilters" class="fixed inset-0 z-1000 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
        <div class="w-full max-w-[320px] rounded-3xl border border-[#c31d1d] bg-[#1c1c1c] p-6 flex flex-col shadow-2xl animate-in fade-in zoom-in duration-200">
          
          <h2 class="mb-3 text-center text-[13px] text-[#7a7a7a] uppercase tracking-wider">Número Máximo de Jugadores</h2>
          
          <div class="flex items-center gap-3 mb-6">
            <span class="text-xs text-[#555]">0</span>
            <div class="relative flex-1 flex items-center">
              <input 
                type="range" 
                min="0" 
                max="16" 
                v-model="maxPlayers"
                class="custom-slider" 
                :style="sliderStyle"
              >
            </div>
            <span class="text-xs text-[#555]">16</span>
          </div>

          <h2 class="mb-3 text-center text-[13px] text-[#7a7a7a] uppercase tracking-wider">Región (Scrollable)</h2>
          <div class="flex gap-2 overflow-x-auto pb-3 mb-4 scrollbar-hide">
            <div class="shrink-0 flex items-center gap-1 bg-[#e0e0e0] text-black px-3 py-1.5 rounded-lg text-xs font-bold shadow-md">
              EU <ion-icon :icon="checkbox"></ion-icon>
            </div>
            <div v-for="reg in ['NA', 'SA', 'AS']" :key="reg" 
                 class="shrink-0 flex items-center gap-1 bg-[#2a2a2a] text-[#888] px-3 py-1.5 rounded-lg text-xs border border-[#333]">
              {{ reg }} <ion-icon :icon="bookmarkOutline"></ion-icon>
            </div>
          </div>

          <div class="flex flex-col gap-4 my-2">
            <div class="flex justify-between items-center text-sm text-[#ccc]">
              <span>Solo Favoritos</span>
              <ion-icon :icon="bookmarkOutline" class="text-2xl text-[#333]"></ion-icon>
            </div>
            <div class="flex justify-between items-center text-sm text-[#ccc]">
              <span>Circuitos DLC</span>
              <ion-icon :icon="checkbox" class="text-2xl text-[#c31d1d]"></ion-icon>
            </div>
            <div class="flex justify-between items-center text-sm text-[#ccc]">
              <span>Con contraseña</span>
              <ion-icon :icon="bookmarkOutline" class="text-2xl text-[#333]"></ion-icon>
            </div>
            <div class="flex justify-between items-center text-sm text-[#ccc]">
              <span>Solo Amigos</span>
              <ion-icon :icon="bookmarkOutline" class="text-2xl text-[#333]"></ion-icon>
            </div>
            <div class="flex justify-between items-center font-bold text-white text-base pt-2 border-t border-white/5">
              <span>Competitivo</span>
              <ion-icon :icon="checkbox" class="text-2xl text-[#c31d1d]"></ion-icon>
            </div>
          </div>

          <button 
            @click="showFilters = false"
            class="mt-6 w-full bg-[#c31d1d] py-3 rounded-xl font-bold text-white shadow-[0_4px_0_#8b0000] active:translate-y-1 active:shadow-none transition-all uppercase tracking-widest text-sm"
          >
            GUARDAR
          </button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { IonPage, IonContent, IonIcon } from '@ionic/vue';
import { 
  searchOutline, gridOutline, chatbubbleOutline, personOutline, 
  pricetagOutline, star, bookmarkOutline, bookmark, checkbox 
} from 'ionicons/icons';

const showFilters = ref(false);

// Nueva variable para el slider
const maxPlayers = ref(16);

// Computed property para el fondo bicolor del slider
const sliderStyle = computed(() => {
  const percentage = (maxPlayers.value / 16) * 100;
  return {
    background: `linear-gradient(to right, #c31d1d ${percentage}%, #ffffff ${percentage}%)`
  };
});

const servers = ref([
  { id: 1, name: 'Jorge', track: 'Circuito de Nürburgring', signal: 4, stars: 5, users: '15/16', image: 'https://placehold.co/100/333/fff?text=J', isFavorite: true },
  { id: 2, name: 'Joe Biden', track: 'Circuito de Barcelona', signal: 3, stars: 4, users: '15/16', image: 'https://placehold.co/100/333/fff?text=B', isFavorite: false },
  { id: 3, name: 'Chafu carreras', track: 'Circuito de Spa-Francorchamps', signal: 4, stars: 5, users: '14/16', image: 'https://placehold.co/100/333/fff?text=C', isFavorite: false },
  { id: 4, name: 'Adrian Luque Diaz', track: 'Circuito de Suzuka', signal: 2, stars: 1, users: '12/16', image: 'https://placehold.co/100/333/fff?text=A', isFavorite: false },
  { id: 5, name: 'Venezuela Mejores Pilotos', track: 'Circuito de Barcelona', signal: 4, stars: 2, users: '7/16', image: 'https://placehold.co/100/333/fff?text=V', isFavorite: false },
  { id: 6, name: 'Brasil Sim Racing', track: 'Circuito de Spa-Francorchamps', signal: 4, stars: 3, users: '4/16', image: 'https://placehold.co/100/333/fff?text=B', isFavorite: false },
  { id: 7, name: 'Servidor de Assetto Corsa', track: 'Circuito de Nürburgring', signal: 3, stars: 0, users: '1/16', image: 'https://placehold.co/100/333/fff?text=S', isFavorite: false },
  { id: 8, name: '基督雷伊 基督雷伊', track: 'Circuito de Suzuka', signal: 1, stars: 0, users: '0/16', image: 'https://placehold.co/100/333/fff?text=K', isFavorite: false },
  { id: 9, name: '雷伊基督伊 ', track: 'Circuito de Nürburgring', signal: 2, stars: 0, users: '0/16', image: 'https://placehold.co/100/333/fff?text=R', isFavorite: false },
  { id: 10, name: '督基督伊伊基督伊督雷伊督雷伊', track: 'Circuito de Spa-Francorchamps', signal: 1, stars: 0, users: '0/16', image: 'https://placehold.co/100/333/fff?text=D', isFavorite: false },
]);

const toggleFavorite = (server: any) => {
  server.isFavorite = !server.isFavorite;
};
</script>

<style scoped>

/* Ocultar scrollbar en el contenedor de regiones */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* --- NUEVOS ESTILOS PARA EL SLIDER BICOLOR --- */
.custom-slider {
  -webkit-appearance: none;
  width: 100%;
  height: 4px; /* Grosor de la línea */
  border-radius: 999px;
  outline: none;
  cursor: pointer;
  /* Transición suave al arrastrar */
  transition: background 0.1s ease;
}

/* Estilo para el input range (el círculo blanco) en Webkit (Chrome/Safari) */
.custom-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(255,255,255,0.8);
  cursor: pointer;
}

/* Estilo para el input range en Firefox */
.custom-slider::-moz-range-thumb {
  width: 14px;
  height: 14px;
  background: white;
  border: none;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(255,255,255,0.8);
  cursor: pointer;
}
</style>