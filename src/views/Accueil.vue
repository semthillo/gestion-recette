<template>
    <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg?auto=compress&cs=tinysrgb&w=600 " class="d-block w-100" alt="...">
      <div class="carousel-caption  d-md-block">
        <h1>Gestion De Recette</h1>
        <router-link  class="btn btn-dark mt-2 mb-2" to="/list-recette">COMMENCER</router-link>
       
        <p>Gérer mes recettes de cuisine africaines de manière simple et intuitive.</p>
      </div>
    </div>
   
  </div>
  
</div>
 <router-view></router-view>
</template>


<script setup>

</script>


<style scoped>
    .carousel-item img{
        width: 100%;
        height: 100vh;
        filter: blur(2px);
    }
    .carousel-caption{
        width: 40%;
        
        margin: auto;
        padding: 60px;
        background: #41464e9c;
        color: whitesmoke;
    }
</style>
