<template>
  <Preload :loading="loading">
    <v-container>
      <Index-Header
        v-if="Header"
        :is-loaded="!loading"
        :img="Header.img"
        :content="Header.content"
      />
      <animated-line />
      <template v-if="Teaser">
        <Kachel
          v-for="(value, key) in Teaser"
          :key="key"
          :content="value"
          :class="key !== 0 ? '' : 'mt-12'"
        />
      </template>
    </v-container>
  </Preload>
</template>

<script>
import Kachel from '@/components/kachel';
import IndexHeader from '@/components/index-header';
import Preload from '@/components/preloader';
import ButtonEvents from '@/mixins/buttonEvents';
import AnimatedLine from '@/components/animatedLine';

export default {
  components: {IndexHeader, Kachel, AnimatedLine, Preload},
  mixins: [ButtonEvents],
  data () {
    return {
      loading: true,
      Header: null,
      Teaser: [],
    }
  },
  mounted() {
    this.loadData();
  },
  methods: {
    async loadData() {
      const HomepageData = await this.$strapi.find('Homepage');
      console.log('tsdasd', HomepageData, process.env.BASE_URL_STRAPI);
      this.passHeaderData(HomepageData);
      this.passTeaserData(HomepageData);
      this.loading = false;
    },

    passHeaderData(HomepageData) {
        this.Header = {
        content: {
          headline: HomepageData.Header.headline,
          desc: HomepageData.Header.subline
        },
        img: {
          src: process.env.BASE_URL_STRAPI + HomepageData.Header.image[0].url,
          alt: HomepageData.Header.image[0].alternativeText
        },
      }
    },

    passTeaserData(HomepageData) {
      HomepageData.teaser.forEach((item, index) => {
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
        this.Teaser.push(teaserItem)
      });
      console.log(this.Teaser);
    }
  }
}
</script>
