<template>
  <div id='event'>
    <EventHero :event='hero' />
    <!-- Content inside of the EventIntroText tags will display on the left-hand side of the intro section, below the hero unit -->
    <EventIntroText :sidebar='introTextSidebarItems'>
      <h1>Anvil Hack 2020 information:</h1>
      The main purpose of Anvil Hack is to explore concepts creatively, through tech. This year's theme is 'positive disintegration'; the breaking up of old information to make room for new information.
      <br>
      What can cause systems to reorganise themselves, and what are the effects of this happening?
      <br>
      <br>
      <h2>Introduction video: this year's theme!</h2>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/9VpK64SGsEo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <br>
      <h2>Registration:</h2>
        <p> To register, you will need to make a  <a href="https://discord.com">Discord account</a>. This is so the Hacksmiths committee can create relative spaces on the Discord server the event is being held on, and assign people into teams within the server.
        <br>
        All information collected here will be deleted after the event, unless you choose to leave an email address with us for future contact, at the end of the form.
        <br>
        <h3><a href="https://docs.google.com/forms/d/e/1FAIpQLScNKkZXCNOlqujIRTbvJIbdzwGc9W9HSn1pvYPamNFmQnOrWw/viewform">Register here!</a></h3>
        </p>
      <br>
      
      <h2>Schedule:</h2>
        <p>
        One week prior to the event, you will receive a friend request on Discord from the Hacksmiths account. You will then be added to the server, but unable to access channels until the event goes live.
      </p>
      <ul>
        <li>31st July: Event and server go live, 'general channels' available for public, general discussion. 'Team channels' available for private, grouped discussions. </li>
        <li>1st Aug: A second form will be sent to all participants, asking if you want to showcase your work in the server on the final day, and if you would be happy for us to permanently showcase that work online.</li>
        <li>2nd Aug: Server showcase of work, commencing at 3PM. Each team/ participant will have 5 minutes to showcase their work in the main 'general channel'. Time-slots will be sent to each group/ participant at the start of the day.</li>
      </ul>

      Extra information regarding the structure of the Discord server will be released a week prior to the event (via video). 
      <br>
      Online impressions are just as important as real life ones, so please make sure you have read our <a href="https://github.com/hacksmiths/code-of-conduct">Code of Conduct</a>.
      <br>
      Mentors will be on hand to encourage discussion in the public channels, and help teams/ individuals with their projects in the private channels.
      Mentors and moderators will be available to contact throughout the event for general questions, and have access to all parts of the server. 
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
        background: '/events/anvil/hero.jpg',
        logo: '/events/logoPink.svg',
        name: 'Anvil Hack 2020',
        desc: 'Hacksmiths\' flagship creative tech hackathon. Join us for a weekend of online creativity! ',
      },

      // This section is for the info blocks on the right-hand side of the intro section, below the hero unit
      introTextSidebarItems: [
        {
          title: 'When',
          content: '31st Jul - 2nd Aug 2020'
        },
        {
          title: 'Where',
          // content: 'St James Hatcham Building<br>Goldsmiths, University of London<br>SE14 6AD'
          content: 'Discord (online)'
        },
        {
          title: 'Twitter/ Instagram tag',
          content: '#AnvilHack2020'
        }
      ],

      // These are the logos to show as supporters. These must be images in the /static/supporters directory, and must be in .png format. 
      // Leave array empty if you want to hide this section
      supporters: ['goldsmiths', 'doc', 'goldsu'],
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
          q: `Can I get involved if I'm not based in tech?`,
          a: `Definitely, this is the perfect oppurtunity to explore concepts safely, and your showcase can be a 5 minute text monologue of thoughts if you want it to be!`
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