<template>
  <v-container class="contact__container">
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
      <v-col class="d-flex justify-center mt-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="122"
          height="122"
          viewBox="0 0 192 192"
        >
          <g
            fill="none"
            fill-rule="evenodd"
          >
            <circle
              class="circle"
              :class="{'circle--active': isTransmitted}"
              cx="96"
              cy="96"
              r="95"
              stroke="#000"
              stroke-width="2"
            />
            <polyline
              class="tick"
              :class="{'tick--active': isTransmitted}"
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              points="43 70 43 105.66 148.431 105.66"
              transform="rotate(-45 95.715 87.83)"
            />
          </g>
        </svg>
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
    setTimeout(() => {this.isTransmitted = true}, 2);
  }
}
</script>

<style scoped lang="scss">
.contact {
  &__container {
    align-self: center;
  }

  .circle {
    stroke-dashoffset: 1000;
    stroke-dasharray: 1000;
    transition: all 2s ease-out;

    &--active {
        stroke-dashoffset: 0;
      }
  }

  .tick {
    stroke-dashoffset: 200;
    stroke-dasharray: 200;
    transition: all 1s ease-out;

    &--active {
        stroke-dasharray: 350;
      }
  }
}
</style>
