<template>
  <div id='event'>
    <EventHero :event='hero' />
    <!-- Content inside of the EventIntroText tags will display on the left-hand side of the intro section, below the hero unit -->
    <EventIntroText :sidebar='introTextSidebarItems'>
        
      <p style="text-align:center;"><img src="/events/discussion-about-assange/assange-poster.jpg" width="425" height="600"></p>
        <br>
        <h2>Why are Hacksmiths running this?</h2>
        <p>One of our key values is "Information wants to be free. Everyone should have access to knowledge and skills. It should not be held back by individuals, governments or companies". The Internet has been vital in allowing whistleblowers to hold governments to account, but is simultaneously being used as a channel for conflict and division. When presented with the Assange case, we inherently empathised with the actions of Julian Assange, Chelsea Manning, and all whistleblowers in general. Their actions highlighted the hypocrisy that Western governments possess, which is that they are able to "intervene" (i.e destroy land and societies), in the Middle East especially, while not holding themselves to the same standards.</p>
        <p>Other questions surrounding the Julian Assange case have also been raised over the past decade, including the Swedish rape allegations, and collusion with the Republican party and Russia. These branches of information have caused a split in the support for Julian Assange, Chelsea Manning, and Wikileaks. We hold this event not to deny anyone's experiences, but to bring together varied opinions, evidence, and to hopefully reach a consensus as a community.</p>
        <br>
        <h2>Programme</h2>
          17:15: Doors open
        <br>
          17:30 Introduction from Hacksmiths, and Chair of the event Emmy Butlins, JADC
        <br>
          Lisa Longstaff - Women Against Rape (~20 mins)
        <br>
          Questions from audience
        <br>
          Joseph Farrell - WikiLeaks Ambassador (~20 mins)
        <br>
        Questions from the audience
        <br>
        Hacksmiths to conclude
        <br>
        <br>
        <h2>Making this a safe space</h2>
        While we do encourage open discussion and freedom of speech, this shall not be at the cost of anyone's emotional wellbeing. Deliver your points objectively, avoid extrapolating single events, and provide proof if possible. As with all of our events, please also follow our Code of Conduct, which can be found at the very bottom of this page.
        <br>
        <h2>Filming disclaimer</h2>
        This event will be filmed. If you do not want to be filmed, please ask for a bright green lanyard, and sit in the designated no filming seats. (We will also remind people of this upon entry) 
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
        background: '/events/discussion-about-assange/banner.jpg',
        logo: '/events/logoPink.svg',
        name: 'An open discussion about Julian Assange',
        desc: 'Join us for two hours to discuss Julian Assange, and how his case has evolved over the past decade. Scepticism and contradictory proof are welcome and encouraged.',
        buttons: [
          { label: 'Get free tickets', path: 'https://www.eventbrite.co.uk/e/an-open-discussion-about-julian-assange-tickets-99019182039' }
        ]
      },

      // This section is for the info blocks on the right-hand side of the intro section, below the hero unit
      introTextSidebarItems: [
        {
          title: 'When',
          content: '20th March 2020, 5:30PM - 7PM'
        },
        {
          title: 'Where',
          content: 'Room LG02<br>Professor Stuart Hall Building<br>Goldsmiths, University of London<br>SE14 6AD'
        },
        {
          title: 'Twitter',
          content: '#JulianAssange #Wikileaks #Hacksmiths' 
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