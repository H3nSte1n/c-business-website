<template>
  <v-container class="slider">
    <v-lazy
      v-model="isActive"
      :options="{
        threshold: .5
      }"
      min-height="200"
      transition="fade-transition"
    >
      <v-row class="pa-0 ma-0">
        <v-col
          cols="12"
          md="8"
          class="pa-0"
        >
          <v-carousel
            v-model="currentItem"
            hide-delimiters
            :show-arrows="false"
            :continuous="true"
            :inverval="500"
            :cycle="true"
          >
            <v-carousel-item
              v-for="(item,i) in items"
              :key="i"
              :src="item.src"
              :alt="item.alt"
            />
          </v-carousel>
        </v-col>
        <v-col
          cols="12"
          md="4"
          class="align-self-center pl-6"
        >
          <v-row>
            <v-col>
              <p
                class="slider__text"
                :class="{'slider__text-active': opacityStatus }"
              >
                <span class="slider__text--bold" v-html="items[currentItem].text.tag" /><br>
                <span v-html="items[currentItem].text.content" />
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex align-center">
              <v-btn
                :disabled="currentItem < 1"
                icon
                class="button"
                :class="{'button--disabled': currentItem < 1}"
              >
                <v-img
                  alt="arrow backward"
                  :src="require('@/assets/images/slider-backward.svg')"
                  max-width="20px"
                  class="mr-4"
                  :disabled="currentItem < 1"
                  @click="navigateBackward()"
                />
              </v-btn>
              {{ `0${currentItem + 1} / 0${items.length}` }}
              <v-btn
                :disabled="currentItem === items.length-1"
                icon
                class="button"
                :class="{'button--disabled': currentItem === items.length-1}"
              >
                <v-img
                  alt="arrow forward"
                  :src="require('@/assets/images/slider-forward.svg')"
                  max-width="20px"
                  class="ml-4"
                  @click="navigateForward()"
                />
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-lazy>
  </v-container>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data() {
    return {
      opacityStatus: true,
      currentItem: 0,
      isActive: false,
    }
  },
  watch: {
    opacityStatus() {
      this.reactiveOpacityStatus();
    }
  },
  methods: {
    reactiveOpacityStatus() {
      this.opacityStatus = false;
      this.opacityStatus = true;
    },
    currentSlide(event) {
      this.currentItem = event;
    },
    navigateForward() {
      this.currentItem += 1;
    },
    navigateBackward() {
      this.currentItem -= 1;
    }
  }
}
</script>

<style lang="scss">
.slider {
  padding: 20vh 0 0 0;

  @media screen and (min-width: 1264px) {
    padding: 40vh 0 0 0;
  }

  &__text {
    font-size: 1.5rem;
    font-weight: 300;
    opacity: 0;
    transition: opacity 1s ease-out;

    &-active {
      opacity: 1;
    }

    &--bold {
      font-weight: 600;
    }
  }
}
</style>
