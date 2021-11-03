<template>
  <v-container>
    <h1 class="font-weight-bold py-4">TOP Teachers</h1>
    <v-card class="mx-auto">
      <h1 class="mb-1 pa-7 font-weight-bold white--text indigo accent-4">
        Teacher TOP: Anna Garcia
      </h1>
      <v-container>
        <v-row>
          <v-col cols="2" class="pl-10">
            <v-img
                src="https://images.pexels.com/photos/5905483/pexels-photo-5905483.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                height="130px"
                width="130px"
                class="teacher-img"
            ></v-img>
          </v-col>

          <v-col cols="10">
            <div>Actual progress</div>
            <div class="pb-4 pt-2">
              <v-row class="d-flex justify-center align-center">
                <v-col cols="1" class="pr-0">
                  <p class="font-weight-bold my-0">45%</p>
                </v-col>
                <v-col cols="11" class="pl-0">
                  <v-progress-linear value="45" height="15" class="rounded-pill" color="indigo accent-4" striped></v-progress-linear>
                </v-col>
              </v-row>
            </div>

            <div>Actual points</div>
            <div class="font-weight-bold">
              <h3>2150 points</h3>
            </div>
          </v-col>
        </v-row>
      </v-container>

    </v-card>

    <v-container class="mt-5"></v-container>

    <h2 class="font-weight-bold">Score of the other teachers</h2>
    <v-card v-for="topTeacher in topTeachers" :key="topTeacher.id" class="mx-auto mt-5 mb-5">
      <v-list-item>
        <figure class="mr-4">
          <v-icon>mdi-clipboard-outline</v-icon>
        </figure>

        <v-list-item-content class="mt-3">
          <p class="text--primary"> <strong> Teacher:</strong> {{topTeacher.name}}</p>
          <p>Score obtained</p>
        </v-list-item-content>
        <v-spacer></v-spacer>
        <h2 class="font-weight-bold">1080 Pts.</h2>
      </v-list-item>
    </v-card>
  </v-container>
</template>

<script>
import TopTeachersService from '../../top-teachers/services/top-teachers.service';

export default {
  name: "top-teachers",
  data: () => ({
    topTeachers: []
  }),
  created() {
    TopTeachersService.getAll()
        .then((response) => {
          this.topTeachers = response.data.map(this.getDisplayTopTeachers);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
  },
  methods: {
    getDisplayTopTeachers(topteacher){
      return {
        id: topteacher.id,
        name: topteacher.name,
        lastname: topteacher.lastname,
        age: topteacher.age
      };
    },
  }
}
</script>

<style scoped>

.teacher-profile-name {
  background-color: #2C53C9;
}
.teacher-img {
  border-radius: 50%;
}

</style>