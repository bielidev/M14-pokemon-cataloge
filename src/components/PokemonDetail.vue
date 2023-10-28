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
   <div>
        <h1>Detalle de Pokemon</h1>
        <img :src="detailPokemon?.img" />
        <div class="detail-info">
        <h2><span class="negrita">Nombre del Pokémon:</span> {{ detailPokemon?.name }}</h2>
        <p class="negrita">Peso:{{ detailPokemon?.weight }}Kg</p>
        <p class="negrita">Tipos:</p>
        <ul> 
            <li v-for="t in detailPokemon?.types">{{ t }}</li>
        </ul>
        </div>
   </div>
</template>

<style scoped>
.negrita {
    font-weight: bolder;
}
h2{
    text-transform: capitalize;
}
.detail-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

</style>
