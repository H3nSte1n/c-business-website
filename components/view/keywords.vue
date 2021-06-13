<template>
  <v-container class="my-12 py-12 keywords">
    <v-row class="justify-end">
      <v-col cols="10">
        <p class="keywords--big">
          {{ keywords.first }}
        </p>
      </v-col>
    </v-row>
    <v-row class="align-center justify-end">
      <v-col cols="5" sm="4" md="3" class="body-1" v-html="keywords.desc" />
      <v-col cols="7" md="8" class="d-flex justify-center">
        <p class="keywords--big">
          {{ keywords.second }}
        </p>
      </v-col>
    </v-row>
    <v-row class="justify-end">
      <v-col cols="8">
        <p class="keywords--big">
          {{ keywords.third }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    keywords: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.keywords {
  @media screen and (min-width: 1420px) {
    max-width: 1290px;
  }
  &--big {
    font-size: 5vw;
    opacity: 0.1;

    @media screen and (min-width: 1420px) {
      font-size: 70px;
    }
  }
}
</style>
