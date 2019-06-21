<template>
  <div id='type'>
    <h2>{{ title }}</h2>
    <div class="events" v-if='events.outstanding > 0'>
      <n-link :to='item.path' v-for='item in events.upcoming' :key='item.name' class='event'>
        <h3>{{ item.name }}</h3>
        <h4>{{ item.date | moment('ddd Do MMM YYYY') }}</h4>
        <p>{{ item.desc }}</p>
        <small class="btn">Learn more</small>
      </n-link>
    </div>
    <div v-else>
      <h3>{{ noneText }}</h3>
    </div>
  </div>
</template>

<style scoped>
#type {
  margin-top: 3em;
}
h2 {
  margin-bottom: 1rem;
}
.events {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;    
  grid-gap: 1em;
}
.event {
  background: var(--light);
  border: 1px solid var(--light-2);
  padding: 1em;
  border-radius: 5px;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.event h3 {
  font-size: 1.25em;
}
.event p {
  margin: 1rem 0;
  font-size: 0.8em;
}
.btn {
  padding: 0.5em 1em;
  margin-top: auto;
}

@media screen and (max-width: 960px) {
  .events {
    grid-template-columns: 1fr;
  }
}
</style>


<script>
export default {
  props: ['events', 'title', 'outstanding', 'noneText']
}
</script>