<script setup lang="ts">
import { defineProps, ref, watch } from 'vue';

type Detail = {
    img: string,
    name: string,
    num: number,
    weight: number,
    types: Array<string>
} 

const props = defineProps(['pokemon'])
const detailPokemon = ref<Detail | null>(null)

const fetchDetail = async () => {
    const detail = await fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemon}`).then(res => res.json())
    detailPokemon.value = {img: detail.sprites.front_default, name: detail.name, num: props.pokemon, weight: detail.weight, types: detail.types.map((t: any) => t.type.name)}
}


watch(() => props.pokemon, async (newVal: number, oldVal: number) => {
    if (newVal !== 0) {
        fetchDetail()
    } else {
        detailPokemon.value = null
    }
})
</script>
<template>
    <h1>Detalle de Pokemon</h1>
    <img :src="detailPokemon?.img" />
    <div>
        <h2>{{ detailPokemon?.name }}</h2>
    <p>{{ detailPokemon?.weight }}</p>
    <ul>
        <li v-for="t in detailPokemon?.types">{{ t }}</li>
    </ul>
    </div>
</template>
