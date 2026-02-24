<template>
  <ion-page>
    <ion-content class="login-bg" :scrollY="false">
      <div class="login-div">
        <div class="vignette-overlay"></div>

        <div class="login-wrapper">
          <h1 class="login-title pt-35">Iniciar Sesión</h1>

          <form class="form-container" @submit.prevent="goToHome">
            <ion-input class="glass-input" type="text" id="textLogin" name="text" required placeholder="Ingrese su nombre de usuario..."></ion-input>
            <ion-input class="glass-input" type="password" id="passLogin" name="pass" required placeholder="Ingrese su contraseña..."></ion-input>

            <ion-button type="submit" class="border">
              <span>Iniciar sesión</span>
            </ion-button>
          </form>

          <div class="link-register mt-20 rounded-lg bg-black/6 md:bg-black/3">
            <ion-text routerLink="/register" class="link-register p-1">Registrarse</ion-text>
          </div>
          
          
          <div class="footer-container rounded-lg bg-[#aaa]/6 md:bg-black/3">
            <ion-text routerLink="/recover" class="link-forgot p-1">Recuperar contraseña...</ion-text>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonContent, IonInput, IonButton, IonText } from '@ionic/vue';
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

.login-bg {
  --background: url('/Fondo-2.png') no-repeat center / cover;
}

.login-div {
  min-height: 100%;
}

.login-wrapper {
  position: relative;
  z-index: 2;
  height: 100%;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
}

.login-title {
  color: #fff;
  font-size: 44px;
  font-weight: 300;
  font-style: italic;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
  margin-bottom: 110px;
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

.underline-text {
  text-decoration: underline;
  text-underline-offset: 2px;
  font-style: italic;
}

.link-register, .link-forgot {
  text-decoration: none;
  font-style: italic;
  cursor: pointer;
}

.link-register {
  color: #e1e1e1;
  font-size: 16px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
  transition: 0.2s;
  text-decoration: none;
}

.link-register:hover { text-decoration: underline; color: #eee; transform: scale(0.95);}

.footer-container { margin-top: 50px; }

.link-forgot {
  color: #d1d1d1;
  font-size: 15px;
  transition: 0.2s;
}

.link-forgot:hover { text-decoration: underline; color: #eee; font-size: 14.3px;}
</style>