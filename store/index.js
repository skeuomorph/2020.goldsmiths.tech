export const state = () => ({
  events: [
    // {
    //   name: 'Anvil Hack V',
    //   desc: 'Build art.',
    //   date: '2020-04-19',
    //   path: '/events/anvil',
    //   type: 'hack',
    // },
    // {
    //   name: 'TBA',
    //   // desc: 'Ad astra et infinitum.',
    //   date: '2019-10-31',
    //   path: '/events/nights',
    //   type: 'night'
    // },
    {
      name: 'Ethics in modern AI',
      desc: 'A series of talks by academics, looking at the ways in which ethics are considered/ ignored in modern day applications of tech.',
      date: '2019-10-12',
      path: '/events/ethics-in-modern-ai',
      type: 'talk',
      onHome: true
    },
    {
      name: 'Live music coding w/ Joanne Armitage',
      desc: 'Learn how to code music and edit it live using SuperCollider.',
      date: '2019-10-25',
      path: '/events/live-music-coding',
      type: 'workshop'
    },
    {
      name: 'Lovelace - Halloween',
      desc: 'Presenting electromagnetic field fluctuations (i.e ghosts) using Ableton as a musical medium.',
      date: '2019-10-30',
      path: '/events/lovelace-halloween',
      type: 'workshop'
    },
    {
      name: 'Global Game Jam 2020',
      desc: 'Spend a weekend building interactive playable experiences - both digital and tabletop. You will get support from mentors, and take part in a friendly shared demo.',
      date: '2020-01-31',
      path: '/events/ggj2020',
      type: 'hack'
    },
    {
      name: 'Career Hack',
      desc: 'Build lots of fun small projects, meet potential employers, and have fun showing your skills at Career Hack',
      date: '2020-02-12', // YYYY-MM-DD
      path: '/events/career', // PATH
      type: 'hack',
      onHome: false // OPTIONAL
    },
    {
      name: 'Hacksmiths night #1',
      desc: 'Our first live music night. 4 DJs, live coded visuals, BYOB!',
      date: '2020-02-07',
      path: '/events/night-01',
      type: 'night'
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