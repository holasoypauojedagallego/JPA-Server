<template>
  <ion-page>
    <ion-content class="login-bg" :scrollY="false">
      <div class="login-div">
        <div class="vignette-overlay"></div>

        <div class="login-wrapper">
          <h1 class="login-title">Iniciar Sesión</h1>

          <div class="form-container">
            <ion-input class="glass-input" type="text" id="text" placeholder="Ingrese su nombre de usuario..."></ion-input>
            <ion-input class="glass-input" type="password" placeholder="Ingrese su contraseña..."></ion-input>

            <ion-button class="primary">
              <span @click="goToHome">Iniciar sesión</span>
            </ion-button>

            <a @click="goToRegister" class="link-register">Registrarse</a>
          </div>

        <div class="footer-container">
        <a href="#" @click.prevent="goToRecover" class="link-forgot">Recuperar contraseña...</a>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonContent, IonInput, IonButton } from '@ionic/vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goToRegister = () => {
  router.push('/register'); 
};

const goToHome = () => {
  router.push('/home');
}


const goToRecover = () => {
  router.push('/recover');
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@1,300;1,400&display=swap');

.login-bg {
  --background: url('../../public/Fondo-2.png') no-repeat center center / cover;
  font-family: 'Exo 2', sans-serif;
}

.login-div {
  justify-self: center;
  width: 90%;
  height: 67%;
}

.vignette-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  box-shadow: inset 0 0 150px rgba(0, 0, 0, 0.9);
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
  padding-top: 15vh;
}

.login-title {
  color: #fff;
  font-size: 44px;
  font-weight: 300;
  font-style: italic;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
  margin-bottom: 100px;
  letter-spacing: 1px;
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 380px;
  gap: 20px;
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

.link-register, .link-forgot {
  text-decoration: none;
  font-style: italic;
}

.link-register {
  color: #e1e1e1;
  font-size: 15px;
  margin-top: 5px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
  transition: 0.2s;
}

.link-register:hover { text-decoration: underline; color: #fff; transform: scale(1.02);}

.footer-container { margin-top: 80px; }

.link-forgot {
  color: #AAA;
  font-size: 14px;
  transition: 0.2s;
}

.link-forgot:hover { text-decoration: underline; color: #aaa; font-size: 14.3px;}
</style>