<template>
  <nav class="navbar has-shadow">
    <div class="container">
      <router-link class="navbar-brand" to="/" exact>
        <img
          alt="Vue SPA logo"
          :style="{ width: '80px', height: '80px' }"
          src="../assets/logo.png"
        />
      </router-link>
      <router-link class="navbar-item is-tab" to="/category/front-end">Front-end</router-link>
      <router-link class="navbar-item is-tab" :to="{ name: 'category', params: { id: 'mobile' } }"
        >Mobile</router-link
      >
      <router-link class="navbar-item is-tab" to="/login"
        ><span v-if="isAuthenticated">Logout</span><span v-else>Login</span></router-link
      >
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['isAuthenticated'])
  },
};
</script>
