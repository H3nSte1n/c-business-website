<template>
  <v-container>
    <nav class="navigation">
      <v-row
        justify="space-between"
        align="center"
      >
        <v-col
          cols="12"
          lg="2"
          class="text-center pa-0"
        >
          <button
            class="navigation__logo button my-4"
            @click="changeStatusOfNavigationActiveLever"
          >
            Claudia Eck
          </button>
        </v-col>
        <v-col
          cols="12"
          lg="10"
          xl="8"
          class="pa-0"
        >
          <div class="navigation__links">
            <nuxt-link
              v-for="(navItem, key) of navPoints"
              :key="key"
              class="navigation__links-item text-center mx-auto button"
              :class="{'navigation__links-item--active': isNavigationMobilActive}"
              :to="navItem.link"
            >
              {{ navItem.name }}
            </nuxt-link>
            <a
              class="navigation__links-item navigation__links-item text-center mx-auto"
              :class="{'navigation__links-item--active': isNavigationMobilActive}"
              to="tel:+1792242543"
            >
              + 1792 242543
            </a>
          </div>
        </v-col>
      </v-row>
    </nav>
  </v-container>
</template>

<script>
import { mdiClose } from '@mdi/js';

export default {
  name: 'Navigation',
  data() {
    return {
      mdiClose,
      navPoints: [
        {
          name: 'Persönlichkeit entfalten',
          link: '/persönlichkeitscoaching'
        },
        {
          name: 'Unternehmen beleben',
          link: '/unternehmenscoaching'
        },
        {
          name: 'Über mich',
          link: '/kontakt'
        },
        {
          name: 'Kontakt',
          link: '/kontakt'
        },
      ],
      isNavigationMobilActive: false,
    }
  },
  methods: {
    changeStatusOfNavigationActiveLever() {
      this.isNavigationMobilActive = !this.isNavigationMobilActive;
    }
  }
}
</script>

<style scoped lang="scss">
.navigation {
  position: fixed;
  background: #fff;
  padding: 20px 0;
  width: 100%;
  z-index: 99;
  bottom: 0px;

  @media (min-width: 1264px) {
    position: sticky;
    top: 0px;
  }

  &__wrapper {
    position: relative;
    text-align: center;

    @media(min-width: 1264px) {
      text-align: left;
    }
  }

  &__logo {
    cursor: none;
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

  &__links {
    display: flex;
    text-decoration: none;
    flex-direction: column;

    @media(min-width: 1264px) {
      display: inline-block;
    }

    &-item {
      color: #343434;
      text-decoration: none;
      padding: 0px 10px;
      font-size: 16px;
      line-height: 22px;
      transition: height 0.5s ease-out;
      height: 0;
      opacity: 0;
      max-width: 250px;

      @media (min-width: 1264px) {
        padding: 0px 15px;
        font-size: 21px;
        line-height: 24px;
        height: 40px;
        opacity: 1;
      }

      @media (min-width: 1904px) {
        padding: 0px 35px;
        font-size: 23px;
        line-height: 27px;
      }

      &:last-child {
        padding-right: 0;
      }

      &--active {
        height: 40px;
        opacity: 1;
      }
    }
  }
}
</style>
