<template>
  <v-container class="asset_card__wrapper mx-4">
    <v-row class="asset_card__content">
      <v-col>
        <p class="asset_card__pagination">{{ content.pagination }}</p>
        <h2 class="asset_card__headline">{{ content.headline }}</h2>
        <p class="asset_card__desc mt-6">
          {{ content.desc }}
        </p>
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
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/colors.scss';

.asset_card {
  &__wrapper {
    min-width: 360px;
    height: 300px;
    background-color: $light-blue-3;

    @media screen and (min-width: 640px) {
      min-width: 390px;
      width: 547px;
      height: 384px;
    }
  }

  &__content {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    padding: 0 10px;
  }

  &__pagination {
    font-size: 26px;
    line-height: 30px;
  }

  &__headline {
    font-size: 30px;
    line-height: 34px;
  }

  &__desc {
    font-size: 22px;
    line-height: 34px;
  }
}
</style>
