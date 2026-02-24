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
          <ion-badge color="danger">3</ion-badge>
        </ion-tab-button>

        <ion-tab-button tab="tabProfile" href="/home/profile">
          <div class="w-10 h-10 rounded-full profile-container justify-items-center content-center grid">
            <div class="w-9 h-9 rounded-full bg-[#363636] justify-items-center content-center grid">
              <img class="w-8 h-8 rounded-full" src="/Daniel.png" alt="Rounded avatar">
            </div>
          </div>
          <ion-badge color="warning"></ion-badge>
        </ion-tab-button>

      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonIcon, IonPage, IonRouterOutlet, IonBadge } from '@ionic/vue';
import { chatbubblesOutline, constructOutline, searchOutline } from 'ionicons/icons';

</script>
<style>

ion-tab-button .profile-container {
  transition: 0.2s;
}

ion-tab-button.tab-selected .profile-container {
  background-color: #A80F12; 
}

ion-tab-button:hover .profile-container {
  background-color: #A80F12;
  opacity: 0.8;
}

</style>