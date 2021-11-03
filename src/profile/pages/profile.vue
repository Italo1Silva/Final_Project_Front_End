<template>
  <div class="profile ma-10">
    <h1 class="pl-5">Profile</h1>
    <v-card class="mx-5 mt-3">
      <div class="indigo accent-4">
        <v-card-title class="white--text font-weight-bold">Hello! {{director.name}}</v-card-title>
      </div>
      <v-row>
        <v-col cols="2" class="px-8 pt-8">
          <div class="pa-3">
            <v-sheet height="150" width="150" color="grey" class="rounded-circle"></v-sheet>
          </div>
        </v-col>
        <v-col cols="10">
          <v-card-text>
            <h1 class="text--primary">Personal Information:</h1>
            <div class="text--primary pt-2">
              Name: {{director.name}}<br>
              Last Name: {{director.lastname}}<br>
              Age: {{director.age}}<br>
              Phone: {{director.phone}}<br>
              Email: {{director.email}}<br>
            </div>
            <div class="pt-2">
              <v-btn rounded outlined color="indigo accent-4">Edit</v-btn>
            </div>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
    <h1 class="pl-5 pt-10">Points</h1>
    <v-card class="mx-5 mt-3">
      <v-container>
        <v-row>
          <div class="d-flex justify-start align-center ml-5 mr-3">
            <v-icon>mdi-check-bold</v-icon>
          </div>
          <v-col>
            <div>You</div>
            <p class="text--primary font-weight-bold mb-1">Points earned</p>
          </v-col>
          <v-col class="d-flex justify-center align-center">
            <v-chip outlined rounded color="green darken-1" class="font-weight-bold">
              1250 Points
            </v-chip>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import ProfileService from '../services/profile.service'

export default {
  name: "profile",
  data:()=>({
    director:{
      id: '',
      name: '',
      lastname: '',
      age: '',
      phone: '',
      email: ''
    }
  }),
  created() {
    ProfileService.getById(this.$route.params.id)
        .then((response) => {
          this.director = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
  }
}
</script>

<style scoped>

</style>