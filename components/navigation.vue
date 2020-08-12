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
          :class="$vuetify.breakpoint.mdAndDown ? 'order-last' : 'order-first'"
        >
          <button
            class="navigation__logo button my-4"
            @click="changeStatusOfNavigationActiveLever"
          >
            Claudia Eck
            <v-icon
              v-if="$vuetify.breakpoint.mdAndDown"
              class="ml-6"
              size="28px"
            >
              {{ mdiNavIcon }}
            </v-icon>
          </button>
        </v-col>
        <v-col
          cols="12"
          lg="10"
          xl="8"
          class="pa-0"
        >
          <div
            class="navigation__links"
            :class="$vuetify.breakpoint.mdAndDown && isNavigationMobilActive ? 'py-12' : 'py-0'"
          >
            <nuxt-link
              v-for="(navItem, key) of navPoints"
              :key="key"
              class="navigation__links-item text-center mx-auto"
              :class="[{'navigation__links-item--active': isNavigationMobilActive}, `navigation__links-item-${key}`]"
              :to="navItem.link"
            >
              {{ navItem.name }}
            </nuxt-link>
            <a
              class="navigation__links-item navigation__links-item text-center mx-auto"
              :class="{'navigation__links-item--active': isNavigationMobilActive}"
              href="tel:+1792242543"
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
import { mdiClose, mdiFormatAlignLeft } from '@mdi/js';

export default {
  name: 'Navigation',
  data() {
    return {
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
      prevScrollpos: 0,
      getTopFromNav: 0,
    }
  },
  computed: {
    mdiNavIcon() {
      return this.isNavigationMobilActive ? mdiClose : mdiFormatAlignLeft;
    }
  },
  mounted() {
    this.eventsInit();
    this.getTopFromNav = document.querySelector(".navigation").clientHeight;
  },
  methods: {
    changeStatusOfNavigationActiveLever() {
      this.isNavigationMobilActive = !this.isNavigationMobilActive;
    },
    detectScrolling() {
      if(this.isNavigationMobilActive) return false;
      let currentScrollPos = window.pageYOffset;
      if (this.prevScrollpos > currentScrollPos) {
        document.querySelector(".navigation").style.bottom = '0px';
      } else {
        document.querySelector(".navigation").style.bottom = `${-this.getTopFromNav}px`;
      }
      this.prevScrollpos = currentScrollPos;
    },
    eventsInit() {
      if(window.innerWidth < 1264) {
        document.addEventListener(
          'scroll',
          this.detectScrolling,
          false
        );
      }
    }
  }
}
</script>

<style scoped lang="scss">
.navigation {
  position: fixed;
  background: #fff;
  width: 100%;
  z-index: 99999;
  bottom: 0px;
  left: 0px;
  width: 100%;
  transition: bottom 0.3s ease-in-out;

  @media (min-width: 1264px) {
    position: sticky;
    top: 0px;
    z-index: 1;
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
    color: #343434;
    font-size: 28px;
    line-height: 34px;
    text-decoration: none;
    font-weight: bold;
    z-index: 999;
    width: 100%;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    @media (min-width: 1264px) {
      display: inline-block;
      font-size: 38px;
      line-height: 44px;
    }

    &:focus {
      outline: none;
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
      font-weight: 600;

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

      &-1 {
        transition: height 0.6s ease-in-out;
      }
      &-2 {
        transition: height 0.6s ease-in-out, opacity 0.3s ease-out 0.2s;
      }
      &-3 {
        transition: height 0.6s ease-in-out, opacity 0.3s ease-out 0.4s;
      }
      &-4 {
        transition: height 0.6s ease-in-out, opacity 0.3s ease-out 0.6s;
      }
      &-5 {
        transition: height 0.6s ease-in-out, opacity 0.3s ease-out 0.8s;
      }
      &-6 {
        transition: height 0.6s ease-in-out, opacity 0.3s ease-out 1s;
      }

      &--active {
        height: 40px;
        opacity: 1;
      }
    }
  }
}

.nuxt-link-active {
  text-decoration: underline;

  @media (min-width: 1264px) {
    text-decoration: none;
    padding-bottom: 10px;
    border-bottom: 2px solid black;
  }
}
</style>
