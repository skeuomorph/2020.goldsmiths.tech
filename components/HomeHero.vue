<template>
  <div id='hero'>
    <div class="container">   
      <div id="mission">
        <img src="~/assets/brand/logo.svg" alt="Hacksmiths">
        <h2> Hacksmiths is the student-run tech society at Goldsmiths. Our mission is to provide an opportunity for people in all departments and from all backgrounds the chance to learn about, and play with, technology. </h2>
        <a href='/join' class='btn'>Become a member - join for free</a>
      </div>
      <div id="events">
        <div class="event" v-for='item in events' :key='item.title'>
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: [
        {
          title: 'Monthly talks & workshops',
          desc: 'A range of interesting content from students, staff and industry/academic professionals. Suitable for complete beginners.'
        },
        {
          title: 'Hackathons & jams',
          desc: 'Invention marathons which bring together people with varying skills to build awesome projects. Suitable for all skill levels.'
        },
        {
          title: 'Lovelace',
          desc: 'A social event series for women and non binary people interested in technology at goldsmiths. Suitable for all skill levels.'
        },
        {
          title: 'Community series',
          desc: 'Supporting students and staff to run their tech events with mentorship and funding.'
        },
        {
          title: 'Nights',
          desc: 'Digital arts students create music-responsive visuals for DJs/ performers. Cheap drinks, location 20 mins from Goldsmiths and will be disclosed via email.'
        }
      ]
    }
  }
}
</script>

<style scoped>
#hero {
  padding-top: 5em;
  padding-bottom: 5em;
  background: var(--light);
}
.container {
  display: flex;
  align-items: center;
  gap: 4em;
}
#mission {
  flex: 1.5;
}
#mission img {
  width: 40%;
}
#mission h2 {
  color: var(--mid);
  font-weight: 300;
  margin: 1.5em 0;
  width: 80%;
  font-size: 1.25em;
}
#events {
  flex: 1;
  background: white;
  border: 1px solid var(--light-2);
  padding: 2em;
  display: flex;
  flex-direction: column;
  gap: 2em;
  border-radius: 5px;
}
#events h3 {
  font-size: 1em;
  margin-bottom: 0.5em;
  font-weight: bold;
}
@media screen and (max-width: 960px) {
  #hero {
    padding-top: 2.5em;
    padding-bottom: 2.5em;
  }
  .container {
    flex-direction: column;
    gap: 2em;
  }
  #mission h2 {
    width: 100%;
    font-size: 1em;
    text-align: center;
  }
  #mission img {
    display:block;
    width: 50%;
    min-width: 260px;
    margin:0 auto;
  }
  .btn {
    font-size: 0.8em;
    display: block;
    margin:10px auto;
    width:80%;
  }
  #events {
    padding: 1.5em;
    font-size: 0.8em;
  }
}
</style>
