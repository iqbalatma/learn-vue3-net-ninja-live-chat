<script setup>
import SignupForm from "@/components/SignupForm.vue";
import SignInForm from "@/components/SignInForm.vue";
import {ref} from "vue";

const typeForm = ref('sign-in');

const handleNavButton = (e) => {
  typeForm.value = e.currentTarget.getAttribute('data-type');
}
</script>

<template>
  <div class="welcome container">
    <p>Welcome</p>
    <nav class="navbar">
      <div class="nav-item" data-type="sign-in" :class="{active: typeForm==='sign-in'}" @click="handleNavButton">Sign
        In
      </div>
      <div class="nav-item" data-type="sign-up" :class="{active: typeForm==='sign-up'}" @click="handleNavButton">Sign
        Up
      </div>
    </nav>

    <SignupForm v-if="typeForm==='sign-up'"></SignupForm>
    <SignInForm v-if="typeForm==='sign-in'"></SignInForm>
  </div>
</template>
<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}

.welcome .navbar {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.welcome .nav-item {
  background: #999999;
  padding: 8px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
}

.welcome .nav-item.active {
  background: #42b979;
}

.welcome .nav-item:hover {
  background: #42b983;
}

.welcome form {
  width: 300px;
  margin: 20px auto;
}

.welcome label {
  margin: 20px 0 10px;
  display: block;
}

.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}
</style>