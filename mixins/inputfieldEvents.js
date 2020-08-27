import DetectTouchDevices from '@/mixins/detectTouchDevices';

export default {
  mixins: [DetectTouchDevices],
  mounted() {
    this.isLoaded = true;
    if (this.is_touch_device()) return;
    this.initCursorEvents();
  },
  methods: {
    initCursorEvents() {
      document.querySelectorAll('.input-field').forEach(e => {
        e.addEventListener('mouseover', () => {this.transformToTextCursor(e)}, true);
        e.addEventListener('mouseleave', () => {this.resetTransformToTextCursor()}, true);
      })
    },
    transformToTextCursor(inputfield) {
      const cursor = document.querySelector('.cursor');
      cursor.style.width = '0px';
      cursor.style.height = `${inputfield.offsetHeight / 2}px`;
      cursor.style.borderWidth = "1px";
      cursor.classList.remove('cursor-dot');
    },
    resetTransformToTextCursor() {
      const cursor = document.querySelector('.cursor');
      cursor.style.width = '3rem';
      cursor.style.height = '3rem';
      cursor.style.borderRadius = "50%";
      cursor.style.borderWidth = "1px";
      cursor.classList.add('cursor-dot');
    }
  }
}
