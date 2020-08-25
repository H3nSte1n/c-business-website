<template>
  <v-app ref="app">
    <v-content>
      <v-container
        fluid
        class="pa-0"
      >
        <Navigation />
        <nuxt />
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Footer from '~/components/footer';
import Navigation from '@/components/navigation';

export default {
  components: { Footer, Navigation },
  data () {
    return {
      mouseIsCreated: false,
      isLoaded: false,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  mounted() {
    console.log(this);
    this.isLoaded = true;
    if (this.is_touch_device()) return;
    this.initButtonEvents();
  },
  methods: {
    initButtonEvents() {
      window.addEventListener('mousemove', this.cursorMove);
      window.addEventListener('mousewheel', this.cursorMove);
      window.addEventListener('DOMMouseScroll', this.cursorMove);
      document.querySelectorAll('.button').forEach(e => {
        e.addEventListener('mouseover', () => {this.transformToButton(e)}, true);
        e.addEventListener('mouseleave', () => {this.resetTransformToButton()}, true);
        e.addEventListener('click', () => {this.resetTransformToButton()});
      })
    },
    is_touch_device() {
      // eslint-disable-next-line no-undef
      if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) return true;
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
      console.log(pos, 'dasdas');
      console.log(window.innerWidth);
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
      // if(e.target.classList.contains('button')) return false
      this.createMouse(e);
      this.validateCursorPos(e) ? this.setCursorPos(this.validateCursorPos(e)) : this.setCursorPos(e);
    },
    transformToButton(buttonElement) {
      const cursor = document.querySelector('.cursor');
      cursor.style.width = `${buttonElement.offsetWidth + 20}px`;
      cursor.style.height = `${buttonElement.offsetHeight + 20}px`;
      cursor.style.borderRadius = "25px";
      cursor.style.borderWidth = "2px";
      document.querySelector('.cursor-dot').classList.add('cursor-dot-active');

      if(buttonElement.classList.contains('nuxt-link-active')) {
        cursor.style.borderColor = "rgba(0,0,0,0)"
        cursor.style.width = '3rem';
        cursor.style.height = '3rem';
        cursor.style.borderRadius = "50%";
        return;
      } else {
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
      cursor.style.width = '3rem';
      cursor.style.height = '3rem';
      cursor.style.borderRadius = "50%";
      cursor.style.borderWidth = "1px";
      cursor.style.borderColor = "rgba(0,0,0,1)"
      document.querySelector('.cursor-dot').classList.remove('cursor-dot-active');
    }
  }
}
</script>

<style lang="scss">
body {
  cursor: none;
}
.cursor {
  width: 0rem;
  height: 0rem;
  border-radius: 50%;
  border: 1px solid black;
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 9999;
  pointer-events: none;
  transition: width 0.5s ease-out, height 1.5s ease-out, border-color 0.2s ease-out;

  &--active {
    width: 3rem;
    height: 3rem;
  }

  &:active, &:focus, &:hover, &:visited {
    color: black;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    cursor: none;
  }

  &-dot {
    &::before {
      content: ' ';
      display: block;
      background-color: black;
      width: 0.4rem;
      height: 0.4rem;
      border-radius: 50%;
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 99999;
    }
    &-active {
      &::before {
        background-color: #FFFFFF;
      }
    }
  }
}

.button {
  max-width: 200px;
  color: black;
  text-decoration: none;

  &--disabled {
    opacity: 0.2;
  }

  &:active, &:focus, &:visited, &:hover {
    color: black;
    cursor: none;
  }
}
</style>
