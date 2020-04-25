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
          Claudia Eck
        </h1>
        <h2 class="header-box__subline">
          Unternehmens- & Persönlichkeitscoaching
        </h2>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        xl="5"
      >
        <v-img
          :src="`https://picsum.photos/300/400?random=23123`"
          alt="test image"
        />
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
      tiles: [
        {
          headline: 'Das persönliche Leben',
          subline: 'Lassen Sie von sich selbst überraschen',
          text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
          button: {
            text: 'mehr erfahren',
            link: '/'
          },
          img: {
            src: `https://picsum.photos/450/300?random=23123`,
            alt: 'random test image'
          }
        },
        {
          headline: 'Das persönliche Leben',
          subline: 'Lassen Sie von sich selbst überraschen',
          text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
          button: {
            text: 'mehr erfahren',
            link: '/'
          },
          img: {
            src: `https://picsum.photos/450/300?random=23123`,
            alt: 'random test image'
          },
          order: 'last'
        },
        {
          headline: 'Das persönliche Leben',
          subline: 'Lassen Sie von sich selbst überraschen',
          text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.',
          button: {
            text: 'mehr erfahren',
            link: '/'
          },
          img: {
            src: `https://picsum.photos/450/300?random=23123`,
            alt: 'random test image'
          }
        }
      ]
    }
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
</style>
