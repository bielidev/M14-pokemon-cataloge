<script setup lang="ts" >

import { computed, defineEmits, defineProps, onMounted, ref } from 'vue';

    const props = defineProps(['query'])
    const emit = defineEmits(['onDetail'])

    type Pokemon = {
        name: string,
        pokeNumber: number
    }


    const pokeList = ref<Array<Pokemon>>([])

    const fetchPokemons = async () => {
        const pokemons = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=151").then(res => res.json())
        return pokemons.results.map((p: {name: string}, index: number) => ({name: p.name, pokeNumber: index + 1}))
    }


    onMounted(async () => {
        const results = await fetchPokemons()
        pokeList.value = results
    })

    const filteredList = computed(() => {
        if (props.query !== "") {
            return pokeList.value.filter(p => p.name.includes(props.query))
        } else {
            return pokeList.value
        }
    })

    const detail = (pokemon: Pokemon) => {
        emit('onDetail', pokemon.pokeNumber)
    }

</script>

<template>
    <div>
        <h1>La Pokédex</h1>
        <table>
            <thead>
                <tr>
                    <th>Número</th>
                    <th>Imagen</th>
                    <th>Nombre</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="pokemon in filteredList" @click="detail(pokemon)">
                    <td>#{{ pokemon.pokeNumber }}</td>
                    <td><img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.pokeNumber}.png`" /></td>
                    <td>{{ pokemon.name.toLocaleUpperCase() }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style>
table {
    width: 100%;
}
table tr {
    cursor: pointer;
}
table tr:hover {
    background-color: gray;
}
</style>