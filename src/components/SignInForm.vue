<script setup>
import {ref} from "vue";
import useLogin from "@/composeable/useLogin";

const emit = defineEmits(["login"])

const email = ref('')
const password = ref('')

const {error, login} = useLogin()
const handleSignIn = async () => {
  await login(email.value, password.value)
  if (!error.value){
    console.log("user logged in")
    emit("login")
  }
}
</script>

<template>
  <form @submit.prevent="handleSignIn">
    <input type="email" placeholder="Email" v-model="email">
    <input type="password" placeholder="Email" v-model="password">
    <div class="error">{{error}}</div>
    <button>Sign In</button>
  </form>
</template>

<style scoped>

</style>