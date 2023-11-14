import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics"

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig()

    const firebaseConfig = {
        apiKey: config.public.FB_API_KEY as string,
        authDomain: config.public.FB_AUTH_DOMAIN as string,
        projectId: config.public.FB_PROJECT_ID as string,
        storageBucket: config.publicFB_STORAGE_BUCKET as string,
        messagingSenderId: config.public.FB_MESSAGING_SENDER_ID as string,
        appId: config.public.FB_APP_ID as string,
        measurementId: config.public.FB_MEASUREMENT_ID as string
    };

    const app = initializeApp(firebaseConfig)

    const analytics = getAnalytics(app)
    const auth = getAuth(app)
    const firestore = getFirestore(app)

    nuxtApp.vueApp.provide('auth', auth)
    nuxtApp.provide('auth', auth)

    nuxtApp.vueApp.provide('firestore', firestore)
    nuxtApp.provide('firestore', firestore)
})