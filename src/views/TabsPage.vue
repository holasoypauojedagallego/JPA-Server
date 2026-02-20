<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">

        <ion-tab-button tab="tab1" href="/home/servers">
          <ion-icon aria-hidden="true" :icon="searchOutline" />
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/home/createServer">
          <ion-icon aria-hidden="true" :icon="constructOutline" />
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/home/messages">
          <ion-icon aria-hidden="true" :icon="chatbubblesOutline" />
  
        </ion-tab-button>

        <ion-tab-button tab="tab4" href="/home/profile">
          <ion-icon aria-hidden="true" :icon="personCircleOutline" />
        </ion-tab-button>

      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { chatbubblesOutline, constructOutline, personCircleOutline, searchOutline } from 'ionicons/icons';
</script>
