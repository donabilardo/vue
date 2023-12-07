<template>
  <div id="app">
    <ProductDetails></ProductDetails>
  
  </div>
</template>

<script>
import ProductDetails from './components/ProductDetails.vue';
//import PopUp from './components/PopUp.vue';

export default {
  name: 'App',
  components: {
    ProductDetails,
   // PopUp
  },
  data() {
    return {
      myNum: 5,
    }
  },
  methods:{
    created() {
      this.myNum + 1
      console.log(this.myNum);
    },
    mounted() {
      this.myNum + 1
      console.log(this.myNum); 
    },
    updated() {
      this.myNum + 1
      console.log(this.myNum);
    },
  }
}
</script>

<style lang="scss">
@import 'assets/css/base.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
