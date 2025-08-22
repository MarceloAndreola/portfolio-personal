<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <a :href="link" target="_blank" class="btn">Ver proyecto</a>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  link: String
})
</script>

<style scoped>
.card {
  flex: 1 1 250px; /* hace que las cards se adapten al ancho de pantalla */
  max-width: 300px;
  min-width: 250px;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 20px;
  background-color: #f9fafb;
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

h3 {
  color: #111827;
  margin-bottom: 10px;
}

p {
  color: #374151;
  font-size: 0.95rem;
}

.btn {
  display: inline-block;
  margin-top: 15px;
  padding: 8px 18px;
  background-color: #1f2937;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.2s;
}

.btn:hover {
  background-color: #111827;
}
</style>
