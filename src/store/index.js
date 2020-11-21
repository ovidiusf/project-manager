import Vue from 'vue';
import Vuex from 'vuex';
import db from '../fb.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projects: [],
    currentUser: 'Ovidiu F',
    team: [
      {
        name: 'Ovidiu F',
        role: 'Web Dev',
        avatar: '/assets/avatar-1.jpg'
      },
      {
        name: 'Rikuta Dolara',
        role: 'Graphic Designer',
        avatar: '/assets/avatar-5.jpg'
      },
      {
        name: 'Magnus Torus',
        role: 'Web Dev',
        avatar: '/assets/avatar-3.jpg'
      },
      {
        name: 'Chung Li',
        role: 'Social Media Jack of All Trades',
        avatar: '/assets/avatar-4.jpg'
      },
      {
        name: 'Yuri Spadasin',
        role: 'Sales Master',
        avatar: '/assets/avatar-2.jpg'
      }
    ]
  },
  mutations: {
    setProjects(state, payload) {
      state.projects = payload;
    },
    addProject(state, payload) {
      state.projects.push(payload);
    }
  },
  actions: {
    async getProjects() {
      let allProjects = [];
      const projectsCollection = db.collection('projects');
      const dbProjects = await projectsCollection.get();
      for (let project of dbProjects.docs) {
        allProjects.push(project.data());
      }

      this.commit('setProjects', allProjects);
    }
  },
  modules: {}
});
