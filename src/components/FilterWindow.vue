<template>
  <div>
    <div class="filter-window">
      <div class="filter-holder" @click="$parent.showFilterWindow">
        <img class="hide-img" src="static/ClassFilter/filter-hide.png" alt="">
      </div>
      <div class="filter-selector">
        <div class="fs-title">
          <div class="fs-ph"></div>
          <div class="fst-content">类型</div>
          <div class="fs-ph"></div>
        </div>
        <div class="fs-select">
          <div v-for="item in 100" class="fs-option">
            <div class="option-pic">
              <img src="static/Index/test_light.jpg" alt="">
            </div>
            <div class="option-title">
              盐酸盐
            </div>
          </div>
        </div>
        <div class="placeholder" style="float: left;"></div>
      </div>
      <div class="filter-bb">
        <div class="filter-button">重置</div>
        <div class="filter-button">完成</div>
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
    display: flex;
  }

  .filter-holder {
    height: 100%;
    width: 1rem;
    flex-grow: 1;
    -webkit-flex-grow: 1;
  }

  .filter-selector {
    width: 18rem;
    height: 100%;
    max-height: 100%;
    overflow: scroll;
    background-color: #0e1316;
    -webkit-overflow-scrolling: touch;
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

  .fs-option {
    float: left;
    width: 3rem;
    min-height: 3rem;
    margin-left: 1.2rem;
    margin-top: 0.5rem;
  }

  .option-pic img {
    width: 3rem;
    height: 3rem;
    border-radius: 1.3rem;
  }

  .option-title {
    text-align: center;
    font-size: 0.6rem;
    color: #bfc0c2;
    white-space:nowrap;
    overflow: hidden;
  }

  .filter-bb {
    position: fixed;
    right: 0;
    bottom: 0;
    height: 2.9rem;
    width: 18rem;
    background-color: #0e1316;
    border-top: 1px solid #7a8194;
    display: flex;
  }

  .filter-button {
    width: 50%;
    color: #bfc0c2;
    height: 2.9rem;
    line-height: 2.9rem;
    text-align: center;
  }

  .filter-button:nth-child(1) {
    border-right: 1px solid #7a8194;
  }

  .hide-img {
    width: 2rem;
    height: 3rem;
    position: fixed;
    top: 45%;
    right: 18.5rem;
  }

</style>
