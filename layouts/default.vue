<template>
  <div>
    <Header />
    <nuxt />
    <Join />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header';
import Join from '~/components/Join';
import Footer from '~/components/Footer';

export default {
  components: {
    Header,
    Join, 
    Footer
  }
}
</script>

<style>
:root {
  --theme: #D70088;
  --light: #FAFAFA;
  --mid: #ECECEC;
  --dark: #252525;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
}

.container {
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
}

a {
  color: var(--theme);
}

.btn {
  background: var(--theme);
  color: white !important;
  padding: 0.75em 2em;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: bold;
  display: inline-block;
}
</style>
