<template>
  <v-container
    fluid
    class="wrapper py-12"
    :class="`wrapper--${color}`"
  >
    <v-row justify="center">
      <v-col
        cols="12"
        xl="10"
      >
        <h2 class="wrapper__headline">
          {{ headline }}
        </h2>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col
        cols="12"
        xl="10"
      >
        <slot />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    headline: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: false,
      default: 'yellow'
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  &--yellow {
    background-color: $yellow
  }
  &--light-blue {
    background-color: $light-blue-2;
  }
  &__headline {
    font-size: 2rem;
    font-weight: 300;
  }
}
</style>
