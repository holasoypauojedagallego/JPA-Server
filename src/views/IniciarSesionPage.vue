<template>
  <ion-page>
    <ion-content class="login-bg" :scrollY="false">
      <div class="vignette-overlay"></div>

      <div class="login-wrapper">
        <h1 class="login-title">Iniciar Sesión</h1>

        <div class="form-container">
          <ion-input class="glass-input" type="text" placeholder="Ingrese su nombre de usuario..."></ion-input>
          <ion-input class="glass-input" type="password" placeholder="Ingrese su contraseña..."></ion-input>

          <ion-button class="red-button">
            <span class="underline-text">Iniciar sesión</span>
          </ion-button>

          <a href="#" @click.prevent="goToRegister" class="link-register">Registrarse</a>
        </div>

        <div class="footer-container">
          <a href="#" class="link-forgot">Recuperar contraseña...</a>
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
  router.push('/register'); // Asegúrate de que esta ruta coincida con tu router
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@1,300;1,400&display=swap');

.login-bg {
  --background: url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070') no-repeat center center / cover;
  font-family: 'Exo 2', sans-serif;
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
  padding-top: 10vh;
}

.login-title {
  color: #fff;
  font-size: 32px;
  font-weight: 300;
  font-style: italic;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
  margin-bottom: 40px;
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
  --background: rgba(45, 45, 45, 0.85);
  --color: #a0a0a0;
  --placeholder-color: #777;
  --placeholder-font-style: italic;
  --placeholder-opacity: 1;
  --padding-start: 15px;
  --padding-end: 15px;
  --border-radius: 25px;
  font-size: 13px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  min-height: 40px;
}

.red-button {
  --background: #c31d1d;
  --background-hover: #a11717;
  --border-color: #520606;
  --border-style: solid;
  --border-width: 2px;
  --border-radius: 6px;
  --box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
  margin-top: 10px;
  height: 38px;
  width: 160px;
  font-size: 13px;
  font-weight: 400;
  text-transform: none;
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
  color: #d1d1d1;
  font-size: 15px;
  margin-top: 5px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
}

.link-register:hover { color: #fff; }

.footer-container { margin-top: 80px; }

.link-forgot {
  color: #888;
  font-size: 14px;
}

.link-forgot:hover { text-decoration: underline; color: #aaa; }
</style>