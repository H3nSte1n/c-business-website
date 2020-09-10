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
    <Wall :title="title__asset_card">
      <asset-card
        v-for="(value, key) in assetCardContent"
        :key="key"
        :content="value.content"
      />
    </Wall>
    <Wall :title="title__offer_card">
      <offer-card
        v-for="(value, key) in offerCardContent"
        :key="key"
        :content="value.content"
      />
    </Wall>
    <keywords />
    <Contact
      :content="content_contact"
      :center-headline="true"
      :small-headline="true"
    />
  </v-container>
</template>

<script>
import Contact from '@/components/form/contact';
import Teaser from '@/components/teaser';
import Quote from '@/components/quote';
import Keywords from '@/components/keywords';
import Header from '@/components/header';
import ButtonEvents from '@/mixins/buttonEvents';
import Wall from '@/components/wall';
import assetCard from '@/components/asset-card';
import offerCard from '@/components/offer-card';

export default {
  components: { Header, Wall, assetCard, offerCard, Contact, Teaser, Quote, Keywords },
  mixins: [ButtonEvents],
  transition: "swipe",
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
      quote: 'Gerne helfe ich Ihnen dabei oder lernen Sie mich über meinen Vortag <span class="highlight--light-blue">„Was kann ich tun, um den Krankenstand der Mitarbeiter zu reduzieren?“</span> kennen.',
      content_contact: {
        headline: 'Gerne unterbreite ich Ihnen ein Individuelles Angebot:'
      },
      title__asset_card: 'Von mir <nobr>bekommen Sie</nobr>',
      title__offer_card: 'Angebote',
      assetCardContent: [
        {

          content: {
            desc: 'Analyse von bereits bestehenden gesundheitsfördernden Strukturen und Abläufe',
            icon: {
              src: require('~/assets/images/claudia-eck-analyse.svg'),
              alt: 'analyse icon'
            }
          }
        },
        {
          content: {
            desc: 'Identifizierung von organisationsinternen gesundheitsbelastenden Bedingungen',
            icon: {
              src: require('~/assets/images/claudia-eck-identifizierung.svg'),
              alt: 'identifizierung icon'
            }
          }
        },
        {
          content: {
            desc: 'Vorschläge von nutzbringenden und gesundheitsfördernden Maßnahmen in Richtung „attraktiver Arbeitgeber“',
            icon: {
              src: require('~/assets/images/claudia-eck-ideen.svg'),
              alt: 'ideen icon'
            }
          }
        }
      ],
      offerCardContent: [
        {
          content: {
            pagination: '01',
            headline: 'Führungskräftecoaching',
            desc: 'Trotz steigender Komplexität und Arbeitsbelastung angstfrei, sicher, und gesunderhaltend führen?'
          }
        },
        {
          content: {
            pagination: '02',
            headline: 'Teamcoaching',
            desc: 'Gruppendynamische Prozesse erkennen und unterschiedliche Rollen gewinnbringend nutzen'
          }
        },
        {
          content: {
            pagination: '03',
            headline: 'Einzelcoaching',
            desc: 'Die individuelle Persönlichkeit als Stärke authentisch und klar positionieren'
          }
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/page_transition.scss';
</style>
