<template>
  <div id='event'>
    <EventHero :event='hero' />
    <EventIntroText :sidebar='introTextSidebarItems'>
      <h2>Build awesome interactive experiences, with all the support you need.</h2>
      <p>At the hackathon over the weekend, you will use your technical and creative skills to make something wonderful, arty, musical - anything you build will be awesome. We'll provide you with food, drink, electricity and internet, so that you can get on with the real work - making cool and engaging projects!</p>
      <p>As well as access to our carefully curated Hacksmiths Hardware Lab, expect support from mentors and even more useful workshops for the duration of the event.</p>
      <p>Find out more <a href='#'>here</a>.</p>
    </EventIntroText>
    <EventSupporters :supporters='supporters' :askForSponsorship='askForSponsorship' />
  </div>
</template>

<script>
import EventHero from '~/components/EventHero';
import EventIntroText from '~/components/EventIntroText';
import EventSupporters from '~/components/EventSupporters';

export default {
  data() {
    return {
      // Assets go in /static
      hero: {
        background: '/events/doc/hero.jpg',
        logo: '/events/doc/logo.svg',
        name: 'DoC Hack',
        desc: 'The flagship creative tech & performance hackathon by Hacksmiths',
        buttons: [
          { label: 'Highlights from 2019', path: '/highlights' },
          { label: 'Get free tickets', path: '/tix' }
        ]
      },
      introTextSidebarItems: [
        {
          title: 'When',
          content: '13-14 April 2019'
        },
        {
          title: 'Where',
          content: 'St James Hatcham Building<br>Goldsmiths, University of London<br>SE14 6AD'
        },
        {
          title: 'Twitter',
          content: '#DoCHack'
        }
      ],
      supporters: ['goldsmiths', 'doc', 'goldsu', 'github'],
      askForSponsorship: true
    }
  },
  components: {
    EventHero,
    EventIntroText,
    EventSupporters
  }
}
</script>