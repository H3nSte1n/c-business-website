export default {
  methods: {
    passHeaderData(PersoenlichkeitscoachingData) {
      this.header = {
        headline: PersoenlichkeitscoachingData.Header.Headline,
        desc: PersoenlichkeitscoachingData.Header.Subline,
        img: {
          src: process.env.BASE_URL_STRAPI + PersoenlichkeitscoachingData.Header.Image.url,
          alt: PersoenlichkeitscoachingData.Header.Image.alternativeText
        },
      }
    },
    passArticleData(PersoenlichkeitscoachingData) {
      PersoenlichkeitscoachingData.Article.forEach(item => {
        let articleItem = {
          headline: item.Headline,
          desc_1: item.description,
        }
        this.article.push(articleItem)
      });
    },
    passQuoteData(PersoenlichkeitscoachingData) {
      this.quote = PersoenlichkeitscoachingData.Quote;
    },
    passPresentationData(PersoenlichkeitscoachingData) {
        this.presentation = {
          headline: PersoenlichkeitscoachingData.Presentation.Headline,
          desc: PersoenlichkeitscoachingData.Presentation.Description,
      }
    },
    passContactData(PersoenlichkeitscoachingData) {
        this.contact = {
          headline: PersoenlichkeitscoachingData.Contact.headline,
          desc: PersoenlichkeitscoachingData.Contact.subline,
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
