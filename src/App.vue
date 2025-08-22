<template>
  <div id="app">
    <header>
      <nav class="navbar">
        <h1>Marcelo Andreola</h1>
        <ul class="nav-links">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/proyectos">Proyectos</router-link></li>
            <li><router-link to="/sobre-mi">Sobre mi</router-link></li>
        </ul>
      </nav>
    </header>

    <main>
      <router-view></router-view>
    </main>

    <footer>
      <p>&copy; 2025 Marcelo Andreola. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<script setup>
</script>

<style>
/* RESET BÁSICO */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Hacer que app ocupe toda la altura */
html, body {
  height: 100%;
}

#app {
  min-height: 100vh;        /* altura mínima igual a la ventana */
  display: flex;
  flex-direction: column;    /* apila header, main y footer */
}

/* HEADER */
header {
  background-color: #1f2937;
  color: white;
  width: 100%;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
}

.nav-links a {
  color: white;
  text-decoration: none;
  transition: color 0.2s;
}

.nav-links a:hover {
  color: #f59e0b;
}

/* MAIN */
main {
  flex: 1;                  /* ocupa todo el espacio disponible */
  width: 100%;
}

/* FOOTER */
footer {
  background-color: #111827;
  color: #f3f4f6;
  text-align: center;
  padding: 20px;
  font-size: 0.9rem;
  width: 100%;
}
</style>
