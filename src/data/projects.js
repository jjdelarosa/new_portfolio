import basictodo from '../assets/projects/01.png'
import todob from '../assets/projects/02.png'
import todot from '../assets/projects/03.png'
import inventory from '../assets/projects/04.png'
import vuetodo from '../assets/projects/05.png'
import postit from '../assets/projects/06.png'
import draft1 from '../assets/projects/07.png'
import login from '../assets/projects/08.png'
import superhero from '../assets/projects/09.png'

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
  }
]

export default projects