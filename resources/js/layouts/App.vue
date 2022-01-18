<template>
  <router-view />
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState, mapActions } from 'vuex';

export default Vue.extend({
  computed: {
    ...mapState('auth', ['authUser', 'userRole'])
  },
  created() {
    // this.reditectTo();
    // this.getAuthUser();
    this.getAuthUser();
  },
  methods: {
    ...mapActions('auth', ['getAuthUser'])
    // reditectTo() {
    //   this.getAuthUser().then(() => {
    //     if (this.userRole === 'Admin') {
    //       this.$router.push({ name: 'AdminDash' });
    //     } else if (this.userRole === 'User') {
    //       this.$router.push({ name: 'Home' });
    //     }
    //   });
    // }
  }
});
</script>
