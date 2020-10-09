<template>
  <Preload :loading="loading">
    <v-container>
      <v-row>
        <v-col>
          <header-lite :content="header" />
          <content-box
            v-for="(infos, key) of infoBoxes"
            :key="key"
            :content="infos"
          />
        </v-col>
      </v-row>
    </v-container>
  </Preload>
</template>

<script>
import HeaderLite from '@/components/header/header-lite';
import ContentBox from '@/components/view/content-box';
import ButtonEvents from '@/mixins/buttonEvents';
import Preload from '@/components/global/preloader';
import PropertyMapping from '@/mixins/propertyMapping';

export default {
  components: {HeaderLite, ContentBox, Preload},
  mixins: [ButtonEvents, PropertyMapping],
  data() {
    return {
      loading: true,
    }
  },
  mounted() {
    this.loadData();
  },
  methods: {
    async loadData() {
      const data = await this.$strapi.find('Impressum');
      console.log(data);
      this.passHeaderData(data.Header);
      this.passInfoBoxesData(data.InfoBox);
      this.loading = false;
    }
  }
}
</script>
