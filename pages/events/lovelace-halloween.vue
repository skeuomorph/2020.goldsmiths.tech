<template>
  <div id='event'>
    <EventHero :event='hero' />
    <!-- Content inside of the EventIntroText tags will display on the left-hand side of the intro section, below the hero unit -->
    <EventIntroText :sidebar='introTextSidebarItems'>
      <h2>Lovelace - Halloween</h2>
      <p>This year, Lovelace will have a different theme each term. Autumn's theme is "Identities and Reality", and how the two interact / conflict with each other.</p>
      <p>Using our phones as detectors, we will be passing electromagnetic field fluctuations (i.e ghosts) through an OSC filter to give our ghosts some voices!</p>
      <p>All we require you bring is a phone and a laptop. Refreshments + snacks provided!</p>
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
        background: '/events/lovelace/hallo-banner2.jfif',
        logo: '/events/lovelace/love-hallo.svg',
        name: 'Lovelace - Halloween',
        desc: 'A series of workshops and socials for women and non-binary people interested in tech.',
        buttons: [
          { label: 'Get free tickets', path: 'https://www.eventbrite.co.uk/e/lovelace-halloween-2019-tickets-77622951337' }
        ]
      },

      // This section is for the info blocks on the right-hand side of the intro section, below the hero unit
      introTextSidebarItems: [
        {
          title: 'When',
          content: '5pm, 30th October 2019'
        },
        {
          title: 'Where',
          content: 'RHB 221<br>Goldsmiths, University of London<br>SE14 6AD'
        },
        {
          title: 'Twitter',
          content: '#Lovelace'
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
          q: `Can I attend if I identify as male?`,
          a: `This is a safe-space for women and non-binary people at Goldsmiths. As there are such few women on the Computing courses, 
          we provide spaces for marginalised voices to say how they really feel in an open environment. To do this, we need to ensure that
          no pre-existing hierarchies infringe on their comfortability in doing so, and that includes gender hierarchies. Therefore, unfortunately
          no men are allowed at Lovelace events. `
        },
        {
          q: 'What should I bring?',
          a: 'All participants will need to bring their smartphones, laptops, charger(s) and any other devices they wish to work on.'
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