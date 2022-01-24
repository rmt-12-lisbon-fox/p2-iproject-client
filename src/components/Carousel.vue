<template>
  <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img :src="news.articles[0].urlToImage" class="d-block w-100" alt="">
      <div class="carousel-caption d-none d-md-block">
        <div class="bg-light rounded-3 p-3">
        <h5>{{news.articles[0].title}}</h5>
        <p>{{news.articles[0].description}}</p>
        <a :href="news.articles[0].url" class="btn btn-warning">See Article</a>
        </div>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img :src="news.articles[1].urlToImage" class="d-block w-100" alt="">
      <div class="carousel-caption d-none d-md-block">
        <div class="bg-light rounded-3 p-3">
        <h5>{{news.articles[1].title}}</h5>
        <p>{{news.articles[1].description}}</p>
        <a :href="news.articles[1].url" class="btn btn-warning">See Article</a>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <img :src="news.articles[2].urlToImage" class="d-block w-100" alt="">
      <div class="carousel-caption d-none d-md-block">
        <div class="bg-light rounded-3 p-3">
        <h5>{{news.articles[2].title}}</h5>
        <p>{{news.articles[2].description}}</p>
        <a :href="news.articles[2].url" class="btn btn-warning">See Article</a>
        </div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>

<script>
export default {
  name: 'Carousel',
  props: ['news']
}
</script>

<style>
.carousel-item{
    height:500px;
}
</style>
