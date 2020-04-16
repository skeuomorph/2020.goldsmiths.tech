<template>
  <div class='container' id='events'>
    <h1 class='title'>Events</h1>
    <div id="top">
          <div class="box">
        <h2>Hacks</h2>
        <p>Hackathons and jams are where the talent of the community get showcased. The lengths of these types of events vary from 2 hours, to 2 days.</p>
      </div>
      <div class="box">
        <h2>Workshops</h2>
        <p>Short sessions, smaller audience, where we encourage you to "learn by doing". Lovelace is our women and non-binary workshop series, which has been running since 2017!</p>
      </div>
      <div class="box">
        <h2>Talks</h2>
        <p>Change and progression requires education. We aim for all of our talks to be accessible at entry level.</p>
      </div>
      <div class="box">
        <h2>Nights</h2>
        <p>Digital arts students create music-responsive visuals for DJ's/ performers.</p>
      </div>
      <p></p>
      <p></p>
      <p></p>
      <p>
      <h2>Cancelled due to Covid19</h2>
      <br>
        <a href="https://2020.goldsmiths.tech/events/discussion-about-assange"><h3>An open discussion about Julian Assange</h3></a> 
      <br>
        <a href="http://localhost:3000/events/no-digital-traces/"><h3>No Digital Traces (research group)</h3></a> 
      <br>
      <br>
      <br>
    </div>  
    
    <EventsType title='Past Events' :events='events.past' noneText='There are no past events' />
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
      return {
        talks: this.$store.getters.eventsOfType('talk'),
        nights: this.$store.getters.eventsOfType('night'),
        hacks: this.$store.getters.eventsOfType('hack'),
        workshops: this.$store.getters.eventsOfType('workshop'),
        gigs: this.$store.getters.eventsOfType('gigs'),
        past: {outstanding:pastEvents.length, past: [], upcoming:pastEvents}
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