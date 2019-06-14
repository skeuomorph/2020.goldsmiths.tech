<template>
  <div id='faq' class='container'>
    <h2>FAQ</h2>
    <div class="items">
      <div class="item" v-for='item in faqs' :key='item.q'>
        <b>{{ item.q }}</b>
        <p>{{ item.a }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['faqs']
}
</script>

<style scoped>
#faq {
  padding-top: 4em;
  padding-bottom: 4em;
}
h2 {
  font-size: 2em;
}
.items {
  columns: 3;
  column-gap: 2em;
}
.item {
  margin-top: 1.5em;
  display: inline-block;
}
.item b {
  display: block;
  font-weight: bold;
  margin-bottom: 0.25em; 
}
</style>
