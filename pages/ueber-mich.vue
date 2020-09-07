<template>
  <v-container
    fluid
    class="pa-0"
  >
    <Header :content="header" />
    <div
      v-for="(content, key) in teasers"
      :key="key"
    >
      <Teaser
        :color="content.color"
        :content="content.content"
      />
    </div>
  </v-container>
</template>

<script>
import Teaser from '@/components/teaser';
import Header from '@/components/header';

export default {
  components: {Header, Teaser},
  transition: "swipe",
  data() {
    return {
      header: {
        headline: 'Über mich',
        desc: 'für Ihre private und berufliche Lebensbalance',
        img: {
          src: require('~/assets/images/claudia-eck-ueber-mich.svg'),
          alt: 'unternehmenscoaching'
        }
      },
      teasers: [
        {
          color: "yellow",
          content: {
            headline: 'Meine ganz private Seite',
            desc: 'Mich interessiert einfach das Dazwischen. Meistens ist es nicht sichtbar, aber es schwingt in jeder Geste mit. Das kann ein versteckter Wunsch, eine stille Leidenschaft oder eine verborgene Stärke sein. Wenn diese heimlichen Schätze sichtbar werden, ist etwas passiert. Nein kein Wunder, aber eine wohlwollende Umgebung, die es möglich macht.\n\n Goethe hat das schon sehr früh erkannt:',
            quote: 'Behandle die Menschen so, als ob sie das wären, was sie sein könnten. Und hilf ihnen das zu werden, was sie sein könnten.“'
          }
        },
        {
          color: "yellow",
          content: {
            headline: 'Mein Werden, mein Wirken, meine Werte',
            desc: 'Eine meiner wohlwollenden Umgebungen war meine Schule. Man lernt nicht alles in der Schule, aber ich habe zum Glück das Wichtigste mitgenommen: Mut für ein selbstbestimmtes Leben und mir treu zu bleiben. Daher bin ich immer auf der Suche WER ich bin, WAS will ich und WAS ich kann. Schon als Kind bin ich fragend und staunend durch die Welt gegangen. Dabei habe ich sehr früh gemerkt, dass ich durch meine Fragen Menschen zum Nachdenken und Explorieren bringe.  Aber auch ich bin zum Reflektieren gekommen. Durch meine persönliche Entdeckungsreise habe ich zu meinen Werten und meiner Haltung gefunden: Wertschätzung, Respekt, Mut, Sinnhaftigkeit, Genuss, Ausdauer, Spaß. Das Bewusstwerden meiner Werte und das Wissen wie mein Verhalten und Handeln wirkt, geben mir eine tragende Qualität meiner Arbeit als Systemischer Coach.',
          }
        },
        {
          color: "light-blue",
          content: {
            headline: 'Meine Lernkurve im Beruf',
            desc: 'Geradlinig war mein Weg nicht: Mit einem Germanistikstudium angefangen und mit Oecotrophologie abgeschlossen. Die ersten Berufsjahre habe ich als Produktmanager und Führungskraft in der Lebensmittelindustrie gearbeitet und später in einem Fachverlag für Ernährung, Gesundheit und Bildung als Redakteurin. Ich bin durch viele Abteilungen und viele Umstrukturierungsprozesse gegangen und bin durch eine Selbsterkenntnis reifer: Veränderungsprozesse haben Magie und ein kreativer Geist von Facilitation weht durch die Abteilungen. Das ist eine lebendige und dynamische Zeit mit offenem Ausgang und wenn es gut begleitet ist, ist alles im Fluss und in den Händen der Mitarbeiter. Ich habe miterlebt, dass Unternehmen das aushalten können, wenn sie dem Prozess und ihren Mitarbeitern vertrauen. Das für jeden erfahrbar zu machen, daran hängt mein Herzblut in meinem Beruf als Systemischer Coach und Veränderungsmanager – meine Selbstbestimmung.'
          }
        },
        {
          color: "light-blue",
          content: {
            headline: 'Mein Spaß und meine Hobbies',
            desc: 'Ich liebe es als Coach zu sehen, wie sich Menschen auf ihrem selbstbestimmten Weg entfalten und vital werden, ihre Ressourcen und Kompetenz aktivieren. Als Oecotrophologin mag ich den etwas aus der Mode gekommenen Begriff der gesundheitlichen Selbstfürsorge. Er sagt so schön, dass jeder für sich selbst sorgen darf. Ich sorge für mich, indem ich genussvoll esse, über die Alpen radle, französisch lerne, alleine oder mit Freunden in einem Café sitze und als „Mamapreneur“ Spaß habe.'
          }
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/page_transition.scss';
</style>
