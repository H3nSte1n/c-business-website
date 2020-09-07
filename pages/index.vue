<template>
  <Preload :loading="loading">
    <v-container>
      <Index-Header
        :is-loaded="!loading"
        :img="headerImg"
      />
      <v-row v-if="$vuetify.breakpoint.mdAndUp">
        <v-col class="animated pt-7">
          <p class="animated__text">
            scroll
          </p>
          <div class="animated__line" />
        </v-col>
      </v-row>
      <Kachel
        v-for="(value, key) in tiles"
        :key="key"
        :content="value"
        :class="key !== 0 ? '' : 'mt-12'"
      />
    </v-container>
  </Preload>
</template>

<script>
import Kachel from '@/components/kachel';
import IndexHeader from '@/components/index-header';
import Preload from '@/components/preloader';
import ButtonEvents from '@/mixins/buttonEvents';

export default {
  components: {IndexHeader, Kachel, Preload},
  mixins: [ButtonEvents],
  transition: "swipe",
  data () {
    return {
      loading: true,
      headerImg: {
        src: require('~/assets/images/claudia-eck-hero-image-l.png'),
        alt: 'personal photo'
      },
      tiles: [
        {
          headline: 'Das persönliche Leben',
          subline: 'Lassen Sie von sich selbst überraschen',
          text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
          button: {
            text: 'mehr erfahren',
            link: '/persoenlichkeitscoaching'
          },
          img: {
            src: require('~/assets/images/claudia-eck-persoenlichkeitcoaching.gif'),
            alt: 'random test image'
          }
        },
        {
          headline: 'Unternehmenscoaching',
          subline: 'Für mehr positive Energie und gesunde Führungskultur',
          text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
          button: {
            text: 'mehr erfahren',
            link: '/unternehmenscoaching'
          },
          img: {
            src: require('~/assets/images/claudia-eck-unternehmenscoaching.gif'),
            alt: 'random test image'
          },
          order: 'last'
        },
        {
          headline: 'Über mich',
          subline: 'Wer bin ich?',
          text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
          button: {
            text: 'mehr erfahren',
            link: '/kontakt'
          },
          img: {
            src: require('~/assets/images/claudia-eck-ueber-mich.gif'),
            alt: 'random test image'
          }
        }
      ]
    }
  },
  mounted() {
    this.loading = false;
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/colors.scss';
@import '@/scss/page_transition.scss';

.animated {
  height: 50px;
  margin-bottom: 30px;

  @media screen and (min-width: 1264px) {
    margin-bottom: 140px;
  }

  &__line {
    height: 0px;
    width: 2px;
    background-color: $dark-2;
    animation: lineAnimation 4s ease-in-out infinite;
    margin: 0 auto;
  }

  &__text {
    text-align: center;
  }

  @keyframes lineAnimation {
    0% {
      height: 0px;
    }
    50% {
      height: 40px;
    }
    100% {
      height: 0px;
    }
  }
}
</style>
