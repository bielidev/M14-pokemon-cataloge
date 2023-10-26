<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['onSearch'])

const query = ref("")

const search = (e: any) => {
    e.preventDefault(); 
    emit('onSearch', query.value)
}

const reset = (e: any) => {
    query.value = ""
    search(e)
}

</script>

<template>
   
<form @submit="(e) => search(e)">
    <input class="form-control" v-model="query" type="search" placeholder="Introduce un pokemon" id="pokeSearch">
    <button type="submit">BUSCAR</button>
    <button @click="(e) => reset(e)">REINICIAR</button>
</form>

</template>

<style>

form{
    font-family: 'Courier New', Courier, monospace;
}


</style>