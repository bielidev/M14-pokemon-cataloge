import PokemonDetailView from '@/views/PokemonDetailView.vue';
import PokemonListView from '@/views/PokemonListView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes =[
    {
        path:'/',
        component: PokemonListView,
    },
    {
        path:'/detail',
        component:PokemonDetailView,
    }
];

export const router = createRouter({
    routes,
    history: createWebHistory()
  });