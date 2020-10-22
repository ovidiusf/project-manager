<template>
  <nav>
    <v-toolbar flat app>
    <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Project</span>
        <span>Manager</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat color="grey">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app bottom class="primary" temporary>
      <p class="info">test</p>
    </v-navigation-drawer>

  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    };
  }
};
</script>

<style></style>
