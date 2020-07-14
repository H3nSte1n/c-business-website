<template>
  <v-container>
    <div class="navigation navigation--closed">
      <nav class="navigation__wrapper">
        <a class="navigation__logo" href="/">Claudia Eck</a>
        <div class="navigation__link">
          <a class="navigation__link-item" href="/persöhnlichkeitscoaching">Persönlichkeit entfalten</a>
          <a class="navigation__link-item" href="/unternehmenscoaching">Unternehmen beleben</a>
          <a class="navigation__link-item navigation__link-item--active" href="/übermich">Über mich</a>
          <a class="navigation__link-item" href="/kontakt">Kontakt</a>
          <a class="navigation__link-item" href="/opentel">+ 1792 242543</a>
        </div>
      </nav>
    </div>
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
//import Navigation from '@/components/navigation'
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

.navigation {
  position: sticky;
  background: #fff;
  padding: 20px 0;
  width: 100%;
  z-index: 99;

  @media (min-width: 960px) {
    top: 0px;

    &__wrapper {
      position: relative;
    }

    &__logo {
      display: inline-block;
      color: #343434;
      font-size: 28px;
      line-height: 34px;
      text-decoration: none;
      font-weight: bold;

      @media (min-width: 1264px) {
        font-size: 38px;
        line-height: 44px;
      }
    }

    &__link {
      display: inline-block;
      position: absolute;
      right: 0;
      bottom: 0;

      &-item {
        color: #343434;
        text-decoration: none;
        padding: 0px 10px;
        font-size: 16px;
        line-height: 22px;

        @media (min-width: 1264px) {
          padding: 0px 15px;
          font-size: 21px;
          line-height: 24px;
        }

        @media (min-width: 1904px) {
          padding: 0px 35px;
          font-size: 23px;
          line-height: 27px;
        }

        &:hover {
          cursor: pointer;
          color: darkred;
          text-decoration: underline;
        }

        &:last-child {
          padding-right: 0;
        }
        
        &--active {
          text-decoration: underline;

          &:hover {
            cursor: default;
            color: #343434;
          }
        }
      }
    }
  }
}

.navigation--closed {
  .navigation {
    &__link {
      display: none;
    }
  }
}
</style>
