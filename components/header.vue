<template>
  <v-container>
    <v-row
      align="center"
      justify="space-around"
      class="my-12 py-12"
    >
      <v-col
        cols="12"
        md="9"
        xl="7"
        :order="$vuetify.breakpoint.smAndDown ? 'last': 'first'"
        class="pl-12"
      >
        <h1
          class="font-weight-medium header__headline"
          :class="`text-${$vuetify.breakpoint.smAndDown ? 'center' : 'left'}`"
        >
          <span
            v-for="(item, key) of content.headline.split(' ')"
            :key="key"
            class="word-container"
          >
            <span
              class="word"
              :class="[`word-${key}`, {'word-active': isLoaded}]"
            >
              {{ item }}
            </span>
          </span>
        </h1>
        <p
          class="header__desc"
          :class="`text-${$vuetify.breakpoint.smAndDown ? 'center' : 'left'}`"
        >
          <span
            v-for="(item, key) of preparedHeadline"
            :key="key"
            class="word-container"
          >
            <span
              class="word"
              :class="[`word-${key + 1}`, {'word-active': isLoaded}]"
              v-html="item"
            />
          </span>
        </p>
      </v-col>
      <v-col
        cols="12"
        md="3"
        xl="3"
      >
        <v-img
          :alt="content.img.alt"
          :src="content.img.src"
          :max-width="`${$vuetify.breakpoint.mdAndDown ? '210px' : '250px'}`"
          class="mx-auto mb-12"
        />
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
    }
  },
  data() {
    return {
      isLoaded: false
    }
  },
  computed: {
    preparedHeadline() {
      return this.content.desc.split(' ').join('&nbsp;,').split(',');
    }
  },
  mounted() {
    this.isLoaded = true;
  }
}
</script>

<style scoped lang="scss">
.header {
  &__headline {
    hyphens: auto;
    font-size: 36px;

    @media screen and (min-width: 1264px) {
      font-size: 72px;
    }
  }
  &__desc {
    hyphens: auto;
    font-size: 21px;

    @media screen and (min-width: 1264px) {
      font-size: 35px;
    }
  }
}

.word {
  position: relative;
  top: 105px;
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
  }

  &-container {
    display: inline-block;
    overflow: hidden;
  }
}
</style>
