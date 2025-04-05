<script>
    export default {
        props: {
            recipes: {
                types: [],
                required: true,
            }
        }
    };
</script>

<template>
  <!-- <RouterLink :to="`/${recipe.id}`"></RouterLink> -->
  
  <h1 class="text-3xl font-bold text-center mb-8 text-gray-800">Best Recipes Ever!</h1>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
  <router-link :to="`/${recipe.id}`" v-for="recipe in recipes" 
       :key="recipe.id" 
       class="grid grid-cols-3 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-[30rem]">
    <img :src="recipe.image" :alt="recipe.name" class="w-full h-48 object-cover"/>
    <div class="p-4">
      <h2 class="text-xl font-semibold text-gray-800 mb-2">{{ recipe.name }}</h2>
      <div class="flex items-center justify-between">
        <span :class="{
          'px-3 py-1 rounded-full text-sm font-medium': true,
          'bg-green-100 text-green-800': recipe.difficulty === 'Easy',
          'bg-yellow-100 text-yellow-800': recipe.difficulty === 'Medium',
          'bg-red-100 text-red-800': recipe.difficulty === 'Hard'
        }">
          {{ recipe.difficulty }}
        </span>
      </div>
    </div>
  </router-link>
  </div>

</template>