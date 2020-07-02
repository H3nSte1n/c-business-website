<template>
  <c-container>
    <Header />
<<<<<<< Updated upstream
    <info-container />
  </c-container>
=======
    <Stripe
      :content="content"
      b-color="blue"
    />
    <Educational />
  </v-container>
>>>>>>> Stashed changes
</template>

<script>
import Header from '@/components/header';
<<<<<<< Updated upstream
import InfoContainer from '@/components/infoContainer';
export default {
  components: { Header, InfoContainer }

=======
import Stripe from '@/components/stripe.vue';
import Educational from '@/components/educational';
export default {
  components: { Header, Stripe, Educational },
  data () {
    return {
      content: {
        headline: 'Gesundes Betriebsklima als gemeinsames Entwicklungsziel',
        desc_1: 'Unternehmen, denen im Rahmen der Prävention die gesundheitliche Fürsorge der Mitarbeiter am Herzen liegt, biete ich Betriebliches Gesundheitsmanagement BGM an. Die Arbeitszeit macht einen großen Teil der Lebenszeit aus. Da lohnt es sich, wenn die Mitarbeiter zufrieden sind, die Qualität der Arbeit halten oder sogar noch verbessern.',
        desc_2: 'Führungskräfte wissen oft gar nicht, dass sie an der Gesundheit ihrer Mitarbeiter einen großen Anteil haben. Führen auf einem hohen Level heißt, die eigene innere Haltung und mentale Gesundheit so weiter zu entwickeln, dass andere gerne folgen. Den anvertrauten Mitarbeitern gelingt es dann leichter, die eigene Orientierung und Selbstbestimmung zu finden. Es kann daher für Unternehmen sinnvoll sein, auf die Führungskultur, das Stressmanagement, die Work-Life-Balance und die Burnout-Prävention zu schauen, um mögliche gesundheitsfördernde Strukturen, Abläufe und Maßnahmen für Führungskräfte, Teams oder auch einzelne Mitarbeiter zu entdecken.'
      }
    }
  }
>>>>>>> Stashed changes
}
</script>
