<template>
  <div class="dashboard">
    <v-container>
      <h1 class="mb-2 pl-3 pt-4">Dashboard</h1>
      <v-row>
        <v-col cols="12" sm="6">
        <v-container>
            <v-row>
              <v-col cols="12">
                <h3 class="mb-2 pl-1">Points</h3>
                <v-card>
                  <v-card-title>Example title card</v-card-title>
                  <v-card-text>Example text</v-card-text>
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <h3 class="mb-2 pl-1">Last announcements</h3>
                <v-card>
                  <v-card-title>Example title card</v-card-title>
                  <v-card-text>Example text</v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col cols="12" sm="6">
        <v-container>
            <v-row>
              <v-col cols="12">
                <h3 class="mb-2 pl-1">School year progress</h3>
                <v-card class="mx-auto pa-5" height="150">
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
            <v-row>
              <v-col cols="12">
                <h3 class="mb-2 pl-1">Profile</h3>
                <v-card>
                  <v-card-title>Example title card</v-card-title>
                  <v-card-text>Example text</v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "dashboard"
}
</script>

<style scoped>

</style>