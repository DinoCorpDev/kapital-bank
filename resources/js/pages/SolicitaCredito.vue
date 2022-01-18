<template>
  <b-row align-h="center">
    <b-col cols="8">
      <CreditCalculator />
    </b-col>
  </b-row>
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
