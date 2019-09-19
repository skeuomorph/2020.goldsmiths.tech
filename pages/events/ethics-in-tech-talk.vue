<template>
  <div id='event'>
    <EventHero :event='hero' />
    <EventIntroText :sidebar='introTextSidebarItems'>
      <h2>What's this all about then?</h2>
      <p>Technology is engrained in most of our lives. When this is true, why is it that only a small fraction of us truly understand how our every day choices are being steered by others, and the systems they create. Whether it's who Facebook is telling you to vote for, or what Amazon is telling you to buy, autonomy and freedom are being tested. Four academic experts give us their insight on why we should be embedding ethics in tech in 2019.  Please refer to the list below:</p>
      <!--Add list here-->
      <h4>Professor Stuart Russell</h4>
      Stuart Russell was born in Portsmouth, England. He received his Bachelor of Arts degree with first-class honours in Physics from the University of Oxford where he was an undergraduate student at Wadham College, Oxford in 1982, and his PhD in Computer Science from Stanford University in 1986.
      <br>
      His research on the history and future of Artificial Intelligence and its relation to humanity includes machine learning, probabilistic reasoning, knowledge representation, planning, real-time decision making, multitarget tracking, computer vision, inverse reinforcement learning, and the movement to ban the manufacture and use of autonomous weapons.
      <p>Find out more <a href=''>here</a></p>
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
        desc: 'A consecutive series of talks on the same day, all about the ways in which ethics are considered/ ignored in modern applications of tech.',
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