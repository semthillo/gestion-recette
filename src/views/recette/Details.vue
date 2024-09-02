<template>

</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import { useGestionStore } from "../../store/gestion";
import { useRouter } from "vue-router";

const store = useGestionStore();
const router = useRouter();
const props = defineProps({
  recette: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["close"]);

const handleClose = () => {
  emit("close");
};




</script>
