<template>
  <div id="app">
    <app-navbar></app-navbar>
    <section>
      <router-view/>
    </section>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components: {
    appNavbar: Navbar
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}

/* https://material.io/design/typography/the-type-system.html#type-scale */
body { font-size: 1rem; font-weight: 400; letter-spacing: 0.5; color: #424242; }
h1 { font-size: 6rem; font-weight: 300; letter-spacing: -1.5; }
h2 { font-size: 3.75rem; font-weight: 300; letter-spacing: -0.5; }
h3 { font-size: 3rem; font-weight: 400; letter-spacing: 0; }
h4 { font-size: 2.125rem; font-weight: 400; letter-spacing: 0.25; }
h5 { font-size: 1.5rem; font-weight: 400; letter-spacing: 0; }
h6 { font-size: 1.5rem; font-weight: 500; letter-spacing: 0.15; }
.subtitle-1 { font-size: 1rem; font-weight: 400; letter-spacing: 0.15; }
.subtitle-2 { font-size: 0.875rem; font-weight: 500; letter-spacing: 0.1; }
.body-2 { font-size: 0.875rem; font-weight: 400; letter-spacing: 0.25; }
.button { font-size: 0.875rem; font-weight: 500; letter-spacing: 1.25; text-transform: uppercase; }
.caption { font-size: 0.75rem; font-weight: 400; letter-spacing: 0.4; }
.overline { font-size: 0.625rem; font-weight: 400; letter-spacing: 1.5; text-transform: uppercase; }

#app {
  display: flex;
}
#app > section {
  flex: 1 1 auto;
}
.card, .card-action {
  background: #fff;
  position: relative;
  margin: 1rem;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
.card-action:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
ul {
  list-style-type: none;
  padding: 0;
  margin-left: 0;
}
ul a {
  text-decoration: none;
  color: #424242;
}
.button-row {
  padding-top: 1em;
  padding-bottom: 1em;
}
.button {
  padding: 1em;
  border-radius: 2px;
  outline-style: none;
  border: none;
  background-color: #039be5;
  color: #fff;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
}
</style>
