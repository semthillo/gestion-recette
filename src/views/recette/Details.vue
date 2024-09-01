<template>
  <div v-if="recette" class="modal fade" id="modal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalLabel">Détails de la recette</h5>
          <button type="button" class="btn-close" @click="handleClose" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <ul>
            <li><strong>Titre :</strong> {{ recette.titre }}</li>
            <li><strong>Ingrédients :</strong> {{ recette.ingredients }}</li>
            <li><strong>Type :</strong> {{ recette.type }}</li>
            <li><strong>Image :</strong> <img :src="recette.image" alt="Image de la recette" class="img-fluid" /></li>
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
import { defineProps, defineEmits } from 'vue';
import { useGestionStore } from '../../store/gestion';
import { useRouter } from 'vue-router';

const store = useGestionStore();
const router = useRouter();
const props = defineProps({
  recette: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['close']);

const handleClose = () => {
  emit('close');
};

const modifierRecette = () => {
  router.push({ name: 'AddRecette', query: { ...props.recette } });
  store.editRecette()
};

const destroy = () => {
  if (window.confirm("Confirmer la suppression de cette recette")) {
    const index = store.recettes.findIndex(r => r === props.recette);
    if (index !== -1) {
      store.removeRecette(index);
    }
    handleClose();
    router.push("/list-recette");
  }
};
</script>
