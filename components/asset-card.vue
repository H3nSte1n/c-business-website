<template>
  <v-container class="asset_card__wrapper mx-4">
    <v-row class="asset_card__content">
      <v-col>
        <v-img
          width="52"
          class="d-flex mx-auto mb-6"
          :src="content.icon.src"
          :alt="content.icon.alt"
        />
        <p class="text-center asset_card__desc mt-6">
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
    height: 360px;
    background-color: $yellow-2;
    border-radius: 100%;

    @media screen and (min-width: 640px) {
      min-width: 390px;
      width: 390px;
      height: 390px;
    }
  }

  &__content {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    padding: 0 10px;
  }

  &__desc {
    font-size: 22px;
    line-height: 34px;
  }
}
</style>
