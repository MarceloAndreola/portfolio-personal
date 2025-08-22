<template>
  <div class="about-me">
    <h2>Sobre mí</h2>
    <div class="content">
      <img src="/img/img-personal.jpeg" alt="img-personal">
      <div class="text">
        <p>Hola, soy <strong>Marcelo Andreola</strong>.</p>
        <p>Soy un desarrollador web en formación con experiencias en proyectos reales de e-commerce usando Vue.js, Flask, PostgreSQL y APIs REST. Apasionado por el desarrollo de aplicaciones completas y eficientes, con ganas de crecer y mejorar.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.about-me {
  max-width: 900px;
  margin: 50px auto;
  padding: 30px;
  font-size: 1rem;
  background-color: #f9f9f9;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  text-align: center;
}

.about-me h2 {
  font-size: 2rem;
  margin-bottom: 30px;
  color: #1f2937;
}

.content {
  display: flex;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
}

.about-me img {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #1f2937;
}

.text {
  max-width: 500px;
  text-align: left;
}

.text p {
  margin-bottom: 15px;
  line-height: 1.6;
  color: #374151;
}

.text strong {
  color: #1f2937;
}
</style>
