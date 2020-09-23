export default {
  data() {
    return {
      header: {},
      article: [],
      quote: null,
      presentation: {},
      contact: {},
      slider: []
    }
  },
  methods: {
    passHeaderData(HeaderData) {
      this.header = {
        headline: HeaderData.Headline,
        desc: HeaderData.Subline,
        img: {
          src: process.env.BASE_URL_STRAPI + HeaderData.Image.url,
          alt: HeaderData.Image.alternativeText
        },
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
    passQuoteData(QuoteData) {
      this.quote = QuoteData;
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
          src: process.env.BASE_URL_STRAPI + item.image.url,
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
