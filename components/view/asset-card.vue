<template>
  <v-container class="asset_card__wrapper mx-4">
    <v-row class="asset_card__content">
      <v-col>
        <v-img
          width="42"
          class="d-flex mx-auto mb-6"
          :src="content.icon.src"
          :alt="content.icon.alt"
        />
        <p class="text-center asset_card__desc mt-6" v-html="content.desc" />
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
    min-width: 300px;
    height: 300px;
    background-color: $yellow-2;
    border-radius: 100%;

    @media screen and (min-width: 640px) {
      min-width: 360px;
      width: 360px;
      height: 360px;
    }
  }

  &__content {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    padding: 0 30px;
  }

  &__desc {
    font-size: 15px;
    line-height: 23px;

    @media screen and (min-width: 1264px) {
      font-size: 18px;
      line-height: 30px;
    }
  }
}
</style>
