<template>
  <div class="title">
    <slot name="title"></slot>
  </div>
</template>

<script>
  export default {
    name: "TitleBar"
  }
</script>

<style scoped>
  .title {
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    font-size: 1.2rem;
    color: #fff;
    background: -webkit-linear-gradient(left, #e171bd, #a678f2);
    background: -o-linear-gradient(right, #e171bd, #a678f2);
    background: -moz-linear-gradient(right, #e171bd, #a678f2);
    background: linear-gradient(to right, #e171bd, #a678f2);
    text-align: center;
  }
</style>
