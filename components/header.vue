<template>
  <v-container>
    <v-row
      align="center"
      justify="space-around"
      class="my-12 py-12"
    >
      <v-col
        cols="12"
        md="9"
        xl="7"
        :order="$vuetify.breakpoint.smAndDown ? 'last': 'first'"
        class="pl-12"
      >
        <h1
          class="font-weight-medium header__headline"
          :class="`text-${$vuetify.breakpoint.smAndDown ? 'center' : 'left'}`"
        >
          {{ content.headline }}
        </h1>
        <p
          class="header__desc"
          :class="`text-${$vuetify.breakpoint.smAndDown ? 'center' : 'left'}`"
        >
          {{ content.desc }}
        </p>
      </v-col>
      <v-col
        cols="12"
        md="3"
        xl="3"
      >
        <v-img
          :alt="content.img.alt"
          :src="content.img.src"
          :max-width="`${$vuetify.breakpoint.mdAndDown ? '210px' : '250px'}`"
          class="mx-auto mb-12"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  &__headline {
    hyphens: auto;
    font-size: 36px;

    @media screen and (min-width: 1264px) {
      font-size: 72px;
    }
  }
  &__desc {
    hyphens: auto;
    font-size: 21px;

    @media screen and (min-width: 1264px) {
      font-size: 35px;
    }
  }
}
</style>
