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
              class="quote__headline mb-7"
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
@import '@/scss/colors.scss';

.quote {
  background-color: $white;
  padding: 40vh 0;
  &__content {
    max-width: 780px;
    margin: 0 auto;

    &--left {
      margin: 0;
    }
  }

  &__desc {
    font-size: 1.2rem;
  }
  &__headline {
    font-size: 1.7rem;
    font-weight: 400;

    @media screen and (min-width: 1264px) {
      font-size: 35px;
    }
  }

  .highlight {
    &--light-blue {
      color: $light-blue;
    }
  }
}
</style>
