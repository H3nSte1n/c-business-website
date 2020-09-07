<template>
  <v-container
    fluid
    class="pa-0"
  >
    <Header :content="header" />
    <Stripe
      :content="stripe"
      b-color="yellow"
    />
    <Slider />
    <Quote :quote="quote" />
    <Stripe
      :content="stripe2"
      b-color="blue"
    />
    <Quote
      :quote="quote2.quote"
      :desc="quote2.desc"
      position="left"
    />
    <Contact :content="content_contact" />
  </v-container>
</template>

<script>
import Stripe from '@/components/stripe.vue';
import Contact from '@/components/form/contact';
import Quote from '@/components/quote';
import Slider from '@/components/slider';
import Header from '@/components/header';
import ButtonEvents from '@/mixins/buttonEvents';

export default {
  components: { Header, Stripe, Contact, Quote, Slider },
  mixins: [ButtonEvents],
  transition: "swipe",
  data () {
    return {
      header: {
        headline: 'Persönlichkeitscoaching',
        desc: 'für Ihre private und berufliche Lebensbalance',
        img: {
          src: require('~/assets/images/claudia-eck-persoenlichkeitscoaching.svg'),
          alt: 'unternehmenscoaching'
        }
      },
      stripe: {
        headline: 'Einzelcoaching für Sie ganz persönlich',
        desc_1: 'Wenn Sie merken, dass Ihnen der Blick verstellt ist oder Sie sich neu betrachten möchten, kann ein Coaching hilfreich sein. Sie persönlich werden Ihr Profil besser kennenlernen und achtsamer mit sich umgehen. Eigentlich wünschen Sie sich nichts sehnlicher, als wieder leichter und freier entscheiden und handeln zu können. Befreien Sie sich von unliebsamen Gewohnheiten und gewinnen Sie mehr Zeit und Energie für das, was Ihnen am Herzen liegt.',
        desc_2: 'Im Coaching entdecken Sie neue Sichtweisen und Perspektiven, die Ihnen neue Handlungsoptionen ermöglichen. Gleichzeitig werden Sie sich klar über Ihre persönliche Stabilität, Flexibilität und Widerstandsfähigkeit. Wie stark sind Sie in Ihrer Selbstführungs- und Umsetzungsfähigkeit und möchten Sie sein? Wie gehen Sie mit Drucksituationen und Stress um? Dabei gibt es kein richtig oder falsch. Vielmehr reflektieren Sie Ihr Handeln und Wirken und entscheiden selbst über Ihre Bereitschaft in eine neue Richtung zu denken und zu gehen.'
      },
      quote: 'Auf dem Weg zu Ihnen selbst werden Sie Widerstände, Konflikte, Unsicherheiten auflösen und Entscheidungen und Veränderungen leichter meistern.',
      stripe2: {
        headline: 'Von mir bekommen Sie',
        desc_1: 'Ich bin der Experte für den Prozess. Als zertifizierter Coach bin ich für Sie da, sehe genau hin und höre gut zu. Gemeinsam machen wir Ihr Anliegen sichtbar und Sie finden zu Ihrer ganz eigenen Lösung. Durch gezieltes Coaching werden Sie Ihre Ressourcen und Stärken spüren und erkennen, die Sie für Ihre private Rolle im Alltag oder berufliche Entwicklung als Führungsperson brauchen. Das kann eine bestimmte Herausforderung, die richtige Work-Life-Balance, eine Veränderung, eine Entscheidung oder eine neue Aufgabe sein. Vielleicht haben Sie auch einfach nur den Wunsch sich zu reflektieren und sich selbst besser kennenzulernen.',
        desc_2: 'Gönnen Sie sich die Zeit nur für sich und probieren Sie es aus!'
      },
      quote2: {
        quote: 'Mein Honorar für ein Einzelcoaching von Privatpersonen liegt bei 80 Euro pro Stunde.',
        desc: 'Wenn Ihre finanzielle Situation das nicht zulässt, dann lassen Sie uns darüber sprechen. Meist reichen schon <strong>zwei bis drei Coachings</strong> je 90 Minuten und Sie sehen wieder Licht am Ende des Tunnels.'
      },
      content_contact: {
        headline: "Sie wollen durchstarten?",
        desc: "Lernen Sie mich ganz unverbindlich in einem ersten kostenfreien Gespräch kennen. All Ihre Fragen zum Coaching und der Vorgehensweise können Sie hier stellen. Erzählen Sie mir Ihr Anliegen und wir überlegen gemeinsam, wie wir starten können:"
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/page_transition.scss';
</style>
