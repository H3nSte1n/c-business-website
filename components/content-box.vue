<template>
  <v-container class="content-box">
    <v-row justify="center">
      <v-col
        cols="12"
        xl="10"
      >
        <h2 class="text-left mb-3 content-box__headline">
          {{ content.headline }}
        </h2>
        <p class="text-left">
          {{ content.desc }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.content-box {
  &__headline {
    font-size: 3rem;
  }
}
</style>
