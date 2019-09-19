export const state = () => ({
  events: [
    {
      name: 'Anvil Hack V',
      desc: 'Build art.',
      date: '2020-04-19',
      path: '/events/anvil',
      type: 'hack',
    },
    {
      name: 'Global Game Jam',
      desc: 'Build games.',
      date: '2020-01-24',
      path: '/events/games',
      type: 'workshop'
    },
    {
      name: 'Ethics in modern day tech',
      desc: 'A series of talks by academic/ industry professionals, looking at the ways in which ethics are considered/ ignored in modern day applications of tech',
      date: '2019-10-12',
      path: '/events/ethics-in-tech-talk',
      type: 'talk',
      onHome: true
    },
    {
      name: 'Brand new event',
      desc: 'Description for the new event.',
      date: '2019-01-11', // YYYY-MM-DD
      path: '/events/new', // PATH
      type: 'hack',
      onHome: false // OPTIONAL
    }
  ]
})

export const getters = {
  upcomingEvents: state => {
    return state.events.filter(event => {
      return Date.parse(event.date) - Date.parse(new Date()) >= 0
    })
  },
  pastEvents: state => {
    return state.events.filter(event => {
      return Date.parse(event.date) - Date.parse(new Date()) < 0
    })
  },
  eventsOfType: state => type => {
    const events = state.events.filter(event => event.type == type)
    const upcoming = events.filter(event => Date.parse(event.date) - Date.parse(new Date()) >= 0)
    const past = events.filter(event => Date.parse(event.date) - Date.parse(new Date()) < 0)
    const outstanding = upcoming.length;
    return { upcoming, past, outstanding }
  },
  homeEvent: state => {
    return state.events.filter(event => event.onHome)
  }
}