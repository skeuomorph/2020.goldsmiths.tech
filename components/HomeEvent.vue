<template>
  <div>
    <n-link to='/events' id='event' v-if="!events">
      <h2>Check out our upcoming event "No Digital Traces" <i class="fas fa-arrow-circle-right"></i></h2>
    </n-link>
    <div v-else="" v-for="event in events" :key="event.id">
      <n-link :to='event.path' id='event'>
        <h2>Check out "{{ event.name }}" happening on {{ event.date | moment('ddd Do MMM YYYY') }} <i class="fas fa-arrow-circle-right"></i></h2>
      </n-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    events() {
      let eventsToReturn = [];
      let events = this.$store.getters.homeEvent; //get all events
      let lengthEvents = events.length;
      for(let i=0;i<lengthEvents;i++){
        if(Date.parse(events[i].date) - Date.parse(new Date())>=0){
          eventsToReturn.push(events[i]);
        }
      }
      if(!eventsToReturn.length){
        return false; //if none applicable date wise return false
      }
      return eventsToReturn;
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
