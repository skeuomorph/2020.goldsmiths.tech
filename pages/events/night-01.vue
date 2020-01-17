<template>
  <div id='event'>
    <EventHero :event='hero' />
    <!-- Content inside of the EventIntroText tags will display on the left-hand side of the intro section, below the hero unit -->
    <EventIntroText :sidebar='introTextSidebarItems'>
      <h2>Join us for our first ever live music night!</h2>
      <p>4 hrs of back-to-back DJ sets, alongside live coded visuals using PraxisLIVE. <br> ! CONTENT WARNING ! : some imagery may be considered disturbing </p>
      <h3>SET TIMES:</h3>
      <p>
18:00 - 19:00 - JOE ERRICK (extrapolation records) <iframe width="90%" height="200" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/938039&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<br>
19:00 - 20:00 - DJ GRAPEFRUIT (slow dance records) <iframe width="90%" height="200" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/2299474&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<br>
20:00 - 21:00 - DJ SOVNET <iframe width="90%" height="200" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/732873844&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<br>
21:00 - 22:00 - TERRIBILIS aka Ed Hardy Party (Quantum Natives) <iframe width="90%" height="200" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/54238346&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe></p>

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
        background: '/events/night-01/banner.png',
        logo: '/events/night-01/logo-icon.svg',
        name: 'Music night #01',
        desc: 'Our first live music night. 4 DJs, live coded visuals, BYOB!',
        buttons: [
          { label: 'Get free tickets', path: 'https://www.eventbrite.co.uk/e/hacksmiths-music-night-01-tickets-90352720419' }
        ]
      },

      // This section is for the info blocks on the right-hand side of the intro section, below the hero unit
      introTextSidebarItems: [
        {
          title: 'When',
          content: '6pm (time may change, watch this space)<br> 7th February 2020'
        },
        {
          title: 'Where',
          content: 'St James Hatcham<br>Goldsmiths, University of London<br>SE14 6AD'
        },
        {
          title: 'Twitter',
          content: '#HacksmithsNights'
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
          q:'Age limit?',
          a:'18+ for this one folks'
        },
        {
          q: 'BYOB?',
          a: 'Yiss, bring what you want but drink responsibly.'

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