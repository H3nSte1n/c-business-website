<template>
  <v-container>
    <nav
      class="navigation"
      :class="[{'navigation--mobil-active': isNavigationMobilActive }, $vuetify.breakpoint.mdAndDown ? 'd-flex align-end' : '']"
    >
      <v-row
        justify="space-between"
        align="center"
      >
        <v-col
          cols="12"
          lg="2"
          class="text-center pa-0 d-flex justify-space navigation__bar"
          :class="$vuetify.breakpoint.mdAndDown ? 'order-last' : 'order-first'"
        >
          <router-link
            class="navigation__logo button my-5"
            to="/"
            exact
            :max-width="$vuetify.breakpoint.lg ? '80%' : '100%'"
            @click="changeStatusOfNavigationActiveLever"
          >
            <v-img
              :src="require('@/assets/images/logo-claudia-eck.svg')"
            />
          </router-link>
          <button
            v-show="$vuetify.breakpoint.mdAndDown"
            class="navigation__mobil-opener button my-5 mr-7"
            @click="changeStatusOfNavigationActiveLever"
          >
            <v-icon
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
          class="pa-0 navigation__links-container"
          :class="[{'navigation__links-container--active': isNavigationMobilActive, 'my-9': !$vuetify.breakpoint.mdAndDown}]"
        >
          <div
            class="navigation__links"
            :class="$vuetify.breakpoint.mdAndDown ? 'py-12 mr-7 align-end' : ''"
          >
            <nuxt-link
              v-for="(navItem, key) of navPoints"
              :key="key"
              class="navigation__links-item text-center button"
              :class="[{'navigation__links-item--active': isNavigationMobilActive}, `navigation__links-item-${key}`]"
              :to="navItem.link"
            >
              {{ navItem.name }}
            </nuxt-link>
            <a
              class="navigation__links-item navigation__links-item text-center d-inline-flex align-center button navigation__links-item-6"
              :class="{'navigation__links-item--active': isNavigationMobilActive, 'align-end': $vuetify.breakpoint.mdAndDown}"
              href="tel:01792242543"
            >
              <img
                class="mr-2"
                width="18px"
                :src="require('assets/images/claudia-eck-kontakt-telefon.svg')"
              >
              0179 2242543
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
          link: '/persoenlichkeitscoaching'
        },
        {
          name: 'Unternehmen beleben',
          link: '/unternehmenscoaching'
        },
        {
          name: 'Über mich',
          link: '/ueber-mich'
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
  watch: {
    $route () {
      this.isNavigationMobilActive = false;
      if(!this.isNavigationMobilActive) return false;

    }
  },
  beforeRouteLeave(to, from, next) {
    if(!this.isNavigationMobilActive) return next();
    document.querySelector(".navigation").style.transform = `translateY(${this.getTopFromNav}px)`;
    next();
  },
  mounted() {
    this.eventsInit();
    this.getTopFromNav = document.querySelector(".navigation").clientHeight;
    document.querySelector(".navigation").style.transform = 'translateY(0px)';
  },
  update() {
    document.querySelector(".navigation").style.transform = 'translateY(0px)';
  },
  methods: {
    resetNavigationStatus() {
      this.isNavigationMobilActive = false;
    },
    changeStatusOfNavigationActiveLever() {
      this.isNavigationMobilActive = !this.isNavigationMobilActive;
    },
    detectScrolling() {
      if(this.isNavigationMobilActive) return false;
      let currentScrollPos = window.pageYOffset;
      if (this.prevScrollpos > currentScrollPos) {
        document.querySelector(".navigation").style.transform = 'translateY(0px)';
      } else {
        document.querySelector(".navigation").style.transform = `translateY(${this.getTopFromNav}px)`;
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
@import '@/scss/colors.scss';

.navigation {
  position: fixed;
  background: #fff;
  width: 100%;
  z-index: 999;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 80px;
  transition: bottom 0.3s ease-in-out, transform 0.2s ease-out, height 0.5s ease-out;

  @media (min-width: 1264px) {
    position: sticky;
    top: 0px;
    z-index: 1;
    height: none;
  }

  &--mobil-active {
    height: 100vh;
  }

  &__wrapper {
    position: relative;
    text-align: center;

    @media(min-width: 1264px) {
      text-align: left;
    }
  }

  &__bar {
    background-color: white;
    z-index: 999;
  }

  &__mobil-opener {
    &:focus {
      outline: none;
    }
  }

  &__container {
  }

  &__logo {
    cursor: none;
    color: $dark-3;
    font-size: 28px;
    line-height: 34px;
    text-decoration: none;
    font-weight: bold;
    z-index: 999;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: calc(50% - 100px);

    @media (min-width: 1264px) {
      display: inline-block;
      font-size: 38px;
      line-height: 44px;
      max-width: 80%;
    }
    @media (min-width: 1904px) {
      max-width: 100%;
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
      cursor: none;
      color: $dark-3;
      text-decoration: none;
      font-size: 22px;
      line-height: 28px;
      transition: height 0.5s ease-out;
      height: 40px;
      opacity: 0;
      max-width: 250px;
      font-weight: 600;
      pointer-events: none;

      @media screen and (min-width: 1264px) {
        margin: 0px 15px;
        font-size: 19px;
        line-height: 22px;
        height: auto;
        opacity: 1;
        pointer-events: auto;
      }

      @media (min-width: 1904px) {
        margin: 0px 30px;
        font-size: 21px;
        line-height: 25px;
      }

      &:last-child {
        padding-right: 0;

        @media screen and (max-width: 1264px) {
          font-size: 19px;
        }
      }

      &-0 {
        transition: opacity 0.2s ease-in-out 0.2s;
      }
      &-1 {
        transition: opacity 0.2s ease-in-out 0.4s;
      }
      &-2 {
        transition: opacity 0.2s ease-out 0.5s;
      }
      &-3 {
        transition: opacity 0.2s ease-out 0.55s;
      }
      &-4 {
        transition: opacity 0.2s ease-out 0.6s;
      }
      &-5 {
        transition: opacity 0.2s ease-out 0.65s;
      }
      &-6 {
        transition: opacity 0.2s ease-out 0.7s;
      }

      &--active {
        opacity: 1;
        pointer-events: auto;
      }
    }

    &-container {
      @media screen and (max-width: 1264px) {
        height: 0px;
      }

      &--active {
        height: 100%;
      }
    }
  }
}
</style>
