<template>
  <div class="quote">
    <v-container>
      <v-row justify="center">
        <v-col
          cols="11"
          sm="9"
          md="8"
          lg="10"
        >
          <div
            class="quote__content"
            :class="{'quote__content--left': position === 'left'}"
          >
            <p
              class="quote__headline"
              :class="`text-${position}`"
              v-html="quote"
            />
            <p
              v-if="desc"
              class="quote__desc"
              v-html="desc"
            />
          </div>
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
    desc: {
      type: String,
      required: false,
      default: null
    },
    position: {
      type: String,
      required: false,
      default: 'center'
    }
  }
}
</script>

<style lang="scss">
.quote {
  background-color: #ffffff;
  padding: 40vh 0;
  &__content {
    max-width: 570px;
    margin: 0 auto;

    &--left {
      margin: 0;
    }
  }
  &__headline {
    font-size: 1.5rem;
    font-weight: 400;
  }

  .highlight {
    &--light-blue {
      color: #4494A6;
    }
  }
}
</style>
