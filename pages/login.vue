<template>
  <div>
    <label class="block">Email</label>
    <input
      v-model="email"
      type="text"
    >

    <br>

    <label class="block">Password</label>
    <input
      v-model="password"
      type="password"
    >

    <br>
    <br>

    <button @click="loginGetCsrfCookie()">
      Login
    </button>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  auth: 'guest',

  data() {
    return {
      email: '',
      password: '',
    };
  },

  methods: {
    async loginGetCsrfCookie() {
      await this.$axios.get('/sanctum/csrf-cookie', {
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
        },
      });
      this.loginAfterCsrfCookie(true);
    },
    async loginAfterCsrfCookie(retry) {
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password,
          },
        });
      } catch (err) {
        if (err.response.status === 401 && !this.$auth.loggedIn) {
          if (retry) {
            // Fix for the case where frontend and backend disagree on auth status
            await this.$auth.logout();
            this.loginAfterCsrfCookie(false);
          }
        } else {
          // TODO handle validation error
          console.log(err.response.data);
        }
      }
    },
  },
};
</script>
