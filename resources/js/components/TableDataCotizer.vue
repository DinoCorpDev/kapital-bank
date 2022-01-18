<template>
  <div>
    <b-table striped hover :items="items" responsive head-variant="dark" :fields="fields"></b-table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      items: [],
      fields: [
        {
          key: 'id',
          label: 'ID',
          sortable: true
        },
        {
          key: 'gender',
          label: 'Genero',
          sortable: true
        },
        {
          key: 'firstName',
          label: 'Primer Nombre',
          sortable: false
        },
        {
          key: 'middleName',
          label: 'Segundo Nombre',
          sortable: false
        },
        {
          key: 'firstLastname',
          label: 'Primer Apellido',
          sortable: false
        },
        {
          key: 'secondLastname',
          label: 'Segundo Apellido',
          sortable: false
        },
        {
          key: 'birthday',
          label: 'Fecha de Nacimiento',
          sortable: false
        },
        {
          key: 'idType',
          label: 'Tipo de Documento',
          sortable: false
        },
        {
          key: 'idNumber',
          label: 'N de Documento',
          sortable: false
        },
        {
          key: 'idExpeditionDate',
          label: 'Fecha Exp de Documento',
          sortable: false
        },
        {
          key: 'maritalStatus',
          label: 'Estado Civil',
          sortable: false
        },
        {
          key: 'childs',
          label: 'Hijos',
          sortable: false
        },
        {
          key: 'living',
          label: 'Living',
          sortable: false
        },
        {
          key: 'studies',
          label: 'Estudios',
          sortable: false
        },
        {
          key: 'city',
          label: 'Ciudad',
          sortable: false
        },
        {
          key: 'time',
          label: 'Time',
          sortable: false
        },
        {
          key: 'estrato',
          label: 'Estrato',
          sortable: false
        },
        {
          key: 'phoneNumber',
          label: 'Tel Celular',
          sortable: false
        },
        {
          key: 'phoneNumberFijo',
          label: 'Tel Fijo',
          sortable: false
        },
        {
          key: 'email',
          label: 'Correo Electronico',
          sortable: false
        },
        {
          key: 'transport',
          label: 'Transport',
          sortable: false
        },
        {
          key: 'others',
          label: 'Otros',
          sortable: false
        },
        {
          key: 'factoryName',
          label: 'Nombre Empresa',
          sortable: false
        },
        {
          key: 'startDate',
          label: 'Fecha Ingreso',
          sortable: false
        },
        {
          key: 'workCity',
          label: 'Ciudad Trabajo',
          sortable: false
        },
        {
          key: 'addressWork',
          label: 'Direccion Trabajo',
          sortable: false
        },
        {
          key: 'phoneWork',
          label: 'Telefono Trabajo',
          sortable: false
        },
        {
          key: 'nit',
          label: 'NIT',
          sortable: false
        },
        {
          key: 'ingreso',
          label: 'Ingresos',
          sortable: false
        },
        {
          key: 'gasto',
          label: 'Gastos',
          sortable: false
        },
        {
          key: 'neto',
          label: 'Neto',
          sortable: false
        },
        {
          key: 'referenceName',
          label: 'Nombre de Referido',
          sortable: false
        },
        {
          key: 'referencePhone',
          label: 'Telefono de Referido',
          sortable: false
        },
        {
          key: 'referenceCity',
          label: 'Ciudad de Referido',
          sortable: false
        },
        {
          key: 'referenceAddress',
          label: 'Direccion de Referido',
          sortable: false
        },
        {
          key: 'referenceBarrio',
          label: 'Barrio de Referido',
          sortable: false
        }
      ]
    };
  },
  methods: {
    getData() {
      axios
        .get('/cotizer-data')
        .then(response => {
          this.items = response.data;
        })
        .catch();
    }
  },
  mounted() {
    this.getData();
  }
};
</script>
