<script setup lang="ts">
import PokeSeek from "@/components/PokeSeek.vue";
</script>

<template>
    <div id="app">
        <nav>
            <ul>
                <li><router-link to="/">Inicio</router-link></li>
                <li><router-link to="/detail">Detalle</router-link></li>
            </ul>
        </nav>
        <PokeSeek />
       <router-view />
    </div>

</template>


