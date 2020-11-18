<template>
  <div class="Team">
    <h1 class="text-h4 grey--text">Team</h1>
    <v-container class="my-5">
      <v-row wrap dense>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="person in team"
          :key="person.name"
        >
          <v-card flat class="text-center ma-3" color="blue-grey lighten-1">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.avatar" :alt="person.name">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="text-h6  white--text">{{ person.name }}</div>
              <div class="text-subheading purple--text text--lighten-5">
                {{ person.role }}
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn flat color="grey">
                <v-icon small left color="white">message</v-icon>
                <span class="white--text">Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {
          name: "John Smithson",
          role: "Web Dev",
          avatar: "/assets/avatar-1.jpg"
        },
        {
          name: "Rikuta Dolara",
          role: "Graphic Designer",
          avatar: "/assets/avatar-2.jpg"
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
          avatar: "/assets/avatar-5.jpg"
        }
      ]
    };
  }
};
</script>

<style></style>
