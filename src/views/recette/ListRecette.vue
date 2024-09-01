<template>
  <div class="container"> 
    <router-link class="btn btn-info mt-3 mb-4" to="/add-recette">Ajouter une nouvelle recette</router-link>
    <h3>Liste de mes recettes :</h3>
    <div class="row mt-3">
      <div class="col-md-4 mb-4" v-for="(recette, index) in store.recettes" :key="index">
        <div class="card" style="width: 18rem;">
          <img :src="recette.image" class="card-img-top">
          <div class="card-body">
            <h5>{{ recette.titre }}</h5>
            <button class="btn btn-outline-secondary" @click="openModal(recette)" data-bs-toggle="modal" data-bs-target="#modal">
              <i class="fa fa-eye" aria-hidden="true"></i> Plus d'info
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal de détails, affiché seulement si une recette est sélectionnée -->
    <Details v-if="selectedRecette" :recette="selectedRecette" @close="closeModal" ></Details>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useGestionStore } from '../../store/gestion';
import Details from './Details.vue';


const store = useGestionStore();
const selectedRecette = ref(null);

function openModal(recette) {
  selectedRecette.value = recette;
}

function closeModal() {
  selectedRecette.value = null;
}
</script>

<style scoped>
/* Styles ici si nécessaire */
</style>
