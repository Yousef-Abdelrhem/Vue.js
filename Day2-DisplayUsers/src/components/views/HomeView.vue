<script>
import BoundaryVue from "../../components/app/Boundary.vue";
import HeaderVue from "../../components/global/Header.vue";
import RecipeCardVue from "../../components/recipe/RecipeCard.vue";

export default {
  components: { BoundaryVue ,HeaderVue, RecipeCardVue },
  data() {
    return {
      status: 'loading',
      recipes: [],
    };
  },
  methods: {
    async fetchRecipe() {
      try {
        const res = await fetch("https://dummyjson.com/recipes");
        const data = await res.json();
        this.status = 'success';
        this.recipes = data.recipes;
        console.log(data);
      } catch (err) {
        console.log(err);
        this.status = 'error';
      } 
    },
  },
  mounted() {
    this.fetchRecipe();
  },
};
</script>

<template> 
  <BoundaryVue :status="status" :contentLength="recipes.length">
    <RecipeCardVue :recipes="recipes"></RecipeCardVue>
    <template #loading>Loading joe</template>
    <template #error>Loading joe</template>
  </BoundaryVue>
</template>

<style scoped></style>