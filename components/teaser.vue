<template>
  <div
    :class="`teaser--${color}`"
    class="py-12"
  >
    <v-container class="teaser">
      <v-row
        justify="left"
        class="ml-3 mb-5"
      >
        <v-col
          cols="10"
          md="8"
          lg="6"
          xl="4"
        >
          <h2
            class="teaser__headline"
            :class="{'teaser__headline--extends': length}"
          >
            {{ content.headline }}
          </h2>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col
          cols="9"
          md="8"
        >
          <p>{{ content.desc }}</p>
          <p v-if="content.desc2">
            {{ content.desc2 }}
          </p>
          <p
            v-if="content.quote"
            class="teaser__quote"
          >
            {{ content.quote }}
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: false,
      default: 'yellow'
    },
    content: {
      type: Object,
      required: true,
    },
    length: {
      type: Boolean,
      required: false,
      default: true
    }
  },
}
</script>

<style scoped lang="scss">
.teaser {
  padding: 0 0 90px 0;
  &__headline {
    font-size: 2rem;
    text-align: left;
    font-weight: 300;

    &--extends {
      max-width: 290px;
    }
  }
  &__quote {
    font-size: 1.4rem;
    font-weight: 300;
  }

  &--yellow {
    background-color: #FFDA51;
  }
  &--light-blue {
    background-color: #DDEFF4;
  }
}
</style>
