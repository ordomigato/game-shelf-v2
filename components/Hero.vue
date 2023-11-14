<template>
    <div id="hero" class="relative" :class="{ 'h-60': searchedGames.length > 0 }">
        <div class="hero-background">
        <div class="hero-background__filter z-20"></div>
        <img
            :class="`hero-background__image ${HeroImage ? 'lazyLoad' : ''}`"
            :src="HeroImage"
        />
        <div class="hero-background__overlay z-20"></div>
        </div>
        <div class="container h-full">
        <div
            class="flex items-center h-full justify-center flex-col hero-inner-container px-4"
        >
            <h2 class="text-white pb-2 font-bold text-4xl z-30">
            Catalog Your Video Game Collection
            </h2>
            <SearchBar />
        </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import SearchBar from "~/components/SearchBar.vue";
import HeroImage from "~/assets/images/hero-image.jpg"
import { useMainStore } from "~/store"

const store = useMainStore()

const { getSearchedGames: searchedGames } = storeToRefs(store)
</script>
  
<style lang="scss">
  #hero {
    background-color: #120e1e;
    height: 100vh;
    width: 100%;
    &.h-60 {
      height: 60vh;
      transition: height 1s ease-in-out;
    }
    .hero-background__filter {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
    }
    .hero-background {
      position: absolute;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      .hero-background__image {
        position: absolute;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: 50% 50%;
        animation: ImageAnimation 1.5s ease-in-out 0.5s;
      }
      .hero-background__overlay {
        position: absolute;
        right: 0;
        background-color: #120e1e;
        height: 100%;
        animation: ImageOverlayAnimation 1.5s ease-in-out 0.5s;
      }
    }
  
    .hero-inner-container {
      max-width: 768px;
      margin: 0 auto;
    }
  }

@keyframes ImageAnimation {
  from {
    transform: translateX(-20%);
    transition: transform 1.5s ease-in-out;
  }
  to {
    transform: translateX(0%);
    transition: transform 1.5s ease-in-out 0.5s;
  }
}

@keyframes ImageOverlayAnimation {
  from {
    width: 100%;
  }
  to {
    width: 0%;
    transition: transform 1.5s ease-in-out 0.5s;
    transform-origin: right right;
  }
}
</style>
  