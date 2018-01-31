<template lang="pug">
  .container
    h1.
      Dashboard
    div(v-for="i, num in items")
      div
        // userpic
        .userpic
          a(:href="'/' + i.user.name")
            img(:src="i.user.userpic")
            
        .who-when    
          // username
          a(:href="'/' + i.user.name").
            {{ i.user.name }}
          |  at 
          // {{ i.time }}
          span.date.
            01:40 01 jan
          

        // type/action
        template(v-if="i.type === 'project' && i.action === 'create'")
          |  created project   
          a(:href="'/' + i.data.project.slug").
            {{ '/' + i.data.project.slug }}
        template(v-else-if="i.type === 'repo' && i.action === 'create'")
          |  created repository     
          a(:href="'/' + i.scope + '/' + i.data.repo.slug") {{ i.data.repo.slug }}
        template(v-else-if="i.type === 'push' && i.action === 'create'")
          |  pushed to     
          a(:href="'/' + i.scope + '/tree/' + i.data.push.branch") {{ i.data.push.branch }}
          .commits
            .commit(v-for="commit in i.data.push.commits")
              | {{ commit.hash }} {{ commit.message }} 
          
        // scope
        template(v-if="i.scope !== '/'")
          |  in  
          a(:href="'/' + i.scope").
            {{ i.scope }}
          
        // type icon
        .float-right
          i.fas(:class="typeIcons[i.type]")
      .hr(v-if="num < items.length - 1")
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  const items = require("../../fixtures-json-render/dashboard-feed.json");

  const typeIcons = {
    issue: "fa-exclamation-triangle",
    push: "fa-upload",
    repo: "fa-home",
    project: "fa-building",
  };

  @Component
  export default class Dashboard extends Vue {
    items = items;
    typeIcons = typeIcons;
  }
</script>

<style scoped lang="scss">
  @import "../scss/bootstrap/core";
  
  .userpic {
    float: left;
    margin-right: $spacer;
    margin-bottom: $spacer / 2;
  }
  .hr {
    clear: both;
    border-bottom: 1px solid $gray-400;
    padding-top: $spacer / 2;
    margin-bottom: $spacer / 2;
  }
  
  span.date {
    color: $gray-600;
  }
</style>
