<template>
  <v-container>
    <Index-Header />
    <v-row>
      <v-col class="animated">
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
    />
  </v-container>
</template>

<script>
import Kachel from '@/components/kachel';
import IndexHeader from '@/components/index-header';
export default {
  components: {IndexHeader, Kachel},
  data () {
    return {
      tiles: [
        {
          headline: 'Das persönliche Leben',
          subline: 'Lassen Sie von sich selbst überraschen',
          text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
          button: {
            text: 'mehr erfahren',
            link: '/persönlichkeitscoaching'
          },
          img: {
            src: require('~/assets/images/claudia-eck-persönlichkeitsentwicklung.svg'),
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
            src: require('~/assets/images/claudia-eck-unternehmenscoaching.svg'),
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
            src: require('~/assets/images/claudia-eck-ueber-mich.svg'),
            alt: 'random test image'
          }
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.animated {
  height: 50px;

  &__line {
    height: 0px;
    width: 2px;
    background-color: #2C2C2C;
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
