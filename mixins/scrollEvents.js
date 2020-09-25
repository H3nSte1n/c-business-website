import DetectTouchDevices from '@/mixins/detectTouchDevices';

export default {
  mixins: [DetectTouchDevices],
  data() {
    return {
      mouseIsCreated: false,
    }
  },
  mounted() {
    this.isLoaded = true;
    if (this.is_touch_device()) return;
    this.initButtonEvents();
  },
  methods: {
    initButtonEvents() {
      window.addEventListener('mousemove', this.cursorMove, true);
      window.addEventListener('mousewheel', this.cursorMove, true);
      window.addEventListener('DOMMouseScroll', this.cursorMove, true);
    },
    createMouse(e) {
      if(this.mouseIsCreated) return;
      window.moveTo(window.innerWidth / 2, window.innerHeight / 2);
      const customCursor = document.createElement('div');
      customCursor.classList.add('cursor');
      customCursor.classList.add('cursor-dot');
      customCursor.classList.add('cursor--active');
      customCursor.style.left = `${e.pageX}px`;
      customCursor.style.top = `${e.pageY}px`;
      this.$refs.app.$el.appendChild(customCursor)
      this.mouseIsCreated = true;
    },
    setCursorPos(pos) {
      const cursor = document.querySelector('.cursor');
      if(pos.pageY) cursor.style.top = `${pos.pageY}px`;
      if(pos.pageX) cursor.style.left = `${pos.pageX}px`;
    },
    validateCursorPos(e) {
      const cursor = document.querySelector('.cursor');
      let cursorPos = {
        pageX: null,
        pageY: null
      };
      if(e.pageX > window.innerWidth - (cursor.offsetWidth / 2)) cursorPos.pageX = window.innerWidth - (cursor.offsetWidth / 2);
      if(e.pageX < 0 + (cursor.offsetWidth / 2)) cursorPos.pageX = 0 + (cursor.offsetWidth / 2);
      if(e.pageY < 0 + (cursor.offsetHeight / 2)) cursorPos.pageY = 0 + (cursor.offsetHeight / 2);
      if(e.pageY > document.body.offsetHeight - (cursor.offsetHeight / 2)) cursorPos.pageY = document.body.offsetHeight - (cursor.offsetHeight / 2);
      return cursorPos.pageX || cursorPos.pageY ? cursorPos : false;
    },
    cursorMove(e) {
      this.createMouse(e);
      this.validateCursorPos(e) ? this.setCursorPos(this.validateCursorPos(e)) : this.setCursorPos(e);
    }
  }
}
