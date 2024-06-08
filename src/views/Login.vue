<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/store/auth';

const email = ref('');
const password = ref('');
const authStore = useAuthStore();
function handleLogin() {}
</script>

<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12">
        <v-form @submit.prevent="handleLogin">
          <v-text-field
            v-model="email"
            label="Email"
            type="email"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Password"
            type="password"
            required
          ></v-text-field>
          <v-btn type="submit" color="primary" block> Login </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<style></style>
