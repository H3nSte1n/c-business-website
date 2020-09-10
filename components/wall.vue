<template>
  <v-container fluid class="wall__container">
    <h3
      class="wall__title text-center"
      v-html="title"
    />
    <div class="wall__wrapper mt-12">
      <v-row justify="center">
        <v-col
          cols="12"
          xl="10"
        >
          <div class="wall">
            <slot />
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Title'
    }
  }
}
</script>

<style lang="scss" scoped>
.wall {
  display: flex;
  flex-wrap: unset;
  width: 100%;

  @media (min-width: 1264px) {
    justify-content: space-between;
    max-width: 1600px;
    margin: 0 auto;
  }

  &__container {
    min-height: 80vh;
    padding: 100px 0;
  }

  &__wrapper {
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__title {
    font-weight: 700;
    font-size: 2.3rem;
    line-height: 3.3rem;
    margin-bottom: 100px;

    @media (min-width: 640px) {
      font-size: 3.4rem;
    }
  }
}
</style>
