<template>
  <div class="home">
    <h1 class="text-h4 grey--text">Dashboard</h1>
    <v-container class="my-5">
      <v-row class="mb-3" dense>
        <v-btn small flat color="grey" outlined @click="sortBy('title')">
          <v-icon left small color="blue-grey">folder</v-icon>
          <span class="text-caption text-lowercase">By project name</span>
        </v-btn>
        <v-divider vertical></v-divider>
        <v-btn small flat color="grey" outlined @click="sortBy('person')">
          <v-icon left small color="blue-grey">person</v-icon>
          <span class="text-caption text-lowercase">By person name</span>
        </v-btn>
      </v-row>
      <v-card
        color="blue-grey lighten-1"
        flat
        v-for="project in projects"
        :key="project.title"
      >
        <v-row :class="`pa-3 project ${project.status}`" wrap dense>
          <v-col cols="12" md="6">
            <div class="text-h5 white--text">Project title</div>
            <div>{{ project.title }}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="text-h5 white--text">Person</div>
            <div>{{ project.person }}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="text-h5 white--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-col>
          <v-col
            cols="6"
            sm="4"
            md="2"
            class="d-flex justify-center align-center"
          >
            <v-chip
              small
              :color="chipColor(project.status)"
              class="white--text text-caption"
              >{{ project.status }}
            </v-chip>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
const statusColors = {
  complete: "#3cd1c2",
  ongoing: "orange",
  overdue: "#FF8A80",
  default: "indigo"
};
// @ is an alias to /src
export default {
  name: "Dashboard",
  data() {
    return {
      projects: [
        {
          title: "Design a new website",
          person: "John Smithson",
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
        }
      ],
      statusColors: statusColors
    };
  },
  methods: {
    /**
     * Get the chip color based on the current status
     */
    chipColor(status) {
      return status in this.statusColors
        ? this.statusColors[status]
        : this.statusColors.default;
    },
    /**
     * Sorting function for the array
     */
    sortBy(property) {
      this.projects.sort((a, b) => (a[property] < b[property] ? -1 : 1));
    }
  }
};
</script>

<style scoped>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid #ff8a80;
}
</style>
