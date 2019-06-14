<template>
  <div id='event'>
    <EventHero :event='hero' />
    <EventIntroText :sidebar='introTextSidebarItems'>
      <h2>Build awesome interactive experiences, with all the support you need.</h2>
      <p>At the hackathon over the weekend, you will use your technical and creative skills to make something wonderful, arty, musical - anything you build will be awesome. We'll provide you with food, drink, electricity and internet, so that you can get on with the real work - making cool and engaging projects!</p>
      <p>As well as access to our carefully curated Hacksmiths Hardware Lab, expect support from mentors and even more useful workshops for the duration of the event.</p>
      <p>Find out more <a href='#'>here</a>.</p>
    </EventIntroText>
    <EventSupporters :supporters='supporters' :askForSponsorship='askForSponsorship' />
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
      // Assets go in /static
      hero: {
        background: '/events/doc/hero.jpg',
        logo: '/events/doc/logo.svg',
        name: 'DoC Hack',
        desc: 'The flagship creative tech & performance hackathon by Hacksmiths',
        buttons: [
          { label: 'Highlights from 2019', path: '/highlights' },
          { label: 'Get free tickets', path: '/tix' }
        ]
      },
      introTextSidebarItems: [
        {
          title: 'When',
          content: '13-14 April 2019'
        },
        {
          title: 'Where',
          content: 'St James Hatcham Building<br>Goldsmiths, University of London<br>SE14 6AD'
        },
        {
          title: 'Twitter',
          content: '#DoCHack'
        }
      ],
      supporters: ['goldsmiths', 'doc', 'goldsu', 'github'],
      askForSponsorship: true,
      faqs: [
        {
          q: `What is a hackathon`,
          a: `Hackathons are invention marathons for developers, designers, psychologists, researchers and more. During the event, participants ('hackers') will build projects that answer our challenges to build awesome creative projects.`
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
        },
        {
          q: `I don't think this is for me`,
          a: `We really mean it when we say we welcome beginners - you can ask for help judgement-free, and if you need to step awa yfrom the action we'll have a designated quiet room available for you to use.`
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