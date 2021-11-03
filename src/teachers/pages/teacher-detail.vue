<template>
  <div class="teacher-detail">
    <v-container class="pt-6">
      <v-row>
        <v-col cols="8">
          <h1 class="font-weight-bold pb-3">Teacher information</h1>
          <v-card class="mx-auto" max-height="200" min-height="150">
            <v-card-title class="mb-1 indigo accent-4 font-weight-bold white--text">
              {{teacher.name}} {{teacher.lastname}}
            </v-card-title>
            <v-card-text class="text--primary mt-3">
              <p class="text-justify mb-0">
                <strong>Personal information:</strong><br>
                Name(s): {{teacher.name}}<br>
                Last name: {{teacher.lastname}}<br>
                Age: {{teacher.age}} <br></p>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="4" class="pl-15">
          <h1 class="font-weight-bold pb-3">Teacher progress</h1>
          <v-card class="mx-auto pa-5" min-height="150">
            <p class="display-3 font-weight-bold">25%</p>
              <v-progress-linear
                  class="rounded-pill"
                  color="indigo accent-4"
                  height="25"
                  value="25"
                  striped
              ></v-progress-linear>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="pt-4">
        <v-col cols="8">
          <h1 class="font-weight-bold pb-3">Point for progress</h1>
          <v-card class="mx-auto mb-3">
            <v-container>
              <v-row>
                <div class="d-flex justify-start align-center ml-5 mr-3">
                  <v-icon>mdi-check-bold</v-icon>
                </div>
                <v-col>
                  <div>This teacher</div>
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
          <h1 class="font-weight-bold py-3">Courses in progress and completed</h1>
          <v-card v-for="unit in units" :key="unit" class="mx-auto mb-3">
            <v-container>
              <v-row>
                <div class="d-flex justify-start align-center ml-5 mr-3">
                  <v-icon>mdi-file-document-outline</v-icon>
                </div>
                <v-col>
                  <div>Course</div>
                  <p class="text--primary font-weight-bold mb-1">{{ unit }}</p>
                  <div class="text--secondary">Lorem ipsum sit amet</div>
                </v-col>
                <v-col class="d-flex justify-center align-center">
                  <v-btn outlined rounded color="indigo accent-4" class="font-weight-bold" v-bind="attrs" v-on="on">
                    Learn More
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>

        <v-col cols="4" class="pl-15">
          <h1 class="font-weight-bold pb-3">Competences includes</h1>
          <v-card class="d-flex mx-auto px-5 align-center" min-height="150">
            <div>
              <v-chip-group class="py-3" column>
                <v-chip outlined v-for="competence in competences" :key="competence">
                  {{ competence }}
                </v-chip>
              </v-chip-group>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import TeachersService from '../services/teachers.service'

export default {
  name: "teacher-detail",
  data: () => ({
    teacher: {
      id: '',
      name: '',
      lastname: '',
      age: ''
    },
    units: [
      'Literature',
      'Arithmetic',
      'History',
    ],
    competences: [
      'Mathematical Reasoning',
      'Assertiveness',
      'Critical thinking',
      'Grammar',
      'Mathematical design',
      'Creativity',
      'Logic',
    ],
  }),
  created() {
    TeachersService.getById(this.$route.params.id)
        .then((response) => {
          this.teacher = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
  },
}
</script>

<style scoped>

</style>