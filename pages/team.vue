<template>
  <div id='team' class='container'>
    <h1 class="title">Our 2019-2020 Team</h1>
    <h2>We're super friendly and happy to answer any questions you may have about Hacksmiths or our projects.</h2>
    <div class="team">
      <div class="person" v-for='person in people' :key='person.name'>
        <img :src="person.pic" :alt="person.name">
        <h3>{{ person.name }}</h3>
        <p>{{ person.role }}</p>
        <p>{{ person.email }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      people: [
        {
          name: 'Ben Henshaw',
          role: 'Committee Member',
          email: 'xxxx001@gold.ac.uk',
          pic: '/team/ben.jpg'
        },
        {
          name: 'Harley Wright',
          role: 'Committee Member',
          email: 'xxxx001@gold.ac.uk',
          pic: '/team/harley.jpg'
        },
        {
          name: 'Isabella Maund',
          role: 'Committee Member',
          email: 'xxxx001@gold.ac.uk',
          pic: '/team/isabella.jpg'
        },
        {
          name: 'Jorid Jonland',
          role: 'Committee Member',
          email: 'xxxx001@gold.ac.uk',
          pic: '/team/jo.jpg'
        },
        {
          name: 'Katie Whittington',
          role: 'Committee Member',
          email: 'xxxx001@gold.ac.uk',
          pic: '/team/katie.jpg'
        },
        {
          name: 'Markela Zeneli',
          role: 'Committee Member',
          email: 'xxxx001@gold.ac.uk',
          pic: '/team/markela.jpg'
        },
        {
          name: 'Taran Feaver',
          role: 'Committee Member',
          email: 'xxxx001@gold.ac.uk',
          pic: '/team/taran.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
#team {
  text-align: center;
  margin-top: 4em;
}
h1.title {
  font-size: 3em;
  margin-bottom: 1rem;
}
h1.title + h2 {
  font-size: 2em;
  margin-bottom: 2rem;
}
.team {
  columns: 4;
}
.person {
  display: inline-block;
  padding: 1em;
  background: var(--light);
  border: 1px solid var(--light-2);
  border-radius: 7.5px;
  margin-bottom: 1em;
}
.person img {
  width: 100%;
  border-radius: 5px;
}
.person h3 {
  font-size: 1em;
  font-weight: bold;
  margin: 1em 0;
}
.person p {
  color: var(--mid);
}

@media screen and (max-width: 960px) {
  #team {
    margin-top: 2em;
  }
  h1.title {
    font-size: 1.25em;
  }
  h1.title + h2 {
    font-size: 1em;
  }
  .team {
    columns: 2;
    font-size: 0.8em;
  }
}
</style>
