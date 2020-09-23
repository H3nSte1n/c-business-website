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
        <Stripe
          :content="content"
          :b-color="key < article.length / 2 ? 'yellow' : 'blue'"
        />
      </div>
    </v-container>
  </Preload>
</template>

<script>
import Stripe from '@/components/stripe';
import Header from '@/components/header';
import Preload from '@/components/preloader';
import PropertyMapping from '@/mixins/propertyMapping';

export default {
  components: {Header, Stripe, Preload},
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
