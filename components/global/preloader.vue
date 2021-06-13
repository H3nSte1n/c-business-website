<template>
  <div>
    <div v-if="loading" class="loader__wrapper">
      <img :src="img.src" :alt="img.alt" class="loader" />
    </div>
    <slot v-else />
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  data() {
    return {
      img: {
        src: require('../../assets/images/loading.gif'),
        alt: 'loading svg',
      },
    };
  },
};
</script>

<style scoped lang="scss">
@import '@/scss/colors.scss';

.loader {
  transform: translate(-50%, -50%);
  position: relative;
  min-width: 250px;
  max-width: 20vw;
  left: 50%;
  top: 50%;

  &__wrapper {
    position: absolute;
    height: 100vh;
    width: 100%;
    background-color: white;
    top: 0px;
    left: 0px;
    z-index: 99999;
    overflow: none;
  }
}
</style>
