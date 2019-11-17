<template>
  <div id='contact' class='container'>
    <h1>Contact Hacksmiths</h1>
      <div id="links">
        <a href="https://www.facebook.com/hacksmiths">
        <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.facebook.com/groups/1826544797377921">
        <i class="fab fa-facebook-square"></i></a> 
        <a href="http://m.me/smithsbot">
        <i class="fab fa-facebook-messenger"></i>
        </a> 
        <a href="https://twitter.com/hacksmiths">
        <i class="fab fa-twitter"></i>
        </a> 
        <a href="https://instagram.com/hacksmiths">
        <i class="fab fa-instagram"></i>
        </a> 
        <a href="mailto:hacksmiths@goldsmithssu.org">
        <i class="far fa-envelope"></i>
        </a> 
      </div>
  </div>
</template>
 
<style scoped>
.container {
  max-width: 760px;
  margin-top: 4em;
}

h1 {
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 2em;
  text-align: center;
}

#links {
  text-align: center;
  margin-top: 2em;
}

#links a {
  margin: 0 1em;
  text-align: center;
}

i {
  font-size: 5.5em;
}

@media screen and (max-width: 960px) {
  #contact {
    margin-top: 2em;
  }
  h1 {
    font-size: 1.50em;
  }
  
  #links{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: space-between;
  }

  #links a {
    margin-bottom: 10px;
    text-align: center;
  }
  
  i {
    font-size: 4em;
    width: 60px;
    height: 60px;
  }
}
</style>
 