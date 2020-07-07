<template>
  <v-container>
    <v-row>
      <v-col>
        <slot />
      </v-col>
    </v-row>
    <v-row
      class="mb-7"
      justify="center"
    >
      <v-col
        cols="4"
        md="8"
      >
        <p class="text-center caption">
          {{ content.desc }}
        </p>
      </v-col>
    </v-row>
    <v-row
      justify="center"
    >
      <v-col
        cols="4"
        md="8"
      >
        <h3 class="text-center h1 mb-3">
          {{ content.headline }}
        </h3>
        <p class="text-center caption">
          {{ content.subline }}
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
