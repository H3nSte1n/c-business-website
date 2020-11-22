<template>
  <Preload :loading="loading">
    <v-container
      fluid
      class="pa-0"
    >
      <Header :content="header" />
      <div
        v-for="(content, key) in article"
        :key="key"
      >
        <Article
          :content="content"
          :b-color="(key + 1) % 3 === 0 || (key !== 0 && key % 3 === 0) ? 'yellow' : 'blue'"
          :box-count="key"
        />
      </div>
    </v-container>
  </Preload>
</template>

<script>
import Article from '@/components/view/article';
import Header from '@/components/header/header';
import Preload from '@/components/global/preloader';
import PropertyMapping from '@/mixins/propertyMapping';

export default {
  components: {Header, Article, Preload},
  mixins: [PropertyMapping],
  transition: "swipe",
  data() {
    return {
      loading: true,
    }
  },
  mounted() {
    this.loadData();
  },
  methods: {
    async loadData() {
      const data = await this.$strapi.find('About-Me');
      this.passHeaderData(data.Header);
      this.passArticleData(data.Articles);
      this.loading = false;
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/page_transition.scss';
</style>
