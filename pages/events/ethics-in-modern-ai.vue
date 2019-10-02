<template>
  <div id='event'>
    <EventHero :event='hero' />
    <EventIntroText :sidebar='introTextSidebarItems'>
      <h2>What's this all about then?</h2>
      <p>Technology is ingrained in most of our lives. When this is true, why is it that only a small fraction of us understand how our everyday choices are being steered by others, and the systems they create. Whether it's who Facebook is telling you to vote for, or what Amazon is telling you to buy, democracy and freedom are being tested. Academic experts give us their insight on why we should be embedding ethics into Artificial Intelligence in 2019.</p>
      <!--Add list here-->
      <br>
      <h3>Professor Stuart Russell</h3>
      <p>Stuart Russell's research on the history and future of Artificial Intelligence and its relation to humanity includes machine learning, probabilistic reasoning, knowledge representation, real-time decision making, multitarget tracking, computer vision, inverse reinforcement learning, and the movement to ban the manufacture and use of autonomous weapons.</p>
      <p>Stuart was born in Portsmouth, England. He received his Bachelor of Arts degree with first-class honours in Physics from the University of Oxford where he was an undergraduate student at Wadham College in 1982, and his PhD in Computer Science from Stanford University in 1986.</p>
      <p>Slaughterbots: A short horror film created by Stuart Russell. CW: Violence, horror, explosives. </p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/HipTO_7mUOw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <p>Find out more about his current research <a href='/humanCompatiblePR.docx'>here</a>.</p>
      <br>
      <h3>Dr Dan McQuillan</h3>
      <p>Post-austerity AI<br>
      This talk will not focus on the long term future of AI but on the
      political and
      social damage that will flow from the AI we already have. It will
      describe the way
      its concrete operations of optimisation and prediction lead to
      thoughtlessness,
      epistemic injustice and segregation, and how that resonates with the wider
      politics of austerity and the rise of the far right. The talk will
      propose a route
      to an alternative AI based on feminist technology studies and forms of
      direct
      democracy such as people’s councils. It will call for an approach to AI
      in the
      here and now that puts matters of care at its core, and that recomposes
      the very
      idea of AI as computation in the service of togetherness.</p>

      <p>Dan is a Lecturer in Creative and Social Computing at
      Goldsmiths, University of London. After a PhD in Experimental Particle Physics, he worked
      with people with learning disabilities and mental health problems, and
      was Digital Director for Amnesty International.</p>
      <br>
      <h3>Dr Kate Devlin</h3>
      <p>Dr Kate Devlin is Senior Lecturer in Social and Cultural Artificial Intelligence 
      at King's College London where she researches how society reacts to technological change.
      Her book, "Turned On: Science, Sex and Robots" (Bloomsbury, 2018) has received wide 
      acclaim. She campaigns for gender equality in tech, and has recently been elected as a
      Director of the Open Rights Group. She tweets far too often as @drkatedevlin . </p>
      <br>
      <h2>Programme</h2>
      Doors open: 11:00
      <br>
      Stuart speaks: 11:30
      <br>
      Dan speaks: 12:30
      <br>
      Kate speaks: 12:50
      <br>
      Q &amp; A : 13:10
      <br>
      Stuart's book signing: 13:40
      <br>
      END

      
    </EventIntroText>

    <EventSupporters :supporters='supporters' :askForSponsorship='askForSponsorship' v-if='supporters.length > 0' />
    <!-- <EventFaq :faqs='faqs' /> -->
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
        logo: '/events/logoPink.svg',
        name: 'Ethics in modern AI',
        desc: 'A series of talks and a Q&A about the ways in which ethics are considered and ignored in modern applications of Artificial Intelligence.',
        buttons: [
          { label: 'Get free tickets', path: 'https://www.eventbrite.co.uk/e/ethics-in-tech-conference-tickets-73748841771' }
        ]
      },

      // This section is for the info blocks on the right-hand side of the intro section, below the hero unit
      introTextSidebarItems: [
        {
          title: 'When',
          content: 'Oct 12th 2019, 11AM'
        },
        {
          title: 'Where',
          content: 'St James Hatcham Building<br>Goldsmiths, University of London<br>SE14 6AD'
        }
      ],

      // These are the logos to show as supporters. These must be images in the /static/supporters directory, and must be in .png format. 
      // Leave array empty if you want to hide this section
      supporters: ['goldsmiths', 'doc', 'goldsu'],
      // If false, the line asking for sponsorship will not show
      askForSponsorship: true,

      // List of FAQs
      faqs: [
        {
          q: `Q1`,
          a: `-----------`
        },
        {
          q: `Q2`,
          a: `-----------.`
        },
        {
          q: 'Q3',
          a: '-----------'
        },
        {
          q: 'Q4',
          a: `-----------`
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