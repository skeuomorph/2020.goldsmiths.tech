<template>
  <div id='supporters' class='container'>
    <h2>This event is supported by</h2>
    <div class="logos">
      <img v-for='logo in supporters' :key='logo' :src="'/supporters/' + logo + '.png'" :alt="logo">
    </div>
    <small v-if='askForSponsorship'>As a student-run society, we rely on the generosity of organisations to run our events. If you'd like to support this event, please <n-link to='/contact'>get in touch</n-link>.</small>
  </div>
</template>

<script>
export default {
  props: ['supporters', 'askForSponsorship']
}
</script>

<style scoped>
#supporters {
  padding-bottom: 4em;
}
h2 {
  font-size: 2em;
}
.logos {
  margin-top: 1em;
  margin-bottom: 1em;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5em;
}
img {
  width: 100%;
  border-radius: 5px;
}
</style>
