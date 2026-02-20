<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Servers</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Servers</ion-title>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer name="Servers page" />
      <IonImg class="imagen" src="../../public/favicon.png"></IonImg>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonImg } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>

<style>
.imagen {
  width: 440px;
  height: 440px;
}
</style>
