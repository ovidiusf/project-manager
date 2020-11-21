<template>
  <div class="projects">
    <v-container class="my-2">
      <h1 class="text-h4 grey--text my-5">Projects</h1>
      <v-expansion-panels>
        <v-expansion-panel v-for="project in myProjects" :key="project.id">
          <v-expansion-panel-header>
            {{ project.title }}
          </v-expansion-panel-header>
          <v-expansion-panel-content class="px-4 grey--text">
            <div class="font-weight-bold">due by {{ project.due }}</div>
            <div>
              {{ project.content }}
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import db from '../fb.js';
import { populateOrRefreshDB } from '../utils/functions.js';

export default {
  data() {
    return {
      projects: []
    };
  },
  computed: {
    ...mapState(['currentUser']),
    /**
     * Return only the projects for the current user
     */
    myProjects() {
      return this.projects.filter(
        project => project.person === this.currentUser
      );
    }
  },
  created() {
    populateOrRefreshDB(db, this.projects);
  }
};
</script>
