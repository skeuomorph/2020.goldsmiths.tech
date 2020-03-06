<template>
  <div id='event'>
    <EventHero :event='hero' />
    <!-- Content inside of the EventIntroText tags will display on the left-hand side of the intro section, below the hero unit -->
    <EventIntroText :sidebar='introTextSidebarItems'>
        
      <p style="text-align:center;"><img src="poster5-1.png" width="550" height="700"></p>
        <br>
        <p>NoDigitalTraces was a short group research project by four graduate students in the MA/MFA Computational Arts 
        program at Goldsmiths University. As part of the course, we often looked at the societal impacts of technology, 
        algorithms, and computation. This project examined how discussion and debate in the public sphere is curtailed by 
        social media and software companies, and how that discussion can be re-routed through ever developing 
        alternatives, that empower people to take back control of both their data, and public discourse.</p>

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
        background: '/events/no-digital-traces/nodigitaltraces.jpg',
        logo: '/events/logoPink.svg',
        name: 'No Digital Traces',
        desc: 'Why should we consider alternative websites/ technologies, and the process of breaking away from the defaults that are pushed to us?',
        buttons: [
          { label: 'Get free tickets', path: 'https://www.eventbrite.co.uk/e/nodigitaltraces-tickets-98696256159' }
        ]
      },

      // This section is for the info blocks on the right-hand side of the intro section, below the hero unit
      introTextSidebarItems: [
        {
          title: 'When',
          content: '16th March 2020, 5:30PM - 7PM'
        },
        {
          title: 'Where',
          content: 'Room 137<br>Richard Hoggart Building<br>Goldsmiths, University of London<br>SE14 6AD'
        },
        {
          title: 'Twitter',
          content: '#NoDigitalTraces #Hacksmiths' 
        }
      ],

      // These are the logos to show as supporters. These must be images in the /static/supporters directory, and must be in .png format. 
      // Leave array empty if you want to hide this section
      supporters: ['goldsmiths', 'doc', 'goldsu'],
      // If false, the line asking for sponsorship will not show
      askForSponsorship: true,
    }
  },
  components: {
    EventHero,
    EventIntroText,
    EventSupporters,
  }
}
</script>