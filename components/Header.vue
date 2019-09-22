<template>
  <header class='container'>
    <n-link to='/' class='logo'>
      <img src="~/assets/brand/logo-icon.svg" alt="Hacksmiths Logo">
    </n-link>  
    <nav>
      <n-link to='/'>Home</n-link>
      <n-link to='/events'>Events</n-link>
      <n-link to='/team'>Team</n-link>
      <n-link to='/about'>About</n-link>
      <n-link to='/contact'>Contact</n-link>
      <a href='/join' class='btn'>Join for free</a>
    </nav>
  </header>
</template>

<style scoped>
header {
  padding-top: 1.5em;
  padding-bottom: 1.5em;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}
.logo {
  margin-right: auto;
}
.logo img {
  height: 3rem;
}
nav a {
  margin-left: 1em;
  text-transform: uppercase;
  font-weight: 400;
  color: var(--dark);
  text-decoration: none;
}

@media screen and (max-width: 960px) {
  header {
    flex-direction: column;
    text-align: center;
  }
  .logo {
    margin: auto;
  }
  nav {
    margin-top: 1em;
    font-size: 0.8em;
  }
  nav a {
    margin-left: 0;
    padding: 0.5em;
    display: inline-block;
  }
  nav a.btn {
    display: none;
  }
}
</style>
