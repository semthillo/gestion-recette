<template>
  <div class="container">
    <router-link class="btn btn-info mt-3 mb-4" to="/list-recette">
      Liste de recettes
    </router-link>
    <h3 v-if="isEditing">Modifier une recette</h3>
    <h3 v-else>Ajouter une recette</h3>
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="title" class="form-label">Titre de la recette</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="newRecette.titre"
          required
        />
      </div>
      <div class="mb-3">
        <label for="ingredients" class="form-label">Ingrédients</label>
        <textarea
          class="form-control"
          id="ingredients"
          v-model="newRecette.ingredients"
          required
        ></textarea>
      </div>
      <div class="mb-3">
        <select
          class="form-select"
          v-model="newRecette.type"
          aria-label="Default select example"
        >
          <option disabled value="">Type</option>
          <option value="plat">plat</option>
          <option value="entré">entré</option>
          <option value="dessert">dessert</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="image" class="form-label">Image (Entrez une URL)</label>
        <input
          type="text"
          id="image"
          name="image"
          class="form-control"
          placeholder=" l'URL de l'image"
          v-model="newRecette.image"
          @input="onImageUrlChange"
        />
      </div>
      <div v-if="imagePreview" class="mb-3">
        <img
          :src="imagePreview"
          alt="Aperçu de l'image"
          class="img-thumbnail"
          style="max-height: 200px"
        />
      </div>
      <button type="submit" class="btn btn-primary">{{ isEditing ? 'Modifier' : 'Ajouter' }} la recette</button>
    </form>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { useGestionStore } from '../../store/gestion';
import { useRouter, useRoute } from 'vue-router';

const store = useGestionStore();
const router = useRouter();
const route = useRoute();

const newRecette = ref({ titre: "", ingredients: "", type: "", image: "" });
const imagePreview = ref(null);
const isEditing = ref(false);

const editRecette = (recette) => {
  if (recette) {
    isEditing.value = true;
    newRecette.value = { ...recette };
    imagePreview.value = recette.image;
  }
};

onMounted(() => {
  if (store.currentIndex !== null && store.currentIndex >= 0 && store.currentIndex < store.recettes.length) {
    editRecette(store.recettes[store.currentIndex]);
  }
});

watch(() => store.currentIndex, (newIndex) => {
  if (newIndex !== null && newIndex >= 0 && newIndex < store.recettes.length) {
    editRecette(store.recettes[newIndex]);
  }
});

const onImageUrlChange = () => {
  imagePreview.value = newRecette.value.image;
};

const resetForm = () => {
  newRecette.value = { titre: "", ingredients: "", type: "", image: "" };
  imagePreview.value = null;
  isEditing.value = false;
};

const onSubmit = () => {
  if (isEditing.value) {
    store.editRecette(
      store.currentIndex,
      newRecette.value.titre,
      newRecette.value.ingredients,
      newRecette.value.type,
      newRecette.value.image
    );
  } else {
    store.addRecette(
      newRecette.value.titre,
      newRecette.value.ingredients,
      newRecette.value.type,
      newRecette.value.image
    );
  }
  resetForm();
  router.push("/list-recette");
};
</script>

