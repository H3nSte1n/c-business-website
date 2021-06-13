<template>
  <v-container>
    <v-row
      justify="center"
      align="center"
      :class="$vuetify.breakpoint.xl ? 'mt-6' : 'mt-0'"
    >
      <v-col
        cols="12"
        sm="6"
        xl="5"
        class="d-flex flex-column-reverse flex-sm-column pl-12 mb-12 header"
        :class="{'header-active': isLoaded}"
      >
        <h1
          class="font-weight-bold header__headline"
        >
          {{ content.headline }}
        </h1>
        <p
          v-if="content.desc"
          class="header__subline"
        >
          <span
            v-for="(item, key) of preparedDescription"
            :key="key"
            class="word-container"
          >
            <span
              class="word"
              :class="[`word-${preparedHeadline.length + 1}`, {'word-active': isLoaded}]"
              v-html="item"
            />
          </span>
        </p>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        xl="5"
        class="pa-0"
      >
        <v-img
          :src="img.src"
          :alt="img.alt"
          height="100%"
          width="100%"
          :max-width="$vuetify.breakpoint.lg ? '330px' : '590px'"
          class="ma-0 pa-0"
        >
          <div
            class="image__invisible"
            :class="{'image__invisible-disable': isLoaded}"
          />
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    isLoaded: {
      type: Boolean,
      required: true,
      default: false
    },
    img: {
      type: Object,
      required: true,
      default: () => {}
    },
    content: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  computed: {
    preparedHeadline() {
      return this.content.headline.split(' ').join('&nbsp;,').split(',');
    },
    preparedDescription() {
      return this.content.desc.split(' ').join('&nbsp;,').split(',');
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/colors.scss';

.header {
  &__headline {
      font-size: 3.75rem;
      font-weight: 300;
      line-height: 3.75rem;
      letter-spacing: -0.0083333333em;
      font-family: "Roboto", sans-serif;
    }
    &__subline {
      font-size: 1.25rem;
      font-weight: 500;
      line-height: 1.5rem;
      letter-spacing: 0.0125em;
      font-family: "Roboto", sans-serif;
      margin: 8px 0;
    }
  @media screen and (min-width: 600px) {
    position: relative;
    left: 140px;
    z-index: 54;
    text-align: right;
    transition: left 0.75s ease-out 2s;

    &-active {
      left: 79px;
    }
  }

  @media screen and (min-width: 1264px) {
    position: relative;
    left: 200px;
    z-index: 54;
    &-active {
      left: 79px;
    }
    &__headline {
      text-align: right;
      font-size: 5rem;
      line-height: 5.5rem;

      @media screen and (min-width: 1904){
        font-size: 7rem;
        line-height: 6.75rem;
      }
    }
    &__subline {
      text-align: right;
      margin: 20px 0;
      font-size: 1.5rem;
      line-height: 1.7rem;

      @media screen and (min-width: 1904){
        font-size: 1.8rem;
        line-height: 2rem;
      }
    }
  }
}

.word {
  position: relative;
  top: 105px;
  opacity: 0;
  transition: top 0.75s ease-out 0.5s;
  &-2 {
    transition: top 0.75s ease-out 1s;
  }
  &-3 {
    transition: top 1s ease-out 1.2s;
  }
  &-4 {
    transition: top 1s ease-out 1.5s;
  }
  &-5 {
    transition: top 1s ease-out 1.8s;
  }
  &-6 {
    transition: top 1s ease-out 2s;
  }
  &-7 {
    transition: top 1s ease-out 2.2s;
  }
  &-8 {
    transition: top 1s ease-out 2.3s;
  }

  &-active {
    top: 0px;
    opacity: 1;
  }
  &-container {
    display: inline-block;
    overflow: hidden;
  }
}

.image {
  &__invisible {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: $white;
    transition: all 0.75s ease-out 2s;
    &-disable {
      transform: translateX(100%);
    }
  }
}
</style>
