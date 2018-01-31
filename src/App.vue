<template lang="pug">
  #app
    nav.navbar.navbar-dark.bg-dark
      .navbar-brand.
         Giterica
    router-view
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component
  export default class App extends Vue {}
</script>

<style lang="scss">
  @import "scss/all.scss";
</style>
