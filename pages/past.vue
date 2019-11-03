<template>
  <div class='container' id='events'>
    <h1 class='title'>Past Events</h1>
    <EventsType title='Past Talks' :events='events.talks' noneText='There are no past talks' />
    <EventsType title='Past Nights' :events='events.nights' noneText='There are no past nights' />
    <EventsType title='Past Hackathons' :events='events.hacks' noneText='There are no past hackathons' />
    <EventsType title='Past Workshops' :events='events.workshops' noneText='There are no past workshops'  />
  </div>
</template>

<script>
import EventsType from '~/components/EventsType'
export default {
  data() {
    return {
    }
  },
  computed: {
    events() {
      var pastEvents= this.$store.getters.pastEvents;
      var talks = pastEvents.filter(pastEvent => pastEvent.type == "talk");
      var workshops = pastEvents.filter(pastEvent => pastEvent.type == "workshop");
      var hacks = pastEvents.filter(pastEvent => pastEvent.type == "hack");
      var nights = pastEvents.filter(pastEvent => pastEvent.type == "night");
      return {
        talks: {outstanding:talks.length, past: [], upcoming:talks},
        nights: {outstanding:nights.length, past: [], upcoming:nights},
        hacks: {outstanding:hacks.length, past: [], upcoming:hacks},
        workshops: {outstanding:workshops.length, past: [], upcoming:workshops}
      }
    }
  },
  components: {
    EventsType
  }
}
</script>

<style scoped>
#events {
  margin-top: 4em;
}
h1.title {
  font-size: 3em;
  margin-bottom: 1rem;
  text-align: center;
}
#top {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1em;
  margin-top: 2em;
}
.box {
  background: var(--light);
  border: 1px solid var(--light-2);
  border-radius: 5px;
  padding: 1.5em;
  text-align: center;
  text-decoration: none;
  color: inherit;
}
.box h2 {
  font-size: 1.25em;
}
.box p {
  font-size: 1em;
  margin-top: 1em;
}
@media screen and (max-width: 960px) {
  #events {
    margin-top: 2em;
  }
  #top {
    grid-template-columns: 1fr;
  }
  h1.title {
    font-size: 1.75em;
  }
  .box h2 {
    font-size: 1.5em;
  }
}
</style>