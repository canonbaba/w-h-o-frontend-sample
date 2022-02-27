<template>
    <div>
        <TheHeader v-if="!maintenance" />
        <Nuxt v-if="!maintenance" />
        <TheFooter v-if="!maintenance" />

        <!-- maintenance -->
        <div v-if="maintenance" class="maintenance">
            <img src="~/assets/images/whoo-icon-without_name.svg" alt="">
            <h2 class="pt-4">We will be back soon!</h2>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            maintenance: false,
        };
    },
    head() {
        return this.$nuxtI18nHead({ addSeoAttributes: true });
    },
};
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.maintenance {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  text-align: center;
}
.maintenance img {
  width: 50px;
}
</style>
