<template>
  <v-container>
    <v-row
      justify="space-around"
      align="center"
      flex
      class="my-12 py-12"
      :class="`background--${bColor}`"
    >
      <v-col
        cols="12"
        sm="12"
        md="5"
        xl="4"
        class="d-flex align-self-start"
      >
        <h2>{{ headline }}</h2>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        md="5"
        xl="4"
        :class="{'pl-12': $vuetify.breakpoint.mdAndDown}"
      >
        <p>{{ desc_1 }}</p>
        <p v-if="desc_2">
          {{ desc_2 }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    bColor: {
      type: String,
      default: "yellow"
    }
  },
  data() {
    return {
      headline: 'Gesundes Betriebsklima als gemeinsames Entwicklungsziel',
      desc_1: 'Unternehmen, denen im Rahmen der Prävention die gesundheitliche Fürsorge der Mitarbeiter am Herzen liegt, biete ich Betriebliches Gesundheitsmanagement BGM an. Die Arbeitszeit macht einen großen Teil der Lebenszeit aus. Da lohnt es sich, wenn die Mitarbeiter zufrieden sind, die Qualität der Arbeit halten oder sogar noch verbessern.',
      desc_2: 'Führungskräfte wissen oft gar nicht, dass sie an der Gesundheit ihrer Mitarbeiter einen großen Anteil haben. Führen auf einem hohen Level heißt, die eigene innere Haltung und mentale Gesundheit so weiter zu entwickeln, dass andere gerne folgen. Den anvertrauten Mitarbeitern gelingt es dann leichter, die eigene Orientierung und Selbstbestimmung zu finden. Es kann daher für Unternehmen sinnvoll sein, auf die Führungskultur, das Stressmanagement, die Work-Life-Balance und die Burnout-Prävention zu schauen, um mögliche gesundheitsfördernde Strukturen, Abläufe und Maßnahmen für Führungskräfte, Teams oder auch einzelne Mitarbeiter zu entdecken.'
    }
  }
}
</script>

<style scoped lang="scss">
.background {
  &--yellow {
    background-color: #FFDA51;
  }
  &--blue {
    background-color: #DDEFF4;
  }
}
</style>
