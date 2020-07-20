export default {
  data() {
    return {
      elementArePrepared: false,
    }
  },
  mounted() {
    this.eventsInit();
  },
  methods: {
    animateBoxHeight(className) {
      const stripes = document.querySelectorAll(`.${className}`);
      stripes.forEach( e => {
        if(this.isInViewport(e) && e.offsetHeight <= document.documentElement.clientHeight) {
          if(!this.elementsArePrepared) this.prepareAnimatedElement(e);
          e.style.height = `${e.offsetHeight + ((e.getBoundingClientRect().bottom - window.innerHeight) * -1)}px`;
        }
      })
      this.elementArePrepared = true;
    },

    isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
          rect.bottom - window.innerHeight <= 0
      );
    },

    prepareAnimatedElement(element) {
      element.children[0].style.position = "relative"
      element.children[0].style.top = "50%"
      element.children[0].style.transform = "translateY(-50%)"
    },
  }
}
