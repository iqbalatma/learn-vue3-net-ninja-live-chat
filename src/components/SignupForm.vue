<script setup>
import {ref} from "vue";
import useSignup from "@/composeable/useSignup";

const {error, signup} = useSignup();
const displayName = ref('')
const email = ref('')
const password = ref('')
const handleSignUp = async () => {
  await signup(email.value, password.value)
}
</script>

<template>
  <form @submit.prevent="handleSignUp">
    <input type="text" placeholder="Display name" v-model="displayName">
    <input type="email" placeholder="Email" v-model="email">
    <input type="password" placeholder="Email" v-model="password">

    <div class="error">{{error}}</div>
    <button style="cursor: pointer">Sign Up</button>
  </form>
</template>

<style scoped>

</style>