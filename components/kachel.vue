<template>
  <v-container>
    <v-row
      justify="center"
      align="center"
      flex
      class="my-12"
    >
      <v-col
        cols="12"
        sm="6"
        xl="5"
        :order-sm="content.order ? content.order : 'first'"
      >
        <v-img
          :src="content.img.src"
          :alt="content.img.alt"
          width="100%"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
        xl="5"
      >
        <h2 class="display-1">
          {{ content.headline }}
        </h2>
        <p class="boy-1 font-weight-bold mt-2">
          {{ content.subline }}
        </p>
        <p class="body-1">
          {{ content.text }}
        </p>
        <router-link
          :to="content.button.link"
          class="text-lowercase button"
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

<style lang="scss" scoped>
.button {
  max-width: 200px;
  border-bottom: 1px solid black;
  color: black;
  text-decoration: none;
}
</style>
