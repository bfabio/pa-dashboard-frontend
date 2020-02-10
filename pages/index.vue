<template>
  <v-container align="center">
    <v-expansion-panels
      :accordion="true"
      :hover="true"
      :multiple="true"
    >
      <v-expansion-panel
        v-for="host in hosts"
        :key="host"
      >
        <v-expansion-panel-header>
          <v-row align="center">
            <v-icon :left="true">
              mdi-web
            </v-icon>
            {{ host }}
            <v-chip
              class="ml-auto mr-8"
              color="success"
              label
            >
              All good
            </v-chip>
          </v-row>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <host :url="host">
            slot
          </host>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
import Host from '~/components/Host.vue';

export default {
  name: 'HomePage',
  components: {
    Host,
  },
  computed: {
    hosts() {
      return this.$store.state.hosts.list;
    },
  },
  async fetch({ store }) {
    return store.dispatch('hosts/fetchHosts');
  },
};
</script>
