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
      <ion-button>
        <span class="primary" @click.prevent="goToLogin">Volver a Iniciar Sesion</span>
      </ion-button>

      <div>
        <Image imageClass="w-10 h-10 rounded-base" src="/Daniel.png" alt="Medium avatar" preview/>
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
</style>

