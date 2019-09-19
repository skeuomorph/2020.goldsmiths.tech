<template>
  <div id='about' class='container'>
    <h1 class="title">Hi, we're Hacksmiths.</h1>
    <h2>The award-winning student run tech society at Goldsmiths, University of London.</h2>
    <p>Founded in 2014, our mission is to provide an opportunity for people in all departments and from all backgrounds the chance to learn about, and play with, technology. We do this by organising talks, workshops and facilitating hackathons (invention marathons).</p>
    <p>Hacksmiths is committed to making all projects as inclusive as possible. While we look at many spectrums for this, we are particularly interested in how we can engage students (and faculty) outside of Computing. Our hope is that this will not only increase interdisciplinary collaboration, but strengthen the Goldsmiths community overall.</p>
    <div class="values">
      <p>The hacker ethics (our values)</p>
      <ul>
        <li><b>The hands-on imperative.</b> Learn by doing - take apart, fix and improve upon existing technology to build new projects and learn how things work.</li>
        <li><b>Information wants to be free.</b> Everyone should have access to knowledge and skills. It should not be held back by individuals, governments or companies.</li>
        <li><b>Mistrust authority.</b> Technology that takes control from large organisations to empower the individual.</li>
        <li><b>No bogus criteria.</b> Your knowledge, creativity and experience are what we're interested in. "Bogus criteria" such as race, age, gender, socio-economic circumstance or status will not put anyone at a disadvantage.</li>
        <li><b>You can create truth and beauty on a computer.</b> Hacking with technology can be used to encourage and highlight artistry and creativity.</li>
        <li><b>We can change the world.</b>  With the above five ethics, we can use the power we hold to really impact people's lives for the better</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
#about {
  margin-top: 4em;
}
.container {
  max-width: 760px;
}
h1.title {
  font-size: 3em;
  margin-bottom: 1rem;
  text-align: center;
}
h1.title + h2 {
  font-size: 1.5em;
  margin-bottom: 2rem;
  text-align: center;
}
img {
  width: 100%;
  margin-bottom: 1em;
}
p {
  margin-bottom: 1em;
}
.values {
  background: var(--light-2);
  padding: 1.5em;
  border-radius: 5px;
}
ul {
  margin-left: 1.25em;
}
li {
  margin-top: 1em;
}

@media screen and (max-width: 960px) {
  #about {
    margin-top: 2em;
  }
  h1.title {
    font-size: 1.25em;
  }
  h1.title + h2 {
    font-size: 1em;
  }
}
</style>
