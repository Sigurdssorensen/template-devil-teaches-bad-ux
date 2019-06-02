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
    <section id="chapter-content">
      <div :style="{ height: getContentHeight }">
        <p class="subtitle">Step 1/3</p>
        <h6>Create your free hell account</h6>
        <p>Enjoy your free first month unlimited membership with access to all pain and suffering.</p>
        <input type="text">
        <input type="text">
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ['chapterNumber'],
  data () {
    return {
      displayTip: true,
      tipTimer: 15,
      contentHeight: '93%',
      activeChat: true,
      chatIndex: 0
    }
  },
  methods: {
    toggleTip () {
      this.displayTip = !this.displayTip
      this.displayTip ? this.contentHeight = '93%' : this.contentHeight = '94%'
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
    }
  },
  mounted () {
    const that = this
    setTimeout(function () {
      that.displayTip = !that.displayTip
    }, 12000)
    setTimeout(function () {
      that.chatIndex++
      setTimeout(function () {
        that.chatIndex++
        setTimeout(function () {
          that.chatIndex++
        }, 20000)
      }, 20000)
    }, 20000)
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
  justify-content: space-between;
}
#chapter-task > .card > div {
  display: flex;
  padding: 0.6em 1em 0.4em 0.4em;
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
#chapter-content {
  flex: 1 1 auto;
}
#chapter-content > div {
  height: 93%;
  margin: auto;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
