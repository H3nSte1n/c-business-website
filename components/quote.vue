<template>
  <div class="quote">
    <v-container>
      <v-row :justify="position">
        <v-col
          cols="11"
          sm="9"
          md="8"
        >
          <p
            class="quote__headline"
            :class="`text-${position}`"
          >
            {{ quote }}
          </p>
          <p v-if="desc">
            {{ desc }}
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    quote: {
      type: String,
      required: true,
    },
    // eslint-disable-next-line vue/require-default-prop
    desc: {
      type: String,
      required: false,
    },
    position: {
      type: String,
      required: false,
      default: 'center'
    }
  }
}
</script>

<style scoped lang="scss">
.quote {
  background-color: #ffffff;
  padding: 50vh 0;
  &__headline {
    font-size: 1.5rem;
    font-weight: 400;
  }
}
</style>
