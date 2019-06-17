<template>
  <div id='home'>
    <HomeHero />
    <HomeEvent />
  </div>
</template>

<script>
import HomeHero from '~/components/HomeHero';
import HomeEvent from '~/components/HomeEvent';

export default {
  components: {
    HomeHero,
    HomeEvent
  }  
}
</script>