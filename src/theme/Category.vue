<template>
  <div class="columns">
    <div class="column is-one-third" v-for="p in posts" :key="p.id">
      <app-post :link="p.link">
        <h3 slot="title" v-html="p.title.rendered"></h3>
        <span slot="content" v-html="p.excerpt.rendered"></span>
      </app-post>
    </div>
  </div>
</template>
<script>
import Post from './Post';
import { mapGetters } from 'vuex';
export default {
  components: {
    'app-post': Post,
  },
  computed: {
    ...mapGetters('postsModule', ['posts'])
  },
  methods: {
    loadPosts() {
      let categoryId = 2;
      if (this.$route.params.id === 'mobile') {
        categoryId = 11;
      }
      this.$store.dispatch('postsModule/updateCategory', categoryId)
    },
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    '$route' (to, from) {
      this.loadPosts()
    }
  },
  created() {
    this.loadPosts();
  },
};
</script>
