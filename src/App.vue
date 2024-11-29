<script setup lang="ts">
import LoginPage from "./views/Pages/Login/LoginPage.vue";
</script>

<template>
  <div class="center-container">
    <LoginPage/>
  </div>
</template>

<style scoped>
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Pełna wysokość widoku */
}
</style>
