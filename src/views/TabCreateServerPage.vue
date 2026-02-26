<template>
  <ion-page class="font-exo">
    <ion-header shadow="none">
      <ion-toolbar>
        <ion-title class="ion-text-center text-2xl uppercase font-bold italic tracking-widest">
          CREAR SERVIDOR
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div class="min-h-full flex flex-col items-center p-6 bg-[#121212]">
        
        <div class="bg-[#8b0000] w-full max-w-[900px] rounded-[30px] p-8 md:p-10 relative shadow-2xl border border-white/10 mt-4">
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            <div class="flex flex-col gap-5">
              <input 
                v-model="serverData.titulo" 
                type="text" 
                placeholder="Ingrese el titulo..." 
                class="w-full bg-[#333333] text-white placeholder-white/50 text-center py-3 rounded-full border border-white/10 outline-none italic font-medium"
              />

              <input 
                v-model="serverData.circuito" 
                type="text" 
                placeholder="Ingrese el circuito..." 
                class="w-full bg-[#333333] text-white placeholder-white/50 text-center py-3 rounded-full border border-white/10 outline-none italic font-medium"
              />

              <textarea 
                v-model="serverData.descripcion" 
                placeholder="Ingrese una descripción...(Opcional)" 
                rows="6"
                class="w-full bg-[#333333] text-white placeholder-white/50 text-center py-6 rounded-2xl border border-white/10 outline-none resize-none italic font-medium"
              ></textarea>
            </div>

            <div class="flex flex-col items-center justify-start gap-6">
              
              <div class="w-32 h-32 bg-[#e0e0e0] rounded-full flex items-center justify-center border-4 border-[#333333] shadow-lg mb-2">
                <ion-icon :icon="imageOutline" class="text-5xl text-black"></ion-icon>
              </div>

              <div class="w-full flex flex-col items-center">
                <h3 class="text-[#7a7a7a] text-[13px] font-bold mb-3 text-center uppercase italic">Número Máximo de Jugadores</h3>
                <div class="flex items-center w-full gap-3 px-4">
                  <span class="text-white text-xs font-bold italic">0</span>
                  <input 
                    type="range" min="0" max="16" 
                    v-model="serverData.maxJugadores" 
                    class="custom-slider w-full" 
                    :style="sliderStyle"
                  >
                  <span class="text-white text-xs font-bold italic">16</span>
                </div>
                <span class="text-white/70 text-xs mt-2 italic font-bold uppercase tracking-wider">{{ serverData.maxJugadores }} Jugadores</span>
              </div>

              <div class="w-full flex flex-col items-center mt-2">
                <h3 class="text-[#7a7a7a] text-[13px] font-bold mb-3 uppercase italic">REGION</h3>
                <div class="flex gap-3 overflow-x-auto max-w-full pb-2 scrollbar-hide">
                  <div 
                    v-for="region in regiones" 
                    :key="region.id"
                    @click="toggleRegion(region.id)"
                    class="region-pill transition-all duration-200"
                    :class="region.selected ? 'pill-selected' : 'pill-unselected'"
                  >
                    <span class="text-[11px] font-bold italic">{{ region.name }}</span>
                    <div class="checkbox-box" :class="{'checkbox-selected': region.selected}">
                      <ion-icon v-if="region.selected" :icon="checkmarkOutline" class="text-white text-[12px]"></ion-icon>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div class="flex flex-col sm:flex-row justify-center gap-8 mt-12">
            
            <ion-button 
              @mousedown="startPress" 
              @mouseup="endPress" 
              @mouseleave="endPress"
              @touchstart="startPress" 
              @touchend="endPress"
              fill="solid"
              class="custom-btn btn-blue w-full sm:w-[240px] h-[50px] font-bold uppercase italic tracking-[2px] relative overflow-hidden"
            >
              <div 
                class="absolute left-0 top-0 h-full bg-[#134a6e] transition-all duration-100 ease-linear pointer-events-none"
                :style="{ width: pressProgress + '%' }"
              ></div>
              <span class="relative z-10">Crear Servidor</span>
            </ion-button>

            <ion-button 
              @click="reiniciarFormulario" 
              fill="solid"
              class="custom-btn btn-red w-full sm:w-[200px] h-[50px] font-bold uppercase italic tracking-[2px]"
            >
              Reiniciar
            </ion-button>
          </div>

          <div v-if="mostrarMensaje" class="fixed inset-0 flex items-center justify-center z-[2000] p-4">
            <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
            <div class="relative bg-[#1c1c1c] px-12 py-10 rounded-3xl shadow-2xl border border-[#c31d1d] text-center min-w-[320px] animate-in zoom-in duration-300">
              <p class="text-white italic text-xl font-bold uppercase tracking-wider leading-tight">
                SERVIDOR CREADO<br>CORRECTAMENTE
              </p>
            </div>
          </div>

        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { 
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, 
  IonIcon, IonButton 
} from '@ionic/vue';
import { imageOutline, checkmarkOutline } from 'ionicons/icons';

// Datos del formulario
const serverData = ref({
  titulo: '',
  circuito: '',
  descripcion: '',
  maxJugadores: 12
});

// Regiones
const regiones = ref([
  { id: 'eu', name: 'EU', selected: true },
  { id: 'na', name: 'NA', selected: false },
  { id: 'sa', name: 'SA', selected: false },
  { id: 'as', name: 'AS', selected: false },
  { id: 'oc', name: 'OC', selected: false }
]);

const mostrarMensaje = ref(false);

// Lógica para mantener pulsado 3 segundos
const isPressing = ref(false);
const pressProgress = ref(0);
let pressTimer: any = null;
let progressInterval: any = null;

const startPress = () => {
  isPressing.value = true;
  pressProgress.value = 0;
  
  // Timer para ejecutar la acción tras 3 segundos
  pressTimer = setTimeout(() => {
    if (isPressing.value) {
      crearServidor();
      endPress();
    }
  }, 3000);

  // Intervalo para actualizar la barra de progreso visual
  progressInterval = setInterval(() => {
    if (isPressing.value && pressProgress.value < 100) {
      pressProgress.value += 1;
    } else {
      clearInterval(progressInterval);
    }
  }, 30); // Actualiza cada 30ms para suavidad
};

const endPress = () => {
  isPressing.value = false;
  pressProgress.value = 0;
  clearTimeout(pressTimer);
  clearInterval(progressInterval);
};

const sliderStyle = computed(() => {
  const p = (serverData.value.maxJugadores / 16) * 100;
  return { background: `linear-gradient(to right, #c31d1d ${p}%, #555555 ${p}%)` };
});

const toggleRegion = (id: string) => {
  const r = regiones.value.find(reg => reg.id === id);
  if (r) r.selected = !r.selected;
};

const reiniciarFormulario = () => {
  serverData.value.titulo = '';
  serverData.value.circuito = '';
  serverData.value.descripcion = '';
  serverData.value.maxJugadores = 12;
  regiones.value.forEach(r => r.selected = r.id === 'eu');
};

const crearServidor = () => {
  mostrarMensaje.value = true;
  setTimeout(() => {
    mostrarMensaje.value = false;
    reiniciarFormulario(); 
  }, 2500);
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,400;0,700;1,400;1,700&display=swap');

/* Fuente Exo 2 global para el componente */
* {
  font-family: 'Exo 2', sans-serif !important;
}

.scrollbar-hide::-webkit-scrollbar { display: none; }

/* REGIONES (Píldoras) estilo idéntico al filtro */
.region-pill {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 6px 14px;
  border-radius: 10px;
  cursor: pointer;
  min-width: 90px;
  justify-content: space-between;
}
.pill-selected { background-color: #dcdcdc; color: #000; }
.pill-unselected { background-color: #2a2a2a; color: #888; border: 1px solid #333; }

.checkbox-box {
  width: 16px;
  height: 16px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.checkbox-selected { background-color: #000; }
.pill-unselected .checkbox-box { border: 1px solid #444; }

/* BOTONES PERSONALIZADOS SIN BORDE NEGRO */
.custom-btn {
  --border-width: 0px; /* Borde eliminado */
  --border-style: none; /* Borde eliminado */
  --border-color: transparent; /* Borde eliminado */
  
  --border-radius: 999px; /* Botón ovalado */
  --box-shadow: 0 4px 0px rgba(0,0,0,0.4); /* Sombra 3D inferior */
  margin: 0;
  user-select: none;
  position: relative;
}

/* Tipografía de los botones */
ion-button::part(native) { 
  font-style: italic !important; 
  font-weight: 700 !important;
  font-family: 'Exo 2', sans-serif !important;
  border: none !important;
}

.btn-blue { --background: #1a6596; } /* Azul base */
.btn-red { --background: #c31d1d; } /* Rojo base */

/* Efecto al pulsar el botón */
.custom-btn:active {
  transform: translateY(2px); /* Se hunde un poco */
  --box-shadow: 0 2px 0px rgba(0,0,0,0.4); /* Sombra más pequeña */
}

/* SLIDER */
.custom-slider {
  -webkit-appearance: none;
  height: 6px;
  border-radius: 5px;
  outline: none;
}
.custom-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
}

.ion-button{
    border: none;
}
</style>