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
  --theme: #C52085;
  --light: #FAFAFA;
  --light-2: #ECECEC;
  --mid: #808080;
  --dark: #252525;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
}

body {
  line-height: 1.5;
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
  text-decoration: none;
}
.btn.outline {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.5)
}
</style>
