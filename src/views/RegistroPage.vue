<template>
    <ion-page>
      <ion-content class="register-bg">
        <div class="vignette-overlay"></div>
  
        <div class="login-wrapper">
          <h1 class="login-title py-[22vw] sm:py-[15vw] md:py-25 ">Crear Cuenta</h1>
  
          <form class="form-container" @submit.prevent="handleRegister">
            <ion-input class="glass-input" type="text" required placeholder="Ingrese su nombre de usuario..."></ion-input>
            <ion-input class="glass-input" type="password" required placeholder="Ingrese su contraseña..."></ion-input>
            <ion-input class="glass-input" type="password" required placeholder="Confirme su contraseña..."></ion-input>
  
            <ion-button type="submit" class="mt-10">
              <span>Registrarse</span>
            </ion-button>
            <div class="mt-5 p-1 rounded-lg bg-[#999]/6 md:bg-black/3">
              <a @click="goToLogin" class="link-back">Volver</a>
          </div>
          </form>
        </div>
      </ion-content>
    </ion-page>
</template>
  
<script setup>
import { IonPage, IonContent, IonInput, IonButton } from '@ionic/vue';
import { useRouter } from 'vue-router';
  
const router = useRouter();
  
  const goToLogin = () => {
    router.push('/login'); 
  };

  const handleRegister = () => {
  router.push('/success');
};
  </script>
  
<style scoped>

  .register-bg {
    --background: url('/Fondo-3.png') no-repeat center center / cover;
  }
  
  
  .login-wrapper {
    position: relative;
    z-index: 2;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5vh; 
  }
  
  .login-title {
    color: #fff;
    font-size: 40px;
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
    width: 90%;
    max-width: 340px;
    gap: 12px;
  }
  
  .underline-text {
    text-decoration: underline;
    text-underline-offset: 2px;
    font-style: italic;
  }
  
  .link-back {
    color: #999;
    font-size: 16px;
    text-decoration: none;
    text-underline-offset: 3px;
    margin-top: 25px;
    font-style: italic;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
    transition: 0.2s;
  }
  
  .link-back:hover {
    color: #fff;
    text-decoration: underline; 
  }
  </style>
  