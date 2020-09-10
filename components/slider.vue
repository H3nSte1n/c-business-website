<template>
  <v-container class="slider">
    <v-row class="pa-0 ma-0">
      <v-col
        cols="12"
        md="8"
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
              <span class="slider__text--bold">{{ items[currentItem].text.tag }}</span><br>{{ items[currentItem].text.content }}
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
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      opacityStatus: true,
      items: [
        {
          src: require("~/assets/images/slider-1-sehen.jpg"),
          alt: 'test picsum image',
          text: {
            tag: 'Sehen,',
            content: 'was Ihnen wirklich wichtig ist.'
          }
        },
        {
          src: require("~/assets/images/slider-2-fuehlen.jpg"),
          alt: 'test picsum image',
          text: {
            tag: 'Fühlen,',
            content: 'was Ihnen gut tut.'
          }
        },
        {
          src: require("~/assets/images/slider-3-erfahren.jpg"),
          alt: 'test picsum image',
          text: {
            tag: 'Erfahren,',
            content: 'was Sie können.'
          }
        },
        {
          src: require("~/assets/images/slider-4-wissen.jpg"),
          alt: 'test picsum image',
          text: {
            tag: 'Wissen,',
            content: 'was Sie brauchen.'
          }
        },
      ],
      currentItem: 0,
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
  padding: 40vh 0 0 0;

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
