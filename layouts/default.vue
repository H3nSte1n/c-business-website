<template>
  <v-app ref="app">
    <v-main>
      <v-container
        fluid
        class="pa-0"
      >
        <Navigation />
        <nuxt />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from '~/components/global/footer';
import Navigation from '@/components/global/navigation';
import ButtonEvents from '@/mixins/buttonEvents';
import scrollEvents from '@/mixins/scrollEvents';

export default {
  components: { Footer, Navigation },
  mixins: [ButtonEvents, scrollEvents],
}
</script>

<style lang="scss">
@import '@/scss/colors.scss';

body {
  cursor: none;
}
.cursor {
  width: 0rem;
  height: 0rem;
  border-radius: 50%;
  border: 1px solid $black;
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 999999;
  pointer-events: none;
  transition: width 0.25s ease-out, height 1s ease-out, border-color 0.2s ease-out;

  &--active {
    width: 3rem;
    height: 3rem;
  }

  &--transition {
    mix-blend-mode: difference;
    background-color: white;
    cursor: none;
  }

  &:active, &:focus, &:hover, &:visited {
    color: $black;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    cursor: none;
  }

  &-dot {
    &::before {
      content: ' ';
      display: block;
      background-color: $black;
      width: 0.4rem;
      height: 0.4rem;
      border-radius: 50%;
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 9999999;
    }
    &-active {
      &::before {
        background-color: $black;
      }
    }
  }
}

.button {
  max-width: 200px;
  color: $black;
  text-decoration: none;

  &--disabled {
    opacity: 0.2;
  }

  &:active, &:focus, &:visited, &:hover {
    color: $black;
    cursor: none;
    outline: none;
  }

  &--mobile-active {
    @media screen and (max-width: 1264px) {
      text-decoration: none;
      padding: 10px;
      border: 2px solid $black;
      border-radius: 25px;
      color: $black;
    }
  }

  &--transition {
    text-decoration: underline;
  }
}

.nuxt-link-active {
  text-decoration: underline;

  @media (min-width: 1264px) {
    text-decoration: none;
    padding: 10px;
    border: 2px solid $black;
    border-radius: 25px;
  }
}
</style>
