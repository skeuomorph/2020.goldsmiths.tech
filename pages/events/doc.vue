<template>
  <div id='event'>
    <EventHero :event='hero' />
    
  </div>
</template>

<script>
import EventHero from '~/components/EventHero';

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
          { label: 'Highlights from 2019', path: '/' },
          { label: 'Get free tickets', path: '/' }
        ]
      }
    }
  },
  components: {
    EventHero
  }
}
</script>