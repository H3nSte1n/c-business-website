<template>
  <v-container>
    <v-row justify="space-around" align="center" flex :class="$vuetify.breakpoint.mdAndUp ? 'py-12' : 'py-1'">
      <v-col
        cols="12"
        sm="12"
        md="5"
        xl="4"
        :order-md="content.order ? content.order : 'first'"
        class="my-9 teaser__img-container"
      >
        <v-lazy
          v-model="isActive"
          :options="{
            threshold: 0.5,
          }"
          min-height="200"
          transition="fade-transition"
        >
          <v-img
            :src="content.img.src"
            :alt="content.img.alt"
            :width="$vuetify.breakpoint.smAndDown ? '40%' : '100%'"
            :max-width="$vuetify.breakpoint.smAndDown ? '200px' : 'none'"
            class="mx-auto my-12"
          />
        </v-lazy>
      </v-col>
      <v-col cols="12" sm="12" md="5" xl="4">
        <div class="teaser__invisible" :class="{ 'teaser__invisible-enable': isClicked }" />
        <h2 class="display-1 font-weight-light teaser__headline">
          {{ content.headline }}
        </h2>
        <p class="body-1 font-weight-bold mt-2 mb-10">
          {{ content.subline }}
        </p>
        <p class="body-1 mb-6" v-html="content.text" />
        <router-link
          :to="content.button.link"
          class="text-lowercase button button--mobile-active body-1 font-weight-bold"
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
      required: true,
    },
  },
  data() {
    return {
      isClicked: false,
      isActive: false,
    };
  },
};
</script>

<style lang="scss">
@import '@/scss/colors.scss';

.teaser {
  &__headline {
    word-break: break-word;
    hyphens: auto;
  }
  &__invisible {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 0px;
    height: 100%;
    transition: width 0.7s ease-out;
    background-color: $white;
    &-enable {
      width: 100%;
    }
  }
  &__img-container {
    background-image: url('~assets/images/claudia-eck-teaser-background.png');
    background-repeat: repeat;
  }
}
</style>
