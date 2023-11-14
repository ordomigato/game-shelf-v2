import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, type User } from 'firebase/auth'

export const useMainStore = defineStore({
  id: 'main-store',
  state: () => ({
    user: null as null | User,
    searchedGames: [],
  }),
  actions: {
    async register(email: string, password: string): Promise<User> {
      const { user } = await createUserWithEmailAndPassword(
        // @ts-ignore
        $auth,
        email, 
        password
      )

      return user;
    },
    async login(username: string, password: string): Promise<User> {
      const { user } = await signInWithEmailAndPassword(
        // @ts-ignore
        $auth,
        username,
        password
      )

      return user;
    },
  },
  getters: {
    getUser: state => state.user,
    getSearchedGames: state => state.searchedGames,
  }
})