<template>
  <div :class="`article--${bColor}`">
    <v-container ref="animateBoxHeight" :data-BoxCount="boxCount">
      <v-row justify="center" align="center" flex class="py-12 px-3">
        <v-col cols="12" sm="12" md="4" lg="4" xl="4" class="d-flex align-self-start mr-9">
          <h2 class="article__headline">
            {{ content.headline }}
          </h2>
        </v-col>
        <v-col
          cols="12"
          sm="12"
          md="6"
          lg="6"
          xl="4"
          :class="{ 'pl-12': $vuetify.breakpoint.mdAndDown }"
          class="article__desc"
          v-html="content.desc_1"
        />
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
      default: 'yellow',
    },
    content: {
      type: Object,
      required: true,
    },
    boxCount: {
      type: Number,
      required: false,
      default: 1,
    },
  },
};
</script>

<style lang="scss">
@import '@/scss/colors.scss';

.article {
  &__headline {
    font-size: 1.8rem;
    text-align: left;
    font-weight: 300;

    @media screen and (min-width: 1264px) {
      font-size: 2.8rem;
    }
  }
  &__desc {
    font-size: 1.2rem;
  }
  &--yellow {
    background-color: $yellow;
  }
  &--blue {
    background-color: $light-blue-2;
  }
}
</style>
