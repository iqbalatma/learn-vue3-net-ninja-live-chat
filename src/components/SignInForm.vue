<script setup>
import {ref} from "vue";

const email = ref('')
const password = ref('')
const handleSignIn = () => {
}
</script>

<template>
  <form @submit.prevent="handleSignIn">
    <input type="email" placeholder="Email" v-model="email">
    <input type="password" placeholder="Email" v-model="password">

    <button>Sign In</button>
  </form>
</template>

<style scoped>

</style>