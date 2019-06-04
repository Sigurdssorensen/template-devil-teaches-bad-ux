import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authenticated: false,
    navbarWidth: '250px',
    name: '',
    password: '',
    chapterData: {
      0: {
        id: 0,
        available: true,
        title: 'Chapter 1 - Mazikeen',
        img: 'chapter_img_mazikeen',
        body: 'Challenge Mazikeen',
        time: '15m',
        bodyHeight: 0,
        tip: 'If you are unable to complete the lesson you can click the skip button located towards the end of the navigation bar to your left.',
        task: 'fill in the form to defeat Mazikeen',
        chat: {
          0: {
            who: 'Lesser Demon',
            img: 'lesser_demon_chat_one',
            body: 'Lucifer! He\'s back!'
          },
          1: {
            who: 'Mazikeen',
            img: 'mazikeen_chat_one',
            body: 'Lies will curry no favor with me.'
          },
          2: {
            who: 'Lesser Demon',
            img: 'lesser_demon_chat_two',
            body: 'I swear it, lady Mazikeen. On all my festering boils! He opened a portal to hell and I saw him. There was no mistaking those horrible eyes, they see right into the cracked parts of.. never mind all that. Only one thing matters: Lucifer Morningstar has returned.'
          },
          3: {
            who: 'Mazikeen',
            img: 'mazikeen_chat_two',
            body: 'Let him come, I am ready!'
          },
          4: {
            who: 'Lucifer',
            img: 'lucifer_chat_one',
            body: 'Mazikeen. Who dares hold you here?'
          },
          5: {
            who: 'Mazikeen',
            img: 'mazikeen_chat_three',
            body: 'I am the ruler of Hell. I am the Lighbringer. Do not presume on our old friendship.'
          },
          6: {
            who: 'Mazikeen',
            img: 'lucifer_and_mazikeen_chat_one',
            body: 'I served you faithfully, but I am your servant no more!'
          },
          7: {
            who: 'Lucifer',
            img: 'lucifer_and_mazikeen_chat_two',
            body: 'Quick, champion! help me by reaching the end of the form.'
          }
        }
      },
      1: {
        id: 1,
        available: false,
        title: 'Chapter 2 - Misran',
        img: 'chapter_img_misran',
        body: 'Currently Unavailable',
        time: '10m',
        bodyHeight: 0,
        tip: ''
      },
      3: {
        id: 2,
        available: false,
        title: 'Chapter 3 - Takehiko',
        img: 'chapter_img_takehiko',
        body: 'Currently Unavailable',
        time: '10m',
        bodyHeight: 0,
        tip: ''
      },
      4: {
        id: 3,
        available: false,
        title: 'Chapter 4 - Presence',
        img: 'chapter_img_the_presence',
        body: 'Currently Unavailable',
        time: '10m',
        bodyHeight: 0,
        tip: ''
      }
    }
  },
  mutations: {
    'SET_AUTH_STATUS' (state, payload) {
      state.authenticated = payload
    },
    'SET_NAVBAR_WIDTH' (state, payload) {
      state.navbarWidth = payload
    },
    'SET_NAME' (state, payload) {
      state.name = payload
    },
    'SET_PASSWORD' (state, payload) {
      state.password = payload
    }
  },
  actions: {
    authenticate: ({ commit }, payload) => {
      commit('SET_AUTH_STATUS', payload)
    },
    setNavbarWidth: ({ commit }, payload) => {
      commit('SET_NAVBAR_WIDTH', payload)
    },
    setName: ({ commit }, payload) => {
      commit('SET_NAME', payload)
    },
    setPassword: ({ commit }, payload) => {
      commit('SET_PASSWORD', payload)
    }
  },
  getters: {
    getAuthStatus: state => {
      return state.authenticated
    },
    getNavbarWidth: state => {
      return state.navbarWidth
    },
    getName: state => {
      return state.name
    },
    getPassword: state => {
      return state.password
    },
    getChapterData: state => {
      return state.chapterData
    }
  }
})
