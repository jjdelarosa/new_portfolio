import basictodo from '../assets/projects/01.png'
import todob from '../assets/projects/02.png'
import todot from '../assets/projects/03.png'
import inventory from '../assets/projects/04.png'
import vuetodo from '../assets/projects/05.png'
import postit from '../assets/projects/06.png'
import draft1 from '../assets/projects/07.png'
import login from '../assets/projects/08.png'
import superhero from '../assets/projects/09.png'
import movies from '../assets/projects/10.png'
import blog from '../assets/projects/11.png'
import chat from '../assets/projects/12.png'
import shop from '../assets/projects/13.png'
import pong from '../assets/projects/14.png'
import draft3 from '../assets/projects/15.png'

const projects = [
  {
    name: 'Basic Todo App',
    description: 'A Vanilla HTML, JS and CSS Todo Application',
    image: basictodo,
    hashtags: ['todo', 'html5', 'css', 'javascript'],
    url: 'https://basictodo.thatsmycreal.com/'
  },
  {
    name: 'Todo App with Bootstrap',
    description: 'A Todo Application in Vanilla JavasCript and Bootstrap',
    image: todob,
    hashtags: ['todo', 'html5', 'javascript', 'bootstrap'],
    url: 'https://todob.thatsmycreal.com/'
  },
  {
    name: 'Todo App with Tailwind',
    description: 'A Todo Application in Vanilla JavasCript and TailwindCSS',
    image: todot,
    hashtags: ['todo', 'html5', 'javascript', 'tailwind'],
    url: 'https://todot.thatsmycreal.com/'
  },
  {
    name: 'Basic Inventory App',
    description: 'A Basic Inventory App in Vue.js',
    image: inventory,
    hashtags: ['inventory', 'vuejs', 'javascript', 'tailwind'],
    url: 'https://inventory.thatsmycreal.com/'
  },
  {
    name: 'Todo App with Tailwind and Vue.js',
    description: 'A Todo Application in Vue.js and TailwindCSS',
    image: vuetodo,
    hashtags: ['todo', 'vuejs', 'javascript', 'tailwind'],
    url: 'https://vuetodo.thatsmycreal.com/'
  },
  {
    name: 'Post It',
    description: 'A Vue.js Application with Vuex, implementing a CRUD Notes app',
    image: postit,
    hashtags: ['crud', 'vuejs', 'javascript', 'tailwind','vuex','vuex-router'],
    url: 'https://mypostit.thatsmycreal.com/'
  },
  {
    name: 'Login Page',
    description: 'A Vue.js Application with Vuex, implementing a Login with Firebase in Email/Password and Google',
    image: login,
    hashtags: ['firebase','auth', 'vuejs', 'javascript', 'tailwind','vuex','vuex-router'],
    url: 'https://login.thatsmycreal.com/'
  },
  {
    name: 'Project Draft 1',
    description: 'GroupCodingHub',
    image: draft1,
    hashtags: ['html5', 'vuejs', 'javascript', 'tailwind','vuex','vuex-router'],
    url: 'https://draft.thatsmycreal.com/'
  },
  {
    name: 'Superhero Finder',
    description: 'A Vue.js Application with Vuex, implementing a API Superhero database',
    image: superhero,
    hashtags: ['html5', 'vuejs', 'javascript', 'tailwind','vuex','vuex-router', 'api'],
    url: 'https://superhero.thatsmycreal.com/'
  },
  {
    name: 'Movies',
    description: 'A Vue.js Application with Vuex, implementing a API Movies database',
    image: movies,
    hashtags: ['html5', 'vuejs', 'javascript', 'vuetify','vuex','vuex-router', 'api'],
    url: 'https://movies.thatsmycreal.com/'
  },
  {
    name: 'BlogApp',
    description: 'A Vue.js Application with Vuex, implementing a Blog API database but also communicating with the back-end',
    image: blog,
    hashtags: ['html5', 'vuejs', 'javascript', 'vuetify','vuex','vuex-router', 'api'],
    url: 'https://blog.thatsmycreal.com/'
  },
  {
    name: 'Chat',
    description: 'A Vue.js Application with Vuex, implementing a Chat database with firebase',
    image: chat,
    hashtags: ['html5', 'vuejs', 'javascript', 'vuetify','vuex','vuex-router', 'firebase'],
    url: 'https://chat.thatsmycreal.com/'
  },
  {
    name: 'The Video Game Shop',
    description: 'A Vue.js Application with Vuex, implementing a Shop database with firebase functions',
    image: shop,
    hashtags: ['html5', 'vuejs', 'javascript', 'vuetify','vuex','vuex-router', 'firebase', 'firebase-functions'],
    url: 'https://shop.thatsmycreal.com/'
  },
  {
    name: 'The Pong Game',
    description: 'A Vue.js Application with Vuex, implementing a Vuep5',
    image: pong,
    hashtags: ['html5', 'vuejs', 'javascript', 'vuetify', 'Vuep5'],
    url: 'https://pong.thatsmycreal.com/'
  },
  {
    name: 'Group Coding Hub',
    description: 'A Vue.js Application with Vuex, implementing a Chat database with firebase and also communication with the back-end',
    image: draft3,
    hashtags: ['html5', 'vuejs', 'javascript', 'vuetify', 'firebase', 'vuex-router', 'api'],
    url: 'https://draft3.thatsmycreal.com/'
  }
]

export default projects