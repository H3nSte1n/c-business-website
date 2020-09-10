<template>
  <v-app ref="app">
    <v-container class="error__container">
      <v-row justify="center">
        <v-col>
          <h1 class="error__headline">404</h1>
          <p class="error__subline text-center">Die von Ihnen aufgerufene<br> Seite existiert nicht.</p>
          <router-link
            to="/"
            class="button body-1 font-weight-bold text-center"
          >
            Zurück zur Startseite
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import ButtonEvents from '@/mixins/buttonEvents';

export default {
  mixins: [ButtonEvents],
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/colors.scss';

.error {
  &__container {
    top: 50%;
    position: relative;
    transform: translateY(-60%);
  }
  &__headline {
    text-align: center;
    font-weight: 900;
    font-size: 9rem;
    opacity: 0.1;
  }
  &__subline {
    font-size: 3rem;
    font-weight: 300;
  }
}

.button {
  max-width: 200px;
  color: $black;
  text-decoration: none;
  display: block;
  margin: 40px auto;
  text-decoration: none;
  padding: 10px;
  border: 2px solid $black;
  border-radius: 25px;
  color: $black;

  &--disabled {
    opacity: 0.2;
  }

  &:active, &:focus, &:visited, &:hover {
    color: $black;
    cursor: none;
  }
}
</style>
