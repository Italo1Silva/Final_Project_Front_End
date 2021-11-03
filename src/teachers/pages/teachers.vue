<template>
  <div class="teachers">
    <v-row class="pt-4">
      <v-col cols="12">
        <h1 class="pl-11">Teachers</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="d-flex flex-wrap justify-center mb-8">
          <v-card v-for="teacher in teachers" :key="teacher.id" class="pb-2 ma-3" width="345" max-height="350">
            <v-card-text>
              <div>Teacher</div>
              <h1 class="text--primary font-weight-bold py-3">{{teacher.name}}</h1>
              <div>{{ teacher.lastname }}</div>
              <p>Age: {{teacher.age}}</p>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="indigo accent-4" class="font-weight-bold te" :to="`/teachers/${teacher.id}`">see more</v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import TeachersService from '@/teachers/services/teachers.service';

export default {
  name: "teachers",
  data: () => ({
    teachers: [],
  }),
  created() {
    TeachersService.getAll()
        .then((response) => {
          this.teachers = response.data.map(this.getDisplayTeacher);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
  },
  methods: {
    getDisplayTeacher(teacher) {
      return {
        id: teacher.id,
        name: teacher.name,
        lastname: teacher.lastname,
        age: teacher.age
      };
    }
  }
}
</script>

<style scoped>

</style>