<template>
  <v-container class="wrapper-content-box">
    <v-row justify="center">
      <v-col cols="12" xl="10">
        <h2 class="text-left mb-3 wrapper-content-box__headline">
          {{ content.headline }}
        </h2>
        <content-box v-for="(infos, key) of content.infoBoxes" :key="key" :content="infos" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ContentBox from '@/components/view/content-box';

export default {
  components: { ContentBox },
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.wrapper-content-box {
  &__headline {
    font-size: 3rem;
  }
}
</style>
