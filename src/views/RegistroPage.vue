<template>
    <ion-page>
      <ion-content class="register-bg" :scrollY="false">
        <div class="vignette-overlay"></div>
  
        <div class="login-wrapper">
          <h1 class="login-title">Crear Cuenta</h1>
  
          <div class="form-container">
            <ion-input class="glass-input" type="text" placeholder="Ingrese su nombre de usuario..."></ion-input>
            <ion-input class="glass-input" type="password" placeholder="Ingrese su contraseña..."></ion-input>
            <ion-input class="glass-input" type="password" placeholder="Confirme su contraseña..."></ion-input>
  
            <ion-button>
              <span>Registrarse</span>
            </ion-button>
  
            <a @click="goToLogin" class="link-back">Volver</a>
          </div>
        </div>
      </ion-content>
    </ion-page>
</template>
  
<script setup>
import { IonPage, IonContent, IonInput, IonButton } from '@ionic/vue';
import { useRouter } from 'vue-router';
  
const router = useRouter();
  
const goToLogin = () => {
  router.push('/login'); // Regresa a la vista de login
};
</script>
  
<style scoped>

  .register-bg {
    --background: url('../../public/Fondo-3.png') no-repeat center center / cover;
  }
  
  .vignette-overlay {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    /* Viñeta más fuerte para pantallas oscuras */
    box-shadow: inset 0 0 200px rgba(0, 0, 0, 0.95);
    background: rgba(0,0,0,0.3); /* Capa oscura extra */
    pointer-events: none;
    z-index: 1;
  }
  
  .login-wrapper {
    position: relative;
    z-index: 2;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 5vh; /* Ligeramente más arriba por tener más inputs */
  }
  
  .login-title {
    color: #fff;
    font-size: 32px;
    font-weight: 300;
    font-style: italic;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
    margin-bottom: 30px;
    letter-spacing: 1px;
  }
  
  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 340px;
    gap: 12px;
  }
  
  .glass-input {
    --background: rgba(45, 45, 45, 0.93);
    --color: #a0a0a0;
    --placeholder-color: #777;
    --placeholder-font-style: italic;
    --placeholder-opacity: 0.75;
    --padding-start: 15px;
    --padding-end: 15px;
    --border-radius: 25px;
    font-size: 14px;
    text-align: center;
    min-height: 40px;
  }
  
  
  .underline-text {
    text-decoration: underline;
    text-underline-offset: 2px;
    font-style: italic;
  }
  
  .link-back {
    color: #999;
    font-size: 14px;
    text-decoration: underline;
    text-underline-offset: 3px;
    margin-top: 15px;
    font-style: italic;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  }
  
  .link-back:hover {
    color: #fff;
  }
  </style>
  