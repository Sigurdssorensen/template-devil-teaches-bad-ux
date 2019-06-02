<template>
    <div id="dashboard">
        <section>
            <div id="dashboard-navigation-container">
                <div>
                    <h3>Dashboard</h3>
                </div>
                <div>
                    <router-link tag="button" to="/chapter" class="button">CONTINUE TO CHAPTER 1</router-link>
                    <input id="searchbody" type="text" name="searchbody" placeholder="Feature coming soon.." disabled>
                </div>
            </div>
        </section>
        <section>
            <div>
                <article
                  v-for="(chapter, index) in chapterData"
                  :chapter="chapter"
                  :index="index"
                  :key="chapter.id"
                  :style="{backgroundImage: 'url('+ require('../assets/'+ chapter.img +'.png')+')'}"
                  @mouseover="chapter.bodyHeight = 25"
                  @mouseleave="chapter.bodyHeight = 0"
                  @click="requestChapter(chapter.available, index)"
                  class="card card-action">
                    <section>
                      <p>{{ chapter.title }}</p>
                      <div>
                        <i class="material-icons">access_time</i>
                        <p class="caption">{{ chapter.time }}</p>
                      </div>
                    </section>
                    <section
                    :style="{height: chapter.bodyHeight + '%'}"
                    :class="{ available: chapter.available }">
                      <i v-if="chapter.available" class="material-icons" :style="{color: 'white'}">play_circle_filled</i>
                      <i v-else class="material-icons" :style="{color: '#424242'}">play_circle_filled</i>
                      <p>{{ chapter.body }}</p>
                    </section>
                </article>
            </div>
        </section>
        <section>
            <div>
                <article id="statistics-view" class="card">
                    <p>Statistics will become available after you have finished the first chapter</p>
                </article>
            </div>
        </section>
    </div>
</template>

<script>
export default {
  computed: {
    chapterData () {
      return this.$store.getters.getChapterData
    }
  },
  methods: {
    requestChapter (available, index) {
      if (available) {
        this.$router.push({ name: 'chapter', params: { chapterNumber: index } })
      }
    }
  }
}
</script>

<style>
#dashboard, #chapter {
  height: 100vh;
  overflow: hidden;
}
#dashboard > section {
  display: flex;
  width: 100%;
  justify-content: flex-end;
}
#dashboard > section:first-of-type {
  height: 10vh;
}
#dashboard > section:nth-last-of-type(2) {
  height: 27vh;
}
#dashboard > section:last-of-type {
  height: 63vh;
}
#dashboard > section > div {
  width: 100%;
}
#dashboard > section:not(:nth-of-type(2)) > div {
  margin: 0 3%;
}
#dashboard > section:first-of-type > div {
  margin-top: 3%;
}
#dashboard > section:last-of-type > div {
  margin-bottom: 3%;
}
#dashboard > section:nth-of-type(2) {
  width: 120%;
}
#dashboard > section:nth-of-type(2) > div {
  margin-left: 2.5%;
  display: flex;
}
#dashboard > section:nth-of-type(2) > div > .card:first-of-type,
#dashboard > section:last-of-type > div > .card {
  margin-left: 0;
}
#dashboard > section:nth-of-type(2) > div > .card {
  cursor: pointer;
  flex-basis:20%;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background-image: url('../assets/chapter_img_mazikeen.png'); */
  background-size: cover;
  background-position-x: center;
}
#dashboard > section:nth-of-type(2) > div > .card > section:first-of-type {
  display: flex;
  justify-content: space-between;
  /*https://stackoverflow.com/questions/4772906/css-is-it-possible-to-add-a-black-outline-around-each-character-in-text*/
  text-shadow: 1px 0 0 rgba(0,0,0,.5), 0 -1px 0 rgba(0,0,0,.5), 0 1px 0 rgba(0,0,0,.5), -1px 0 0 rgba(0,0,0,.5);
}
#dashboard > section:nth-of-type(2) > div > .card > section:first-of-type > p:first-of-type {
  padding: 0 1em 0 1em;
}
#dashboard > section:nth-of-type(2) > div > .card > section:first-of-type > div {
  display: flex;
  padding: 0.9em 0.6em 0.6em 0;
}
#dashboard > section:nth-of-type(2) > div > .card > section:first-of-type > div > .caption {
  margin: 0;
  padding: 0.4em 0.2em 0 0;
}
#dashboard > section:nth-of-type(2) > div > .card > section:last-of-type {
  display: flex;
  height: 0%;
  width: 100%;
  background-color:rgba(103, 101, 101, .95);
  border-bottom-right-radius: 2px;
  border-bottom-left-radius: 2px;
}
#dashboard > section:nth-of-type(2) > div > .card > section:last-of-type > i {
 padding: 0.6em 0.4em 0.4em 0.4em;
}
#dashboard-navigation-container {
  display: flex;
  justify-content: space-between;
}
#dashboard-navigation-container > div > h3 {
  margin-top: -15px;
}
#searchbody {
  opacity: .95;
  min-width: 200px;
  margin-left: 15px;
  border-radius: 45px;
}
#statistics-view {
  display: flex;
  width: 65%;
  height: calc(100% - 1rem);
  justify-content: center;
  align-items: center;
}
#statistics-view > p {
  opacity: .5;
}
@media only screen and (max-height: 800px) {
  #statistics-view {
    margin-top: 3rem;
    height: calc(100% - 2rem);
  }
}
.available {
  background-color: rgba(213,41,22, .9) !important;
}
</style>
