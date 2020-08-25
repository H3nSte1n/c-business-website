<template>
  <v-container>
    <v-row
      justify="space-around"
      align="center"
      flex
      class="my-12"
      :class="$vuetify.breakpoint.mdAndUp ? 'py-12': 'py-1'"
    >
      <v-col
        cols="12"
        sm="12"
        md="5"
        xl="4"
        :order-md="content.order ? content.order : 'first'"
      >
        <v-img
          :src="content.img.src"
          :alt="content.img.alt"
          :width="$vuetify.breakpoint.smAndDown ? '40%': '100%'"
          :max-width="$vuetify.breakpoint.smAndDown ? '200px': 'none'"
          class="mx-auto mb-12"
        />
      </v-col>
      <v-col
        cols="12"
        sm="12"
        md="5"
        xl="4"
      >
        <div
          class="kachel__invisible"
          :class="{'kachel__invisible-enable': isClicked}"
        />
        <h2 class="display-1 font-weight-light kachel__headline">
          {{ content.headline }}
        </h2>
        <p class="body-1 font-weight-bold mt-2 mb-10">
          {{ content.subline }}
        </p>
        <p class="body-1 mb-6">
          {{ content.text }}
        </p>
        <router-link
          :to="content.button.link"
          event=""
          class="text-lowercase button button_touch body-1 font-weight-bold"
          @click.native.prevent="initClickAnimation()"
        >
          {{ content.button.text }}
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isClicked: false,
    }
  },
  mounted() {
    // this.initClickAnimation();
  },
  methods: {
    initClickAnimation() {
      document.querySelectorAll('.button').forEach(e => {
        e.addEventListener('click', () => {
          this.isClicked = true;
          setTimeout(() => {this.$router.push(this.content.button.link)}, 1000);
        });
      })
    }
  }
}
</script>

<style lang="scss">
.kachel {
  &__headline {
    word-break: break-word;
    hyphens: auto;
  }
  &__invisible {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 0px;
    height: 100%;
    transition: width 0.7s ease-out;
    background-color: white;
    &-enable {
      width: 100%;
    }
  }
}
</style>
