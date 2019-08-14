export const state = () => ({
  events: [
    {
      name: 'Anvil Hack V',
      desc: 'Build art.',
      date: '2019-04-19',
      path: '/events/anvil',
      type: 'hack',
    },
    {
      name: 'DoC.Hack',
      desc: 'A hackday for all members of the Gold Computing community.',
      date: '2019-09-21',
      path: '/events/doc',
      type: 'hack'
    },
    {
      name: 'Talk 1',
      desc: 'lorem ipsum talk title to explore a thing or two or maybe more.',
      date: '2019-10-01',
      path: '/events/talks',
      type: 'talk'
    },
    {
      name: 'Talk 2',
      desc: 'lorem ipsum talk title to explore a thing or two or maybe more.',
      date: '2019-11-21',
      path: '/events/talks',
      type: 'talk'
    },
    {
      name: 'Night 1',
      desc: 'lorem ipsum talk title to explore a thing or two or maybe more.',
      date: '2019-11-01',
      path: '/events/nights',
      type: 'night'
    },
    {
      name: 'Night 2',
      desc: 'lorem ipsum talk title to explore a thing or two or maybe more.',
      date: '2020-03-17',
      path: '/events/nights',
      type: 'night'
    },
    {
      name: 'Intro to Web Design',
      desc: 'lorem ipsum talk title to explore a thing or two or maybe more.',
      date: '2020-10-14',
      path: '/events/workshops',
      type: 'night'
    },
    {
      name: 'Intro to React.js',
      desc: 'lorem ipsum talk title to explore a thing or two or maybe more.',
      date: '2019-11-11',
      path: '/events/workshops',
      type: 'workshop'
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
      date: '2020-01-11', // YYYY-MM-DD
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