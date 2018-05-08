<template>
  <div id="app">
    <!--<top-bar>
      <div slot="title">产品标题</div>
    </top-bar>-->
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

  * {
    margin: 0;
    padding: 0;
  }

  .placeholder {
    width: 100%;
    height: 3rem;
  }

  body, html {
    background-color: #e4eaea;
    height: 100%;
  }

  #app {
    height: 100%;
  }

</style>
