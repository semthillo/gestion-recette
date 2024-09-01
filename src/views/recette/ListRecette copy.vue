<template>
  <div class="container">
    <button class="btn btn-info mt-3 mb-4" @click="addRecette">Ajouter une nouvelle recette</button>
    <h3>Liste de mes recettes :</h3>
    <div class="row mt-3">
      <div class="col-md-4 mb-4" v-for="(recette, index) in store.recettes" :key="index">
        <div class="card" style="width: 18rem;">
          <img :src="recette.image" class="card-img-top">
          <div class="card-body">
            <h5>{{ recette.titre }}</h5>
            <!-- Utilisation d'un bouton pour ouvrir le modal -->
            <button class="btn btn-outline-secondary" @click="openModal(recette)" data-bs-toggle="modal" data-bs-target="#modal">
              <i class="fa fa-eye" aria-hidden="true"></i> Plus d'info
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Composant modal Bootstrap -->
    <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalLabel">Détails de la recette</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <ul>
              <li><strong>Titre :</strong> {{ selectedRecette?.titre }}</li>
              <li><strong>Description :</strong> {{ selectedRecette?.description }}</li>
              <!-- Ajoutez d'autres détails ici -->
            </ul>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useGestionStore } from '../../store/gestion';
import { ref } from 'vue';

const store = useGestionStore();
const selectedRecette = ref(null);

function openModal(recette) {
  selectedRecette.value = recette;
} 

function addRecette() {
  // Logique pour ajouter une nouvelle recette
  console.log('Ajouter une nouvelle recette');
}
</script>

<style scoped>
/* Styles personnalisés, si nécessaire */
</style>
