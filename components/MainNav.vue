<template>
  <div>
    <div
      class="nav-container bg-primary fixed w-full z-50"
      :class="{ change_color: scrollPosition > 50 }"
    >
      <div class="container">
        <nav class="flex flex-1 text-white px-4">
          <div class="flex items-center w-1/3 sm:w-1/2">
              <nuxt-link to="/"><strong>Game</strong>Shelf</nuxt-link>
          </div>
          <div class="w-2/3 sm:w-1/2 flex items-center justify-end">
            <ul class="flex">
              <!-- <nuxt-link to="/library" v-if="user != null" class="nav-btn my-library-btn">My Library <fa class="ml-2" :icon="['fa', 'book']"  /></nuxt-link> -->
              <li v-if="user == null">
                  <button
                    class="nav-btn login-btn"
                    @click="openLoginModal()"
                  >
                    Login
                  </button>
              </li>
              <li v-if="user == null" class="signup">
                  <button
                    class="nav-btn signup-btn"
                    @click="openRegisterModal()"
                  >
                    Signup
                  </button>
              </li>
              <li v-if="user != null" class="nav-btn user-dropdown">
                {{ user.displayName || user.email }}
                <client-only>
                  <font-awesome-icon class="ml-1 caret text-md" :icon="['fa', 'caret-down']" />
                  <font-awesome-icon class="ml-2 text-md" :icon="['fa', 'user-circle']" />
                </client-only>
                <ul class="user-dropdown-sub-1">
                  <li>
                    <nuxt-link to="/library" class="user-dropdown-sub-1__item">
                      My Library
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link
                      v-if="user != null"
                      to="/account"
                      class="user-dropdown-sub-1__item"
                    >
                      My account
                    </nuxt-link>
                  </li>
                  <li>
                    <button
                      class="user-dropdown-sub-1__item"
                      @click="signout"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { User } from 'firebase/auth';
import { ref } from 'vue'
import { useMainStore } from "~/store"

const store = useMainStore()

const emit = defineEmits(['openLoginModal', 'openRegisterModal'])

const scrollPosition = ref(0)
const { getUser: user } = storeToRefs(store)

const openLoginModal = () => {
  emit('openLoginModal')
}

const openRegisterModal = () => {
  emit('openRegisterModal')
}

const signout = () => {
  // TODO
}

</script>
<style lang="scss">
#main-page {
  .nav-container {
    background-color: rgba(255, 255, 255, 0);
    &.change_color {
      @apply shadow-md;
      background-color: var(--main-color);
      transition: background-color 0.2s ease-out;
    }
  }
}

.nav-btn {
  @apply py-2 px-4;
  &.login-btn {
    &:hover,
    &:focus {
      background-color: var(--secondary-color);
      transition: background-color 0.2s ease-out;
      outline: none;
    }
  }
  &.signup-btn {
    &:hover,
    &:focus {
      background-color: var(--secondary-color);
      transition: background-color 0.2s ease-out;
      outline: none;
    }
  }
}

.my-library-btn,
.signup {
  background-color: var(--main-color);
  height: 100%;
}

.user-dropdown {
  background-color: var(--main-color);
  height: 100%;
  min-width: 120px;
  position: relative;
  cursor: default;
  &:hover {
    .caret {
      opacity: 1;
    }
    .user-dropdown-sub-1 {
      visibility: visible;
      opacity: 1;
      transition: opacity 0.2s ease-out;
    }
  }
  .caret {
    opacity: 0.5;
  }
  .user-dropdown-sub-1 {
    @apply shadow-md;
    width: 100%;
    visibility: hidden;
    opacity: 0;
    background-color: white;
    color: black;
    position: absolute;
    right: 0px;
    top: 100%;
    transition: opacity 0.2s ease-out;
    &:before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: -7px;
      width: 14px;
      height: 14px;
      margin: auto;
      border: solid white;
      border-width: 5px 5px 0 0;
      transform: rotate(-45deg);
      background-color: white;
    }
    &:after {
      content: '';
      position: absolute;
      visibility: hidden;
      opacity: 0;
      top: 0;
    }
    li {
      // white-space: nowrap;
      .user-dropdown-sub-1__item {
        @apply py-1 px-4;
        display: block;
        &:hover {
          @apply text-blue-400;
        }
      }
      &:last-of-type {
        padding-bottom: 0.5rem;
      }
      &:first-of-type {
        padding-top: 0.5rem;
      }
    }
  }
}
</style>
