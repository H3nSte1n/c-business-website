<template>
  <div>
    <div v-if="loading" class="loader">
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
      default: true
    }
  }
}
</script>

<style scoped lang="scss">
.loader {
  border: 6px solid #f3f3f3;
  border-top: 16px solid black;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  position: relative;
  left: 50%;
  top: 50%;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
