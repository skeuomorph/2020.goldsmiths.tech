<template>
  <div id='intro' class='container'>
    <article>
      <slot></slot>
    </article>
    <aside>
      <div class="item" v-for='item in sidebar' :key='item.title'>
        <b>{{ item.title }}</b>
        <p v-html='item.content'></p>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  props: ['sidebar']
}
</script>

<style scoped>
.container {
  display: flex;
  padding-top: 5em;
  padding-bottom: 5em;
}
article {
  padding-right: 5em;
}
article * {
  margin-bottom: 1rem;
  font-weight: 300;
}
article h2 {
  font-size: 2em;
}
aside {
  width: 600px;
}
.item {
  margin-bottom: 2em;
}
.item b {
  margin-bottom: 0.25em;
  display: block;
  font-weight: bold;
}

@media screen and (max-width: 960px) {
  .container {
    padding-top: 2.5em;
    padding-bottom: 2.5em;
    flex-direction: column;
    gap: 1em;
  }
  article {
    padding-right: 0;
  }
  article h2 {
    font-size: 1.25em;
  }
}
</style>
