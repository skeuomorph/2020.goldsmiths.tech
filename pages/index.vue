<template>
  <div id='home'>
    <HomeEvent />
    <HomeHero />
  </div>
</template>

<script>
import HomeEvent from '~/components/HomeEvent';
import HomeHero from '~/components/HomeHero';

export default {
  components: {
    HomeEvent,
    HomeHero
  }  
}
</script>