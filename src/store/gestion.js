import { defineStore } from "pinia";

export const useGestionStore = defineStore('gestion', {
  state: () => ({
    recettes: [
      {
        titre: "Tacos",
        ingredients: "pain, viande",
        type: "entré",
        image: 'https://images.pexels.com/photos/1556688/pexels-photo-1556688.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        titre: "Tacos",
        ingredients: "pain, viande",
        type: "entré",
        image: 'https://images.pexels.com/photos/14774688/pexels-photo-14774688.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        titre: "Tacos",
        ingredients: "pain, viande",
        type: "entré",
        image: 'https://images.pexels.com/photos/17598324/pexels-photo-17598324/free-photo-of-nourriture-aliments-assiette-legumes.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        titre: "Tacos",
        ingredients: "pain, viande",
        type: "entré",
        image: 'https://images.pexels.com/photos/4040691/pexels-photo-4040691.jpeg?auto=compress&cs=tinysrgb&w=600'
      }
    ],
    currentIndex: null, // Index de la recette courante
    editedRecette: null // Recette en cours d'édition
  }),
  actions: {
    addRecette(titre, ingredients, type, image) {
        this.recettes.push({ titre, ingredients, type, image });
      },
      removeRecette(index) {
        if (index >= 0 && index < this.recettes.length) {
          this.recettes.splice(index, 1);
        }
      },
      setCurrentRecetteIndex(index) {
        this.currentIndex = index;
      },
      editRecette(index, titre, ingredients, type, image) {
        if (index >= 0 && index < this.recettes.length) {
          this.recettes[index] = { titre, ingredients, type, image };
        }
      },
      setEditedRecette(recette) {
        this.editedRecette = recette;
      }
    }
});
