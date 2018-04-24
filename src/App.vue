<template>
  <div id="app">
    <top-bar></top-bar>
    <router-view/>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
  import topBar from './components/TopBar'
  import bottomBar from './components/BottomBar'

  export default {
    name: 'App',
    components: {
      topBar,
      bottomBar
    }
  }
</script>

<style>

  .placeholder {
    width: 100%;
    height: 3rem;
  }

  body, html {
    background-color: #e4eaea;
  }

</style>
