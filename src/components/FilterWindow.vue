<template>
    <div class="filter-window">
      <div class="filter-selector">
        <div class="fs-title">
          <div class="fs-ph"></div>
          <div class="fst-content">类型</div>
          <div class="fs-ph"></div>
        </div>
        <div class="fc-select">
          <div v-for="item in 100" class="fc-option"></div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "FilterWindow"
    }
</script>

<style scoped>

  .filter-window {
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 11;
  }

  .filter-selector {
    width: 16rem;
    height: 100%;
    max-height: 100%;
    overflow: scroll;
    background-color: #0e1316;
    position: fixed;
    top: 0;
    right: 0;
  }

  .fs-title {
    display: flex;
    display: -webkit-flex;
    height: 2.5rem;
    line-height: 2.5rem;
  }

  .fs-ph {
    width: 3rem;
    flex-grow: 1;
    -webkit-flex-grow: 1;
    background-color: #7a8194;
    margin: 1.2rem 0.5rem;
    height: 0.05rem;
  }

  .fst-content {
    color: #7a8194;
    font-size: 0.8rem;
  }

  .fc-option {
    float: left;
    background-color: #fff;
    width: 2.5rem;
    min-height: 2.5rem;
    margin-left: 1.2rem;
    margin-top: 0.5rem;
  }

</style>
