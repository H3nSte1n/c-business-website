export default {
  methods: {
    is_touch_device() {
      // eslint-disable-next-line no-undef
      if ('ontouchstart' in window || (window.DocumentTouch && document instanceof DocumentTouch)) return true;
    },
  },
};
