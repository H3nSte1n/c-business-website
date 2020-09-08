import DetectTouchDevices from '@/mixins/detectTouchDevices';

export default {
  mixins: [DetectTouchDevices],
  mounted() {
    this.isLoaded = true;
    if (this.is_touch_device()) return;
    this.initButtonEvents();
  },
  updated() {
    this.isLoaded = true;
    if (this.is_touch_device()) return;
    this.initButtonEvents();
  },
  methods: {
    initButtonEvents() {
      document.querySelectorAll('.button').forEach(e => {
        e.addEventListener('mouseover', () => {this.transformToButton(e)}, true);
        e.addEventListener('mouseleave', () => {this.resetTransformToButton()}, true);
        e.addEventListener('click', () => {this.resetTransformToButton()}, true);
      })
    },
    transformToButton(buttonElement) {
      const cursor = document.querySelector('.cursor');
      cursor.style.width = `${buttonElement.offsetWidth + 20}px`;
      cursor.style.height = `${buttonElement.offsetHeight + 20}px`;
      cursor.style.borderRadius = "25px";
      cursor.style.borderWidth = "2px";

      if(buttonElement.classList.contains('nuxt-link-active')) {
        cursor.style.borderColor = "rgba(0,0,0,0)"
        cursor.style.width = '3rem';
        cursor.style.height = '3rem';
        cursor.style.borderRadius = "50%";
        return;
      } else {
        cursor.classList.remove('cursor-dot');
        cursor.style.borderColor = "black";
      }

      // fix button position
      // const buttonHeight = buttonElement.getBoundingClientRect().top + window.pageYOffset;
      // const buttonWidth = buttonElement.offsetLeft;
      // cursor.style.top = `${buttonHeight + ((buttonElement.offsetHeight) /2)}px`;
      // cursor.style.left = `${buttonWidth + ((buttonElement.offsetWidth) /2)}px`;
    },
    resetTransformToButton() {
      const cursor = document.querySelector('.cursor');
      if(!cursor.classList.contains('cursor-dot')) cursor.classList.add('cursor-dot');
      cursor.style.width = '3rem';
      cursor.style.height = '3rem';
      cursor.style.borderRadius = "50%";
      cursor.style.borderWidth = "1px";
      cursor.style.borderColor = "rgba(0,0,0,1)"
      document.querySelector('.cursor-dot').classList.remove('cursor-dot-active');
    }
  }
}
