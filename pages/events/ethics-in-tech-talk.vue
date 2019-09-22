<template>
  <div id='event'>
    <EventHero :event='hero' />
    <EventIntroText :sidebar='introTextSidebarItems'>
      <h2>What's this all about then?</h2>
      <p>Technology is ingrained in most of our lives. When this is true, why is it that only a small fraction of us truly understand how our everyday choices are being steered by others, and the systems they create. Whether it's who Facebook is telling you to vote for, or what Amazon is telling you to buy, autonomy and freedom are being tested. Academic experts give us their insight on why we should be embedding ethics in tech in 2019.</p>
      <!--Add list here-->
      <h3>Professor Stuart Russell</h3>
      <p>Stuart Russell was born in Portsmouth, England. He received his Bachelor of Arts degree with first-class honours in Physics from the University of Oxford where he was an undergraduate student at Wadham College, Oxford in 1982, and his PhD in Computer Science from Stanford University in 1986.</p>
      <p>His research on the history and future of Artificial Intelligence and its relation to humanity includes machine learning, probabilistic reasoning, knowledge representation, planning, real-time decision making, multitarget tracking, computer vision, inverse reinforcement learning, and the movement to ban the manufacture and use of autonomous weapons.</p>
      <p>Find out more about Professor Russell <a href='/humanCompatiblePR.docx'>here</a>.</p>
      <h3>We'll announce more speakers soon</h3>
    </EventIntroText>

    <EventSupporters :supporters='supporters' :askForSponsorship='askForSponsorship' v-if='supporters.length > 0' />
    <!-- <EventFaq :faqs='faqs' /> -->
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
        desc: 'A series of talks on the same day, about the ways in which ethics are considered and ignored in modern applications of tech.',
        buttons: [
          { label: 'Get free tickets', path: 'https://www.eventbrite.co.uk/e/ethics-in-tech-conference-tickets-73748841771' }
        ]
      },

      // This section is for the info blocks on the right-hand side of the intro section, below the hero unit
      introTextSidebarItems: [
        {
          title: 'When',
          content: 'Oct 12th 2019, 11AM'
        },
        {
          title: 'Where',
          content: 'St James Hatcham Building<br>Goldsmiths, University of London<br>SE14 6AD'
        }
      ],

      // These are the logos to show as supporters. These must be images in the /static/supporters directory, and must be in .png format. 
      // Leave array empty if you want to hide this section
      supporters: ['goldsmiths', 'doc', 'goldsu'],
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