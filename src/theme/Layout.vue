<template>
  <div>
    <app-header></app-header>
    <section class="section">
      <div class="container content">
        <category></category>
      </div>
    </section>
    <app-footer></app-footer>
  </div>
</template>
<script>
import AppHeader from './AppHeader.vue';
import AppFooter from './AppFooter';
import Category from './Category';
export default {
  components: {
    'app-footer': AppFooter,
    'app-header': AppHeader,
    category: Category,
  },
};
</script>
<style style="scss">
.columns {
  flex-wrap: wrap;
}
</style>
