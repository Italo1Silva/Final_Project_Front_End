<template>
    <v-app>
      <v-app-bar dark absolute app>
        <v-app-bar-nav-icon  @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="font-weight-bold my-auto"><v-icon class="mr-1 py-1">mdi-school</v-icon>Asimov</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn depressed rounded class="text-capitalize" to="/profile/2">Profile<v-icon class="ml-2">mdi-account-circle</v-icon></v-btn>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" dark absolute bottom temporary>
        <v-list-item align="center">
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">Side-Menu-Director</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense rounded>
          <v-list-item link to="/dashboard">
            <v-list-item-icon>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item>

          <v-list-item link to="/announcements">
            <v-list-item-icon>
              <v-icon>mdi-bullhorn</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Announcements</v-list-item-title>
          </v-list-item>

          <v-list-item link to="/teachers">
            <v-list-item-icon>
              <v-icon>mdi-human-queue</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Teachers</v-list-item-title>
          </v-list-item>

          <v-list-item link to="/top-teachers">
            <v-list-item-icon>
              <v-icon>mdi-podium-gold</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Top Teachers</v-list-item-title>
          </v-list-item>

          <v-list-item link to="/competences">
            <v-list-item-icon>
              <v-icon>mdi-format-list-bulleted-square</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Competences</v-list-item-title>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>
        <v-list-item align="center">
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">Side-Menu-Teacher</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>


        <v-list dense rounded>
          <v-list-item link to="/dashboard">
            <v-list-item-icon>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item>

          <v-list-item link to="/courses">
            <v-list-item-icon>
              <v-icon>mdi-book-open-page-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Courses</v-list-item-title>
          </v-list-item>

          <v-list-item link to="/competences">
            <v-list-item-icon>
              <v-icon>mdi-format-list-bulleted-square</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Competences</v-list-item-title>
          </v-list-item>
        </v-list>

      </v-navigation-drawer>

      <v-main>
        <router-view/>
      </v-main>

      <v-footer dark padless align="center">
        <v-card-title  class="mx-auto my-0">
          <p class="subheading my-auto pr-10">Social Networks</p>

          <v-spacer></v-spacer>
          <v-btn class="mx-2 white--text" href="https://www.facebook.com/" target="_blank" icon>
            <v-icon size="24px">
              mdi-facebook
            </v-icon>
          </v-btn>
          <v-btn class="mx-2 white--text" href="https://www.instagram.com/" target="_blank" icon>
            <v-icon size="24px">
              mdi-instagram
            </v-icon>
          </v-btn>
          <v-btn class="mx-2 white--text" href="https://www.twitter.com/" target="_blank" icon>
            <v-icon size="24px">
              mdi-twitter
            </v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="white--text pt-0 pb-2">
          2021 — <strong>Vuetify</strong>
        </v-card-text>
      </v-footer>

    </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group () {
      this.drawer = false
    },
  },
}
</script>

<style lang="scss">
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
