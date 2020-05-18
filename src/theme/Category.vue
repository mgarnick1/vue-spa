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
import appService from '../app.service.js';
export default {
  components: {
    'app-post': Post,
  },
  data() {
    return {
      id: this.$route.params.id,
      posts: [],
    };
  },
  methods: {
    loadPosts() {
      let categoryId = 2;
      if (this.id === 'mobile') {
        categoryId = 11;
      }
      appService.getPosts(categoryId).then(data => {
        this.posts = data;
      })
    },
  },
  watch: {
    '$route' (to) {
      this.id = to.params.id
      this.loadPosts()
    }
  },
  created() {
    this.loadPosts();
  },
};
</script>
