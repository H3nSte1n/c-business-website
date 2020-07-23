<template>
  <div class="educational my-1">
    <v-container>
      <h3 class="text-center h1 educational__headline">
        {{ headline }}
      </h3>
      <v-row
        justify="space-around"
        flex
        align="baseline"
        class="my-10"
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
            <v-img
              width="52"
              class="d-flex mx-auto"
              alt="asd"
              :src="value.icon"
            />
          </icon-kachel>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import iconKachel from '@/components/iconKachel';

export default {
  components: { iconKachel },
  data() {
    return {
      headline: 'Von mir bekommen Sie',
      iconKachelConten: [
        {
          icon: require('~/assets/images/claudia-eck-analyse.svg'),
          content: {
            desc: 'Analyse von bereits bestehenden gesundheitsfördernden Strukturen und Abläufe',
            headline: 'Führungskräftecoaching',
            subline: 'Trotz steigender Komplexität und Arbeitsbelastung angstfrei, sicher, und gesunderhaltend führen?'
          }
        },
        {
          icon: require('~/assets/images/claudia-eck-identifizierung.svg'),
          content: {
            desc: 'Identifizierung von organisationsinternen gesundheitsbelastenden Bedingungen',
            headline: 'Teamcoaching',
            subline: 'Gruppendynamische Prozesse erkennen und unterschiedliche Rollen gewinnbringend nutzen'
          }
        },
        {
          icon: require('~/assets/images/claudia-eck-ideen.svg'),
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

<style scoped lang="scss">
.educational {
  &__headline {
    font-size: 2rem;
    text-align: left;
    font-weight: 300;
  }
}
</style>
