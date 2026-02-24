<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Profile</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Profile</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-button routerLink="/login">
        <span class="primary">Volver a Iniciar Sesion</span>
      </ion-button>

      <div class="hover:animate-bounce">
        <Image imageClass="w-70 h-70 rounded-base" src="/Daniel.png" alt="Medium avatar" preview/>
      </div>

      <ExploreContainer name="Profile page" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
import { useRouter } from 'vue-router';
import Image from 'primevue/image';

const router = useRouter();

const goToLogin = () => {
  router.push("/login");
};
</script>

<style scoped>
.elemento{
  animation: var(--animate-pulse); 
  @keyframes pulse {
    50% {
      opacity: 0.5;
    }
  }
}

</style>

