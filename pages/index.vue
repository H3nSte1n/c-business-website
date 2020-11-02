<template>
  <Preload :loading="loading">
    <v-container>
      <Index-Header
        :is-loaded="!loading"
        :img="header.img"
        :content="header.content"
      />
      <animated-line />
      <Teaser
        v-for="(value, key) in teasers"
        :key="key"
        :content="value"
        :class="key !== 0 ? '' : 'mt-12'"
      />
    </v-container>
  </Preload>
</template>

<script>
import Teaser from '@/components/view/teaser';
import IndexHeader from '@/components/header/index-header';
import Preload from '@/components/global/preloader';
import ButtonEvents from '@/mixins/buttonEvents';
import AnimatedLine from '@/components/specific/animatedLine';

export default {
  components: {IndexHeader, Teaser, AnimatedLine, Preload},
  mixins: [ButtonEvents],
  data () {
    return {
      loading: true,
      header: {},
      teasers: [],
    }
  },
  mounted() {
    this.loadData();
  },
  methods: {
    async loadData() {
      console.log('HomepageData', process.env.BASE_URL_STRAPI);
      const HomepageData = await this.$strapi.find('Homepage');
      console.log(HomepageData);
      this.passHeaderData(HomepageData.Header);
      this.passTeaserData(HomepageData.teaser);
      this.loading = false;
    },

    passHeaderData(headerData) {
      console.log('asdad', process.env.BASE_URL_STRAPI);
      this.header = {
        content: {
          headline: headerData.headline,
          desc: headerData.subline
        },
        img: {
          src: process.env.BASE_URL_STRAPI + headerData.image[0].url,
          alt: headerData.image[0].alternativeText
        },
      }
    },

    passTeaserData(teasersData) {
      teasersData.forEach((item, index) => {
        let teaserItem = {
          headline: item.Headline,
          subline: item.subline,
          text: item.Description,
          button: {
            text: item.buttonText,
            link: item.url,
          },
          img: {
            src: process.env.BASE_URL_STRAPI + item.Image.url,
            alt: item.Image.alternativeText
          },
          order: index % 2 !== 0 ? 'first' : 'last'
        }
        this.teasers.push(teaserItem)
      });
    }
  }
}
</script>
