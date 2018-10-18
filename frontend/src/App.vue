<template>

  <div id="app">
    <Slide>
      <router-link to="/personal-loan"><span>Personal Loan</span></router-link>
      <router-link to="/loan-calculator"><span>Loan Calculator</span></router-link>

  </Slide>
    <router-view/>
  </div>


</template>
<script>
    import { Slide } from 'vue-burger-menu'  // import the CSS transitions you wish to use, in this case we are using `Slide`

    export default {
        components: {
            Slide // Register your component
        }
    }
  </script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
