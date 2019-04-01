<template>
    <div id="home">
      <div v-if="displayPopup" class="sign-up-popup">
        <div @click="togglePopup" class="popup-backdrop"></div>
        <div class="card card-popup">
          <div>
            <h4>Sign up</h4>
            <form id="signup-form">
              <label for="username">Name</label>
              <input type="text" name="name" id="username">
              <div class="button-row">
                <router-link tag="div" to="/dashboard">
                  <a class="button">Go to Dashboard</a>
                </router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <section>
        <div>
          <header>
            <h3 class="page-header-tagline">The Devil Teaches Bad Web Design</h3>
          </header>
          <p>Build your web design skills by understanding what makes
            <br>
            the difference between bad and good design.</p>
          <div class="button-row">
            <a @click="togglePopup" class="button">
            get started
            </a>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h4>some awsome why tagline here</h4>
          <div class="selling-points-container">
            <div class="selling-points">
              <p>test1</p>
            </div>
            <div class="selling-points">
              <p>test2</p>
            </div>
            <div class="selling-points">
              <p>test3</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h4>some awsome for whom tagline here</h4>
          <div class="selling-points-container">
            <div class="selling-points">
              <p>test1</p>
            </div>
            <div class="selling-points">
              <p>test2</p>
            </div>
            <div class="selling-points">
              <p>test3</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h4>Call to Action</h4>
        </div>
      </section>
    </div>
</template>

<script>
export default {
  data () {
    return {
      displayPopup: false
    }
  },
  methods: {
    togglePopup () {
      this.displayPopup = !this.displayPopup
      this.displayPopup ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible'
    }
  }
}
</script>

<style>
#home {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#home > section {
  min-height: 100vh;
  display: flex;
}
#home > section:not(:first-of-type) > div {
  width: 75%;
}
#home > section > div {
  margin: auto;
}
.page-header-tagline {
  margin-block-end: 0.5em;
}
.selling-points-container {
  display: flex;
  justify-content: space-between;
}
.selling-points {
  flex-basis: 30%;
  background-color: lightblue;
  height: 300px;
}
.sign-up-popup {
  position: fixed;
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 1000;
  top: 0;
  left: 0;
}
.popup-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.4);
}
.card-popup {
  margin: auto;
  display: flex;
  width: 40%;
  height: 40%;
}
.card-popup > div {
  margin: auto;
}
#signup-form {
  display: flex;
  flex-direction: column;
}
</style>
