<template>
  <v-container>
    <h3 class="text-center body-1">
      {{ headline }}
    </h3>
    <v-row
      justify="space-around"
      align="center"
      flex
      class="my-12"
    >
      <v-col
        v-for="(value, key) of iconKachelConten"
        :key="key"
        cols="12"
        sm="12"
        md="4"
        xl="3"
      >
        <icon-kachel
          :content="value.content"
        >
          <v-icon
            size="52"
            class="d-flex mx-auto"
          >
            {{ value.icon }}
          </v-icon>
        </icon-kachel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import iconKachel from '@/components/iconKachel';
import { mdiMagnify, mdiTextBoxOutline, mdiLightbulbOnOutline } from '@mdi/js';

export default {
  components: { iconKachel },
  data() {
    return {
      headline: 'Von mir bekommen Sie',
      iconKachelConten: [
        {
          icon: mdiMagnify,
          content: {
            desc: 'Analyse von bereits bestehenden gesundheitsfördernden Strukturen und Abläufe',
            headline: 'Führungskräftecoaching',
            subline: 'Trotz steigender Komplexität und Arbeitsbelastung angstfrei, sicher, und gesunderhaltend führen?'
          }
        },
        {
          icon: mdiTextBoxOutline,
          content: {
            desc: 'Identifizierung von organisationsinternen gesundheitsbelastenden Bedingungen',
            headline: 'Teamcoaching',
            subline: 'Gruppendynamische Prozesse erkennen und unterschiedliche Rollen gewinnbringend nutzen'
          }
        },
        {
          icon: mdiLightbulbOnOutline,
          content: {
            desc: 'Vorschläge von nutzbringenden und gesundheitsfördernden Maßnahmen in Richtung „attraktiver Arbeitgeber“',
            headline: 'Einzelcoaching',
            subline: 'Die individuelle Persönlichkeit als Stärke authentisch und klar positionieren'
          }
        }
      ]
    }
  }
}
</script>
