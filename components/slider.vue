<template>
  <v-container class="slider">
    <v-row>
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
          height="350px"
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
          src: 'https://picsum.photos/450/300?random=23123',
          alt: 'test picsum image',
          text: {
            tag: 'Sehen,',
            content: 'was ihnen wirklich wichtig ist'
          }
        },
        {
          src: 'https://picsum.photos/450/300?random=2351123',
          alt: 'test picsum image',
          text: {
            tag: 'Hören,',
            content: 'was ihnen wirklich wichtig ist'
          }
        },
        {
          src: 'https://picsum.photos/450/300?random=2311223',
          alt: 'test picsum image',
          text: {
            tag: 'Fühlen,',
            content: 'was ihnen wirklich wichtig ist'
          }
        },
        {
          src: 'https://picsum.photos/450/300?random=23312123',
          alt: 'test picsum image',
          text: {
            tag: 'Schmecken,',
            content: 'was ihnen wirklich wichtig ist'
          }
        },
        {
          src: 'https://picsum.photos/450/300?random=23312123',
          alt: 'test picsum image',
          text: {
            tag: 'Schmecken,',
            content: 'was ihnen wirklich wichtig ist'
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
      console.log(event);
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
