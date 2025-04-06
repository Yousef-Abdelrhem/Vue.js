<script>
    export default {
        data (){
            return{
               recipe: null
            }
        },
        methods:{
        async fetchDetails(){
        const res = await fetch(`https://dummyjson.com/recipes/${this.$route.params.id}`);
        const data = await res.json();
        this.recipe = data;
        console.log(data);
      }     
    },  
        mounted() {
            this.fetchDetails();
        }
    }
</script>
<template>
    <div v-if="recipe" class="max-w-2xl mx-auto mt-8 bg-white rounded-xl shadow-lg overflow-hidden">
        <img :src="recipe.image" :alt="recipe.name" class="w-full h-64 object-cover"/>
        <div class="p-6">
            <h1 class="text-3xl font-bold text-gray-800 mb-4">{{ recipe.name }}</h1>
            <div class="flex items-center gap-4 mb-4">
                <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                    {{ recipe.difficulty }}
                </span>
            </div>
            <p class="text-gray-600 mb-4">{{ recipe.description }}</p>
            <div class="border-t pt-4">
                <h2 class="font-semibold text-lg mb-2">Ingredients:</h2>
                <ul class="list-disc list-inside">
                    <li v-for="ingredient in recipe.ingredients" :key="ingredient" class="text-gray-600">
                        {{ ingredient }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>