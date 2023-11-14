<template>
    <div class="w-full relative z-30">
        <div class="relative">
        <input
            v-model="searchQuery"
            class="hero-search-bar"
            spellcheck="false"
            placeholder="Search games"
            @keyup.enter="search"
        />
        <button class="search-button" @click="search">
          <ClientOnly>
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
          </ClientOnly>
        </button>
        </div>
        <div
        v-if="searchedGames.length === 0"
        id="no-results-container"
        class="flex text-center mt-2"
        ></div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useMainStore } from "~/store"

const store = useMainStore()

const searchQuery = ref('')

const { getSearchedGames: searchedGames } = storeToRefs(store)

const search = () => {
    // TODO
}
</script>
<style>
.hero-search-bar {
  @apply px-8 py-4 text-2xl w-full text-white m-0 border-none shadow-md;
  background-color: rgba(61, 110, 148, 0.8);
  &:hover {
    background-color: rgba(61, 110, 148, 0.9);
  }
  &:focus {
    background-color: rgb(61, 110, 148);
    outline: none;
  }
}
.search-button {
  @apply px-8 h-full;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  &:hover {
    background-color: rgba(61, 110, 148, 0.9);
  }
  &:focus {
    outline: none;
  }
  svg {
    color: white;
    opacity: 0.6;
    &.active {
      opacity: 1;
    }
  }
}
#no-results-container {
  @apply text-white;
}
</style>