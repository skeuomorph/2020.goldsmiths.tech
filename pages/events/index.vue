<template>
  <div class='container' id='events'>
    <h1 class='title'>Events</h1>
    <div id="top">
<<<<<<< HEAD
          <div class="box">
        <h2>Hacks</h2>
        <p>Hackathons and jams are where the talent of the community get showcased. The lengths of these types of events vary from 2 hours, to 2 days.</p>
      </div>
      <div class="box">
        <h2>Workshops</h2>
        <p>Short sessions, either as one-offs or part of a series. Technical skills, software, and languages taught somewhere that can build confidence in the new, and push the experienced even further.</p>
      </div>
      <div class="box">
        <h2>Talks</h2>
        <p>Change and progression requires education. We aim for all of our talks to be accessible at entry level.</p>
      </div>
      <div class="box">
        <h2>Nights</h2>
        <p>Digital arts students create music-responsive visuals for DJ's/ performers. Cheap drinks, location 20 mins from Goldsmiths and will be disclosed via email.</p>
=======
      <div class="box">
        <h2>Talks</h2>
        <p>Events where academics/industry experts give accessible talks. The main aim is to educate on, demystify and debug various topics.</p>
      </div>
      <div class="box">
        <h2>Nights</h2>
        <p>Digital arts and computing students partner up with DJs and performers to put on live shows. Each night will be distinctive.</p>
      </div>
      <div class="box">
        <h2>Hacks</h2>
        <p>An assortment of jams, hackathons and short challenges. Some of our main hacks include Global Game Jam, Music Hack Day, and Anvil Hack. </p>
      </div>
      <div class="box">
        <h2>Workshops</h2>
        <p>Short sessions (typically for beginners) getting you to grips with programming languages, software, and hardware.</p>
>>>>>>> 52fd51a646cd31908bfa5889eda494025c280beb
      </div>
    </div>  
    <EventsType title='Upcoming Talks' :events='events.talks' noneText='There are no upcoming talks' />
    <EventsType title='Upcoming Nights' :events='events.nights' noneText='There are no upcoming nights' />
    <EventsType title='Upcoming Hackathons' :events='events.hacks' noneText='There are no upcoming hackathons' />
    <EventsType title='Upcoming Workshops' :events='events.workshops' noneText='There are no upcoming workshops'  />
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
      return {
        talks: this.$store.getters.eventsOfType('talk'),
        nights: this.$store.getters.eventsOfType('night'),
        hacks: this.$store.getters.eventsOfType('hack'),
        workshops: this.$store.getters.eventsOfType('workshop'),
        gigs: this.$store.getters.eventsOfType('gigs'),
        past: this.$store.getters.pastEvents
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