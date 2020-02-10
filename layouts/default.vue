<template>
  <v-app>
    <v-app-bar
      color="primary"
      app
      dark
    >
      <v-app-bar-nav-icon />

      <v-toolbar-title>ॱit Dashboard</v-toolbar-title>

      <v-spacer />

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer app>
      <v-layout justify-center>
        <a href="https://github.com/bfabio/pa-dashboard-frontend">
          <v-icon>fab fa-github</v-icon>
        </a>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>
