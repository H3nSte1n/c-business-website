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
      <v-col class="contact__mail-space">
        <v-icon size="50px" class="contact__mail">
          {{ mdiEmail }}
        </v-icon>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiEmail } from '@mdi/js';

export default {
  props: {
    headline: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      mdiEmail
    }
  }
}
</script>
