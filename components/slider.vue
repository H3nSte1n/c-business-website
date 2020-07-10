<template>
  <v-container class="slider">
    <v-row>
      <v-col
        cols="1"
        md="2"
      >
        <p class="text-right body-1 text--disabled pr-4">
          {{ `0${currentItem + 1} / 0${items.length + 1}` }}
        </p>
      </v-col>
      <v-col
        cols="11"
        md="6"
      >
        <v-carousel
          hide-delimiters
          :show-arrows="false"
          :continuous="true"
          :inverval="500"
          :cycle="true"
          height="350px"
          @change="currentSlide"
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
        <p class="slider__text">
          <span class="slider__text--bold">{{ items[currentItem].text.tag }}</span><br>{{ items[currentItem].text.content }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
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
        },{
          src: 'https://picsum.photos/450/300?random=23423123',
          alt: 'test picsum image',
          text: {
            tag: 'Richen,',
            content: 'was ihnen wirklich wichtig ist'
          }
        }
      ],
      currentItem: 0,
    }
  },
  methods: {
    currentSlide(event) {
      console.log(event);
      this.currentItem = event;
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

    &--bold {
      font-weight: 600;
    }
  }
}
</style>
