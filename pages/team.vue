<template>
  <div id='team' class='container'>
    <h1 class="title">Our 2019-2020 Team</h1>
    <h2>We're happy to answer any questions you may have about Hacksmiths or our projects.</h2>
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
          name: 'Markela Zeneli',
          role: 'President',
          email: 'mzene001@gold.ac.uk',
          pic: '/team/markela.jpg'
        },
        {
          name: 'Mohamed Abanour',
          role: 'Committee Member',
          email: 'maban001@gold.ac.uk',
          pic: '/team/mohamed.jpeg'
        },
        {
          name: 'Elhassania Ghazoini',
          role: 'Committee Member',
          email: 'eghaz001@gold.ac.uk',
          pic: '/team/ania.jpg'
        },
        {
          name: 'Charlie Francis',
          role: 'Committee Member',
          email: 'cfran005@gold.ac.uk',
          pic: '/team/charlie.jpg'
        },
        {
          name: 'Dennis Duka',
          role: 'Committee Member',
          email: 'dntou001@gold.ac.uk',
          pic: '/team/dennis.jpg'
        },
        {
          name: 'Katie Whittington',
          role: 'Committee Member',
          email: 'kwhit006@gold.ac.uk',
          pic: '/team/katie.jpg'
        },
        {
          name: 'Will Reynard',
          role: 'Committee Member',
          email: 'wreyn001@gold.ac.uk',
          pic: '/team/will.jpg'
        },
        {
          name: 'Francesca Brierley',
          role: 'Committee Member',
          email: 'fbrie002@gold.ac.uk',
          pic: '/team/fran.png'
        },
        {
          name: 'Daniel Cosby',
          role: 'Committee Member',
          email: 'dcosb001@gold.ac.uk',
          pic: '/team/dan.jpeg'
        },
        {
          name: 'Aanandita Gupta',
          role: 'Committee Member',
          email: 'agupt001@gold.ac.uk',
          pic: '/team/andy.jpeg'
        },
        {
          name: 'Caroline Gustafsson',
          role: 'Committee Member',
          email: 'cgust001@gold.ac.uk',
          pic: '/team/caroline.jpeg'
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
