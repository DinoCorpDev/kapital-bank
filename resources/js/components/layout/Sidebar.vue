<template>
  <!-- Sidebar -->
  <ul
    class="navbar-nav bg-cobalt sidebar sidebar-dark accordion"
    id="accordionSidebar"
    v-if="userRole === 'Admin' && isAdminRoute"
  >
    <!-- Sidebar - Brand -->
    <b-link
      class="sidebar-brand d-flex align-items-center justify-content-center"
      :to="{ name: 'Home' }"
    >
      <img
        src="/img/logo-kapitalbank-white.svg"
        alt="Logo KapitalBank White"
        class="img-fluid"
        v-show="desktopView && !toggled"
      />
      <img
        src="/img/logo-kapitalbank-white-short.svg"
        alt="Logo KapitalBank White Short"
        class="img-fluid h-100"
        v-show="!desktopView || (toggled && desktopView)"
      />
    </b-link>

    <!-- Divider -->
    <hr class="sidebar-divider my-0" />

    <!-- Nav Item - Dashboard -->
    <li class="nav-item">
      <b-link class="nav-link" :to="{ name: 'AdminDash' }">
        <font-awesome-icon :icon="['fas', 'tachometer-alt']" />
        <span>Dashboard</span>
      </b-link>
    </li>
    <li class="nav-item">
      <b-link class="nav-link" :to="{ name: 'Creditos' }">
        <font-awesome-icon :icon="['fas', 'tachometer-alt']" />
        <span>Creditos</span>
      </b-link>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider mb-auto d-none d-md-block" />

    <!-- Sidebar Toggler (Sidebar) -->
    <div class="text-center d-none d-md-inline">
      <button class="rounded-circle border-0" id="sidebarToggle" @click="setToggled">
        <font-awesome-icon :icon="['fas', 'angle-left']" v-if="!toggled" />
        <font-awesome-icon :icon="['fas', 'angle-right']" v-else />
      </button>
    </div>
  </ul>
  <!-- End of Sidebar -->
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState, mapActions } from 'vuex';

export default Vue.extend({
  data() {
    return {
      desktopView: false as Boolean
    };
  },
  computed: {
    ...mapState('settings', ['toggled']),
    ...mapState('auth', ['userRole']),
    isAdminRoute(): Boolean {
      const routePath = this.$route.path;
      return routePath.includes('admin') ? true : false;
    }
  },
  mounted() {
    this.setDesktopView();
    window.addEventListener('resize', () => {
      this.setDesktopView();
    });
  },
  methods: {
    ...mapActions('settings', ['setToggled']),

    setDesktopView() {
      this.desktopView = window.innerWidth > 768 ? true : false;
    }
  }
});
</script>

<style lang="scss" scoped>
.sidebar {
  transition: width 400ms;
}
</style>
