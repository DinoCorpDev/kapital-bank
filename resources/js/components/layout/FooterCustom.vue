<template>
  <!-- Footer -->
  <footer class="sticky-footer footer_container">
    <div class="container_logo">
      <img src="/img/logoKapital_white.png" alt="Logo" class="logo_footer" />
    </div>
    <div class="container my-auto">
      <div class="copyright text-center my-auto">
        <b-row>
          <b-col>
            <b-list-group>
              <b-list-group-item href="#">Inicio</b-list-group-item>
              <b-list-group-item href="#">Solicita tu crédito</b-list-group-item>
              <b-list-group-item href="#">Mundo KB</b-list-group-item>
              <b-list-group-item href="#">Créditos KB</b-list-group-item>
              <b-list-group-item href="#">¿Como pagar mi cuota?</b-list-group-item>
              <b-list-group-item href="#">Mi cuenta</b-list-group-item>
            </b-list-group>
          </b-col>
          <b-col>
            <b-list-group>
              <b-list-group-item class="title_footer" href="#">Contáctanos</b-list-group-item>
              <b-list-group-item class="contact_dates" href="#"
                >Lunes a Viernes: 7:30 am – 6:00 pm<br />info@kapitalbank.com.co<br />Chatea con
                nosotros.<br />320 564 5215</b-list-group-item
              >
            </b-list-group>
          </b-col>
          <b-col>
            <b-list-group>
              <b-list-group-item class="title_footer" href="#">Información útil</b-list-group-item>
              <b-list-group-item href="#">Ayuda</b-list-group-item>
              <b-list-group-item href="#">Realiza tu solicitud física</b-list-group-item>
            </b-list-group>
          </b-col>
          <b-col>
            <b-list-group>
              <b-list-group-item class="title_footer" href="#">Síguenos en</b-list-group-item>
              <div class="container_socialMedia">
                <img src="/img/facebook.png" alt="facebook_top" class="fb_img_fot" />
                <img src="/img/instagram.png" alt="instagram_top" class="inst_img_fot" />
                <img src="/img/youtube.png" alt="youtube_top" class="you_img_fot" />
              </div>
            </b-list-group>
          </b-col>
        </b-row>
        <div class="terms">
          <span
            >Utilizando nuestro sitio web o cualquiera de nuestras aplicaciones estás aceptando
            también las políticas de privacidad / términos y condiciones</span
          >
        </div>
      </div>
    </div>
  </footer>
  <!-- End of Footer -->
</template>

<style scoped>
/* Estilos de footer */
.footer_container {
  background-image: url('/img/footer_fondo.jpg');
  background-size: cover;
  padding: 5.3rem 0 45px 0 !important;
  color: #fff;
  margin-top: 5%;
}
.container_logo {
  padding: 0 11%;
  margin: 0px 0px 40px;
}
.logo_footer {
  width: 21%;
}
.title_footer {
  font-weight: bolder;
  font-size: 19px !important;
}
.terms {
  margin-top: 4%;
}
.contact_dates {
  padding-right: 0;
  line-height: 28px;
  font-size: 17px;
}
.container_socialMedia {
  display: inline-flex;
  margin-top: 10px;
}
.fb_img_fot {
  width: 15% !important;
  margin-right: 29px;
}
.inst_img_fot {
  width: 15% !important;
  margin-right: 29px;
}

.you_img_fot {
  width: 18% !important;
}
.list-group-item {
  position: relative;
  display: block;
  font-size: 17px;
  padding: 7px 1.25rem;
  background-color: transparent !important;
  border: none !important;
  color: #fff !important;
  text-align: left;
  line-height: 28px;
}
</style>
