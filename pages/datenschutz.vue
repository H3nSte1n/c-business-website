<template>
  <Preload :loading="loading">
    <v-container>
      <v-row>
        <v-col>
          <header-lite :content="header" />
          <content-box-wrapper
            v-for="(infos, key) of infoBoxSections"
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
import ContentBoxWrapper from '@/components/container/wrapper-content-box';
import ButtonEvents from '@/mixins/buttonEvents';
import Preload from '@/components/global/preloader';
import PropertyMapping from '@/mixins/propertyMapping';

export default {
  components: {HeaderLite, ContentBoxWrapper, Preload},
  mixins: [ButtonEvents, PropertyMapping],
  data() {
    return {
      loading: true,
      infoBoxSections: [],
    }
  },
  mounted() {
    this.loadData();
  },
  methods: {
    async loadData() {
      const data = await this.$strapi.find('DataProtection');
      this.passHeaderData(data.Header);
      this.passInfoBoxeSectionsData(data.InfoBoxSection);
      this.loading = false;
    },
    passInfoBoxeSectionsData(InfoBoxSectionData) {
      InfoBoxSectionData.forEach(async item => {
        this.passInfoBoxesData(item.InfoBox);
        let infoBoxSection = {
          headline: item.headline,
          infoBoxes: this.infoBoxes
        }
        this.infoBoxSections.push(infoBoxSection)
      });
    }
  }
}
</script>
