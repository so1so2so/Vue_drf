<template>
  <div id="app">
  Count is {{$store.state.count}}
  Count is {{$store.state.count}}
  <button @click="increment">+5</button>
  <button @click="decrement2(5)">-n</button>
</div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    name: "Example_for_vuex",
    computed: mapGetters([]),
    methods: {

      ...mapActions([
      'increment',
      'decrement2'
    ]),

      cliclk(){
        console.log(this.$store.state.count)
      },
    }


  }

</script>

<style scoped>

</style>
