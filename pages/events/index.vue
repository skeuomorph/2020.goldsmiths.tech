<template>
  <div class='container' id='events'>
    <h1 class='title'>Events</h1>
    <div id="top">
      <div class="box">
        <h2>Talks</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus eos laboriosam fugiat, maxime soluta perferendis mollitia.</p>
      </div>
      <div class="box">
        <h2>Nights</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis facere omnis saepe molestias in architecto, officia aut.</p>
      </div>
      <div class="box">
        <h2>Hacks</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum modi voluptatibus quis adipisci cupiditate quisquam aut repudiandae.</p>
      </div>
      <div class="box">
        <h2>Workshops</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius perspiciatis laborum repudiandae distinctio maxime itaque.</p>
      </div>
    </div>  
    <EventsType title='Upcoming Talks' :events='events.talks' />
    <EventsType title='Upcoming Nights' :events='events.nights' />
    <EventsType title='Upcoming Hackathons' :events='events.hacks' />
    <EventsType title='Upcoming Workshops' :events='events.workshops' />
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
        workshops: this.$store.getters.eventsOfType('workshop')
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