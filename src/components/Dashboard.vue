<template lang="pug">
  .container
    h1.
      Dashboard view
    div(v-for="i in items")
      div.
        {{ i.scope }}
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  const items = require("../../fixtures-json-render/dashboard-feed.json");

  @Component
  export default class Dashboard extends Vue {
    items = items
  }
</script>
