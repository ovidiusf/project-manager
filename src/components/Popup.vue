<template>
  <v-dialog max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn text class="success" color="white" v-bind="attrs" v-on="on">
        Add new project
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h2>Add a New Project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field
            label="Title"
            v-model="title"
            prepend-icon="folder"
            :rules="inputRules"
          >
          </v-text-field>
          <v-textarea
            label="Information"
            v-model="content"
            prepend-icon="edit"
            :rules="inputRules"
          >
          </v-textarea>
          <v-menu>
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                :value="formattedDate"
                v-bind="attrs"
                v-on="on"
                label="Due date"
                prepend-icon="date_range"
                :rules="inputRules"
              ></v-text-field>
            </template>
            <v-date-picker v-model="due"></v-date-picker>
          </v-menu>
          <v-spacer></v-spacer>

          <v-btn text class="success mx-0 mt-3" @click="submitForm">
            Add project
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import format from 'date-fns/format';
import { mapState } from 'vuex';
import db from '../fb.js';

export default {
  name: 'Popup',
  data() {
    return {
      title: '',
      content: '',
      due: null,
      inputRules: [v => v.length >= 3 || 'Minimum length is 3 characters']
    };
  },
  methods: {
    submitForm() {
      if (this.$refs.form.validate()) {
        const project = {
          title: this.title,
          content: this.content,
          due: format(new Date(this.due), 'do MMM yyyy'),
          person: this.currentUser,
          status: 'ongoing'
        };

        db.collection('projects')
          .add(project)
          .then(docRef => {
            console.log('added to db', docRef.id);
          })
          .catch(error => {
            console.error('Error adding document: "', error);
          });
      }
    }
  },
  computed: {
    ...mapState(['currentUser']),
    formattedDate() {
      return this.due ? format(new Date(this.due), 'do MMM yyyy') : '';
    }
  }
};
</script>
