<template>
  <footer class='container'>
    <div class="links">
      <div class="top">
        <n-link to='/contact'>Contact</n-link>
        <n-link to='https://github.com/hacksmiths/code-of-conduct/blob/master/README.md'>Code of Conduct</n-link>
      </div>
      <div class="bottom">
        <n-link to='/'>&copy; 2014-{{ currentDate }} Hacksmiths</n-link>
        <a href="https://goldsmithssu.org">Goldsmiths SU</a>
        <a href="https://www.gold.ac.uk/computing/">Department of Computing at Goldsmiths</a>
      </div>
    </div>
    <div class="social">
      <div class="top">
        <a href="https://twitter.com/hacksmiths"><i class="fab fa-twitter"></i></a>
        <a href="https://facebook.com/hacksmiths"><i class="fab fa-facebook-f"></i></a>
        <a href="http://m.me/smithsbot"><i class="fab fa-facebook-messenger"></i></a>
        <a href="https://instagram.com/hacksmiths"><i class="fab fa-instagram"></i></a>
      </div>
      <div class="bottom">
        <a href="mailto:team@goldsmiths.tech">team@goldsmiths.tech</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    currentDate() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
footer {
  display: flex;
  justify-content: space-between;
  padding-bottom: 4em;
}
a {
  text-decoration: none;
}
.top a {
  color: var(--dark);
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 0.5em;
  display: inline-block;
}
.bottom a {
  color: var(--mid);
}
.social {
  text-align: right;
}
.links a {
  margin-right: 1em;
}
.social a {
  margin-left: 1em;
}
@media screen and (max-width: 960px) {
  footer {
    flex-direction: column-reverse;
    gap: 2em;
  }
  .social {
    text-align: center;
  }
  .links {
    text-align: center;
  }
  .social a,
  .links a {
    font-size: 0.8em;
    display: inline-block;
    margin-left: 0.5em;
    margin-right: 0.5em;
  }
}
</style>
