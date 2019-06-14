<template>
  <div id='hero' :style='{ backgroundImage: `url(${event.background})` }'>
    <div class="container">
      <img :src="event.logo" :alt="event.name">
      <h1>{{ event.name }}</h1>
      <h2>{{ event.desc }}</h2>
      <div class="buttons">
        <a 
          v-for='button in event.buttons' 
          :key='button.path' 
          :href="button.path" 
          class="btn outline">{{ button.label }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['event']
}
</script>

<style scoped>
#hero {
  padding-top: 5em;
  padding-bottom: 5em;
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
}

#hero * {
  font-weight: normal;
}

img {
  height: 12em;
}

h1 {
  margin: 1rem 0;
  font-size: 3em;
}

h2 {
  margin: 1rem 0 2rem;
}

.container {
  max-width: 800px;
}

.btn {
  margin-left: 1em;
  margin-right: 1em;
}
</style>
