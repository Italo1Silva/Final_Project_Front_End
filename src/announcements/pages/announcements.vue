<template>
  <div class="announcements">
    <v-container class="mt-4">
      <v-row>
        <v-col cols="12">
          <h1>Announcements for teachers</h1>
        </v-col>
        <v-col cols="12">
          <form>
            <div class="pa-5">
              <v-text-field class="pa-3" v-model="title" label="Title announcement input"  :rules="rules"  hide-details="auto"></v-text-field>
              <v-text-field class="pa-3"  v-model="description" label="Description announcement input" :rules="rules" hide-details="auto"></v-text-field>
            </div>
            <div class="pl-8">
              <v-btn outlined rounded color="indigo accent-4" class="font-weight-bold pa-3" @click="createNewAnnouncement">Submit</v-btn>
            </div>
          </form>
        </v-col>
      </v-row>

      <v-row class="mt-8">
        <v-col cols="12">
          <h1>Announcements confirmed</h1>
        </v-col>
        <v-col cols="12">
          <div v-for="announcement in announcements" :key="announcement.id">
            <v-card class="mx-auto my-3 mx-2" elevation="1">
              <v-card-title><v-icon class="mr-3">mdi-human-queue</v-icon>
                {{announcement.title}}</v-card-title>
              <v-card-text>{{announcement.description}}</v-card-text>
            </v-card>
          </div>
        </v-col>

      </v-row>
    </v-container>
  </div>
</template>

<script>


import AnnouncementsService from '@/announcements/services/announcements.service';
import { v4 as uuidv4 } from 'uuid';

export default {
  name: "announcements",
  data: () => ({
    announcements: [],
    id: '',
    title: '',
    description: '',
    rules: [
      value => !!value || 'Required.',
      value => (value && value.length >= 3) || 'Min 3 characters',
    ],
  }),
  created() {
    this.refreshList()
  },
  methods: {
    getDisplayAnnouncement(announcement){
      return {
        id: announcement.id,
        title: announcement.title,
        description: announcement.description
      };
    },
    refreshList (){
      AnnouncementsService.getAll()
          .then((response) => {
            this.announcements = response.data.map(this.getDisplayAnnouncement);
            console.log(response.data);
          })
    },
    createNewAnnouncement () {
      const announcement = {
        id: uuidv4(),
        title: this.title,
        description: this.description
      }
      AnnouncementsService.create(announcement)
          .then((response) => {
            console.log(response.data);
            this.refreshList();
          })
    }
  }
}
</script>

<style scoped>

</style>