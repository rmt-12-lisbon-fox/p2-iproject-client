<template>
  <div>
    <Nav/>
    <div class="card main" style="width: 70vw;">
      <img class="card-img-top p-4" :src="google.com" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title"> HALO </h5>
        <p class="card-text"> HALO </p>
        <a class="btn btn-primary"  >Back to Home</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .main {
    position: absolute;
    top: 150px;
    left: 250px;
    display: flex;
    flex-direction: row;
  }

  img .card-img-top {
    position: absolute;
    width: 20%;
    height: auto;
  }

  .card-img, .card-img-top, .card-img-bottom {
    width: initial;
    max-width: 50%;
  }

</style>
