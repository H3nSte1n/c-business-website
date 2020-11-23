import DecodeDSL from '@/mixins/DecodeDSL';

export default {
  mixins: [DecodeDSL],
  data() {
    return {
      header: {},
      article: [],
      quote: null,
      presentation: {},
      contact: {},
      slider: [],
      infoBoxes: []
    }
  },
  methods: {
    passHeaderData(HeaderData) {
      this.header = {
        headline: HeaderData.Headline,
        desc: HeaderData.Subline,
      };
      if(!HeaderData.Image) return;
      this.header.img = {
        src: HeaderData.Image.url,
        alt: HeaderData.Image.alternativeText
      }
    },
    passArticleData(ArticleData) {
      ArticleData.forEach(item => {
        let articleItem = {
          headline: item.Headline,
          desc_1: item.description,
        }
        this.article.push(articleItem)
      });
    },
    passInfoBoxesData(InfoBoxData) {
      InfoBoxData.forEach(item => {
        let infoBox = {
          headline: item.headline,
          desc: item.infos ? item.infos.replace(/<a/g, '<a class="button button--transition" target="_blank"') : '',
        }
        this.infoBoxes.push(infoBox)
      });
    },
    passQuoteData(QuoteData) {
      this.quote = this.decodeDSLColorTag(QuoteData) ?? '';
    },
    passPresentationData(PersoenlichkeitscoachingData) {
        this.presentation = {
          headline: PersoenlichkeitscoachingData.Presentation.Headline,
          desc: PersoenlichkeitscoachingData.Presentation.Description,
      }
    },
    passContactData(ContactData) {
        this.contact = {
          headline: ContactData.headline,
          desc: ContactData.subline,
      }
    },
    passSliderData(PersoenlichkeitscoachingData) {
      PersoenlichkeitscoachingData.Slider.forEach(item => {
        let sliderItem = {
          src: item.image.url,
          alt: item.image.alternativeText,
          text: {
            tag: item.headline,
            content: item.description
          }
        }
        this.slider.push(sliderItem);
      })
    }
  }
}
