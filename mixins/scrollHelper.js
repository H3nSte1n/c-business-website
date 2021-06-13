export default {
  data() {
    return {
      scrollUp: false,
      lastScrollPosition: 0,
    };
  },

  methods: {
    checkScrollDirection() {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      this.scrollUp = scrollPosition > this.lastScrollPosition ? false : true;

      this.lastScrollPosition = scrollPosition <= 0 ? 0 : scrollPosition;
    },
  },
};
