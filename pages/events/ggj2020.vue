<template>
  <div id='event'>
    <EventHero :event='hero' />
    <!-- Content inside of the EventIntroText tags will display on the left-hand side of the intro section, below the hero unit -->
    <EventIntroText :sidebar='introTextSidebarItems'>
      <h2>Get together and create games in one weekend at Goldsmiths, University of London.</h2>
      <p>At Global Game Jam we gather game developers, designers, and interactive storytellers to build games over the course of a weekend. Each game will be focused around a secret theme, which is released at the start of the event.</p>
      <p>We are here to enable you to build your ideas - whether they're tabletop games, physical computing projects, choose-your-own-adventure text games, or something more complex.</p>
      <p></p>
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
        background: '/events/ggj2020/banner.png',
        logo: '/events/ggjlogo.svg',
        name: 'Global Game Jam 2020',
        desc: 'Spend a weekend building interactive playable experiences - both digital and tabletop. You will get support from mentors, and take part in a friendly shared demo.',
        buttons: [
          { label: 'Get free tickets!', path: 'https://www.eventbrite.co.uk/e/global-game-jam-2020-goldsmiths-university-of-london-tickets-81991008313' }
        ]
      },

      // This section is for the info blocks on the right-hand side of the intro section, below the hero unit
      introTextSidebarItems: [
        {
          title: 'When',
          content: 'Starting @ 31st January 2020, 2:00PM'
        },
        {
          title: 'Where',
          content: 'St James\' Hatcham Church<br>Goldsmiths, University of London<br>SE14 6AD'
    
        },
        {
          title: 'Twitter',
          content: '#GGJ2020 #Goldsmiths'
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
           q: `What is a Game Jam?`,
           a: `Game Jams are invention marathons for developers, designers, interactive storytellers and more. During the event, participants will design a game around the theme and show off their projects during a friendly demo at the end.`
         },
         {
           q: 'What should I bring?',
           a: 'All participants will need to bring their laptop, charger(s) and any other devices they wish to work on.'
         },
         {
           q: 'How much does it cost?',
           a: `We want to make this event accessible for everyone, so there is no charge to enter. To make this possible, we need sponsorship.`
         },
         {
           q: 'Who owns the projects?',
           a: 'All projects built at this event belongs completely to the teams. However, to generate the widest benefit from this event, we encourage attendees to provide Open Source licenses for the results of their work.'
         },
         {
           q: 'Do I need a team?',
           a: 'You don’t need a team to take part, it’s perfectly acceptable to create a solo project. However, during the event itself, there will be opportunities to share ideas and connect with your fellow hackers to form a team. As organisers, we’ll do our best to encourage and facilitate teamwork across the weekend.'
         },
         {
           q: 'Who is this event for?',
           a: 'Anyone! You do not need to be a student to attend this event. We will work to ensure that there is a diverse range of people, and this includes academic status.'
         },
         {
           q: 'Food???',
           a: 'We will be providing meals, snacks, and drinks over the weekend. More details will be released when we get receive the official GGJ schedule.'
         },
         {
           q: 'Is there a Code of Conduct?',
           a: 'Yes, and you must agree to it before attending. You can find it in the footer of this page.'
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