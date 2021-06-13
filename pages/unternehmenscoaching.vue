<template>
  <Preload :loading="loading">
    <v-container fluid class="pa-0">
      <Header :content="header" />
      <Article :content="article[0]" b-color="blue" :box-count="0" />
      <Quote :quote="quote" />
      <Wall :title="title__asset_card">
        <asset-card v-for="(value, key) in assetCard" :key="key" :content="value.content" />
      </Wall>
      <Wall :title="title__offer_card">
        <offer-card v-for="(value, key) in offerCard" :key="key" :content="value.content" />
      </Wall>
      <keywords :keywords="keywords" />
      <Contact :content="contact" :center-headline="true" :small-headline="true" />
    </v-container>
  </Preload>
</template>

<script>
import Contact from '@/components/form/contact';
import Article from '@/components/view/article';
import Quote from '@/components/view/quote';
import Keywords from '@/components/view/keywords';
import Header from '@/components/header/header';
import ButtonEvents from '@/mixins/buttonEvents';
import Wall from '@/components/container/wall';
import AssetCard from '@/components/view/asset-card';
import OfferCard from '@/components/view/offer-card';
import PropertyMapping from '@/mixins/propertyMapping';
import Preload from '@/components/global/preloader';

export default {
  components: { Header, Wall, AssetCard, OfferCard, Contact, Article, Quote, Keywords, Preload },
  mixins: [ButtonEvents, PropertyMapping],
  transition: 'swipe',
  data() {
    return {
      loading: true,
      title__asset_card: 'Von mir <nobr>bekommen Sie</nobr>',
      title__offer_card: 'Angebote',
      offerCard: [],
      assetCard: [],
      keywords: {},
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    async loadData() {
      const data = await this.$strapi.find('Unternehmenscoaching');
      this.passHeaderData(data.header);
      this.passArticleData(data.article);
      this.passQuoteData(data.Quote);
      this.passContactData(data.Contact);
      this.passOfferCardItems(data.OfferCard);
      this.passAssetCardItems(data.AssetCard);
      this.passKeywordsData(data.Keywords);
      this.loading = false;
    },
    passOfferCardItems(OfferCardData) {
      Array.from(OfferCardData).forEach((item) => {
        let cardItem = {
          content: {
            pagination: item.pagination,
            headline: item.headline,
            desc: item.description,
          },
        };
        this.offerCard.push(cardItem);
      });
    },
    passAssetCardItems(AssetCardData) {
      Array.from(AssetCardData).forEach((item) => {
        let cardItem = {
          content: {
            desc: item.description,
            icon: {
              src: item.image.url,
              alt: item.image.alternativeText,
            },
          },
        };
        this.assetCard.push(cardItem);
      });
    },
    passKeywordsData(KeywordsData) {
      this.keywords = {
        desc: KeywordsData.description,
        first: KeywordsData.keyword_1,
        second: KeywordsData.keyword_2,
        third: KeywordsData.keyword_3,
      };
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/scss/page_transition.scss';
</style>
