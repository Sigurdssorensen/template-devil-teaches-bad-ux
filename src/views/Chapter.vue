<template>
  <div id="chapter">
    <section v-if="displayTip" id="chapter-tip">
      <div class="card">
        <div>
          <p><strong>Tip: </strong>{{ chapterData[chapterNumber].tip }}</p>
          <i @click="toggleTip" class="material-icons">close</i>
        </div>
        <div>
          <button class="button">Show me where</button>
          <button @click="toggleTip" class="button border-button">Dismiss</button>
        </div>
      </div>
    </section>
    <section id="chapter-task">
      <div class="card">
        <p><strong>Task:</strong> {{ chapterData[chapterNumber].task }}</p>
        <div>
          <i class="material-icons">access_time</i>
          <p class="caption">{{ chapterData[chapterNumber].time }}</p>
        </div>
      </div>
    </section>
    <section v-if="activeChat" id="chapter-chat">
      <div class="card">
        <div>
          <h5>{{ chapterData[chapterNumber].chat[chatIndex].who }} speaks... </h5>
          <p>{{ chapterData[chapterNumber].chat[chatIndex].body }}</p>
        </div>
        <img :src="getChatImg" alt="image of person talking">
      </div>
    </section>
    <section v-if="standardFormActive" class="chapter-content">
      <div :style="{ height: getContentHeight }">
        <p class="subtitle">Step 1/3</p>
        <h6>Create your free hell account</h6>
        <p>Enjoy your free first month unlimited membership with access to all pain and suffering.</p>
        <form class="signup-form">
          <div class="floating-input">
            <label :class="{'float-label': nameLabelFocus}" class="subtitle-2" for="username">Name</label>
            <input @focus="labelFocus('name')" @blur="labelFocus('name')" v-model="name" @input="checkRequiredFields" class="signup-popup-item" type="text" name="name" id="username">
          </div>
          <div class="floating-input">
            <label :class="{'float-label': passwordLabelFocus}" class="subtitle-2" for="userpassword">Password</label>
            <input @focus="labelFocus('password')" @blur="labelFocus('password')" v-model="password" @input="checkRequiredFields" class="signup-popup-item" type="password" name="password" id="userpassword">
          </div>
          <div class="button-row">
            <div>
              <button id="chapter-signup-button" type="button" :class="{'disabled-button-chapter': signupButtonDeactivated}" class="button signup-popup-item" :disabled="signupButtonDeactivated">Go to Dashboard</button>
            </div>
          </div>
        </form>
      </div>
    </section>
    <section v-else class="chapter-content">
      <div id="bad-form" :style="{ height: getContentHeight }">
        <div><h5>Sign Up</h5></div>
        <div>
          <div>
            <label for="name">Name</label>
            <select name="name" id="name">
              <option value="0">Name1</option>
              <option value="1">Name2</option>
              <option value="2">Name3</option>
              <option value="3">Name4</option>
              <option value="4">{{ getName }}</option>
              <option value="5">Name6</option>
              <option value="6">Name7</option>
              <option value="7">Name8</option>
              <option value="8">Name9</option>
              <option value="9">Name10</option>
            </select>
          </div>
          <div>
            <label for="surname">Surname</label>
            <input type="text" name="surname" disabled>
            <div id="alphabet">
              <p v-for="(char, index) in alphabet"
                :index="index"
                :key="index"
                :class="{ 'character-border': characterIndex === index }">{{ char }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { setTimeout } from 'timers'
export default {
  props: ['chapterNumber'],
  data () {
    return {
      displayTip: true,
      tipTimer: 15,
      contentHeight: '93%',
      activeChat: true,
      chatIndex: 0,
      signupButtonDeactivated: true,
      name: '',
      password: '',
      nameLabelFocus: false,
      passwordLabelFocus: false,
      standardFormActive: true,
      alphabet: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      characterIndex: 0
    }
  },
  methods: {
    toggleTip () {
      this.displayTip = !this.displayTip
      this.displayTip ? this.contentHeight = '93%' : this.contentHeight = '94%'
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
        if (this.name === '') {
          this.nameLabelFocus = !this.nameLabelFocus
        }
      } else {
        if (this.password === '') {
          this.passwordLabelFocus = !this.passwordLabelFocus
        }
      }
    }
  },
  computed: {
    chapterData () {
      return this.$store.getters.getChapterData
    },
    getContentHeight () {
      return this.contentHeight
    },
    getChatImg () {
      return require('../assets/' + this.chapterData[this.chapterNumber].chat[this.chatIndex].img + '.png')
    },
    getTipTimer () {
      return this.tipTimer
    },
    getName () {
      return this.$store.getters.getName
    }
  },
  mounted () {
    const that = this
    setTimeout(function () {
      that.displayTip = false
    }, 10000)
    setTimeout(function () {
      that.chatIndex++
      setTimeout(function () {
        that.chatIndex++
        that.standardFormActive = false
        setTimeout(function () {
          that.chatIndex++
          setTimeout(function () {
            that.activeChat = false
          }, 15000)
        }, 15000)
      }, 15000)
    }, 15000)
  }
}
</script>

<style>
#chapter {
  display: flex;
  flex-direction: column;
}
#chapter-tip > .card {
  height: calc(auto + 1rem);
}
#chapter-tip > .card > div:first-of-type {
  display: flex;
  justify-content: space-between;
}
#chapter-tip > .card > div > i {
  margin: 1rem 1rem 0 0;
  cursor: pointer;
}
#chapter-tip > .card > div:last-of-type {
  margin-bottom: 1rem;
}
#chapter-tip > .card > div:last-of-type > .button {
  margin-left: 1rem;
}
#chapter-task > .card {
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#chapter-task > .card > div {
  display: flex;
  padding: 0 1em 0 0.4em;
}
#chapter-task > .card > div > p {
  margin: 6px 0 0 0;
}
#chapter-task > .card > p, #chapter-tip > .card > div > p {
  padding: 0 0 0 1em;
}
#chapter-chat > div {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
#chapter-chat > div > img {
  height: 150px;
}
#chapter-chat > div > div {
  display: flex;
  flex-direction: column;
  padding: 0 1em 0 1em;
}
#chapter-chat > div > div > h5 {
  margin: 1rem 0 0 0;
}
.chapter-content {
  flex: 1 1 auto;
}
.chapter-content > div {
  height: 93%;
  margin: auto;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.chapter-content > div > h6 {
  margin: 0.5rem 0 0.5rem 0;
}
.disabled-button-chapter {
  background-color: #676565;
}
#bad-form {
  width: 60%;
  display: flex;
  flex-direction: column;
}
#bad-form > div {
  display: flex;
  flex-direction: row;
}
#bad-form > div > div {
  width: 50%;
  display: flex;
  flex-direction: column;
}
#name {
   overflow-y: scroll;
}
#alphabet > p {
  display: inline;
}
select option {
  height: 10px;
}
.character-border {
  border: 1px solid #D52916;
}
</style>
