export default {
  methods: {
    onError(error) {
      console.log('Error happened:', error);
    },
    async onSubmit() {
      try {
        await this.$recaptcha.getResponse();
        await this.$recaptcha.reset();
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('Login error:', error);
      }
    },
    onSuccess() {
      this.recaptchaSucceed = true;
    },
    onExpired() {
      console.log('Expired');
    },
  },
};
