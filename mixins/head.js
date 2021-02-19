export default {
  data() {
    return {
      description: 'Als Systemischer Coach und Diplom-Oecotrophologin verfolge ich einen ganzheitlichen Coaching- und Präventionsansatz. Ich bringe Themen wie Gesundheit …',
      social_mediaDescription: 'Als Systemischer Coach und Diplom-Oecotrophologin verfolge ich einen ganzheitlichen Coaching- und Präventionsansatz. Ich bringe Themen wie Gesundheit und persönliche Entwicklung für einen gesundheitsfördernden Lebens- und Arbeitsstil zusammen.',
    }
  },
  /*head() {
    return {
      title: this.getTitle(),
      meta: [
        { name: 'description', content: this.getDescription() },
        { name: 'robots', content: this.robots ? 'index, follow' : 'noindex, nofollow' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Claudia Eck' },
        { property: 'og:title', content: this.getTitle() },
        { property: 'og:description', content: this.getSocialMediaDescription() },
        { property: 'og:image', content: '' },
      ]
    }
  },*/
  methods: {
    getTitle() {
      return this.title ? `Claudia Eck - ${this.title}` : 'Claudia Eck'
    },
    getDescription() {
      return this.existDescription ? this.description : ''
    },
    getSocialMediaDescription() {
      return this.existSocialMediaDescription ? this.social_mediaDescription : ''
    }
  }
}
