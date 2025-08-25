<template>
  <div class="projects">
    <h2>Proyectos</h2>
    <br><br>
    <div class="cards-container">
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
  { title: 'E-commerce genérico', description: 'Proyecto de tienda online', link: 'https://e-commerce-plantilla-frontend.netlify.app/' },
  { title: 'Página institucional gimnasio', description: 'Gimnasio Ongym', link: 'https://ongym-viedma.netlify.app/' },
  { title: 'Sistema de cobros', description: 'Proximamente', link: '#' },
]
</script>

<style scoped>
.projects {
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 20px;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
