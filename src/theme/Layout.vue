<template>
  <div>
    <app-header></app-header>
    <section class="section">
      <div class="container content">
        <router-view></router-view>
      </div>
    </section>
    <app-footer></app-footer>
  </div>
</template>
<script>
import AppHeader from './AppHeader.vue';
import AppFooter from './AppFooter';
export default {
  components: {
    'app-footer': AppFooter,
    'app-header': AppHeader,
  },
};
</script>
<style style="scss">
.columns {
  flex-wrap: wrap;
}
</style>
