<template>
  <v-container>
    <v-row class="justify-end">
      <v-col cols="11">
        <p class="text--disabled text--big">
          {{ keywords.first }}
        </p>
      </v-col>
    </v-row>
    <v-row class="align-center justify-space-between">
      <v-col cols="5" sm="4" md="3">
        <p class="body-2">
          {{ desc }}
        </p>
      </v-col>
      <v-col cols="7" md="8">
        <p class="text--disabled text--big">
          {{ keywords.second }}
        </p>
      </v-col>
    </v-row>
    <v-row class="justify-end">
      <v-col cols="10">
        <p class="text--disabled text--big">
          {{ keywords.third }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      desc: 'Mein Coaching-Stil ist dabei wertschätzend und auf Augenhöhe mit Ihnen zu arbeiten.',
      keywords: {
        first: 'kompetenzaktivierend',
        second: 'lösungsorientiert',
        third: 'nachhaltig'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.text {
  &--big {
    font-size: 4rem;
  }
}
</style>
