<template>
  <v-app>
    <v-container class="error__container">
      <v-row justify="center">
        <v-col cols="12" sm="10" md=6 lg="4">
          <v-img alt="404" :src="require('@/assets/images/404-schriftzug.svg')" />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" sm="10" md="8" lg="6">
          <h1 class="error__headline text-center">Die von Ihnen aufgerufene Seite existiert nicht.</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <router-link
            to="/"
            class="button body-1 font-weight-bold"
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
    height: 100vh;
  }
  &__headline {
    font-size: 3rem;
    font-weight: 300;
  }
}

.button {
  max-width: 200px;
  color: $black;
  text-decoration: none;
  display: block;
  margin: 0 auto;

  &--disabled {
    opacity: 0.2;
  }

  &:active, &:focus, &:visited, &:hover {
    color: $black;
    cursor: none;
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
}
</style>
