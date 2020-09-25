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
    eventsInit() {
      document.addEventListener(
        'scroll',
        this.animateBoxHeight,
        false
      );
    },
    animateBoxHeight() {
      const animateElement = this.$refs.animateBoxHeight;
      if(!(this.isInViewport(animateElement) && animateElement.offsetHeight <= document.documentElement.clientHeight)) return;
      if(!this.elementsArePrepared) this.prepareAnimatedElement(animateElement);
      animateElement.style.height = `${animateElement.offsetHeight + ((animateElement.getBoundingClientRect().bottom - window.innerHeight) * -1)}px`;
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
