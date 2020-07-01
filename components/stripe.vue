<template>
  <v-container>
    <v-row
      justify="space-around"
      align="center"
      flex
      class="my-12 py-12"
      :class="`background--${bColor}`"
    >
      <v-col
        cols="12"
        sm="12"
        md="5"
        xl="4"
        class="d-flex align-self-start"
      >
        <h2>{{ content.headline }}</h2>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        md="5"
        xl="4"
        :class="{'pl-12': $vuetify.breakpoint.mdAndDown}"
      >
        <p>{{ content.desc_1 }}</p>
        <p v-if="content.desc_2">
          {{ content.desc_2 }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    bColor: {
      type: String,
      default: "yellow"
    },
    content: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.background {
  &--yellow {
    background-color: #FFDA51;
  }
  &--blue {
    background-color: #DDEFF4;
  }
}
</style>
