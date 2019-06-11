<template>
  <nav :style="{ 'flex-basis': computedNavbarWidth }">
    <section>
      <div v-if="authenticated" class="profile">
        <i class="material-icons">account_circle</i>
        <p class="subtitle-2" v-if="!collapsed">{{ getName }}</p>
      </div>
      <ul>
        <router-link tag="li" to="/">
          <i v-if="collapsed" class="material-icons">home</i>
          <a v-if="!collapsed">HOME</a>
        </router-link>
        <router-link v-if="authenticated" tag="li" to="/dashboard">
          <i v-if="collapsed" class="material-icons">dashboard</i>
          <a v-if="!collapsed">DASHBOARD</a>
        </router-link>
        <router-link tag="li" to="/about">
          <i v-if="collapsed" class="material-icons">info</i>
          <a v-if="!collapsed">ABOUT</a>
        </router-link>
      </ul>
      <div id="collapse-button">
        <i v-if="!collapsed" @click="collapseNavigation" class="material-icons" id="expand-button">input</i>
        <p v-if="!collapsed" @click="collapseNavigation" class="body-2">Collapse Navigation</p>
        <i v-if="collapsed" @click="collapseNavigation" class="material-icons">input</i>
      </div>
    </section>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      collapsed: false,
      navbarWidth: '250px'
    }
  },
  computed: {
    computedNavbarWidth () {
      return this.navbarWidth
    },
    authenticated () {
      return this.$store.getters.getAuthStatus
    },
    getName () {
      return this.$store.getters.getName
    }
  },
  methods: {
    collapseNavigation () {
      this.collapsed = !this.collapsed
      this.collapsed ? this.navbarWidth = '86px' : this.navbarWidth = '250px'
      this.$store.dispatch('setNavbarWidth', this.navbarWidth)
    }
  }
}
</script>

<style>
nav {
  flex: 0 0 250px;
  min-height: 100vh;
  /* The following code has been sourced from: (Thornton, S. n.d.) */
  box-shadow: 0 0 4px rgba(0,0,0,.14), 0 4px 8px rgba(0,0,0,.28);
  /* End of sourced code */
  color: rgba(255, 255, 255, 0.7);
}
nav section {
  height: 100%;
  position: fixed;
  top: 20px;
  bottom: 20px;
  left: 20px;
  right: calc(100vw - 250px - 20px);
}
 nav section ul li {
  padding: 0.6em 0 0.6em 0;
  height: 18px;
}
nav section ul li i, #collapse-button {
  padding-left: 0.4em;
  cursor: pointer;
}
.profile {
  display: flex;
}
.profile i {
  font-size: 46px;
}
.profile p {
  margin: 6% 0 0 5%;
  width: 180px;
}
#collapse-button {
  position: absolute;
  bottom: 30px;
  display: flex;
}
#collapse-button > p {
  padding-left: 0.8em;
  margin: 0.3em 0 0 0;
}
#expand-button {
  transform: rotate(180deg);
}
</style>
