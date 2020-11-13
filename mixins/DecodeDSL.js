export default {
  data() {
    return {
      colors: ['blue', 'red', 'green', 'white']
    }
  },

  methods: {
    getContent(htmlString, regExPattern) {
      const contentRe = new RegExp(regExPattern, 'gmi');
      return htmlString.match(contentRe)[0];
    },

    decodeDSLColorTag (value) {
      let result = value;
      if (!value) return '';

      this.colors.forEach(color => {
        const colorRegEx = /(?<=:)(.*?)(?=:)/
        const regExPattern = `(?<=:${color}:)(.*?)(?=:${color}:)`;
        const re = new RegExp(`:${color}:.*:${color}:`,'gmi');

        if(!colorRegEx.test(value)||!re.test(value)) return;
        result = value.replace(re, `<span class="dsl__color--${color}">${this.getContent(value, regExPattern)}</span>`);
      });

      return result;
    },
  }
}
