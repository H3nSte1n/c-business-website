<template>
  <v-app>
    <div
      class="cursor"
      :class="{'cursor--active': isLoaded}"
    />
    <v-content>
      <v-container
        fluid
        class="pa-0"
      >
        <nuxt />
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Footer from '~/components/footer';
export default {
  components: { Footer },
  data () {
    return {
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
    this.isLoaded = true;
    this.initFunctions();
  },
  methods: {
    initFunctions() {
      window.addEventListener('mousemove', this.cursorMove);
      window.addEventListener('mousewheel', this.cursorMove);
      window.addEventListener('DOMMouseScroll', this.cursorMove);
      document.querySelectorAll('.button').forEach(e => {
        e.addEventListener('mouseover', () => {this.transformToButton(e)});
        e.addEventListener('mouseleave', () => {this.resetTransformToButton()});
        e.addEventListener('click', () => {this.resetTransformToButton()});
      })
    },
    cursorMove(e) {
      const cursor = document.querySelector('.cursor');
      cursor.style.top = `${e.pageY}px`;
      cursor.style.left = `${e.pageX}px`;
    },
    transformToButton(buttonElement) {
      const cursor = document.querySelector('.cursor');
      cursor.style.width = `${buttonElement.offsetWidth + 20}px`;
      cursor.style.height = `${buttonElement.offsetHeight + 20}px`;
      cursor.style.borderRadius = "25px";
      cursor.style.borderWidth = "2px";
    },
    resetTransformToButton() {
      const cursor = document.querySelector('.cursor');
      cursor.style.width = '3rem';
      cursor.style.height = '3rem';
      cursor.style.borderRadius = "50%";
      cursor.style.borderWidth = "1px";
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
  transition: width 0.5s ease-out, height 1.5s ease-out;

  &--active {
    width: 3rem;
    height: 3rem;
  }

  &:active, &:focus, &:hover, &:visited {
    color: black;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
  }

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
}
</style>
