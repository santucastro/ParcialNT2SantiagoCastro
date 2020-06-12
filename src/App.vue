<template>
    <div id="app" class="container mt-5">
    <!-- <div class="jumbotron mt-5"> -->
    <Formulario />
  </div>
 <!--  </div> -->
</template>

<script>
import Formulario from './components/Formulario.vue'

export default {
  name: 'App',
  components: {
    Formulario
  }
}
</script>

<style>
#app {
 
}
 h1 {
    color: black;    
  }
  .jumbotron {
  background-color: rgb(230, 230, 230);
  color: black;
}
</style>
