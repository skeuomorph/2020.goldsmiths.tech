<template>
  <div id='event'>
    <EventHero :event='hero' />
    <EventIntroText :sidebar='introTextSidebarItems'>
      <h2>Ethics in modern tech - talk series</h2>
      <p>Consisting of several speakers, all experts in either academia or industry. Please refer to the list below:</p>
      <!--Add list here-->
      <p>Find out more <a href='#'>here</a>.</p>
    </EventIntroText>

    <EventSupporters :supporters='supporters' :askForSponsorship='askForSponsorship' v-if='supporters.length > 0' />
    <EventFaq :faqs='faqs' />
  </div>
</template>

<script>
import EventHero from '~/components/EventHero';
import EventIntroText from '~/components/EventIntroText';
import EventSupporters from '~/components/EventSupporters';
import EventFaq from '~/components/EventFaq';

export default {
  data() {
    return {
      // This section is for the hero unit content
      // Assets go in /static
      hero: {
        background: '/events/doc/hero.jpg',
        logo: '/events/logoPink.svg',
        name: 'Ethics in modern tech',
        desc: 'A day held with the aim of informing people, from all walks of life, about the ways in which ethics are considered/ ignored in modern applications of tech.',
        buttons: [
          { label: 'Highlights from 2019', path: '/highlights' },
          { label: 'Get free tickets', path: <a href='https://www.eventbrite.co.uk/e/ethics-in-modern-day-tech-talk-series-tickets-69192409359'> </a>}
        ]
      },

      // This section is for the info blocks on the right-hand side of the intro section, below the hero unit
      introTextSidebarItems: [
        {
          title: 'When',
          content: 'Oct 12th 2019'
        },
        {
          title: 'Where',
          content: 'St James Hatcham Building<br>Goldsmiths, University of London<br>SE14 6AD'
        }
      ],

      // These are the logos to show as supporters. These must be images in the /static/supporters directory, and must be in .png format. 
      // Leave array empty if you want to hide this section
      supporters: ['goldsmiths', 'doc', 'goldsu', 'github'],
      // If false, the line asking for sponsorship will not show
      askForSponsorship: true,

      // List of FAQs
      faqs: [
        {
          q: `Q1`,
          a: `-----------`
        },
        {
          q: `Q2`,
          a: `-----------.`
        },
        {
          q: 'Q3',
          a: '-----------'
        },
        {
          q: 'Q4',
          a: `-----------`
        }
      ]
    }
  },
  components: {
    EventHero,
    EventIntroText,
    EventSupporters,
    EventFaq
  }
}
</script>