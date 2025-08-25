<template>
  <div class="container">
    <h1>Mi Portfolio</h1>

    <!-- Mini sección About Me -->
    <div class="mini-about">
      <img src="/img/img-personal.jpeg" alt="img-personal">
      <p>Hola, soy <strong>Marcelo Andreola</strong>, desarrollador web en formación con experiencia en proyectos reales de e-commerce.</p>
    </div>

    <!-- Cards de proyectos -->
    <div class="projects">
      <ProjectCard
        v-for="proj in projects"
        :key="proj.title"
        :title="proj.title"
        :description="proj.description"
        :link="proj.link"
      />
    </div>
  </div>
</template>

<script setup>
import ProjectCard from '../components/ProjectCard.vue'

const projects = [
  { title: 'E-commerce genérico', description: 'Tienda online simple con carrito', link: 'https://e-commerce-plantilla-frontend.netlify.app/' },
  { title: 'Página institucional gimnasio', description: 'Web para Ongym Viedma', link: 'https://ongym-viedma.netlify.app/' },
  { title: 'Sistema de cobros', description: 'Próximamente', link: '#' },
]
</script>

<style scoped>
.container {
  max-width: 1000px;
  margin: auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  text-align: center;
}

h1 {
  margin-bottom: 40px;
  font-size: 2.5rem;
  color: #1f2937;
}

/* Mini About Me */
.mini-about {
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
  margin-bottom: 40px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 15px;
  box-shadow: 0 6px 15px rgba(0,0,0,0.08);
}

.mini-about img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #1f2937;
}

.mini-about p {
  max-width: 500px;
  text-align: left;
  color: #374151;
  line-height: 1.5;
}

.mini-about strong {
  color: #1f2937;
}

/* Projects */
.projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
</style>
