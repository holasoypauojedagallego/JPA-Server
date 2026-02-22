<template>
  <ion-page>
    <header class="top-nav">
      <div class="nav-item active">
        <ion-icon :icon="searchOutline"></ion-icon>
        <span>Servidores</span>
      </div>
      <div class="nav-item">
        <ion-icon :icon="gridOutline"></ion-icon>
        <span>Crear Servidor</span>
      </div>
      <div class="nav-item">
        <ion-icon :icon="chatbubbleOutline"></ion-icon>
        <span>Mensajes</span>
      </div>
      <div class="nav-item">
        <ion-icon :icon="personOutline"></ion-icon>
        <span>Perfil</span>
      </div>
    </header>

    <ion-content :fullscreen="true" class="main-bg">
      <div class="content-wrapper">
        <h1 class="main-title">SERVIDORES</h1>

        <div class="search-container">
          <div class="search-bar">
            <input type="text" placeholder="Escribir Mensaje..." />
            <ion-icon :icon="searchOutline" class="search-icon-inner"></ion-icon>
          </div>
          <ion-icon 
            :icon="pricetagOutline" 
            class="tag-icon" 
            @click="showFilters = true"
          ></ion-icon>
        </div>

        <div class="servers-list">
          <div v-for="server in servers" :key="server.id" class="server-card">
            <div class="server-info">
              <img :src="server.image" class="server-thumb" />
              <div class="text-details">
                <h3>{{ server.name }}</h3>
                <p><em>{{ server.track }}</em></p>
                <div class="status-row">
                  <div class="signal-bars">
                    <div class="bar" :class="{ 'fill': server.signal >= 1 }"></div>
                    <div class="bar" :class="{ 'fill': server.signal >= 2 }"></div>
                    <div class="bar" :class="{ 'fill': server.signal >= 3 }"></div>
                    <div class="bar" :class="{ 'fill': server.signal >= 4 }"></div>
                  </div>
                  <div class="stars">
                    <ion-icon v-for="i in 5" :key="i" :icon="star" :class="{ 'gold': i <= server.stars }"></ion-icon>
                  </div>
                  <span class="users-count">{{ server.users }}</span>
                </div>
              </div>
            </div>
            
            <div class="fav-container" @click="toggleFavorite(server)">
              <ion-icon 
                :icon="server.isFavorite ? bookmark : bookmarkOutline" 
                :class="{ 'fav-active': server.isFavorite }"
              ></ion-icon>
            </div>
          </div>
        </div>
      </div>

      <div v-if="showFilters" class="filter-overlay">
        <div class="filter-panel">
          <h2 class="filter-section-title">Número Máximo de Jugadores</h2>
          <div class="range-box">
            <span>0</span>
            <div class="custom-range">
              <div class="range-fill"></div>
              <div class="range-knob"></div>
            </div>
            <span>16</span>
          </div>

          <h2 class="filter-section-title">Región (Scrollable)</h2>
          <div class="region-scroll">
            <div class="region-chip selected">
              EU <ion-icon :icon="checkbox"></ion-icon>
            </div>
            <div class="region-chip">
              NA <ion-icon :icon="bookmarkOutline"></ion-icon>
            </div>
            <div class="region-chip">
              SA <ion-icon :icon="bookmarkOutline"></ion-icon>
            </div>
            <div class="region-chip">
              AS <ion-icon :icon="bookmarkOutline"></ion-icon>
            </div>
          </div>

          <div class="options-list">
            <div class="option-row">
              <span>Solo Favoritos</span>
              <ion-icon :icon="bookmarkOutline" class="check-icon"></ion-icon>
            </div>
            <div class="option-row">
              <span>Circuitos DLC</span>
              <ion-icon :icon="checkbox" class="check-icon active-red"></ion-icon>
            </div>
            <div class="option-row">
              <span>Con contraseña</span>
              <ion-icon :icon="bookmarkOutline" class="check-icon"></ion-icon>
            </div>
            <div class="option-row">
              <span>Solo Amigos</span>
              <ion-icon :icon="bookmarkOutline" class="check-icon"></ion-icon>
            </div>
            <div class="option-row important">
              <span>Competitivo</span>
              <ion-icon :icon="checkbox" class="check-icon active-red"></ion-icon>
            </div>
          </div>

          <button class="btn-save" @click="showFilters = false">GUARDAR</button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IonPage, IonContent, IonIcon } from '@ionic/vue';
import { 
  searchOutline, gridOutline, chatbubbleOutline, personOutline, 
  pricetagOutline, star, bookmarkOutline, bookmark, checkbox 
} from 'ionicons/icons';

const showFilters = ref(false);

const servers = ref([
  { id: 1, name: 'Jorge', track: 'Circuito de Nürburgring', signal: 4, stars: 5, users: '15/16', image: 'https://placehold.co/100/333/fff?text=J', isFavorite: true },
  { id: 2, name: 'Joe Biden', track: 'Circuito de Barcelona', signal: 3, stars: 4, users: '15/16', image: 'https://placehold.co/100/333/fff?text=B', isFavorite: false },
  { id: 3, name: 'Chafu carreras', track: 'Circuito de Spa-Francorchamps', signal: 4, stars: 5, users: '14/16', image: 'https://placehold.co/100/333/fff?text=C', isFavorite: false },
  { id: 4, name: 'Adrian Luque Diaz', track: 'Circuito de Suzuka', signal: 2, stars: 1, users: '12/16', image: 'https://placehold.co/100/333/fff?text=A', isFavorite: false },
  { id: 5, name: 'Venezuela Mejores Pilotos', track: 'Circuito de Barcelona', signal: 4, stars: 2, users: '7/16', image: 'https://placehold.co/100/333/fff?text=V', isFavorite: false },
  { id: 6, name: 'Brasil Sim Racing', track: 'Circuito de Spa-Francorchamps', signal: 4, stars: 3, users: '4/16', image: 'https://placehold.co/100/333/fff?text=B', isFavorite: false },
  { id: 7, name: 'Servidor de Assetto Corsa', track: 'Circuito de Nürburgring', signal: 3, stars: 0, users: '1/16', image: 'https://placehold.co/100/333/fff?text=B', isFavorite: false },
  { id: 8, name: '基督雷伊 基督雷伊', track: 'Circuito de Suzuka', signal: 1, stars: 0, users: '0/16', image: 'https://placehold.co/100/333/fff?text=B', isFavorite: false },
  { id: 9, name: '雷伊基督伊 ', track: 'Circuito de Nürburgring', signal: 2, stars: 0, users: '0/16', image: 'https://placehold.co/100/333/fff?text=B', isFavorite: false },
  { id: 10, name: '督基督伊伊基督伊督雷伊督雷伊', track: 'Circuito de Spa-Francorchamps', signal: 1, stars: 0, users: '0/16', image: 'https://placehold.co/100/333/fff?text=B', isFavorite: false },
]);

const toggleFavorite = (server: any) => {
  server.isFavorite = !server.isFavorite;
};
</script>

<style scoped>
/* --- TUS ESTILOS ORIGINALES --- */
.main-bg { --background: #121212; font-family: 'Exo 2', sans-serif; }
.top-nav { background: #1a1a1a; display: flex; justify-content: space-around; padding: 12px 0; border-bottom: 1px solid #333; }
.nav-item { display: flex; flex-direction: column; align-items: center; color: #888; font-size: 11px; }
.nav-item ion-icon { font-size: 22px; margin-bottom: 4px; }
.nav-item.active { color: #fff; border-bottom: 2px solid #c31d1d; padding-bottom: 4px; }
.content-wrapper { padding: 20px; display: flex; flex-direction: column; align-items: center; }
.main-title { color: #fff; font-size: 32px; letter-spacing: 2px; font-weight: 300; margin: 10px 0 30px; }
.search-container { display: flex; align-items: center; gap: 15px; width: 100%; max-width: 600px; margin-bottom: 25px; }
.search-bar { background: rgba(45, 45, 45, 0.9); border-radius: 25px; display: flex; align-items: center; padding: 8px 20px; flex: 1; border: 1px solid #444; }
.search-bar input { background: transparent; border: none; color: #ccc; font-style: italic; width: 100%; outline: none; }
.tag-icon { color: #5d6d7e; font-size: 28px; transform: rotate(45deg); cursor: pointer; }

.servers-list { width: 100%; max-width: 700px; display: flex; flex-direction: column; gap: 15px; }
.server-card { background: #8b0000; border-radius: 18px; padding: 15px 20px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 6px 15px rgba(0,0,0,0.4); }
.server-info { display: flex; align-items: center; gap: 18px; }
.server-thumb { width: 55px; height: 55px; border-radius: 50%; border: 2px solid rgba(255,255,255,0.1); }
.text-details h3 { color: #fff; margin: 0; font-size: 19px; font-weight: bold; }
.text-details p { color: rgba(255,255,255,0.8); margin: 3px 0; font-size: 14px; }
.status-row { display: flex; align-items: center; gap: 12px; margin-top: 6px; }
.signal-bars { display: flex; align-items: flex-end; gap: 3px; height: 15px; }
.bar { width: 4px; background: rgba(255,255,255,0.2); border-radius: 1px; }
.bar:nth-child(1) { height: 30%; }
.bar:nth-child(2) { height: 50%; }
.bar:nth-child(3) { height: 75%; }
.bar:nth-child(4) { height: 100%; }
.bar.fill { background: #39ff14; }
.stars ion-icon { font-size: 14px; color: rgba(0,0,0,0.3); margin-right: 1px; }
.stars .gold { color: #ffd700; }
.users-count { color: #fff; font-size: 13px; font-weight: 600; }
.fav-container ion-icon { font-size: 26px; color: rgba(255,255,255,0.4); cursor: pointer; transition: transform 0.2s ease; }
.fav-container .fav-active { color: #fff; filter: drop-shadow(0 0 5px rgba(255,255,255,0.5)); }

/* --- ESTILOS DEL PANEL DE FILTROS --- */
.filter-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(2px);
}

.filter-panel {
  background: #1c1c1c;
  width: 320px;
  border: 1px solid #c31d1d;
  border-radius: 24px;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.filter-section-title {
  color: #7a7a7a;
  font-size: 13px;
  text-align: center;
  margin: 15px 0 10px;
  font-weight: normal;
}

.range-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  color: #555;
  font-size: 12px;
}

.custom-range {
  flex: 1;
  height: 3px;
  background: #c31d1d;
  position: relative;
}

.range-knob {
  position: absolute;
  right: 0;
  top: -4px;
  width: 11px;
  height: 11px;
  background: #fff;
  border-radius: 50%;
}

.region-scroll {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 5px;
}

.region-chip {
  background: #2a2a2a;
  color: #888;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 5px;
  border: 1px solid #333;
}

.region-chip.selected {
  background: #e0e0e0;
  color: #000;
}

.options-list {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.option-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ccc;
  font-size: 14px;
}

.option-row.important span {
  font-weight: bold;
  font-size: 16px;
  color: #fff;
}

.check-icon {
  font-size: 22px;
  color: #333;
}

.active-red {
  color: #c31d1d;
}

.btn-save {
  background: #c31d1d;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 12px;
  font-weight: bold;
  font-size: 14px;
  margin-top: 10px;
  box-shadow: 0 4px #8b0000;
  cursor: pointer;
}

.btn-save:active {
  transform: translateY(2px);
  box-shadow: 0 2px #8b0000;
}
</style>