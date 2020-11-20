import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projects: [
      {
        title: "Design a new website",
        person: "Ovidiu F",
        due: "1st Jan 2021",
        status: "ongoing",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
      },
      {
        title: "Code up the homepage",
        person: "Chung Loi",
        due: "10th Jan 2021",
        status: "complete",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
      },
      {
        title: "Design video thumbnails",
        person: "Bertha",
        due: "20th Dec 2020",
        status: "complete",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
      },
      {
        title: "Create a community forum",
        person: "Hadouken",
        due: "20th Oct 2020",
        status: "overdue",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
      },
      {
        title: "Create a new website for company X",
        person: "Ovidiu F",
        due: "22nd Jan 2021",
        status: "ongoing",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
      },
    ],
    currentUser: 'Ovidiu F',
    team: [
      {
        name: "Ovidiu F",
        role: "Web Dev",
        avatar: "/assets/avatar-1.jpg"
      },
      {
        name: "Rikuta Dolara",
        role: "Graphic Designer",
        avatar: "/assets/avatar-5.jpg"
      },
      {
        name: "Magnus Torus",
        role: "Web Dev",
        avatar: "/assets/avatar-3.jpg"
      },
      {
        name: "Chung Li",
        role: "Social Media Jack of All Trades",
        avatar: "/assets/avatar-4.jpg"
      },
      {
        name: "Yuri Spadasin",
        role: "Sales Master",
        avatar: "/assets/avatar-2.jpg"
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
