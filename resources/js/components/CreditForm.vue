<template>
  <b-form @submit.prevent="submitData" v-if="creditInfo">
    <!-- Informacion Personal -->

    <b-form-group label="" label-size="sm" label-class="h2 pt-0" class="mb-0">
      <div class="seccion1">
        <b-row>
          <b-col cols="12">
            <h3 class="tituleInfo">1. Tu Información Personal</h3>
            <p class="labelForm genderLabel">Género</p>
            <b-form-radio-group
              id="gender"
              class="labelGen mb-3"
              v-model="$v.form.gender.$model"
              :options="genders"
              :state="validateState('gender')"
            >
              <b-form-valid-feedback>
                Thank you!
              </b-form-valid-feedback>
              <b-form-invalid-feedback>
                Este campo es requerido.
              </b-form-invalid-feedback>
            </b-form-radio-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="6">
            <b-form-group>
              <b-row class="rowForm">
                <b-col cols="4" class="labelContenedor">
                  <label for="firstName" class="labelForm">
                    Primer Nombre
                  </label>
                </b-col>
                <b-col cols="8" class="inputContenedor">
                  <b-form-input
                    id="firstName"
                    class="backgroundFields"
                    v-model="$v.form.firstName.$model"
                    :state="validateState('firstName')"
                    trim
                  />
                  <b-form-invalid-feedback>
                    Este campo es requerido.
                  </b-form-invalid-feedback>
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group>
              <b-row class="rowForm">
                <b-col cols="4" class="labelContenedor">
                  <label for="middleName" class="labelForm">
                    Segundo Nombre
                  </label>
                </b-col>
                <b-col cols="8" class="inputContenedor">
                  <b-form-input
                    id="middleName"
                    class="backgroundFields"
                    v-model="$v.form.middleName.$model"
                    :state="validateState('middleName')"
                    trim
                  />
                  <b-form-invalid-feedback>
                    Este campo es requerido.
                  </b-form-invalid-feedback>
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="6">
            <b-form-group>
              <b-row class="rowForm">
                <b-col cols="4" class="labelContenedor">
                  <label for="firstLastname" class="labelForm">
                    Primer Apellido
                  </label>
                </b-col>
                <b-col cols="8" class="inputContenedor">
                  <b-form-input
                    id="firstLastname"
                    class="backgroundFields"
                    v-model="$v.form.firstLastname.$model"
                    :state="validateState('firstLastname')"
                    trim
                  />
                  <b-form-invalid-feedback>
                    Este campo es requerido.
                  </b-form-invalid-feedback>
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group>
              <b-row class="rowForm">
                <b-col cols="4" class="labelContenedor">
                  <label class="labelForm">
                    Segundo Apellido
                  </label>
                </b-col>
                <b-col cols="8" class="inputContenedor">
                  <b-form-input
                    id="secondLastname"
                    class="backgroundFields"
                    v-model="$v.form.secondLastname.$model"
                    :state="validateState('secondLastname')"
                    trim
                  />
                  <b-form-invalid-feedback>
                    Este campo es requerido.
                  </b-form-invalid-feedback>
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="6">
            <b-form-group label-for="birthday" valid-feedback="Thank you!">
              <b-row class="rowForm">
                <b-col cols="4" class="labelContenedor">
                  <p class="labelForm">Fecha de Nacimiento</p>
                </b-col>
                <b-col cols="8" class="inputContenedor">
                  <b-form-datepicker
                    id="birthday"
                    class="backgroundFields sizeCalendar"
                    v-model="form.birthday"
                    :state="state"
                    locale="es"
                  />
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
          <b-col cols="6"> </b-col>
        </b-row>
      </div>

      <div class="seccion2">
        <b-row>
          <b-col cols="6">
            <b-form-group
              label-for="idType"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedback"
              :state="state"
            >
              <b-row class="rowForm">
                <b-col cols="4" class="labelContenedor">
                  <p class="labelForm">Tipo de Documento</p>
                </b-col>
                <b-col cols="8" class="inputContenedor">
                  <b-form-select
                    id="idType"
                    class="selectBorder"
                    :options="idTypes"
                    v-model="$v.form.idType.$model"
                    :state="validateState('idType')"
                  />
                  <b-form-invalid-feedback>
                    Este campo es requerido.
                  </b-form-invalid-feedback>
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group
              label-for="idNumber"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedback"
              :state="state"
            >
              <b-row class="rowForm">
                <b-col cols="4" class="labelContenedor">
                  <p class="labelForm">Número de Documento</p>
                </b-col>
                <b-col cols="8" class="inputContenedor">
                  <b-form-input
                    id="idNumber"
                    v-model="$v.form.idNumber.$model"
                    :state="validateState('idNumber')"
                    trim
                  />
                  <b-form-invalid-feedback>
                    Este campo es requerido.
                  </b-form-invalid-feedback>
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="6">
            <b-form-group
              label-for="idExpeditionDate"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedback"
              :state="state"
            >
              <b-row class="rowForm">
                <b-col cols="4" class="labelContenedor">
                  <p class="labelForm">Fecha de Expedición</p>
                </b-col>
                <b-col cols="8" class="inputContenedor">
                  <b-form-datepicker
                    id="idExpeditionDate"
                    v-model="form.idExpeditionDate"
                    :state="state"
                    locale="es"
                    class="sizeCalendar"
                  />
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
          <b-col cols="6"> </b-col>
        </b-row>
      </div>
      <div class="seccion3">
        <b-row>
          <b-col cols="6">
            <b-form-group
              label-for="maritalStatus"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedback"
              :state="state"
            >
              <b-row class="rowForm">
                <b-col cols="5" class="labelContenedor">
                  <p class="labelForm">Estado Civil</p>
                </b-col>
                <b-col cols="7" class="inputContenedor">
                  <b-form-select
                    id="maritalStatus"
                    :options="maritalStatuses"
                    v-model="$v.form.maritalStatus.$model"
                    :state="validateState('maritalStatus')"
                    class="selectBack"
                  />
                  <b-form-invalid-feedback>
                    Este campo es requerido.
                  </b-form-invalid-feedback>
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group
              label-for="childs"
              label-class="mb-3"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedback"
              :state="state"
            >
              <b-row class="rowForm">
                <b-col cols="6" class="labelContenedor">
                  <p class="labelForm">¿Cuántos hijos tienes?</p>
                </b-col>
                <b-col cols="6" class="inputContenedor">
                  <b-form-select
                    id="childs"
                    :options="childs"
                    v-model="$v.form.childs.$model"
                    :state="validateState('childs')"
                    class="selectBack"
                  />
                  <b-form-invalid-feedback>
                    Este campo es requerido.
                  </b-form-invalid-feedback>
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="6">
            <b-form-group
              label-for="living"
              label-class="mb-3"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedback"
              :state="state"
            >
              <b-row class="rowForm">
                <b-col cols="4" class="labelContenedor">
                  <p class="labelForm">Personas<br />a cargo</p>
                </b-col>
                <b-col cols="8" class="inputContenedor">
                  <b-form-select
                    id="living"
                    :options="living"
                    v-model="$v.form.living.$model"
                    :state="validateState('living')"
                    class="selectBack"
                  />
                  <b-form-invalid-feedback>
                    Este campo es requerido.
                  </b-form-invalid-feedback>
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group
              label-for="studies"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedback"
              :state="state"
            >
              <b-row class="rowForm">
                <b-col cols="6" class="labelContenedor">
                  <p class="labelForm">¿Cuál es tu nivel de educativo?</p>
                </b-col>
                <b-col cols="6" class="inputContenedor">
                  <b-form-select
                    id="studies"
                    :options="studies"
                    v-model="$v.form.studies.$model"
                    :state="validateState('studies')"
                    class="selectBack"
                  />
                  <b-form-invalid-feedback>
                    Este campo es requerido.
                  </b-form-invalid-feedback>
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="6">
            <b-form-group>
              <b-row class="rowForm">
                <b-col cols="4" class="labelContenedor">
                  <label class="labelForm">
                    Ciudad
                  </label>
                </b-col>
                <b-col cols="8" class="inputContenedor">
                  <b-form-input
                    id="city"
                    class="backgroundFields oneLine"
                    v-model="$v.form.city.$model"
                    :state="validateState('city')"
                    trim
                  />
                  <b-form-invalid-feedback>
                    Este campo es requerido.
                  </b-form-invalid-feedback>
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="6">
            <b-form-group
              label-for="address"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedback"
            >
              <b-row class="rowForm">
                <b-col cols="4" class="labelContenedor">
                  <p class="labelForm">Dirección</p>
                </b-col>
                <b-col cols="8" class="inputContenedor">
                  <b-form-input
                    id="address"
                    class="backgroundFields oneLine"
                    v-model="$v.form.address.$model"
                    :state="validateState('address')"
                    trim
                  />
                  <b-form-invalid-feedback>
                    Este campo es requerido.
                  </b-form-invalid-feedback>
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group
              label-for="time"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedback"
              :state="state"
            >
              <b-row class="rowForm">
                <b-col cols="4" class="labelContenedor">
                  <p class="labelForm">Tiempo de residencia</p>
                </b-col>
                <b-col cols="8" class="inputContenedor">
                  <b-form-select
                    class="selectBack"
                    id="time"
                    :options="time"
                    v-model="$v.form.time.$model"
                    :state="validateState('time')"
                  />
                  <b-form-invalid-feedback>
                    Este campo es requerido.
                  </b-form-invalid-feedback>
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="6">
            <b-form-group
              label-for="estrato"
              label-class="mb-3"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedback"
              :state="state"
            >
              <b-row class="rowForm">
                <b-col cols="4" class="labelContenedor">
                  <p class="labelForm">Estrato</p>
                </b-col>
                <b-col cols="8" class="inputContenedor">
                  <b-form-select
                    id="estrato"
                    class="selectBack oneLine"
                    :options="estrato"
                    v-model="$v.form.estrato.$model"
                    :state="validateState('estrato')"
                  />
                  <b-form-invalid-feedback>
                    Este campo es requerido.
                  </b-form-invalid-feedback>
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
          <b-col cols="6"> </b-col>
        </b-row>
      </div>

      <div class="seccion4">
        <b-row>
          <b-col cols="6">
            <b-form-group
              label-for="phoneNumber"
              label-class="mb-3"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedback"
              :state="state"
            >
              <b-row class="rowForm">
                <b-col cols="5" class="labelContenedor">
                  <label class="labelForm">
                    Número celular
                  </label>
                </b-col>
                <b-col cols="7" class="inputContenedor">
                  <b-form-input
                    id="phoneNumber"
                    class="oneLine"
                    v-model="$v.form.phoneNumber.$model"
                    :state="validateState('phoneNumber')"
                    trim
                  />
                  <b-form-invalid-feedback>
                    Este campo es requerido.
                  </b-form-invalid-feedback>
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group
              label-for="phoneNumberFijo"
              label-class="mb-3"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedback"
              :state="state"
            >
              <b-row class="rowForm">
                <b-col cols="5" class="labelContenedor">
                  <label class="labelForm">
                    Teléfono fijo
                  </label>
                </b-col>
                <b-col cols="7" class="inputContenedor">
                  <b-form-input
                    id="phoneNumberFijo"
                    class="oneLine"
                    v-model="$v.form.phoneNumberFijo.$model"
                    :state="validateState('phoneNumberFijo')"
                    trim
                  />
                  <b-form-invalid-feedback>
                    Este campo es requerido.
                  </b-form-invalid-feedback>
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="6">
            <b-form-group
              label-for="email"
              label-class="mb-3"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedback"
              :state="state"
            >
              <b-row class="rowForm">
                <b-col cols="4" class="labelContenedor">
                  <p class="labelForm">Correo electrónico</p>
                </b-col>
                <b-col cols="8" class="inputContenedor">
                  <b-form-input
                    id="email"
                    v-model="$v.form.email.$model"
                    :state="validateState('email')"
                    trim
                  />
                  <b-form-invalid-feedback>
                    Este campo es requerido.
                  </b-form-invalid-feedback>
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
        </b-row>

        <p class="detailsSub">Detalles de tus bienes*</p>

        <!-- <b-row>
              <b-col cols="12">
                <b-form-group
                  label="¿Que plan móvile tienes?"
                  label-for="movilePlan"
                  label-class="mb-3"
                  valid-feedback="Thank you!"
                  :invalid-feedback="invalidFeedback"
                  :state="state"
                >
                  <b-form-radio-group id="movilePlan" v-model="form.movilePlan" :options="movilePlan" />
                </b-form-group>
              </b-col>
            </b-row> -->

        <b-row>
          <b-col cols="12">
            <b-form-group
              label-for="transport"
              label-class="mb-3"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedback"
              :state="state"
            >
              <b-form-radio-group id="transport" v-model="form.transport" :options="transport" />
            </b-form-group>
          </b-col>
        </b-row>

        <b-row class="othersField">
          <b-col cols="12">
            <b-form-group
              label-for="others"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedback"
              :state="state"
            >
              <b-row class="rowForm">
                <b-col cols="2" class="labelContenedor">
                  <label class="labelForm">
                    Otro:
                  </label>
                </b-col>
                <b-col cols="10" class="inputContenedor">
                  <b-form-input
                    id="others"
                    placeholder="¿Cuál?"
                    class="selectWhite"
                    v-model="$v.form.others.$model"
                    :state="validateState('others')"
                    trim
                  />
                  <b-form-invalid-feedback>
                    Este campo es requerido.
                  </b-form-invalid-feedback>
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
        </b-row>
      </div>

      <!--<b-row>
            <b-col cols="12">
              <b-form-group
                label="¿Como te enteraste de nosotros?"
                label-for="ours"
                valid-feedback="Thank you!"
                :invalid-feedback="invalidFeedback"
                :state="state"
              >
                <b-form-select id="ours" v-model="form.ours" :options="ours" :state="state" />
              </b-form-group>
            </b-col>
          </b-row>-->

      <div class="seccion5">
        <h3 class="tituleInfo">2. Información Laboral</h3>
        <b-row>
          <b-col cols="6">
            <b-form-group
              label-for="factoryName"
              label-class="mb-3"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedback"
              :state="state"
            >
              <b-row class="rowForm">
                <b-col cols="4" class="labelContenedor">
                  <p class="labelForm">Nombre de la empresa</p>
                </b-col>
                <b-col cols="8" class="inputContenedor">
                  <b-form-input
                    id="factoryName"
                    class="backgroundFields"
                    v-model="$v.form.factoryName.$model"
                    :state="validateState('factoryName')"
                    trim
                  />
                  <b-form-invalid-feedback>
                    Este campo es requerido.
                  </b-form-invalid-feedback>
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group
              label-for="startDate"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedback"
              :state="state"
            >
              <b-row class="rowForm">
                <b-col cols="4" class="labelContenedor">
                  <p class="labelForm">Fecha de ingreso</p>
                </b-col>
                <b-col cols="8" class="inputContenedor">
                  <b-form-datepicker
                    id="startDate"
                    v-model="form.startDate"
                    :state="state"
                    locale="es"
                    class="sizeCalendar backgroundFields"
                  />
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="6">
            <b-form-group
              label-for="workCity"
              label-class="mb-3"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedback"
              :state="state"
            >
              <b-row class="rowForm marginNeto">
                <b-col cols="4" class="labelContenedor">
                  <p class="labelForm">Ciudad</p>
                </b-col>
                <b-col cols="8" class="inputContenedor">
                  <b-form-input
                    id="workCity"
                    class="backgroundFields oneLine"
                    v-model="$v.form.workCity.$model"
                    :state="validateState('workCity')"
                    trim
                  />
                  <b-form-invalid-feedback>
                    Este campo es requerido.
                  </b-form-invalid-feedback>
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group
              label-for="addressWork"
              label-class="mb-3"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedback"
              :state="state"
            >
              <b-row class="rowForm">
                <b-col cols="4" class="labelContenedor">
                  <p class="labelForm">Dirección laboral</p>
                </b-col>
                <b-col cols="8" class="inputContenedor">
                  <b-form-input
                    id="addressWork"
                    class="backgroundFields"
                    v-model="$v.form.addressWork.$model"
                    :state="validateState('addressWork')"
                    trim
                  />
                  <b-form-invalid-feedback>
                    Este campo es requerido.
                  </b-form-invalid-feedback>
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="6">
            <b-form-group
              label-for="phoneWork"
              label-class="mb-3"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedback"
              :state="state"
            >
              <b-row class="rowForm">
                <b-col cols="4" class="labelContenedor">
                  <p class="labelForm">Teléfono laboral</p>
                </b-col>
                <b-col cols="8" class="inputContenedor">
                  <b-form-input
                    id="phoneWork"
                    class="backgroundFields"
                    v-model="$v.form.phoneWork.$model"
                    :state="validateState('phoneWork')"
                    trim
                  />
                  <b-form-invalid-feedback>
                    Este campo es requerido.
                  </b-form-invalid-feedback>
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group
              label-for="nit"
              label-class="mb-3"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedback"
              :state="state"
            >
              <b-row class="rowForm marginNeto">
                <b-col cols="5" class="labelContenedor">
                  <p class="labelForm">Nit empresarial</p>
                </b-col>
                <b-col cols="7" class="inputContenedor">
                  <b-form-input
                    id="nit"
                    class="backgroundFields oneLine"
                    v-model="$v.form.nit.$model"
                    :state="validateState('nit')"
                    trim
                  />
                  <b-form-invalid-feedback>
                    Este campo es requerido.
                  </b-form-invalid-feedback>
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
        </b-row>

        <p class="detailsSub">Información financiera</p>

        <b-row>
          <b-col cols="6">
            <b-form-group
              label-for="ingreso"
              label-class="mb-3"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedback"
              :state="state"
            >
              <b-row class="rowForm">
                <b-col cols="6" class="labelContenedor">
                  <p class="labelForm">Total devengado</p>
                </b-col>
                <b-col cols="6" class="inputContenedor">
                  <b-form-input
                    id="ingreso"
                    class="backgroundFields oneLine"
                    v-model="$v.form.ingreso.$model"
                    :state="validateState('ingreso')"
                    trim
                  />
                  <b-form-invalid-feedback>
                    Este campo es requerido.
                  </b-form-invalid-feedback>
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group
              label-for="gasto"
              label-class="mb-3"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedback"
              :state="state"
            >
              <b-row class="rowForm">
                <b-col cols="6" class="labelContenedor">
                  <p class="labelForm">Total Descuentos</p>
                </b-col>
                <b-col cols="6" class="inputContenedor">
                  <b-form-input
                    id="gasto"
                    class="backgroundFields oneLine"
                    v-model="$v.form.gasto.$model"
                    :state="validateState('gasto')"
                    trim
                  />
                  <b-form-invalid-feedback>
                    Este campo es requerido.
                  </b-form-invalid-feedback>
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="6">
            <b-form-group
              label-for="neto"
              label-class="mb-3"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedback"
              :state="state"
            >
              <b-row class="rowForm marginNeto">
                <b-col cols="5" class="labelContenedor">
                  <p class="labelForm">Neto a pagar</p>
                </b-col>
                <b-col cols="7" class="inputContenedor">
                  <b-form-input
                    id="neto"
                    class="backgroundFields oneLine"
                    v-model="$v.form.neto.$model"
                    :state="validateState('neto')"
                    trim
                  />
                  <b-form-invalid-feedback>
                    Este campo es requerido.
                  </b-form-invalid-feedback>
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="6">
            <b-form-group>
              <b-row class="rowForm margin_data_account">
                <b-col cols="4" class="labelContenedor">
                  <p class="labelForm">Tipo de cuenta</p>
                </b-col>
                <b-col cols="8" class="inputContenedor">
                  <b-form-select
                    id="accountType"
                    class="selectBack"
                    :options="accountType"
                    v-model="$v.form.accountType.$model"
                    :state="validateState('accountType')"
                  />
                  <b-form-invalid-feedback>
                    Este campo es requerido.
                  </b-form-invalid-feedback>
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group>
              <b-row class="rowForm marginNeto">
                <b-col cols="5" class="labelContenedor">
                  <p class="labelForm">Número de cuenta</p>
                </b-col>
                <b-col cols="7" class="inputContenedor">
                  <b-form-input
                    id="accountNumber"
                    class="backgroundFields oneLine"
                    v-model="$v.form.accountNumber.$model"
                    :state="validateState('accountNumber')"
                    trim
                  />
                  <b-form-invalid-feedback>
                    Este campo es requerido.
                  </b-form-invalid-feedback>
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
        </b-row>
      </div>

      <div class="seccion6">
        <p class="detailsSub">Referencia personal</p>
        <b-row>
          <b-col cols="6">
            <b-form-group
              label-for="referenceName"
              label-class="mb-3"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedback"
              :state="state"
            >
              <b-row class="rowForm">
                <b-col cols="4" class="labelContenedor">
                  <p class="labelForm">Nombre completo</p>
                </b-col>
                <b-col cols="8" class="inputContenedor">
                  <b-form-input
                    id="referenceName"
                    v-model="$v.form.referenceName.$model"
                    :state="validateState('referenceName')"
                    trim
                  />
                  <b-form-invalid-feedback>
                    Este campo es requerido.
                  </b-form-invalid-feedback>
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group
              label-for="referencePhone"
              label-class="mb-3"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedback"
              :state="state"
            >
              <b-row class="rowForm">
                <b-col cols="6" class="labelContenedor">
                  <p class="labelForm">Número de<br />celular o fijo</p>
                </b-col>
                <b-col cols="6" class="inputContenedor">
                  <b-form-input
                    id="referencePhone"
                    v-model="$v.form.referencePhone.$model"
                    :state="validateState('referencePhone')"
                    trim
                  />
                  <b-form-invalid-feedback>
                    Este campo es requerido.
                  </b-form-invalid-feedback>
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="6">
            <b-form-group
              label-for="referenceCity"
              label-class="mb-3"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedback"
              :state="state"
            >
              <b-row class="rowForm">
                <b-col cols="3" class="labelContenedor">
                  <p class="labelForm">Ciudad</p>
                </b-col>
                <b-col cols="9" class="inputContenedor">
                  <b-form-input
                    id="referenceCity"
                    placeholder="Selecciona tu ciudad"
                    v-model="$v.form.referenceCity.$model"
                    :state="validateState('referenceCity')"
                    trim
                  />
                  <b-form-invalid-feedback>
                    Este campo es requerido.
                  </b-form-invalid-feedback>
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group
              label-for="referenceAddress"
              label-class="mb-3"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedback"
              :state="state"
            >
              <b-row class="rowForm">
                <b-col cols="6" class="labelContenedor">
                  <p class="labelForm">Dirección de residencia</p>
                </b-col>
                <b-col cols="6" class="inputContenedor">
                  <b-form-input
                    id="referenceAddress"
                    v-model="$v.form.referenceAddress.$model"
                    :state="validateState('referenceAddress')"
                    trim
                  />
                  <b-form-invalid-feedback>
                    Este campo es requerido.
                  </b-form-invalid-feedback>
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="6">
            <b-form-group
              label-for="referenceBarrio"
              label-class="mb-3"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedback"
              :state="state"
            >
              <b-row class="rowForm">
                <b-col cols="3" class="labelContenedor">
                  <p class="labelForm">Barrio</p>
                </b-col>
                <b-col cols="9" class="inputContenedor">
                  <b-form-input
                    id="referenceBarrio"
                    class="oneLine"
                    v-model="$v.form.referenceBarrio.$model"
                    :state="validateState('referenceBarrio')"
                    trim
                    placeholder="Selecciona tu barrio"
                  />
                  <b-form-invalid-feedback>
                    Este campo es requerido.
                  </b-form-invalid-feedback>
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group
              label-for="referenceParent"
              label-class="mb-3"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedback"
              :state="state"
            >
              <b-row class="rowForm">
                <b-col cols="4" class="labelContenedor">
                  <p class="labelForm">Parentesco</p>
                </b-col>
                <b-col cols="8" class="inputContenedor">
                  <b-form-input
                    id="referenceParent"
                    class="oneLine"
                    v-model="$v.form.referenceParent.$model"
                    :state="validateState('referenceParent')"
                    trim
                  />
                  <b-form-invalid-feedback>
                    Este campo es requerido.
                  </b-form-invalid-feedback>
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
        </b-row>
      </div>

      <div class="seccion7">
        <p class="detailsSub">Referencia familiar</p>
        <b-row>
          <b-col cols="6">
            <b-form-group
              label-for="referenceFName"
              label-class="mb-3"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedback"
              :state="state"
            >
              <b-row class="rowForm">
                <b-col cols="4" class="labelContenedor">
                  <p class="labelForm">Nombre completo</p>
                </b-col>
                <b-col cols="8" class="inputContenedor">
                  <b-form-input
                    id="referenceFName"
                    class="backgroundFields"
                    v-model="$v.form.referenceFName.$model"
                    :state="validateState('referenceFName')"
                    trim
                  />
                  <b-form-invalid-feedback>
                    Este campo es requerido.
                  </b-form-invalid-feedback>
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group
              label-for="referenceFPhone"
              label-class="mb-3"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedback"
              :state="state"
            >
              <b-row class="rowForm">
                <b-col cols="6" class="labelContenedor">
                  <p class="labelForm">Número de<br />celular o fijo</p>
                </b-col>
                <b-col cols="6" class="inputContenedor">
                  <b-form-input
                    id="referenceFPhone"
                    class="backgroundFields"
                    v-model="$v.form.referenceFPhone.$model"
                    :state="validateState('referenceFPhone')"
                    trim
                  />
                  <b-form-invalid-feedback>
                    Este campo es requerido.
                  </b-form-invalid-feedback>
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="6">
            <b-form-group
              label-for="referenceFCity"
              label-class="mb-3"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedback"
              :state="state"
            >
              <b-row class="rowForm marginNeto">
                <b-col cols="4" class="labelContenedor">
                  <p class="labelForm">Ciudad</p>
                </b-col>
                <b-col cols="8" class="inputContenedor">
                  <b-form-input
                    id="referenceFCity"
                    class="backgroundFields selectBack"
                    v-model="$v.form.referenceFCity.$model"
                    :state="validateState('referenceFCity')"
                    trim
                  />
                  <b-form-invalid-feedback>
                    Este campo es requerido.
                  </b-form-invalid-feedback>
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group
              label-for="referenceFAddress"
              label-class="mb-3"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedback"
              :state="state"
            >
              <b-row class="rowForm">
                <b-col cols="6" class="labelContenedor">
                  <p class="labelForm">Dirección de residencia</p>
                </b-col>
                <b-col cols="6" class="inputContenedor">
                  <b-form-input
                    id="referenceFAddress"
                    class="backgroundFields"
                    v-model="$v.form.referenceFAddress.$model"
                    :state="validateState('referenceFAddress')"
                    trim
                  />
                  <b-form-invalid-feedback>
                    Este campo es requerido.
                  </b-form-invalid-feedback>
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="6">
            <b-form-group
              label-for="referenceFBarrio"
              label-class="mb-3"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedback"
              :state="state"
            >
              <b-row class="rowForm">
                <b-col cols="4" class="labelContenedor">
                  <p class="labelForm">Barrio</p>
                </b-col>
                <b-col cols="8" class="inputContenedor">
                  <b-form-input
                    id="referenceFBarrio"
                    class="backgroundFields selectBack"
                    v-model="$v.form.referenceFBarrio.$model"
                    :state="validateState('referenceFBarrio')"
                    trim
                  />
                  <b-form-invalid-feedback>
                    Este campo es requerido.
                  </b-form-invalid-feedback>
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group
              label-for="referenceFParent"
              label-class="mb-3"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedback"
              :state="state"
            >
              <b-row class="rowForm">
                <b-col cols="4" class="labelContenedor">
                  <p class="labelForm">Parentesco</p>
                </b-col>
                <b-col cols="8" class="inputContenedor">
                  <b-form-input
                    id="referenceFParent"
                    class="backgroundFields selectBack"
                    v-model="$v.form.referenceFParent.$model"
                    :state="validateState('referenceFParent')"
                    trim
                  />
                  <b-form-invalid-feedback>
                    Este campo es requerido.
                  </b-form-invalid-feedback>
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="6">
            <b-form-group
              label-for="referenceFState"
              label-class="mb-3"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedback"
              :state="state"
            >
              <b-row class="rowForm">
                <b-col cols="6" class="labelContenedor">
                  <p class="labelForm">Estado actual</p>
                </b-col>
                <b-col cols="6" class="inputContenedor">
                  <b-form-input
                    id="referenceFState"
                    class="backgroundFields selectBack"
                    v-model="$v.form.referenceFState.$model"
                    :state="validateState('referenceFState')"
                    trim
                  />
                  <b-form-invalid-feedback>
                    Este campo es requerido.
                  </b-form-invalid-feedback>
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
        </b-row>
      </div>
      <div class="seccion8">
        <b-row>
          <b-col cols="6">
            <h3 class="tituleInfo">3. Oferta y aceptación</h3>
            <p class="titelFinalForm">¡Debes verificar las condiciones de tu crédito!</p>
            <b-list-group>
              <b-list-group-item v-for="item in items" :key="item.key" class="listTableGroup">
                <b-row class="rowTable">
                  <b-col class="nameTable">{{ item.key }}</b-col>
                  <b-col class="numberTable">{{ item.value | currency }}</b-col>
                </b-row>
              </b-list-group-item>
            </b-list-group>
          </b-col>
          <b-col cols="6" class="colDataForm">
            <div class="infoFinalContainer">
              <p class="detailsSub">Monto solicitado</p>
              <h2 class="numberMonto">
                {{ (this.creditInfo.total + this.creditInfo.iva) | currency }}
              </h2>
              <p class="detailsSub">Plazo de pago</p>
              <h3 class="dateSub">31 - Dic - 2023</h3>
              <div class="btnContainer">
                <b-button type="submit" v-b-modal.modal-1 class="btnAceptCredit">Aceptar</b-button>

                <b-modal id="modal-1" class="modalFinalCredit" @ok="aproveValue" centered>
                  <img
                    src="/img/logoKapital_White.png"
                    alt="Logo KapitalBank White "
                    class="imgLogoPopup"
                  />
                  <div class="containerInfoModal">
                    <p class="namePopup">{{ form.firstName }} {{ form.middleName }}</p>
                    <p class="lastNamePopup">{{ form.firstLastname }} {{ form.secondLastname }}</p>
                    <p class="detailsSub">¡eres nuestro cliente</p>
                    <p class="fontBillion">más importante!</p>
                    <p class="textPopup">
                      Espera un poco
                      <strong>
                        estamos por<br />
                        terminar,
                      </strong>
                      nuestro sistema esta<br />analizando tu solicitud
                    </p>
                    <b-button class="btnAceptCredit" :to="{ name: 'Home' }">Aceptar</b-button>
                  </div>
                </b-modal>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </b-form-group>
  </b-form>
</template>

<script lang="ts">
interface Items {
  adminCost: singleItems;
  secure: singleItems;
  interest: singleItems;
  totalForm: singleItems;
  iva: singleItems;
  totalPay: singleItems;
  totalCuote: singleItems;
}

interface singleItems {
  key: string;
  value: number;
}

import Vue from 'vue';
import axios from 'axios';
import { validationMixin } from 'vuelidate';
import { required, minLength } from 'vuelidate/lib/validators';

import { mapActions, mapState } from 'vuex';

export default Vue.extend({
  mixins: [validationMixin],
  data() {
    return {
      form: {
        gender: null,
        firstName: '',
        middleName: '',
        firstLastname: '',
        secondLastname: '',
        birthday: '',
        idType: '',
        idExpeditionDate: '',
        idNumber: '',

        maritalStatus: '',
        living: '',
        childs: '',
        studies: '',
        city: '',
        address: '',
        estrato: '',
        time: '',
        phoneNumber: '',
        phoneNumberFijo: '',
        movilePlan: '',
        email: '',
        transport: '',
        ours: '',
        factoryName: '',
        startDate: '',
        addressWork: '',
        phoneWork: '',
        workCity: '',
        nit: '',
        ingreso: '',
        gasto: '',
        referenceName: '',
        referencePhone: '',
        referenceCity: '',
        referenceAddress: '',
        referenceBarrio: '',
        referenceParent: '',
        referenceFName: '',
        referenceFPhone: '',
        referenceFCity: '',
        referenceFAddress: '',
        referenceFBarrio: '',
        referenceFParent: '',
        referenceFState: '',
        others: '',
        neto: '',
        accountNumber: ''
      },
      genders: [
        { text: 'Masculino', value: 'M' },
        { text: 'Femenino', value: 'F' }
      ],
      movilePlan: [
        { text: 'Prepago', value: 'Y' },
        { text: 'Pospago', value: 'X' }
      ],
      transport: [
        { text: 'Carro', value: 'Y' },
        { text: 'Moto', value: 'X' },
        { text: 'Casa/Apartamento', value: 'X' },
        { text: 'Ninguno', value: 'Z' }
      ],
      ours: [
        { text: 'Redes sociales', value: 'Y' },
        { text: 'Un amigo', value: 'X' },
        { text: 'Propaganda y publicidad', value: 'Z' }
      ],
      time: [
        { text: '6 meses', value: '6' },
        { text: '1 año', value: '1' },
        { text: 'mas de 1 año', value: '2' }
      ],
      living: [
        { text: 'Solo', value: 'S' },
        { text: 'Padres', value: 'P' },
        { text: 'Hermanos', value: 'H' },
        { text: 'Esposo(a)', value: 'E' },
        { text: 'Pareja Estable', value: 'PE' },
        { text: 'Hijos', value: 'HJ' },
        { text: 'Amigos', value: 'A' },
        { text: 'Otro', value: 'X' }
      ],
      childs: [
        { text: '0', value: '0' },
        { text: '1', value: '1' },
        { text: '2', value: '2' },
        { text: '3', value: '3' },
        { text: '4', value: '4' },
        { text: '+', value: 'x' }
      ],
      estrato: [
        { text: '1', value: '1' },
        { text: '2', value: '2' },
        { text: '3', value: '3' },
        { text: '4', value: '4' },
        { text: '6', value: '6' }
      ],
      idTypes: [
        { text: 'Cédula de Ciudadanía', value: 'CC' },
        { text: 'Cédula de Extranjería', value: 'CE' }
      ],
      accountType: [
        { text: 'Corriente', value: 'CORRIENTE' },
        { text: 'Ahorros', value: 'AHORROS' }
      ],
      maritalStatuses: ['Casado (a)', 'Soltero (a)', 'Union Libre', 'Comprometido (a)'],
      studies: ['Bachillerato', 'Universidad', 'Posgrado', 'Doctorado'],
      state: null
    };
  },
  validations: {
    form: {
      gender: {
        required
      },
      firstName: {
        required
      },
      middleName: {
        required
      },
      firstLastname: {
        required
      },
      secondLastname: {
        required
      },
      birthday: {
        required
      },
      idType: {
        required
      },
      idExpeditionDate: {
        required
      },
      idNumber: {
        required
      },
      maritalStatus: {
        required
      },
      living: {
        required
      },
      childs: {
        required
      },
      studies: {
        required
      },
      city: {
        required
      },
      address: {
        required
      },
      estrato: {
        required
      },
      time: {
        required
      },
      phoneNumber: {
        required
      },
      phoneNumberFijo: {
        required
      },
      movilePlan: {
        required
      },
      email: {
        required
      },
      transport: {
        required
      },
      ours: {
        required
      },
      factoryName: {
        required
      },
      startDate: {
        required
      },
      addressWork: {
        required
      },
      phoneWork: {
        required
      },
      workCity: {
        required
      },
      nit: {
        required
      },
      ingreso: {
        required
      },
      gasto: {
        required
      },
      referenceName: {
        required
      },
      referencePhone: {
        required
      },
      referenceCity: {
        required
      },
      referenceAddress: {
        required
      },
      referenceBarrio: {
        required
      },
      referenceParent: {
        required
      },
      referenceFName: {
        required
      },
      referenceFPhone: {
        required
      },
      referenceFCity: {
        required
      },
      referenceFAddress: {
        required
      },
      referenceFBarrio: {
        required
      },
      referenceFParent: {
        required
      },
      referenceFState: {
        required
      },
      others: {
        required
      },
      neto: {
        required
      },
      accountNumber: {
        required
      },
      accountType: {
        required
      }
    }
  },
  mounted() {
    let localCreditInfo: any = window.localStorage.getItem('creditInfo');
    let creditInfo = this.creditInfo ? this.creditInfo : JSON.parse(localCreditInfo);
    this.setCreditInfo(creditInfo);
  },
  computed: {
    ...mapState('credit', ['creditInfo']),
    items(): Items {
      return {
        adminCost: { key: 'Costo Administrativo', value: this.creditInfo.administration },
        secure: { key: 'Seguro (Vida deudor)', value: this.creditInfo.insurance },
        interest: { key: 'Tasa de Interés', value: this.creditInfo.interestRate },
        totalForm: { key: 'TOTAL', value: this.creditInfo.total },
        iva: { key: 'IVA', value: this.creditInfo.iva },
        totalPay: { key: 'TOTAL A PAGAR', value: this.creditInfo.total + this.creditInfo.iva },
        totalCuote: {
          key: 'CUOTA MENSUAL',
          value: (this.creditInfo.total + this.creditInfo.iva) / this.creditInfo.dues
        }
      };
    }
  },
  methods: {
    ...mapActions('credit', ['setCreditInfo']),
    validateState(name: any) {
      const { $dirty, $error }: any = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    submitData() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

      let params = this.form;
      console.log(params, 'esto es params');
      axios
        .post('/cotizer-data', params)
        .then()
        .catch();
    },

    aproveValue() {
      if (this.creditInfo.total.value <= 250000) {
        this.$swal({
          icon: 'success',
          title: 'Felicidades tu credito ha sido aprobado'
        }).then(() => {
          this.$router.push({ name: 'Register' });
        });
      } else {
        this.$swal({
          icon: 'error',
          title: 'Ups, tu credito ha sido rechazado'
        });
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.sidebar {
  transition: width 400ms;
}
.labelForm {
  font-size: 13px;
  margin-bottom: 0;
  color: #6970f2;
  font-weight: bolder;
}
.labelContenedor {
  border-bottom: 1px solid #c9c9ce;
}
.inputContenedor {
  border-bottom: 1px solid #c9c9ce;
}
.form-control {
  border: none;
}
.rowForm {
  margin-right: 30px;
}
// secciones
.seccion1 {
  padding: 50px 97px 20px;
  background: #e7e8fd;
  border-radius: 20px;
}
.seccion2 {
  padding: 35px 97px;
  background: #fff;
}
.seccion3 {
  padding: 50px 97px 20px;
  background: #e7e8fd;
  border-radius: 20px;
}
.seccion4 {
  padding: 35px 97px;
  background-color: #fff;
}
.seccion5 {
  padding: 50px 97px 51px;
  background-color: #e7e8fd;
  border-radius: 20px;
}
.seccion6 {
  padding: 35px 97px;
  background-color: #fff;
}
.seccion7 {
  padding: 30px 97px 10px;
  background-color: #e7e8fd;
  border-radius: 20px;
}
.seccion8 {
  padding: 35px 97px;
  background: #fff;
}
.colDataForm {
  text-align: right;
}
.detailsSub {
  font-size: 20px;
  margin-top: 5%;
  font-weight: bolder;
  margin-bottom: 25px;
  color: #0052a7;
}
.dateSub {
  font-size: 32px;
  margin-top: 5%;
  font-weight: 200;
  margin-bottom: 25px;
  color: #6770f2;
  margin-top: -6%;
}
.margin_data_account {
  margin-top: 10px;
}
.fontBillion {
  font-family: 'Billion Dreams Regular';
  font-size: 32px;
  margin-top: 5%;
  font-weight: 200;
  margin-bottom: 25px;
  color: #6770f2;
  margin-top: -6%;
}
.lastNamePopup {
  font-size: 30px;
  margin-top: 5%;
  font-weight: 200;
  margin-bottom: 25px;
  color: #0052a7;
  margin-top: -9%;
}
.titelFinalForm {
  font-size: 20px;
  margin-top: 5%;
  font-weight: 200;
  margin-bottom: 25px;
  color: #685856;
}
.textPopup {
  font-size: 16px;
  line-height: 1.2;
  margin-top: 5%;
  font-weight: 200;
  margin-bottom: 30px;
  color: #685856;
}
.imgLogoPopup {
  position: absolute;
  top: -35%;
  width: 46%;
  left: 29%;
}
.backgroundFields {
  background-color: #e7e8fd;
}
.sizeCalendar {
  font-size: 13px;
}
.labelGen {
  font-size: 13px;
}
.genderLabel {
  margin-bottom: 3px;
}
.selectBorder {
  border: none;
}
.tituleInfo {
  font-size: 32px;
  font-weight: bolder;
  color: #0052a7;
  margin-bottom: 5%;
}
.numberMonto {
  font-size: 32px;
  font-weight: bolder;
  margin-bottom: 5%;
  margin-top: -6%;
  color: #6770f2;
}
.namePopup {
  font-size: 25px;
  font-weight: bolder;
  margin-bottom: 5%;
  margin-top: -6%;
  color: #0052a7;
}
.selectBack {
  height: 36px;
  margin-top: -10px;
  background-color: #e7e8fd;
  border: none;
}
.selectWhite {
  height: 35px;
  margin-top: -20px;
  background: none;
  border: none;
  margin-left: -63px;
  position: relative;
  top: 10px;
}
.oneLine {
  height: 36px;
  margin-top: -10px;
  background-color: transparent;
}
.othersField {
  margin-top: 15px;
}
.marginNeto {
  margin-top: 10px;
}
.infoFinalContainer {
  position: relative;
  top: 30%;
}
// estilos de la tabla
.nameTable {
  text-align: left;
}
.numberTable {
  text-align: right;
}
.rowTable {
  padding: 3px;
}
.listTableGroup:nth-child(odd) {
  padding: 0 10px;
  background-color: #fff;
  border: none;
}
.listTableGroup:nth-child(even) {
  padding: 0 10px;
  background-color: #e1e2fc;
  border-radius: 20px;
}

// estilos de boton
.btnContainer {
  margin-top: 26%;
}

.btnAceptCredit {
  padding: 8px 79px;
  background-image: linear-gradient(to right, #004280 0%, #6d71fc 55%, #004280 100%);
  color: #fff;
  border-radius: 50px;
}
.btnAceptPopup {
  padding: 8px 60px;
  background-image: linear-gradient(to right, #004280 0%, #6d71fc 55%, #004280 100%);
  color: #fff;
  border-radius: 50px;
}

.btnAceptCredit {
  transition: 0.5s;
  background-size: 200% auto;
}

// estilos de modal
.containerInfoModal {
  text-align: center;
  padding: 10px;
}
</style>
