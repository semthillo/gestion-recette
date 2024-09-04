<template>
  <div
    id="carouselExampleSlidesOnly"
    class="carousel slide"
    data-bs-ride="carousel"
  >

    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="https://images.pexels.com/photos/326333/pexels-photo-326333.jpeg?auto=compress&cs=tinysrgb&w=600"
          class="d-block w-100 "
          alt="..."
        />
      </div>
    </div>
  </div>
  <div class="container">
    <router-link class="btn btn-info mt-3 mb-4" to="/add-recette">Ajouter une nouvelle recette</router-link>
    <h3>Liste de mes recettes :</h3>
    <div class="row mt-3">
      <div class="col-md-4 mb-4" v-for="(recette, index) in store.recettes" :key="index">
        <div class="card" style="width: 18rem;">
          <img :src="recette.image" class="card-img-top" />
          <div class="card-body">
            <h5>{{ recette.titre }}</h5>
            <button class="btn btn-outline-secondary" @click="openModal(recette)">
              <i class="fa fa-eye" aria-hidden="true"></i> Plus d'info
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal-overlay" v-if="selectedRecette">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Détails de la recette</h5>
          <button type="button" class="btn-close" @click="closeModal" aria-label="Close"><i class="fa fa-times" aria-hidden="true"></i></button>
        </div>
        <div class="modal-body">
          <ul>
            <li><strong>Titre :</strong> {{ selectedRecette.titre }}</li>
            <li><strong>Ingrédients :</strong> {{ selectedRecette.ingredients }}</li>
            <li><strong>Type :</strong> {{ selectedRecette.type }}</li>
            <li><strong>Image :</strong> <img :src="selectedRecette.image" alt="Image de la recette" class="img-fluid" /></li>
          </ul>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="modifierRecette">
            <i class="fa fa-pencil text-light fs-5" aria-hidden="true"></i> Modifier
          </button>
          <button type="button" class="btn btn-danger" @click="destroy">
            <i class="fa fa-trash text-light fs-5" aria-hidden="true"></i> Supprimer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useGestionStore } from '../../store/gestion';
import { useRouter } from 'vue-router';

const router = useRouter();


const store = useGestionStore();
const selectedRecette = ref(null);

function openModal(recette) {
  selectedRecette.value = recette;
}

function closeModal() {
  selectedRecette.value = null;
}

const modifierRecette = () => {
  const index = store.recettes.findIndex(r => r === selectedRecette.value);
  if (index !== -1) {
    store.setCurrentRecetteIndex(index);
    router.push({ name: 'AddRecette', params: { recette: selectedRecette.value } });
  }
};


const destroy = () => {
  if (window.confirm("Confirmer la suppression de cette recette")) {
    const index = store.recettes.findIndex(r => r === selectedRecette.value);
    if (index !== -1) {
      store.removeRecette(index);
    }
    closeModal();
    router.push("/list-recette");
  }
};
</script>

<style scoped>
   .carousel-item img{
  height: 200px;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: #fff;
  border-radius: 0.375rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.075);
  max-width: 600px;
  width: 100%;
  padding: 1rem;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-title {
  margin: 0;
}

.btn-close {
  background: white;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
}

.modal-body {
  padding: 1rem 0;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}
</style>
