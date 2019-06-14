<template>
  <div class='container'>
    <h1>Events</h1>
    <div id='upcoming'>
      <h2>Upcoming</h2>
      <n-link :to='item.path' v-for='item in upcomingEvents' :key='item.name' class='event-single'>
        <h3>{{ item.name }}</h3>
        <p>{{ item.date | moment('ddd Do MMM YYYY') }}</p>
        <p>{{ item.desc }}</p>
      </n-link>
    </div>

    <div id='past'>
      <h2>Past</h2>
      <n-link :to='item.path' v-for='item in pastEvents' :key='item.name' class='event-single'>
        <h3>{{ item.name }}</h3>
      </n-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: [
        {
          name: 'Anvil Hack V',
          desc: 'Build art.',
          date: '2019-04-19',
          path: '/events/anvil'
        },
        {
          name: 'DoC.Hack',
          desc: 'A hackday for all members of the Gold Computing community.',
          date: '2019-09-21',
          path: '/events/doc'
        },
        {
          name: 'Global Game Jam',
          desc: 'Build games.',
          date: '2020-01-24',
          path: '/events/games'
        }
      ]
    }
  },
  computed: {
    upcomingEvents() {
      return this.events.filter(event => {
        return Date.parse(event.date) - Date.parse(new Date()) >= 0
      })
    },
    pastEvents() {
      return this.events.filter(event => {
        return Date.parse(event.date) - Date.parse(new Date()) < 0
      })
    }
  }
}
</script>