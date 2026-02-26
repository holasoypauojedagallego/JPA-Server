<template>
  <ion-page>
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
                  <div class="flex items-center">
                    <ion-icon 
                    v-for="i in 5" 
                    :key="i" 
                    :icon="star" 
                    @click.stop="server.stars = i"
                    class="text-[16px] mr-px cursor-pointer transition-all duration-200" 
                    :class="i <= server.stars ? 'text-[#ffd700] drop-shadow-[0_0_3px_rgba(255,215,0,0.5)]' : 'text-black/30 hover:text-[#ffd700]/50'"
                  ></ion-icon>
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

      <div v-if="showFilters" class="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
        <div class="w-full max-w-[320px] rounded-3xl border border-[#c31d1d] bg-[#1c1c1c] p-6 flex flex-col shadow-2xl animate-in fade-in zoom-in duration-200">
          
          <h2 class="mb-3 text-center text-[13px] text-[#7a7a7a] uppercase tracking-wider font-bold">Número Máximo de Jugadores</h2>
          
          <div class="flex items-center gap-3 mb-6">
            <span class="text-xs text-[#555]">0</span>
            <div class="relative flex-1 flex items-center">
              <input type="range" min="0" max="16" v-model="maxPlayers" class="custom-slider" :style="sliderStyle">
            </div>
            <span class="text-xs text-[#555]">16</span>
          </div>

          <h2 class="mb-3 text-center text-[13px] text-[#7a7a7a] uppercase tracking-wider font-bold">Región</h2>
          <div class="flex gap-2 overflow-x-auto pb-3 mb-4 scrollbar-hide">
            <div v-for="r in ['EU', 'NA', 'SA', 'AS']" :key="r" @click="sel = r"
                 :class="sel === r ? 'bg-[#dcdcdc] text-black border-transparent' : 'bg-[#2a2a2a] text-[#888] border-[#333]'"
                 class="shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-lg text-[10px] font-bold border transition-all cursor-pointer">
              {{ r }}
              <div :class="sel === r ? 'bg-black' : 'bg-[#1c1c1c] border border-[#444]'" class="w-4 h-4 rounded-[3px] flex items-center justify-center">
                <ion-icon :icon="sel === r ? checkmark : checkbox" :class="sel === r ? 'text-white text-[11px]' : 'text-[#555] text-[10px]'"></ion-icon>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-4 my-2">
            <div v-for="f in filterOptions" :key="f.label" @click="f.val = !f.val" class="flex justify-between items-center cursor-pointer group">
              <span :class="f.val ? 'text-white' : 'text-[#ccc]'" class="text-sm transition-colors">{{ f.label }}</span>
              <div :class="f.val ? 'bg-[#c31d1d]' : 'bg-transparent border border-[#444]'" class="w-5 h-5 rounded-[4px] flex items-center justify-center transition-all">
                <ion-icon v-if="f.val" :icon="checkmark" class="text-white text-[14px]"></ion-icon>
              </div>
            </div>
          </div>

          <button @click="showFilters = false" class="mt-6 w-full bg-[#c31d1d] py-3 rounded-xl font-bold text-white shadow-[0_4px_0_#8b0000] active:translate-y-1 active:shadow-none transition-all uppercase tracking-widest text-sm">
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
  searchOutline, pricetagOutline, star, bookmarkOutline, bookmark, checkmark, 
  checkbox
} from 'ionicons/icons';
import { dbservers } from '@/components/datos';

const showFilters = ref(false);
const maxPlayers = ref(16);
const sel = ref('EU');
const servers = ref(dbservers);

// Filtros inferiores reactivos
const filterOptions = ref([
  { label: 'Solo Favoritos', val: false },
  { label: 'Circuitos DLC', val: true },
  { label: 'Con contraseña', val: false },
  { label: 'Solo Amigos', val: false },
  { label: 'Competitivo', val: true }
]);

const sliderStyle = computed(() => {
  const percentage = (maxPlayers.value / 16) * 100;
  return { background: `linear-gradient(to right, #c31d1d ${percentage}%, #ffffff ${percentage}%)` };
});

const toggleFavorite = (server: any) => { server.isFavorite = !server.isFavorite; };
</script>

<style scoped>
.main-bg { --background: #121212; font-family: 'Exo 2', sans-serif; }
.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

.custom-slider {
  -webkit-appearance: none;
  width: 100%;
  height: 4px;
  border-radius: 999px;
  outline: none;
  cursor: pointer;
}

.custom-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(255,255,255,0.8);
}
</style>