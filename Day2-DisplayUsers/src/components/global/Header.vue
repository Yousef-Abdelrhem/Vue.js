<template>
<header class="bg-gray-800 text-white py-4 px-6 shadow-lg">
    <div class="container mx-auto flex justify-between items-center">
        <router-link to="/"><h1 class="text-2xl font-bold uppercase tracking-wider">Recipes</h1></router-link>
        <nav>
            <ul class="flex gap-6">
                <router-link to="/about"><li><a href="#" class="hover:text-yellow-400 transition-colors">About</a></li></router-link>
                <li><a href="#" class="hover:text-yellow-400 transition-colors">Recipes</a></li>
            </ul>
        </nav>
    </div>
</header>
</template>