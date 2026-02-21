<template>
  <ion-page>
    <ion-content class="recover-bg" :scrollY="false">
      <div class="vignette-overlay"></div>

      <div v-if="step === 1" class="login-wrapper">
        <h1 class="login-title">Recuperar Cuenta</h1>
        <div class="form-container">
          <ion-input class="glass-input" placeholder="Ingrese su nombre de usuario..."></ion-input>
          
          <ion-button class="red-button" @click="step = 2">
            Mandar Correo de Confirmación
          </ion-button>
          
          <a href="#" @click.prevent="goToLogin" class="link-back">Volver</a>
        </div>
      </div>

      <div v-if="step === 2" class="custom-modal-overlay">
        <div class="custom-modal">
          <p class="modal-text">Se ha enviado un correo de<br>recuperación para:</p>
          <p class="modal-name">Daniel Martinez Montserrat</p>
          
          <ion-button class="red-button modal-btn" @click="step = 3">
            Cambiar Contraseña
          </ion-button>
        </div>
      </div>

      <div v-if="step === 3" class="login-wrapper">
        <h1 class="login-title">Recuperar Cuenta</h1>
        <div class="form-container">
          <ion-input class="glass-input" type="password" placeholder="Ingrese su nueva contraseña..."></ion-input>
          <ion-input class="glass-input" type="password" placeholder="Ingrese de nuevo su nueva contraseña..."></ion-input>
          
          <ion-button class="red-button" @click="step = 4">
            Cambiar contraseña
          </ion-button>
          
          <a href="#" @click.prevent="goToLogin" class="link-back">Volver</a>
        </div>
      </div>

      <div v-if="step === 4" class="custom-modal-overlay">
        <div class="custom-modal">
          <p class="modal-text">Se ha enviado un correo de<br>recuperación para:</p>
          <p class="modal-name">Daniel Martinez Montserrat</p>
          
          <ion-button class="red-button modal-btn" @click="goToLogin">
            Aceptar
          </ion-button>
        </div>
      </div>

    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import { IonPage, IonContent, IonInput, IonButton } from '@ionic/vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Controlamos en qué parte del proceso estamos (1, 2, 3 o 4)
const step = ref(1);

const goToLogin = () => {
  step.value = 1; // Reseteamos para la próxima vez
  router.push('/login'); 
};
</script>

<style scoped>
/* (Aquí van los mismos estilos del Lexus, los inputs glass y el modal oscuro que usamos antes) */
.recover-bg {
  --background: url('https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?q=80&w=2000') no-repeat center center / cover;
}
.login-wrapper { 
    position: relative;
     z-index: 2; 
     height: 100%; 
     display: flex; 
     flex-direction: column; 
     align-items: center; 
     justify-content: center; 
}

.form-container {
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    gap: 15px; 
    width: 100%; 
    max-width: 360px; 
}

.glass-input { 
    --background: rgba(30, 30, 30, 0.85); 
    --color: #fff; 
    --border-radius: 25px; 
    text-align: center; 
    border: 1px solid rgba(255,255,255,0.1); 
}

.red-button { 
    --background: #c31d1d; 
    --border-radius: 6px; 
    width: 220px; 
    text-transform: none; 
}

.link-back { 
    color: #999; 
    margin-top: 20px;
    text-decoration: underline; 
    font-style: italic; 
}

.custom-modal-overlay { 
    position: absolute; 
    top: 0; 
    left: 0; 
    width: 100%; 
    height: 100%; 
    background: rgba(0,0,0,0.8); 
    z-index: 100; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    backdrop-filter: blur(2px); 
}

.custom-modal { 
    background: #1a1a1a; 
    padding: 30px; 
    border-radius: 12px; 
    text-align: center; 
    border: 1px solid #333; 
}

.modal-text { 
    color: #eee; 
    font-size: 16px; 
    margin-bottom: 5px; 
}

.modal-name { 
    color: #fff; 
    font-style: italic; 
    font-weight: bold; 
    margin-bottom: 20px; 
}

</style>