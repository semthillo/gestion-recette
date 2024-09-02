<template>
  <Recette />
  <div class="container">
    <router-link class="btn btn-info mt-3 mb-4" to="/add-recette"
      >Ajouter une nouvelle recette</router-link
    >
    <h3>Liste de mes recettes :</h3>
    <div class="row mt-3">
      <div
        class="col-md-4 mb-4"
        v-for="(recette, index) in store.recettes"
        :key="index"
      >
        <div class="card" style="width: 18rem">
          <img :src="recette.image" class="card-img-top" />
          <div class="card-body">
            <h5>{{ recette.titre }}</h5>
            <button
              class="btn btn-outline-secondary"
              @click="openModal(recette)"
              data-bs-toggle="modal"
              data-bs-target="#modal"
            >
              <i class="fa fa-eye" aria-hidden="true"></i> Plus d'info
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
    v-if="selectedRecette"
    class="modal fade"
    id="modal"
    tabindex="-1"
    aria-labelledby="modalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalLabel">Détails de la recette</h5>
          <button
            type="button"
            class="btn-close"
            @click="closeModal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <ul>
            <li><strong>Titre :</strong> {{ selectedRecette.titre }}</li>
            <li><strong>Ingrédients :</strong> {{ selectedRecette.ingredients }}</li>
            <li><strong>Type :</strong> {{ selectedRecette.type }}</li>
            <li>
              <strong>Image :</strong>
              <img
                :src="selectedRecette.image"
                alt="Image de la recette"
                class="img-fluid"
              />
            </li>
          </ul>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="modifierRecette"
          >
            <i class="fa fa-pencil text-light fs-5" aria-hidden="true"></i>
            Modifier
          </button>
          <button type="button" class="btn btn-danger" @click="destroy">
            <i class="fa fa-trash text-light fs-5" aria-hidden="true"></i>
            Supprimer
          </button>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>

import { ref } from "vue";
import { useGestionStore } from "../../store/gestion";
import { useRouter } from "vue-router";

const router = useRouter()

const store = useGestionStore();
const selectedRecette = ref(null);

function openModal(recette) {
  selectedRecette.value = recette;
}

function closeModal() {
  selectedRecette.value = null;
}


const modifierRecette = () => {
  const index = store.recettes.findIndex((r) => r === selectedRecette);
  if (index !== -1) {
    store.setCurrentRecetteIndex(index);
    router.push({ name: "AddRecette", params: { index } });
  }
};
const 
  recette= {
    type: Object,
    required: true,
  }

const destroy = () => {
  if (window.confirm("Confirmer la suppression de cette recette")) {
    const index = store.recettes.findIndex((r) => r === selectedRecette);
    console.log(index);
    
    if (index !== -1) {
      store.removeRecette(index);
    }
    closeModal()
    router.push("/list-recette");
  }
};
</script>
<style scoped>
</style>
