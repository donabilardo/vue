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

    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    NavbarComponent,
    FooterComponent
  }
}
</script>

<style lang="scss">
@import "./assets/css/project_all.min.css";
$vertical_line: #E6E6E6;
$yellow: #CDA274;
$text_color: #4D5053;
$text_accent: #292F36;

body {
  font-family: 'DM', sans-serif;
  letter-spacing: 0.22px;
  line-height: 150%;
  color: $text_color;
  font-size: 22px;
}

.container {
  width: 1200px;
  margin: 0 auto;
  // border-left: 1px solid $vertical_line;
  // border-right: 1px solid $vertical_line;
}

h2 {
  color: $text_accent;
  text-align: center;
  font-family: 'DM', Serif;
  font-size: 50px;
  font-weight: 400;
  line-height: 125%;
  /* 62.5px */
  letter-spacing: 1px;
}

h3 {
  color: $text_accent;
  font-family: 'DM', Serif;
  font-size: 25px;
  font-weight: 400;
  line-height: 125%;
  /* 31.25px */
  letter-spacing: 0.5px;
}

address {
  font-style: normal;
}
</style>
