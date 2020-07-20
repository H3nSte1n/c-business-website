<template>
  <v-container>
    <v-row
      justify="center"
      align="center"
    >
      <v-col
        cols="12"
        sm="6"
        xl="5"
        class="d-flex flex-column-reverse flex-sm-column pl-12 mb-12 header-box"
      >
        <h1
          class="font-weight-bold header-box__headline"
        >
          <span class="word-container">
            <span
              class="word"
              :class="{'word-active': isLoaded}"
            >
              Claudia
            </span>
          </span>
          <span class="word-container">
            <span
              class="word word-2"
              :class="{'word-active': isLoaded}"
            >
              Eck
            </span>
          </span>
        </h1>
        <h2 class="header-box__subline">
          <span class="word-container">
            <span
              class="word word-3"
              :class="{'word-active': isLoaded}"
            >
              Unternehmens-
            </span>
          </span>
          <span class="word-container">
            <span
              class="word word-4"
              :class="{'word-active': isLoaded}"
            >
              &
            </span>
          </span>
          <span class="word-container">
            <span
              class="word word-5"
              :class="{'word-active': isLoaded}"
            >
              Persönlichkeitscoaching
            </span>
          </span>
        </h2>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        xl="5"
      >
        <v-img
          :src="require('~/assets/images/claudia-eck-hero-image-l.png')"
          alt="image"
        >
          <div
            class="image__invisible"
            :class="{'image__invisible-disable': isLoaded}"
          />
        </v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="animated">
        <p class="animated__text">
          scroll
        </p>
        <div class="animated__line" />
      </v-col>
    </v-row>
    <kachel
      v-for="(value, key) in tiles"
      :key="key"
      :content="value"
    />
  </v-container>
</template>

<script>
import kachel from '@/components/kachel';
export default {
  components: {
    kachel
  },
  data () {
    return {
      isLoaded: false,
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
  },
  mounted() {
    this.isLoaded = true;
  }
}
</script>

<style lang="scss" scoped>
.header-box {
  &__headline {
      font-size: 3.75rem;
      font-weight: 300;
      line-height: 3.75rem;
      letter-spacing: -0.0083333333em;
      font-family: "Roboto", sans-serif;
    }
    &__subline {
      font-size: 1.25rem;
      font-weight: 500;
      line-height: 2rem;
      letter-spacing: 0.0125em;
      font-family: "Roboto", sans-serif;
      margin: 8px 0;
    }

  @media screen and (min-width: 768px) {
    position: relative;
    left: 79px;
    z-index: 54;
    &__headline {
      text-align: right;
      font-size: 7rem;
      line-height: 6.75rem;
    }
    &__subline {
      text-align: right;
      font-size: 1.8rem;
      margin: 20px 0;
    }
  }
}

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

.word {
  position: relative;
  top: 105px;
  transition: top 0.75s ease-out 0.5s;
  &-2 {
    transition: top 0.75s ease-out 1s;
  }
  &-3 {
    top: 0px;
    opacity: 0;
    transition: opacity 1s ease-out 1.5s;
  }
  &-4 {
    top: 0px;
    opacity: 0;
    transition: opacity 1s ease-out 1.8s;
  }
  &-5 {
    top: 0px;
    opacity: 0;
    transition: opacity 1s ease-out 2s;
  }

  &-active {
    top: 0px;
    opacity: 1;
  }
 &-container {
  display: inline-block;
  overflow: hidden;
 }
}

.image {
  &__invisible {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: white;
    transition: all 1s ease-out 2s;
    &-disable {
      transform: translateX(100%);
    }
  }
}
</style>
