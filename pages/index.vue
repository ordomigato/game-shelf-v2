<template>
    <div id="main-page">
      <MainNav />
      <Hero />
      <div class="bg-gray-200">
        <div class="container mx-4">
          <main>
            <!-- <GameList
              v-if="games.length > 0 && searchedGames.length == 0"
              :games="games"
            />
            <GameResults v-if="searchedGames.length > 0" :games="searchedGames" /> -->
          </main>
        </div>
      </div>
    </div>
  </template>

<script setup lang="ts">
import MainNav from "~/components/MainNav.vue"
import Hero from "~/components/Hero.vue"

// const props = defineProps({
//     games: {
//         type: Array,
//         default: [],
//     }
// })

</script>

<style>
.container {
  display: block;
  margin: 0 auto;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>