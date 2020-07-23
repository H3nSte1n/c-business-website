<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="navigation navigation-mobile--open">
          <nav class="navigation__wrapper">
            <nuxt-link
              class="navigation__logo"
              exact
              to="/"
            >
              Claudia Eck
            </nuxt-link>
            <div class="navigation__link">
              <nuxt-link
                class="navigation__link-item"
                to="/persöhnlichkeitscoaching"
              >
                Persönlichkeit entfalten
              </nuxt-link>
              <nuxt-link
                class="navigation__link-item"
                to="/unternehmenscoaching"
              >
                Unternehmen beleben
              </nuxt-link>
              <nuxt-link
                class="navigation__link-item navigation__link-item--active"
                to="/übermich"
              >
                Über mich
              </nuxt-link>
              <nuxt-link
                class="navigation__link-item"
                to="/kontakt"
              >
                Kontakt
              </nuxt-link>
              <nuxt-link
                class="navigation__link-item navigation__link-item--mobile"
                to="tel:+1792242543"
              >
                + 1792 242543
              </nuxt-link>
              <span class="navigation__link-item navigation__link-item--desktop">+ 1792 242543</span>
            </div>
            <v-icon v-if="$vuetify.breakpoint.mdAndDown" size="30px">
              {{ mdiClose }}
            </v-icon>
          </nav>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiClose } from '@mdi/js';

export default {
  name: 'Navigation',
  data() {
    return {
      mdiClose
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

  @media (min-width: 960px) {
    position: sticky;
    top: 0px;
  }

  &__wrapper {
    position: relative;
    text-align: center;

    @media(min-width: 960px) {
      text-align: left;
    }
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
    display: none;

    @media(min-width: 960px) {
      display: inline-block;
      position: absolute;
      right: 0;
      bottom: 0;
    }

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

      &--mobile {
        display: block;

        @media (min-width: 960px) {
          display: none;
        }
      }

      &--desktop {
        display: none;

        @media (min-width: 960px) {
          display: inline-block;
        }
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

.navigation-mobile {
  &-button {
    position: absolute;
    width: 50px;
    right: 50px;
    top: 17px;

    @media (min-width: 960px) {
      // display: none;
    }

    &--open {
      &::before {
        position: absolute;
        content: "";
        height: 1px;
        width: 24px;
        transform: rotate(45deg);
        background-color: #343434;
      }

      &::after {
        position: absolute;
        content: "";
        height: 1px;
        width: 24px;
        transform: rotate(-45deg);
        background-color: #343434;
      }
    }

    &--closed {
      &::before {
        position: absolute;
        content: "";
        height: 1px;
        width: 24px;
        transform: rotate(45deg);
        background-color: #343434;
      }

      &::after {
        position: absolute;
        content: "";
        height: 1px;
        width: 24px;
        transform: rotate(-45deg);
        background-color: #343434;
      }
    }
  }
}
</style>
