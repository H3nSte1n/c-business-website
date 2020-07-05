<template>
  <div :class="`stripe--${bColor}`">
    <v-container>
      <v-row
        justify="center"
        align="center"
        flex
        class="my-12 py-7"
      >
        <v-col
          cols="12"
          sm="12"
          md="4"
          lg="5"
          xl="4"
          class="d-flex align-self-start"
        >
          <h2 class="stripe__headline">{{ content.headline }}</h2>
        </v-col>
        <v-col
          cols="12"
          sm="12"
          md="8"
          lg="5"
          xl="4"
          :class="{'pl-12': $vuetify.breakpoint.mdAndDown}"
        >
          <p class="caption">{{ content.desc_1 }}</p>
          <p class="caption" v-if="content.desc_2">
            {{ content.desc_2 }}
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
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
.stripe {
  &__headline {
    font-size: 1.6rem;
    text-align: left;
    font-weight: 200;
  }
  &--yellow {
    background-color: #FFDA51;
  }
  &--blue {
    background-color: #DDEFF4;
  }
}
</style>
