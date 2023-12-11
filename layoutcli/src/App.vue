<template>
  <div id="app">

    <div class="container">
      <NavbarComponent></NavbarComponent>
    </div>

    <header class="header">
      <div class="header__box">
        <h1 class="header__box-title">Our Project</h1>
        <div class="header__box-breadcrump">Home / Project</div>
      </div>
    </header>
    <ProductComponent></ProductComponent>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import ProductComponent from './components/pages/products/ProductComponent';


export default {
  name: 'App',
  components: {
    NavbarComponent,
    FooterComponent,
    ProductComponent

  }
}
</script>

<style lang="scss"></style>
