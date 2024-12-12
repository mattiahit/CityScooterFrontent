<script setup lang="ts">
</script>

<template>
  <div class="center-container">
    <router-view/>
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
