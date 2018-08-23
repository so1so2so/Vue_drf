<template>
  <div >
    <heads></heads>
    <router-view></router-view>
    <!--<Login></Login>-->
    <!--<example></example>-->
  </div>
</template>

<script>
  import example from '@/components/Example_for_vuex'
  import heads from '@/components/heads'
export default {
  name: 'App',
  components: {
    example,
    heads,
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
