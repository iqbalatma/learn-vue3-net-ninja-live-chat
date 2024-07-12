<script setup>
import {ref} from "vue";

const displayName = ref('')
const email = ref('')
const password = ref('')
const handleSignUp = () => {
}
</script>

<template>
  <form @submit.prevent="handleSignUp">
    <input type="text" placeholder="Display name" v-model="displayName">
    <input type="email" placeholder="Email" v-model="email">
    <input type="password" placeholder="Email" v-model="password">

    <button>Sign Up</button>
  </form>
</template>

<style scoped>

</style>