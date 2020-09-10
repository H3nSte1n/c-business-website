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
