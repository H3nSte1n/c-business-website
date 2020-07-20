<template>
  <v-container>
    <v-row
      justify="space-around"
      align="center"
      flex
      class="my-12"
      :class="$vuetify.breakpoint.mdAndUp ? 'py-12': 'py-1'"
    >
      <v-col
        cols="12"
        sm="12"
        md="5"
        xl="4"
        :order-md="content.order ? content.order : 'first'"
      >
        <v-img
          :src="content.img.src"
          :alt="content.img.alt"
          width="40%"
          max-width="200px"
          class="mx-auto mb-12"
        />
      </v-col>
      <v-col
        cols="12"
        sm="12"
        md="5"
        xl="4"
      >
        <h2 class="display-1 font-weight-light">
          {{ content.headline }}
        </h2>
        <p class="body-1 font-weight-bold mt-2 mb-5">
          {{ content.subline }}
        </p>
        <p class="body-1">
          {{ content.text }}
        </p>
        <router-link
          :to="content.button.link"
          class="text-lowercase button body-1 font-weight-bold pb-1"
        >
          {{ content.button.text }}
        </router-link>
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

<style lang="scss">
.button {
  max-width: 200px;
  color: black;
  text-decoration: none;

  &:active, &:focus, &:hover, &:visited {
    color: black;
    cursor: none;
  }
}
</style>
