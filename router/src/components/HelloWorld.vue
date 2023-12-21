<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <CounterComponent></CounterComponent>
    <CardAdd></CardAdd>
    <CardList></CardList>
  </div>
</template>

<script>
import CounterComponent from './Counter.vue';
import CardAdd from './CardAdd.vue';
import CardList from '@/components/CardList.vue'
export default {
  name: 'HelloWorld',
  components: {
    CounterComponent,
    CardAdd,
    CardList
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
