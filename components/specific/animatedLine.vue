<template>
  <v-container>
    <v-row v-if="$vuetify.breakpoint.mdAndUp">
      <v-col
        class="animated pt-7"
        :class="startScrolling ? 'animated--disable' : ''"
      >
        <p class="animated__text">
          scroll
        </p>
        <div class="animated__line" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      startScrolling: false,
    }
  },

  created() {
    window.addEventListener('scroll', this.disableScrollIndicator);
  },
  methods: {
    disableScrollIndicator() {
      this.startScrolling = true;
      window.removeEventListener('scroll', this.disableScrollIndicator);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/colors.scss';

.animated {
  height: 50px;
  margin-bottom: 30px;
  transition: opacity 1s ease-in-out;

  @media screen and (min-width: 1264px) {
    margin-bottom: 140px;
  }

  &__line {
    height: 0px;
    width: 2px;
    margin: 0 auto;
    background-color: $dark-2;
    opacity: 1;
    animation: lineAnimation 4s ease-in-out infinite;
  }

  &__text {
    text-align: center;
  }

  @keyframes lineAnimation {
    0% {
      height: 0px;
    }
    50% {
      height: 40px;
    }
    100% {
      height: 0px;
    }
  }

  &--disable {
    opacity: 0;
  }
}
</style>
