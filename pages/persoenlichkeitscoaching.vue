<template>
  <Preload :loading="loading">
    <v-container
      fluid
      class="pa-0"
    >
      <Header :content="header" />
      <Article
        :content="article[0]"
        b-color="yellow"
        :box-count="0"
      />
      <Slider
        v-if="slider.length > 0"
        :items="slider"
      />
      <Quote :quote="quote" />
      <Article
        :content="article[1]"
        b-color="blue"
        :box-count="1"
      />
      <Quote
        :quote="presentation.headline"
        :desc="presentation.desc"
        position="left"
      />
      <Contact :content="contact" />
    </v-container>
  </Preload>
</template>

<script>
import Article from '@/components/view/article';
import Contact from '@/components/form/contact';
import Quote from '@/components/view/quote';
import Slider from '@/components/specific/slider';
import Header from '@/components/header/header';
import ButtonEvents from '@/mixins/buttonEvents';
import PropertyMapping from '@/mixins/propertyMapping';
import Preload from '@/components/global/preloader';

export default {
  components: { Header, Article, Contact, Quote, Slider, Preload },
  mixins: [ButtonEvents, PropertyMapping],
  transition: "swipe",
  data () {
    return {
      loading: true,
    }
  },
  mounted() {
    this.loadData();
  },
  methods: {
    async loadData() {
      const data = await this.$strapi.find('Persoenlichkeitscoaching');
      this.passHeaderData(data.Header);
      this.passArticleData(data.Article);
      this.passQuoteData(data.Quote);
      this.passPresentationData(data);
      this.passContactData(data.Contact);
      this.passSliderData(data);
      this.loading = false;
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/page_transition.scss';
</style>
