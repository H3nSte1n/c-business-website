import scrollHelper from './scrollHelper';

export default {
  mixins: [scrollHelper],

  data() {
    return {
      elementArePrepared: false,
      elementHeight: [],
      calculationType: {
        '+': (operand1, operand2) => operand1 + operand2,
        '-': (operand1, operand2) => operand1 - operand2
      }
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
        () => {
          this.checkScrollDirection();
          this.animateBoxHeight(animatedElement);
        },
        false
      );
    },
    animateBoxHeight(animateElement) {
      const elementCount = animateElement.dataset.boxcount
      const animationLimes = !this.scrollUp ? animateElement.offsetHeight <= document.documentElement.clientHeight : animateElement.offsetHeight >= this.elementHeight[elementCount];
      if(!this.isInViewport(animateElement) || !animationLimes) return;
      if(!this.elementArePrepared) this.initElement(animateElement);

      const operator = this.scrollUp ? '-' : '+';
      const elementHeight = animateElement.offsetHeight;
      const currentGap = (1) * 12;

      // animateElement.style.height = `${animateElement.offsetHeight + ((animateElement.getBoundingClientRect().bottom - window.innerHeight) * -1)}px`;
      animateElement.style.height = `${this.calculationType[operator](elementHeight, currentGap)}px`;
      this.elementArePrepared = true;
    },

    initElement(animateElement) {
      this.prepareAnimatedElement(animateElement)
      const elementCount = animateElement.dataset.boxcount
      this.elementHeight[elementCount] = animateElement.offsetHeight;
    },

    getBoxViewportPosition(element) {
      const boxPosition = element.getBoundingClientRect();
      return this.scrollUp ? (boxPosition.top * -1) + window.innerHeight : boxPosition.bottom;
    },

    isInViewport(element) {
      const boxViewportStartpoint = this.getBoxViewportPosition(element);
      return (boxViewportStartpoint - window.innerHeight <= 0);
    },

    prepareAnimatedElement(element) {
      element.children[0].style.position = "relative"
      element.children[0].style.top = "50%"
      element.children[0].style.transform = "translateY(-50%)"
    },
  }
}
