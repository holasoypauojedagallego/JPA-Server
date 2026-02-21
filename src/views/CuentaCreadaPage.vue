<template>
  <ion-page>
    <ion-content class="success-bg" :scrollY="false">
      <div class="vignette-overlay"></div>

      <div class="success-wrapper">
        <div class="info-panel">
          <h1 class="main-title">Cuenta Creada!</h1>

          <div class="user-data">
            <div class="data-group">
              <span class="label">Nombre:</span>
              <span class="value">Daniel M.M</span>
            </div>

            <div class="data-group">
              <span class="label">Número:</span>
              <span class="value">67</span>
            </div>
          </div>

          <ion-button class="red-button" @click="goToNext">
            Continuar
          </ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonContent, IonButton } from '@ionic/vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goToNext = () => {
  // Aquí puedes decidir a dónde va después. 
  // Por ahora lo mandamos al login o a un dashboard imaginario
  router.push('/login');
  // router.push('/dashboard'); 
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@1,300;1,400;1,600&display=swap');

.success-bg {
  /* Fondo de piloto de carreras de Unsplash */
  --background: url('../../public/fondopc\ 1.png') no-repeat center center / cover;
  font-family: 'Exo 2', sans-serif;
}

.vignette-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  box-shadow: inset 0 0 150px rgba(0, 0, 0, 0.7);
  pointer-events: none;
  z-index: 1;
}

/* Envolvemos el contenido para tirarlo hacia la mitad derecha de la pantalla */
.success-wrapper {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end; /* Alinea a la derecha */
  padding-right: 15%; /* Margen derecho */
}

/* El panel en sí alinea sus textos a la izquierda */
.info-panel {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
}

.main-title {
  color: #fff;
  font-size: 38px;
  font-weight: 300;
  font-style: italic;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.8);
  margin: 0 0 10px 0;
  letter-spacing: 1px;
}

.user-data {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
}

.data-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.label {
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  font-style: italic;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
}

.value {
  color: #d1d1d1;
  font-size: 16px;
  font-weight: 400;
  font-style: italic;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
}

/* Mismo botón rojo de las otras pantallas */
.red-button {
  --background: #c31d1d;
  --background-hover: #a11717;
  --border-color: #520606;
  --border-style: solid;
  --border-width: 2px;
  --border-radius: 6px;
  --box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
  height: 42px;
  width: 180px;
  font-size: 14px;
  font-weight: 400;
  text-transform: none;
  font-style: italic;
  letter-spacing: 0.5px;
}
</style>