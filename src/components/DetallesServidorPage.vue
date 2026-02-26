<template>
    <div class="min-h-full flex items-center justify-center p-4 animate-in zoom-in duration-300">
      <div class="bg-[#8b0000] w-full max-w-212.5 rounded-[30px] p-8 relative shadow-2xl border border-white/10">
        
        <!-- TOP: Imagen + Info -->
        <div class="flex flex-col md:flex-row gap-10 mb-8">
          <div class="flex flex-col items-center gap-4 text-center">
            <img :src="server.image" class="w-48 h-48 rounded-full border-4 border-white/20 shadow-2xl object-cover" />
            <p class="text-white/70 italic text-base">{{ server.track }}</p>
          </div>
  
          <div class="flex-1">
            <h2 class="text-white text-5xl font-bold mb-1 italic tracking-tight">{{ server.name }}</h2>
            <p class="text-white/50 text-lg mb-6 italic">Dueño: JPA Servers</p>
            <h4 class="text-white/90 font-medium italic text-lg mb-2">Descripción del servidor:</h4>
            <p class="text-white/70 text-sm leading-relaxed italic">
              Hola si esto es un servidor de carreras competitivas gracias por ver. 
              Viva Cristo Rey a ver si puntua alto profe va que nos la hemos currado...
            </p>
          </div>
        </div>
  
        <!-- MAPA + BOTONES -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 items-center">
  
          <!-- 🗺 MAPA IZQUIERDA -->
          <div>
            <div id="map" class="w-full h-72 rounded-xl"></div>
          </div>
  
          <!-- 🔘 BOTONES DERECHA (más arriba) -->
          <div class="flex flex-col items-center gap-5 pt-6 align-center">
            <ion-button 
              @click="handleJoin" 
              fill="solid"
              class="server-btn btn-join w-full max-w-75 h-12.5 font-bold italic tracking-wide"
            >
              Entrar al Servidor
            </ion-button>
  
            <ion-button 
              @click="$emit('back')" 
              fill="solid"
              class="server-btn btn-back w-full max-w-50 h-11 font-bold italic tracking-wide"
            >
              Volver
            </ion-button>
          </div>
  
        </div>
  
        <!-- ICONOS INFERIORES -->
        <div class="flex justify-between items-end mt-10 px-2 w-full gap-1">
  
          <!-- Señal izquierda -->
          <div class="flex items-end gap-1.5 h-10">
            <div v-for="i in 4" :key="i"
              class="sm:w-2 w-1 rounded-sm"
              :class="[server.signal >= i ? 'bg-[#39ff14]' : 'bg-white/20']"
              :style="{ height: (i * 25) + '%' }">
            </div>
          </div>
  
          <!-- Derecha: estrellas + usuarios + favorito -->
          <div class="flex items-center sm:gap-6 gap-4">
  
            <div class="flex sm:gap-1 gap-0.5">
              <ion-icon 
                v-for="i in 5" :key="i" :icon="star" 
                @click="server.stars = i"
                :class="i <= server.stars ? 'text-[#ffd700]' : 'text-black/30'" 
                class="sm:text-2xl text-lg cursor-pointer">
              </ion-icon>
            </div>
  
            <span class="text-white sm:text-lg text-sm font-bold italic">
              {{ server.users }}
            </span>
  
            <ion-icon 
              :icon="server.isFavorite ? bookmark : bookmarkOutline" 
              @click="server.isFavorite = !server.isFavorite"
              :class="server.isFavorite ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]' : 'text-black/40'" 
              class="text-3xl cursor-pointer">
            </ion-icon>
  
          </div>
        </div>
  
        <!-- Overlay Uniéndose -->
        <div v-if="isJoining" class="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-[30px] flex items-center justify-center z-9999">          <div class="bg-[#1c1c1c] px-12 py-8 rounded-[25px] border-2 border-[#1a6596] shadow-2xl text-center">
            <div class="mb-4 flex justify-center">
              <div class="w-8 h-8 border-4 border-[#1a6596] border-t-transparent rounded-full animate-spin"></div>
            </div>
            <p class="text-white italic text-xl font-bold tracking-widest animate-pulse">
              UNIENDOSE AL SERVIDOR...
            </p>
          </div>
        </div>
  
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { IonIcon, IonButton } from '@ionic/vue'
  import { star, bookmark, bookmarkOutline } from 'ionicons/icons'
  import L from 'leaflet';
  import 'leaflet/dist/leaflet.css'
  
  defineProps<{ server: any }>()
  defineEmits(['back'])
  
  const isJoining = ref(false)
  
  const handleJoin = () => {
    isJoining.value = true
    setTimeout(() => { isJoining.value = false }, 2500)
  }
  
  onMounted(() => {
    const nurburgringCoords: [number, number] = [50.3356, 6.9475]
  
    const map = L.map('map').setView(nurburgringCoords, 14)
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map)
  
    L.marker(nurburgringCoords)
      .addTo(map)
      .bindPopup('Nürburgring Circuit')
  })
  </script>
  
  <style scoped>
  .server-btn {
    --border-width: 3px;
    --border-style: solid;
    --border-color: black;
    --border-radius: 999px;
    --box-shadow: 0 6px 0px rgba(0,0,0,0.3);
    margin: 0;
    transition: all 0.2s ease;
  }
  
  .server-btn:active {
    transform: translateY(3px);
    --box-shadow: none;
  }
  
  .btn-join {
    --background: #1a6596;
    --background-activated: #145078;
  }
  
  .btn-back {
    --background: #c31d1d;
    --background-activated: #a01818;
  }
  
  ion-button::part(native) {
    font-style: italic;
    padding-bottom: 2px;
  }

  ion-button{
    border: none;
}
  </style>