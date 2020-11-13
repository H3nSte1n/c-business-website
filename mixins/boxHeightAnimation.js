export default {
  data() {
    return {
      elementArePrepared: false,
    }
  },
  mounted() {
    const animatedElement = this.$refs.animateBoxHeight;
    this.eventsInit(animatedElement);
  },
  methods: {
    eventsInit(animatedElement) {
      document.addEventListener(
        'scroll',
        () => { this.animateBoxHeight(animatedElement) },
        false
      );
    },
    animateBoxHeight(animateElement) {
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
