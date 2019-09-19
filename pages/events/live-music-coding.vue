<template>
  <div id='event'>
    <EventHero :event='hero' />
    <!-- Content inside of the EventIntroText tags will display on the left-hand side of the intro section, below the hero unit -->
    <EventIntroText :sidebar='introTextSidebarItems'>
      <h2>Build awesome music song thingis, with all the support you need.</h2>
      <p>Do you like songs.</p>
      <p>We probably got em.</p>
      <!-- <p>Find out more <a href='#'>here</a>.</p> -->
    </EventIntroText>

    <!-- Can comment this out if you do not want to display the supporters section -->
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
        logo: '/events/doc/logo.svg',
        name: 'Live music coding w/ Joanne Armitage',
        desc: 'A 2hr workshop on SuperCollider and Hydra.',
        buttons: [
          { label: 'Highlights from the future', path: '/no-website-yet' },
          { label: 'Get free tickets, or don\'t. I\'m just a button.', path: '/free-tix' }
        ]
      },

      // This section is for the info blocks on the right-hand side of the intro section, below the hero unit
      introTextSidebarItems: [
        {
          title: 'When',
          content: '4th October 2019'
        },
        {
          title: 'Where',
          // content: 'St James Hatcham Building<br>Goldsmiths, University of London<br>SE14 6AD'
          content: 'In the room.'
        },
        {
          title: 'Twitter',
          content: '#LiveMusicCoding'
        }
      ],

      // These are the logos to show as supporters. These must be images in the /static/supporters directory, and must be in .png format. 
      // Leave array empty if you want to hide this section
      supporters: ['goldsmiths', 'doc', 'goldsu', 'github'],
      // If false, the line asking for sponsorship will not show
      askForSponsorship: true,

      // List of FAQs
      faqs: [
        // {
        //   q: `What is a hackathon`,
        //   a: `Hackathons are invention marathons for developers, designers, psychologists, researchers and more. During the event, participants ('hackers') will build projects that answer our challenges to build awesome creative projects.`
        // },
        // {
        //   q: `Who owns the projects?`,
        //   a: `All projects built at this event belongs completely to the teams. However, to generate the widest benefit from this event, we encourage attendees to provide Open Source licenses for the results of their work.`
        // },
        // {
        //   q: 'What should I bring?',
        //   a: 'All participants will need to bring their laptop, charger(s) and any other devices they wish to work on.'
        // },
        // {
        //   q: 'How much does it cost?',
        //   a: `We want to make this event accessible for everyone, so there is no charge to enter. To make this possible, we need sponsorship.`
        // },
        {
          q: `I don't think this is for me.`,
          a: `We know that some people don't like music.`
        },
        {
          q: `Do I need a team?`,
          a: `You don’t need a team to take part; it’s perfectly acceptable to create a solo project. However, during the event itself, there will be opportunities to share ideas and connect with your fellow hackers to form a team. As organisers, we’ll do our best to encourage and facilitate teamwork across the weekend.`
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