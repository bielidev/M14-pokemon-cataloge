<script setup lang="ts">
import PokeSeek from "@/components/PokeSeek.vue";
import PokemonDetail from '@/components/PokemonDetail.vue';
import PokemonList from '@/components/PokemonList.vue';
import { ref } from "vue";

const query = ref("")
const detailPokemon = ref(0)

const search = (value: string) => {
    query.value = value
    detailPokemon.value = 0
}
const detail = (value: number) => {
    detailPokemon.value = value
}

</script>

<template>
    <div id="app">
        <h1>¡Hazte con todos!</h1>
        <PokeSeek @on-search="(value) => search(value)" />
        <div class="container">
            <div class="list">
                <PokemonList :query="query" @on-detail="(pokemon) => detail(pokemon)" />
            </div>
            <div>
                <PokemonDetail :pokemon="detailPokemon" />
            </div>
        </div>
        
    </div>

</template>

<style>

div#app{
text-align: center;
align-items: center;
display: inline-block;
}
h1{
    font-family: 'Pixelify Sans', sans-serif;
    font-weight: 500;
    margin-bottom: 2rem;
    font-size: 2rem;

}
.container {
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.list {
    height: 75vh;
    overflow: auto;
    flex: 1;
}
</style>


