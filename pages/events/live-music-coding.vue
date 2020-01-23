<template>
  <div id='event'>
    <EventHero :event='hero' />
    <!-- Content inside of the EventIntroText tags will display on the left-hand side of the intro section, below the hero unit -->
    <EventIntroText :sidebar='introTextSidebarItems'>
      <h2>Learn SuperCollider, a language and server built into one..</h2>
      <p>SuperCollider is an environment and programming language originally released in 1996 by James McCartney for real-time audio synthesis and algorithmic composition.</p>
      <p>Joanne Armitage is one half of Algobabez, and a pioneer of algoraves here in the UK. She is also currently researching in Leeds, focusing on haptics in music performance.</p>

      <h3>This is a past event. See footage below!</h3>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/8OaYSC2FmeE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
        background: '/events/doc/synthesis.jpg',
        logo: '/events/logoPink.svg',
        name: 'Live music coding w/ Joanne Armitage',
        desc: 'A 2hr workshop on SuperCollider for beginners',
        buttons: [
          { label: 'Get free tickets, please re-claim if you claimed the previous ones', path: 'https://www.eventbrite.co.uk/e/live-music-coding-workshop-w-joanne-armitage-tickets-77183334431' }
        ]
      },

      // This section is for the info blocks on the right-hand side of the intro section, below the hero unit
      introTextSidebarItems: [
        {
          title: 'When',
          content: '25th October 2019, 3:00PM'
        },
        {
          title: 'Where',
          content: 'RHB 355<br>Goldsmiths, University of London<br>SE14 6AD'
    
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
         {
           //q: `What is a hackathon`,
           //a: `Hackathons are invention marathons for developers, designers, psychologists, researchers and more. During the event, participants ('hackers') will build projects that answer our challenges to build awesome creative projects.`
         },
         {
           q: `Who owns the projects?`,
           a: `All projects built at this event belongs completely to the teams. However, to generate the widest benefit from this event, we encourage attendees to provide Open Source licenses for the results of their work.`
         },
         {
           q: 'What should I bring?',
           a: 'All participants will need to bring their laptop, charger(s) and any other devices they wish to work on.'
         },
         {
           q: 'How much does it cost?',
           a: `We want to make this event accessible for everyone, so there is no charge to enter. To make this possible, we need sponsorship.`
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