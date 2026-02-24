<template>
  <ion-page>
    <ion-content class="success-bg" :scrollY="false">
      <div class="vignette-overlay"></div>

      <div class="success-wrapper md:ml-[55vw] sm:ml-[45vw]">
        <div class="info-panel md:bg-black/0 bg-[#333333]/85 rounded-lg p-3 md:m-0 mt-50">
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

          <ion-button @click="goToNext" class="md:self-auto self-center">
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
  router.push('/login');
};
</script>

<style scoped>

.success-bg {
  --background: url('/fondopc1.png') no-repeat center center / cover;
}

.vignette-overlay {
  box-shadow: inset 0 0 150px rgba(0, 0, 0, 0.5);
  background-color: rgba(0, 0, 0, 0.16);
}

.success-wrapper {
  position: relative;
  z-index: 2;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center; 
}

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

</style>