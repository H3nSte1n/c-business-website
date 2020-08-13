<template>
  <div :class="`stripe--${bColor}`">
    <v-container class="stripe">
      <v-row
        justify="center"
        align="center"
        flex
        class="py-12 px-3"
      >
        <v-col
          cols="12"
          sm="12"
          md="4"
          lg="4"
          xl="4"
          class="d-flex align-self-start mr-9"
        >
          <h2 class="stripe__headline">
            {{ content.headline }}
          </h2>
        </v-col>
        <v-col
          cols="12"
          sm="12"
          md="6"
          lg="6"
          xl="4"
          :class="{'pl-12': $vuetify.breakpoint.mdAndDown}"
        >
          <p class="body-1">
            {{ content.desc_1 }}
          </p>
          <p
            v-if="content.desc_2"
            class="body-1"
          >
            {{ content.desc_2 }}
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import boxHeightAnimationMixin from '@/mixins/boxHeightAnimation';

export default {
  mixins: [boxHeightAnimationMixin],
  props: {
    bColor: {
      type: String,
      default: "yellow"
    },
    content: {
      type: Object,
      required: true
    }
  },
  methods: {
    eventsInit() {
      document.addEventListener(
        'scroll',
        () => { this.animateBoxHeight('stripe') },
        false
      );
    }
  }
}
</script>

<style lang="scss">
.stripe {
  &__headline {
    font-size: 2.1rem;
    text-align: left;
    font-weight: 300;
  }
  &--yellow {
    background-color: #FFDA51;
  }
  &--blue {
    background-color: #DDEFF4;
  }
}
</style>
