<template>
  <div>
    <b-row align-h="center" class="banner_home">
      <b-col cols="6"> </b-col>
      <b-col cols="6" class="col2_sec1">
        <h1 class="title_banner1">
          <span class="bold_title">Nuestro proposito</span><br />es brindarte
          <span class="bold_title">nuevas</span>
        </h1>
        <h1 class="title_bannerHome2">oportunidades.</h1>
        <p class="text_bannerHome">
          Pide tu <span class="bold_title">crédito facil y rápido</span> en solo
          <span class="bold_title">20 minutos,</span> <br />sin ﬁlas, codeudores o cobros ocultos.
        </p>
        <b-button class="btn btn_know" :to="{ name: 'SolicitarCredito' }">
          Solicita tu crédito
        </b-button>
      </b-col>
    </b-row>
    <b-row align-h="center" class="section2">
      <b-col cols="7" class="text_evolution">
        <img src="/img/linea2Home.svg" alt="linea1" class="line_1home" />
        <h1 class="title_banner1"><span class="bold_title">¡Hemos</span></h1>
        <h1 class="title_evol_sec2">evolucionado</h1>
        <h1 class="title_evol_sec2_blue"><span class="bold_title">por ti!</span></h1>
        <img src="/img/linea1Home.svg" alt="linea1" class="line_2home" />
        <p class="text_bannerHome">
          Millones de Colombianos están
          <span class="bold_title"
            >reinventando<br />
            su vida ﬁnanciera</span
          >
          a través de nuestros créditos.
        </p>
        <b-button class="btn btn_know" :to="{ name: 'SolicitarCredito' }">
          Solicita tu crédito
        </b-button>
      </b-col>
      <b-col cols="5" class="">
        <img src="/img/imgSec2Home.png" alt="img-sec2-home" class="img-fluid w-60" />
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" class="container_title_steps">
        <h2 class="titule_steps">Tu crédito ahora <b>en cinco pasos</b></h2>
      </b-col>
    </b-row>
    <b-row align-h="center" class="section3">
      <b-col cols="4" class="">
        <img src="/img/step1.svg" alt="img-sec2-home" class="steps_row1_1" />
        <p class="text_step1">
          <span class="bold_title">IDENTIFICA</span><br />
          cúal es tu perﬁl<br />
          y cúal de nuestros<br />
          créditos es el<br />
          mejor para ti.
        </p>
      </b-col>
      <b-col cols="4" class="">
        <img src="/img/step2.svg" alt="img-sec2-home" class="steps_row1_2" />
        <p class="text_step2">
          <span class="bold_title">CALCULA</span><br />
          tu crédito, utiliza<br />
          nuestra calculadora<br />
          y diseñalo a tu<br />
          medida. ¿Cuanto? y<br />
          ¿Cuando pagar?
        </p>
      </b-col>
      <b-col cols="4" class="">
        <img src="/img/step3.svg" alt="img-sec2-home" class="steps_row1_3" />
        <p class="text_step3">
          <span class="bold_title">DECISIÓN</span><br />
          ¿La tomaste?<br />
          ahora solo<br />
          queda crear<br />
          tu cuenta
        </p>
      </b-col>
    </b-row>
    <b-row align-h="center" class="section4">
      <b-col cols="6" class="">
        <img src="/img/step4.svg" alt="img-sec2-home" class="steps_row2_4" />
        <p class="text_step4">
          <span class="bold_title">IDENTIFICA</span><br />
          cúal es tu perﬁl<br />
          y cúal de nuestros<br />
          créditos es el<br />
          mejor para ti.
        </p>
      </b-col>
      <b-col cols="6" class="">
        <img src="/img/step5.svg" alt="img-sec2-home" class="steps_row2_5" />
        <p class="text_step5">
          <span class="bold_title">IDENTIFICA</span><br />
          cúal es tu perﬁl<br />
          y cúal de nuestros<br />
          créditos es el<br />
          mejor para ti.
        </p>
      </b-col>
    </b-row>
    <b-row align-h="center" class="section5">
      <b-col cols="12" class="row_girl">
        <b-row class="sec_girl_banner">
          <b-col cols="6" class="">
            <img src="/img/girlImgHome.png" alt="img-sec5-home" class="img-fluid img_girl" />
          </b-col>
          <b-col cols="6" class="banner_blue">
            <div class="div_blue_cont">
              <h1 class="title_blue_cont">
                Solicita tu crédito desde<br />
                <span class="bold_title">cualquier parte del mundo</span>
              </h1>
              <p class="text_blue_cont">
                Con <span class="bold_title">KapitalBank,</span> tienes la posibilidad de solicitar
                el<br />
                tipo de crédito que necesites desde cualquier lugar a<br />
                un <span class="bold_title">solo click,</span> es sumamente fácil y no necesitas a
                un<br />
                gestor para hacerlo. ¡pregúntanos como!
              </p>
              <b-button class="btn btn_blue_cont" :to="{ name: 'SolicitarCredito' }">
                Solicita tu crédito
              </b-button>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-row>
              <b-col cols="12" class="container_title_steps">
                <h2 class="titule_cards"><b>Todos sobre nuestros</b> créditos en linea</h2>
              </b-col>
            </b-row>
            <b-row align-h="center" class="row_tabs">
              <b-col cols="3" class="col_tab1">
                <img src="/img/docentIcon.svg" class="icon_tabs_img" />
                <p class="armadas_title">
                  Créditos para<br />
                  <b>docentes</b>
                </p>
                <div class="docent_back_Tab">
                  <p class="title_hover_sec">
                    Créditos para<br />
                    <b>docentes</b>
                  </p>
                  <ul>
                    <li>
                      ¿Como funcionan los créditos online?
                    </li>
                    <li>
                      Pagadurias
                    </li>
                    <li>
                      Crédito de cosumo
                    </li>
                    <li>
                      Crédito de libranza
                    </li>
                    <li>
                      Libre inversion o compra de cartera
                    </li>
                    <li>
                      Tiempos
                    </li>
                  </ul>
                </div>
              </b-col>
              <b-col cols="3" class="col_tab2">
                <img src="/img/pensIcon.svg" alt="img-sec5-home" class="icon_tabs_img" />
                <p class="armadas_title">
                  Créditos para<br />
                  <b>pensionados</b>
                </p>
                <div class="pensi_back_Tab">
                  <p class="title_hover_sec">
                    Créditos para<br />
                    <b>pensionados</b>
                  </p>
                  <ul>
                    <li>
                      ¿Como funcionan los créditos online?
                    </li>
                    <li>
                      Pagadurias
                    </li>
                    <li>
                      Crédito de cosumo
                    </li>
                    <li>
                      Crédito de libranza
                    </li>
                    <li>
                      Libre inversion o compra de cartera
                    </li>
                    <li>
                      Tiempos
                    </li>
                  </ul>
                </div>
              </b-col>
              <b-col cols="3" class="col_tab3">
                <img src="/img/armadasIcon.svg" alt="img-sec5-home" class="icon_tabs_img" />
                <p class="armadas_title">
                  Créditos para<br />
                  <b>fuerzas armadas</b>
                </p>
                <div class="armadas_back_Tab">
                  <p class="title_hover_sec">Créditos para <b>fuerzas armadas de Colombia</b></p>
                  <ul>
                    <li>
                      ¿Como funcionan los créditos online?
                    </li>
                    <li>
                      Pagadurias
                    </li>
                    <li>
                      Crédito de cosumo
                    </li>
                    <li>
                      Crédito de libranza
                    </li>
                    <li>
                      Libre inversion o compra de cartera
                    </li>
                    <li>
                      Tiempos
                    </li>
                  </ul>
                </div>
              </b-col>
              <b-col cols="3" class="col_tab4">
                <img src="/img/employerIcon.svg" alt="img-sec5-home" class="icon_tabs_img" />
                <p class="armadas_title">
                  Créditos para<br />
                  <b>empleados</b>
                </p>
                <div class="employer_back_Tab">
                  <p class="title_hover_sec">
                    Créditos para<br />
                    <b>empleados</b>
                  </p>
                  <ul>
                    <li>
                      ¿Como funcionan los créditos online?
                    </li>
                    <li>
                      Pagadurias
                    </li>
                    <li>
                      Crédito de cosumo
                    </li>
                    <li>
                      Crédito de libranza
                    </li>
                    <li>
                      Libre inversion o compra de cartera
                    </li>
                    <li>
                      Tiempos
                    </li>
                  </ul>
                </div>
              </b-col>
            </b-row>
            <b-row class="row_sec4_btn">
              <b-col cols="12" class="btn_col_sec4">
                <button class="btn btn_know">
                  Conoce mas
                </button>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row class="seccion7">
      <b-col cols="12">
        <b-row>
          <b-col cols="4" class="cols1_sec6">
            <img src="/img/18IconHome.svg" alt="18+icon" class="img_sec6" />
            <p class="sec6_title">Debes ser mayor de<br /><b>18 años.</b></p>
          </b-col>
          <b-col cols="4" class="cols2_sec6">
            <img src="/img/cedulaIconHome.svg" alt="cedulaIcon" class="img_sec6" />
            <p class="sec6_title">Debes presentar tu<br /><b>cédula original.</b></p>
          </b-col>
          <b-col cols="4" class="cols3_sec6">
            <img src="/img/reciboIconHome.svg" alt="reciboIcon" class="img_sec6_3" />
            <p class="sec6_title">
              Debes presentar los <b>2 últimos<br />desprendibles de pago</b>
            </p>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row class="seccion7">
      <b-col cols="12">
        <b-row>
          <b-col cols="5" class=""> </b-col>
          <b-col cols="7" class="">
            <img
              src="https://kapitalbank.com.co/wp-content/uploads/2021/06/14-Linea-1.svg"
              alt="linea1"
              class=""
            />
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" class="">
            <img
              src="https://kapitalbank.com.co/wp-content/uploads/2021/06/29-Texto-2.svg"
              alt="linea2"
              class="img_dreams"
            />
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="7" class="">
            <img
              src="https://kapitalbank.com.co/wp-content/uploads/2021/06/15-Linea-2.svg"
              alt="linea2"
              class=""
            />
          </b-col>
          <b-col cols="5" class=""> </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend({
  computed: {
    ...mapState('auth', ['authUser'])
  }
});
</script>

<style>
/* Estilos de banner home*/
.banner_home {
  width: 100%;
  height: 500px;
  background-image: url('/img/homeBanner.png');
  background-size: cover;
  background-repeat: no-repeat;
}
.col2_sec1 {
  padding: 10% 6%;
}
.text_bannerHome {
  margin: 3% 0 8%;
  text-align: left;
  font-size: 17px;
  line-height: 22px;
  font-family: 'Montserrat';
  color: #0052a7;
  font-weight: 400;
}
.title_banner1 {
  font-size: 45px;
  line-height: 40px;
  font-family: 'Montserrat';
  color: #0052a7;
  font-weight: 300;
}
.bold_title {
  font-weight: 600;
  font-family: 'Montserrat';
}
.title_bannerHome2 {
  font-family: 'Billion Dreams Regular';
  font-size: 70px;
  color: #6770f2;
  margin-top: -14px;
  margin-bottom: -8px;
}
.text_evolution {
  padding: 1% 0 0 25%;
}
.title_evol_sec2 {
  font-family: 'Billion Dreams Regular';
  font-size: 85px;
  color: #6770f2;
  margin-top: -14px;
  margin-bottom: -8px;
}
.title_evol_sec2_blue {
  font-size: 50px;
  line-height: 40px;
  font-family: 'Montserrat';
  color: #0052a7;
  font-weight: 300;
  text-align: right;
  padding-right: 28%;
  margin-top: -19px;
}
.title_evol_sec2_blue1 {
  font-size: 50px;
  line-height: 40px;
  font-family: 'Montserrat';
  color: #0052a7;
  font-weight: 300;
  margin-bottom: 0;
}

.line_1home {
  width: 40%;
  position: absolute;
  left: 72%;
  top: -4%;
}
.line_2home {
  position: absolute;
  width: 40%;
  bottom: 53%;
  right: 47%;
}

/* Fin estilos banner home*/

/* Estilos de secciones home*/
.section2 {
  width: 100%;
  height: auto;
  margin-top: 9%;
  margin-bottom: 10%;
}
.section5 {
  width: 100%;
  height: auto;
  margin: 24% 0 0 0;
  background-image: url(/img/bannerSeccion6.webp);
  background-repeat: no-repeat;
  background-size: cover;
}
.seccion7 {
  margin: 10% auto 2%;
}

/* Fin estilos banner home*/

/* Estilos de steps home*/
.container_title_steps {
  text-align: center;
}
.titule_steps {
  color: #6770f2;
  font-size: 30px;
  font-family: 'Montserrat';
  font-weight: 400;
  margin-bottom: 7%;
}

.steps_row1_1 {
  margin-left: auto;
  width: 47%;
  display: block;
}
.text_step1 {
  position: absolute;
  top: 27%;
  left: 70%;
  font-size: 12px;
  line-height: 16px;
  color: #000;
}
.steps_row1_2 {
  width: 55%;
  margin: auto;
  display: block;
}
.text_step2 {
  position: absolute;
  top: 27%;
  left: 47%;
  font-size: 12px;
  line-height: 16px;
  color: #000;
}
.steps_row1_3 {
  width: 55%;
  margin-left: 0;
  display: block;
}
.text_step3 {
  position: absolute;
  top: 27%;
  left: 27%;
  font-size: 12px;
  line-height: 16px;
  color: #000;
}
.steps_row2_4 {
  margin-left: auto;
  margin-right: 100px;
  width: 34%;
  display: block;
}
.text_step4 {
  position: absolute;
  top: 27%;
  left: 65%;
  font-size: 12px;
  line-height: 16px;
  color: #000;
}
.steps_row2_5 {
  width: 37%;
  display: block;
}
.text_step5 {
  position: absolute;
  top: 27%;
  left: 18%;
  font-size: 12px;
  line-height: 16px;
  color: #000;
}
/* Fin estilos steps home*/

/* Estilos seccion 5 */
.banner_blue {
  width: 100%;
  height: 340px;
  background-image: url('/img/25-Fondo-texto-1.webp');
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: 3%;
}
.row_girl {
  padding: 0;
}
.img_girl {
  margin: auto;
  display: block;
}
.div_blue_cont {
  padding: 12%;
}
.title_blue_cont {
  font-size: 31px;
  line-height: 31px;
  font-family: 'Montserrat';
  color: #fff;
  font-weight: 300;
}
.text_blue_cont {
  font-size: 14px;
  line-height: 16px;
  color: #fff;
  margin: 15px 0;
}
.btn_blue_cont {
  background: #fff;
  color: #0052a7;
  padding: 10px 20px;
  border-radius: 30px;
}
.row_tabs {
  width: 100%;
  height: 435px;
  padding: 100px 200px;
}
.icon_tabs_img {
  width: 35%;
}
.col_tab1 {
  background: #fff;
  border-radius: 20px 0 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}
.col_tab1:hover .docent_back_Tab {
  display: block;
}
.docent_back_Tab {
  display: none;
  background-image: url('/img/docentBack.png');
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  box-shadow: rgb(50 50 93 / 25%) 0px 13px 27px -5px, rgb(0 0 0 / 30%) 0px 8px 16px -8px;
  position: absolute;
  padding: 40px 10px;
  color: #fff;
  width: 120%;
  z-index: 2;
  cursor: pointer;
}
.col_tab2 {
  background: #fff;
  border-radius: 0 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}
.col_tab2:hover .pensi_back_Tab {
  display: block;
}
.pensi_back_Tab {
  display: none;
  background-image: url('/img/pensBackTab.png');
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  box-shadow: rgb(50 50 93 / 25%) 0px 13px 27px -5px, rgb(0 0 0 / 30%) 0px 8px 16px -8px;
  position: absolute;
  padding: 40px 10px;
  color: #fff;
  width: 120%;
  z-index: 2;
  cursor: pointer;
}
.col_tab3 {
  background: #fff;
  border-radius: 0 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}
.col_tab3:hover .armadas_back_Tab {
  display: block;
}
.armadas_back_Tab {
  display: none;
  background-image: url('/img/armadasBackTab.png');
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  box-shadow: rgb(50 50 93 / 25%) 0px 13px 27px -5px, rgb(0 0 0 / 30%) 0px 8px 16px -8px;
  position: absolute;
  padding: 40px 10px;
  color: #fff;
  width: 120%;
  z-index: 2;
  cursor: pointer;
}
.armadas_title {
  margin-top: 5%;
  text-align: center;
  font-size: 18px;
  color: #0052a7;
  line-height: 17px;
}
.title_hover_sec {
  margin-top: 5%;
  text-align: center;
  font-size: 20px;
  color: #fff;
  line-height: 18px;
}
.col_tab4 {
  background: #fff;
  border-radius: 0 20px 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}
.col_tab4:hover .employer_back_Tab {
  display: block;
}
.employer_back_Tab {
  display: none;
  background-image: url('/img/employerBackTab.png');
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  box-shadow: rgb(50 50 93 / 25%) 0px 13px 27px -5px, rgb(0 0 0 / 30%) 0px 8px 16px -8px;
  position: absolute;
  padding: 40px 10px;
  color: #fff;
  width: 120%;
  z-index: 2;
  cursor: pointer;
}
.btn_know {
  background-image: linear-gradient(to right, #004280 0%, #6d71fc 55%, #004280 100%);
  padding: 8px 40px;
  color: #fff;
  border-radius: 50px;
}
.btn_know {
  transition: 0.5s;
  background-size: 200% auto;
}

.btn_know:hover {
  background-position: right center;
}
.row_sec4_btn {
  text-align: center;
}
.btn_col_sec4 {
  display: block;
  margin: auto;
}
.titule_cards {
  color: #6770f2;
  font-size: 30px;
  font-family: 'Montserrat';
  font-weight: 400;
  margin-top: -3%;
}
.sec_girl_banner {
  position: relative;
  width: 100%;
  top: -18%;
  margin: 0;
}
/* Fin estilos seccion 5*/

/* Estilos seccion 6 */
.cols1_sec6 {
  display: flex;
  align-items: flex-end;
  justify-content: right;
  flex-direction: column;
}
.cols2_sec6 {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.cols3_sec6 {
  display: flex;
  align-items: flex-start;
  justify-content: left;
  flex-direction: column;
}
.img_sec6 {
  width: 40%;
}
.img_sec6_3 {
  width: 40%;
  margin-left: 30px;
}
.sec6_title {
  margin-top: 2%;
  text-align: center;
  font-size: 18px;
  line-height: 21px;
}
/* FIn estilos seccion 6 */
/* Estilos seccion 7 */
.img_dreams {
  width: 40%;
  margin: 6% auto;
  display: block;
}
/* Fin estilos seccion 7*/
</style>
