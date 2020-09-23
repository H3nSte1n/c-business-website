<template>
  <Preload :loading="loading">
    <v-container
      fluid
      class="pa-0"
    >
      <Header :content="header" />
      <Stripe
        :content="article[0]"
        b-color="yellow"
      />
      <Slider
        v-if="slider.length > 0"
        :items="slider"
      />
      <Quote :quote="quote" />
      <Stripe
        :content="article[1]"
        b-color="blue"
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
import Stripe from '@/components/stripe.vue';
import Contact from '@/components/form/contact';
import Quote from '@/components/quote';
import Slider from '@/components/slider';
import Header from '@/components/header';
import ButtonEvents from '@/mixins/buttonEvents';
import PropertyMapping from '@/mixins/propertyMapping';
import Preload from '@/components/preloader';

export default {
  components: { Header, Stripe, Contact, Quote, Slider, Preload },
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
