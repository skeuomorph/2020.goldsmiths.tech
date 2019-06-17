<template>
  <div>
    <n-link :to='event.path' id='event' v-if='Date.parse(event.date) - Date.parse(new Date())>=0'>
      <h2>Check out {{ event.name }} happening on {{ event.date | moment('ddd Do MMM YYYY') }} <i class="fas fa-arrow-circle-right"></i></h2>
    </n-link>
    <n-link to='/events' id='event' v-else>
      <h2>Check out our upcoming events <i class="fas fa-arrow-circle-right"></i></h2>
    </n-link>
  </div>
</template>

<script>
export default {
  computed: {
    event() {
      return this.$store.getters.homeEvent
    }
  }
}
</script>

<style scoped>
#event {
  background: var(--secondary);
  display: block;
  color: white;
  text-decoration: none;
  text-align: center;
  padding: 1rem;
}
i {
  margin-left: 0.5em;
}
</style>
