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
        <div id="tooltip-jese" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
            Jese Leos
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <img data-tooltip-target="tooltip-jese" class="w-10 h-10 rounded-base" src="/Daniel.png" alt="Medium avatar">
      </div>

      <ExploreContainer name="Profile page" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goToLogin = () => {
  router.push("/login");
}
</script>

<style scoped>
template {
  justify-items: center;
}
</style>

