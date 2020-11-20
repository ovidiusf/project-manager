<template>
  <div class="home">
    <v-container class="my-2">
      <h1 class="text-h4 grey--text my-5">Dashboard</h1>
      <v-row class="mb-3" dense>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              text
              color="grey"
              outlined
              @click="sortBy('title')"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon color="blue-grey" left small>folder</v-icon>
              <span class="text-caption text-lowercase">By project name</span>
            </v-btn>
          </template>
          <span>Sort by project title</span>
        </v-tooltip>
        <v-divider vertical></v-divider>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              text
              color="grey"
              outlined
              @click="sortBy('person')"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon left small color="blue-grey">person</v-icon>
              <span class="text-caption text-lowercase">By person name</span>
            </v-btn>
          </template>
          <span>Sort by person name</span>
        </v-tooltip>
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
import { mapState } from 'vuex';
import { STATUS_COLORS } from '../utils/constants.js';

// @ is an alias to /src
export default {
  name: 'Dashboard',
  data() {
    return {
      statusColors: STATUS_COLORS
    };
  },
  computed: {
    ...mapState(['projects'])
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
