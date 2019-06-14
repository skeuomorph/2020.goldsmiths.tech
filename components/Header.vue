<template>
  <header class='container'>
    <n-link to='/' class='logo'>
      <img src="~/assets/brand/logo-icon.svg" alt="Hacksmiths Logo">
    </n-link>  
    <nav>
      <n-link to='/'>Home</n-link>
      <n-link to='/'>Events</n-link>
      <n-link to='/'>Team</n-link>
      <n-link to='/'>About</n-link>
      <n-link to='/'>Contact</n-link>
      <n-link to='/' class='btn'>Join for free</n-link>
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
  font-weight: bold;
  color: var(--dark);
  text-decoration: none;
}
</style>
