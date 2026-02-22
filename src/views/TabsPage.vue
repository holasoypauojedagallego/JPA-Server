<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">

        <ion-tab-button tab="tabServers" href="/home/servers">
          <ion-icon aria-hidden="true" :icon="searchOutline" />
        </ion-tab-button>

        <ion-tab-button tab="tabCreate" href="/home/createServer">
          <ion-icon aria-hidden="true" :icon="constructOutline" />
        </ion-tab-button>

        <ion-tab-button tab="tabMessages" href="/home/messages">
          <ion-icon aria-hidden="true" :icon="chatbubblesOutline" />
          <ion-badge color="danger">1</ion-badge>
        </ion-tab-button>

        <ion-tab-button tab="tabProfile" href="/home/profile">
          <img class="w-9 h-9 rounded-full" src="/Daniel.png" alt="Rounded avatar">
          <ion-badge color="warning"></ion-badge>
        </ion-tab-button>

      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonIcon, IonPage, IonRouterOutlet, IonBadge } from '@ionic/vue';
import { chatbubblesOutline, constructOutline, personCircleOutline, searchOutline } from 'ionicons/icons';

</script>
