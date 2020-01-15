<template>
  <div id='event'>
    <EventHero :event='hero' />
    <!-- Content inside of the EventIntroText tags will display on the left-hand side of the intro section, below the hero unit -->
    <EventIntroText :sidebar='introTextSidebarItems'>
      <h2>Take part in some friendly competition, where your employability skills will be highlighted and developed.</h2>
      <p>For the first part of the event, attendees will be grouped into teams and asked to complete icebreaker mini-challenges. We aim to provide a broad set of challenges, so that no matter your interests, you will find something to participate in.
        There will be mentors available for the teams, both at the start, and then to help them for a Dragon's Den style challenge at the end. <br>Teams will be asked to create a concept/ product/ service, revolving around one out of four topics (outlined below). Teams and their concepts
        will then be judged by employers from the tech industry. 
        
        As this is a friendly, there are no winners or losers. Your final team concept will be judged positively, and constructively critiqued.
      </p>

      <p>The themes for the Dragon's Den challenge are:</p>
    <ul>
        <li>Sustainability</li>
        <li>Accessibility and Inclusion</li>
        <li>Health (mental and physical)</li>
        <li>Privacy</li>
    </ul>

    <p>Please make sure to do some research on recent developments in these fields, and there will be time to do research together in your teams. </p>

    <p>Official timings and sponsors to be announced soon!</p>
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
        background: '/events/career/banner.jfif',
        logo: '/events/logoPink.svg',
        name: 'Career Hack',
        desc: 'An event over 4hrs where you will form teams of 5, complete some icebreaker mini-challenges, and take part in a Dragons Den styled competition at the end.',
        buttons: [
          { label: 'Get free tickets!', path: 'https://www.eventbrite.co.uk/e/career-hack-goldsmiths-tickets-84725655717' }
        ]
      },

      // This section is for the info blocks on the right-hand side of the intro section, below the hero unit
      introTextSidebarItems: [
        {
          title: 'When',
          content: 'Starting 12th February 2020, 2:00PM'
        },
        {
          title: 'Where',
          content: 'St James\' Hatcham Church<br>Goldsmiths, University of London<br>SE14 6AD'
    
        },
        {
          title: 'Twitter',
          content: '#CareerHack #Hacksmiths #Goldsmiths'
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
           a: 'This event is all about harnessing your employability skills, and teamwork is a key skill. If you still have concerns, please contact us via our socials or by email.'
         },
         {
           q: 'Who is this event for?',
           a: 'Students in Computing that wish to enter a tech-related field in the future.'
         },
         {
           q: 'Food???',
           a: 'Snacks and drinks provided during a break.'
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