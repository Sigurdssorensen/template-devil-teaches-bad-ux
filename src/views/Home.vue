<template>
    <div id="home">
      <div v-if="displayPopup" class="sign-up-popup">
        <div @click="togglePopup" class="popup-backdrop"></div>
        <div class="card card-popup">
          <div>
            <h4>Create account</h4>
            <p>Hi there! We hate paperwork too, so let's keep it short and friendly</p>
            <form id="signup-form">
              <div class="floating-input">
                <label :class="{'float-label': nameLabelFocus}" class="subtitle-2" for="username">Name</label>
                <input @focus="labelFocus('name')" @blur="labelFocus('name')" v-model="name" @input="checkRequiredFields" class="signup-popup-item" type="text" name="name" id="username">
              </div>
              <div class="floating-input">
                <label :class="{'float-label': passwordLabelFocus}" class="subtitle-2" for="userpassword">Password</label>
                <input @focus="labelFocus('password')" @blur="labelFocus('password')" v-model="password" @input="checkRequiredFields" class="signup-popup-item" type="password" name="password" id="userpassword">
              </div>
              <div class="button-row">
<!--                 <router-link tag="div" to="/dashboard">
                  <button @click="authenticateUser" class="button signup-popup-item">Go to Dashboard</button>
                </router-link> -->
                <div>
                  <button @click="authenticateUser" :class="{'disabled-button': signupButtonDeactivated}" class="button signup-popup-item" :disabled="signupButtonDeactivated">Go to Dashboard</button>
                </div>
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
          <p>Become a expert web designer by learning what makes
            <br>
            for a horrible experience from the Devil himself!</p>
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
      displayPopup: false,
      signupButtonDeactivated: true,
      name: '',
      password: '',
      nameLabelFocus: false,
      passwordLabelFocus: false
    }
  },
  methods: {
    togglePopup () {
      this.displayPopup = !this.displayPopup
      this.displayPopup ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible'
    },
    authenticateUser () {
      this.$store.dispatch('authenticate', true)
      this.togglePopup()
      this.$router.push('/dashboard')
    },
    checkRequiredFields () {
      if (this.name !== '' && this.password !== '') {
        this.signupButtonDeactivated = false
      } else {
        this.signupButtonDeactivated = true
      }
    },
    labelFocus (element) {
      if (element === 'name') {
        console.log('name')
        if (this.name === '') {
          console.log('empty name')
          this.nameLabelFocus = !this.nameLabelFocus
        }
      } else {
        if (this.password === '') {
          this.passwordLabelFocus = !this.passwordLabelFocus
        }
      }
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
  background-color: #676565;
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
  width: 30%;
  height: 50%;
}
.card-popup > div {
  margin: auto;
  width: 60%;
}
.card-popup > div > h4 {
  margin: 0;
}
#signup-form {
  display: flex;
  flex-direction: column;
}
.floating-input label {
  position: absolute;
  padding: 1em;
  color: rgba(255, 255, 255, .7)
}
.float-label {
  padding: 0.1em 1em 1em 1.5em !important;
  font-size: 0.6rem;
}
.signup-popup-item {
  width: 100%;
  box-sizing: border-box;
}
</style>
