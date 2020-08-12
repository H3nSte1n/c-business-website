<template>
  <v-container class="contact">
    <v-row justify="center">
      <v-col
        cols="12"
        md="12"
      >
        <h3 class="text-center contact__headline">
          {{ headline }}
        </h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="contact__mail-icon-space">
        <v-img
          width="50px"
          class="contact__mail-icon"
          :class="{'contact__mail-icon-active': isTransmitted}"
          :src="require('@/assets/images/icon-brief.svg')"
        >
          {{ $vuetify.icons.mail }}
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import mailIcon from '@/assets/images/icon-brief.svg';
export default {
  props: {
    headline: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      mailIcon,
      isTransmitted: false
    }
  },
  mounted() {
    setTimeout(() => {this.isTransmitted = true}, 1);
    console.log(this.isTransmitted, 'transmitted');
  }
}
</script>

<style scoped lang="scss">
.contact {
  &__mail-icon {
    transform: translate(1vw, -80%);
    top: 50%;
    transition: transform 2s ease-out;

    &-space {
      min-height: 60vh;
    }

    &-active {
      transform: translate(100vw, 60%);
    }
  }
}
</style>
