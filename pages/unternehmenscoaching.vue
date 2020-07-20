<template>
  <v-container
    fluid
    class="pa-0"
  >
    <Header :content="header" />
    <Teaser
      :color="teaser.color"
      :content="teaser.content"
      :length="false"
    />
    <Quote
      :quote="quote"
    />
    <Educational />
    <keywords />
    <Contact />
  </v-container>
</template>

<script>
import Educational from '@/components/educational';
import Contact from '@/components/contact';
import Teaser from '@/components/teaser';
import Quote from '@/components/quote';
import Keywords from '@/components/keywords';
import Header from '@/components/header';

export default {
  components: { Header, Educational, Contact, Teaser, Quote, Keywords },
  data () {
    return {
      header: {
        headline: 'Unternehmenscoaching',
        desc: 'für mehr positive Energie und gesunde Führungskultur',
        img: {
          src: require('~/assets/images/claudia-eck-unternehmenscoaching.svg'),
          alt: 'unternehmenscoaching'
        }
      },
      teaser: {
          color: "light-blue",
          content: {
            headline: 'Gesundes Betriebsklima als gemeinsames Entwicklungsziel',
            desc: 'Unternehmen, denen im Rahmen der Prävention die gesundheitliche Fürsorge der Mitarbeiter am Herzen liegt, biete ich Betriebliches Gesundheitsmanagement BGM an. Die Arbeitszeit macht einen großen Teil der Lebenszeit aus. Da lohnt es sich, wenn die Mitarbeiter zufrieden sind, die Qualität der Arbeit halten oder sogar noch verbessern.',
            desc2: 'Führungskräfte wissen oft gar nicht, dass sie an der Gesundheit ihrer Mitarbeiter einen großen Anteil haben. Führen auf einem hohen Level heißt, die eigene innere Haltung und mentale Gesundheit so weiter zu entwickeln, dass andere gerne folgen. Den anvertrauten Mitarbeitern gelingt es dann leichter, die eigene Orientierung und Selbstbestimmung zu finden. Es kann daher für Unternehmen sinnvoll sein, auf die Führungskultur, das Stressmanagement, die Work-Life-Balance und die Burnout-Prävention zu schauen, um mögliche gesundheitsfördernde Strukturen, Abläufe und Maßnahmen für Führungskräfte, Teams oder auch einzelne Mitarbeiter zu entdecken.'
        }
      },
      quote: 'Gerne helfe ich Ihnen dabei oder lernen Sie mich über meinen Vortag <span class="highlight--light-blue">„Was kann ich tun, um den Krankenstand der Mitarbeiter zu reduzieren?“</span> kennen.'
    }
  }
}
</script>
