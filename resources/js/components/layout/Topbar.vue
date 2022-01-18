<template>
  <!-- Topbar -->
  <div>
    <b-navbar
      toggleable="lg"
      class="top_bar bg-cobalt"
      :class="userRole === 'Admin' ? 'border-left-admin' : null"
    >
      <b-navbar-nav>
        <a class="title_top" href="#">Tienda KB</a>
        <a class="title_top" href="#">Seguros KB</a>
      </b-navbar-nav>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" class="facebook_img">
            <img src="/img/facebook_top.png" alt="facebook-img" class="fb_img" />
          </b-nav-item>
          <b-nav-item href="#" class="instagram_img">
            <img src="/img/instagram_top.png" alt="instagram-img" class="inst_img" />
          </b-nav-item>
          <b-nav-item href="#">
            <img src="/img/youtube_top.png" alt="youtube-img" class="you_img" />
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-navbar toggleable="lg" type="ligth" class="header_container">
      <b-navbar-brand href="#">
        <img src="/img/logoCapital_blue.png" alt="Logo" class="logo-style" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item class="menu_header" href="/">Inicio</b-nav-item>
          <b-nav-item class="menu_header" href="/solicitud">
            Solicita tu crédito
          </b-nav-item>
          <b-nav-item class="menu_header" href="https://kapitalbank.com.co/como-funciona/"
            >Mundo KB</b-nav-item
          >
          <b-nav-item class="menu_header" href="https://kapitalbank.com.co/creditoskb/"
            >Créditos KB</b-nav-item
          >
          <b-nav-item class="menu_header" href="https://kapitalbank.com.co/quienes-somos/"
            >¿Como pagar?</b-nav-item
          >
        </b-navbar-nav>
        <ul class="navbar-nav ml-auto">
          <b-navbar-nav class="ml-auto">
            <button class="btn_register_cont">
              <a class="btn_register" href="/login">Regístrate</a>
            </button>
            <img src="/img/user_icon_header.png" alt="user_icon_header" class="icon_style" />
            <slot name="laravel-nav" />
            <b-nav-item-dropdown right v-if="isLoggedIn">
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <span class="mr-2 d-none d-lg-inline text-gray-600 small name_style">
                  Mi cuenta
                </span>
              </template>
              <b-dropdown-item>
                <b-row>
                  <b-col cols="5" class="icon_dop">
                    <img
                      src="/img/user_icon_header.png"
                      alt="user_icon_header"
                      class="icon_style_drop"
                    />
                  </b-col>
                  <b-col cols="7" class="col_datos_drop">
                    <span class="name_drop"> {{ authUser.name }}<br /> </span>
                    <span class="lastName_drop"> {{ authUser.lastname }}<br /> </span>
                    <span class="document_drop"> {{ authUser.document_number }}<br /> </span>
                  </b-col>
                </b-row>
              </b-dropdown-item>
              <b-dropdown-item>
                Editar perfil
              </b-dropdown-item>
              <b-dropdown-item>
                Mis créditos
              </b-dropdown-item>
              <b-dropdown-item>
                Soporte
              </b-dropdown-item>
              <!-- Temporal -->
              <b-dropdown-item :to="{ name: 'Creditos' }">
                Admin Prueba
              </b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item @click="logOut">
                <font-awesome-icon
                  :icon="['fas', 'sign-out-alt']"
                  class="mr-2 text-gray-400 name_style"
                  size="sm"
                  fixed-width
                />
                Cerrar sesión
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </ul>
        <!-- Right aligned nav items -->
      </b-collapse>
    </b-navbar>
  </div>

  <!-- End of Topbar -->
</template>

<script lang="ts">
import axios from 'axios';
import Vue from 'vue';
import { mapState, mapActions } from 'vuex';

export default Vue.extend({
  computed: {
    ...mapState('settings', ['toggled']),
    ...mapState('auth', ['authUser', 'userRole', 'isLoggedIn'])
  },
  methods: {
    ...mapActions('settings', ['setToggled']),

    logOut() {
      axios
        .post('logout')
        .then(res => {
          window.location.href = '/login';
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
});
</script>
<style lang="scss">
/* Estilos de header */
.logo-style {
  width: 70%;
  height: auto;
}
.top_bar {
  width: 100%;
  height: 40px;
  padding: 20px 40px;

  &.border-left-admin {
    border-left: 1px solid rgba(255, 255, 255, 0.15);
  }
}
.name_drop {
  text-transform: capitalize;
  color: #01549c;
  font-weight: bolder;
  font-size: 16px;
}
.lastName_drop {
  text-transform: capitalize;
  color: #01549c;
  font-weight: 300;
  font-size: 16px;
}
.document_drop {
  text-transform: capitalize;
  color: #85728f;
  font-weight: bolder;
  font-size: 16px;
}
.col_datos_drop {
  line-height: 18px;
}
.icon_dop {
  padding: 0 0 0 15px;
}
.menu_header {
  margin-right: 15px;
}
.title_top {
  color: #fff !important;
  padding: 0 20px 0 0;
}
.header_container {
  padding: 20px 40px;
  box-shadow: rgb(50 50 93 / 25%) 0px 13px 27px -5px, rgb(0 0 0 / 30%) 0px 8px 16px -8px;
  z-index: 2;
}
.btn_register {
  background-color: #6770f2;
  border-radius: 5px 5px 5px 5px;
  padding: 3px 8px 3px 8px;
  color: #fff !important;
  border-color: #6770f2;
  text-decoration: none !important;
  height: 29px;
  font-size: 17px;
}
.btn_register:hover {
  background: #fff;
  color: #6770f2 !important;
  border: 1px solid #6770f2 !important;
}
.btn_register_cont {
  border: none;
  background: #f8f9fc;
  padding-top: 8px;
}
.icon_style {
  margin: 0 20px;
}
.facebook_img {
  margin: 0 10px;
}
.instagram_img {
  margin: 0 12px;
}
.fb_img {
  widows: 9px !important;
}
.inst_img {
  widows: 18px !important;
}
.name_style {
  font-size: 16px;
  text-transform: capitalize;
}
.you_img {
  widows: 25px !important;
}
.icon_style_drop {
  width: 70%;
}

.dropdown-item {
  display: block;
  width: 100%;
  padding: 10px 20px;
  clear: both;
  font-weight: 400;
  color: #3a3b45;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
}
/* Fin estilos de header */
</style>
