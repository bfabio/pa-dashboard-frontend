<template>
  <v-container align="center">
    <v-row class="mb-5">
      <v-checkbox
        v-model="filters"
        value="security"
        class="pr-10"
      >
        <template v-slot:label>
          <v-icon>
            mdi-security
          </v-icon>
          Security
        </template>
      </v-checkbox>
      <v-checkbox
        v-model="filters"
        value="ux"
        class="pr-10"
      >
        <template v-slot:label>
          <v-icon>
            mdi-palette
          </v-icon>
          User experience / User Interface
        </template>
      </v-checkbox>
      <v-checkbox
        v-model="filters"
        value="links"
        class="pr-10"
      >
        <template v-slot:label>
          <v-icon>
            mdi-link-off
          </v-icon>
          Broken links
        </template>
      </v-checkbox>
      <v-checkbox
        v-model="filters"
        value="best_practice"
        class="pr-10"
      >
        <template v-slot:label>
          <v-icon>
            mdi-star
          </v-icon>
          Best practices
        </template>
      </v-checkbox>
    </v-row>

    <v-expansion-panels
      :accordion="true"
      :hover="true"
      :multiple="true"
    >
      <v-expansion-panel
        v-for="host in hosts"
        :key="host"
      >
        <v-expansion-panel-header class="text-h4">
          <v-row
            align="center"
            max-width="500px"
          >
            <v-icon :left="true">
              mdi-web
            </v-icon>
            <div class="text-h6">
              {{ host }}
            </div>
            <v-chip
              :color="statusColor(host)"
              class="ml-auto mr-8"
              label
            >
              {{ statusText(host) }}
            </v-chip>
          </v-row>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <host
            :url="host"
            :reports="reports[hostname(host)]"
          >
            slot
          </host>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';

import Host from '~/components/Host.vue';

export default {
  name: 'HomePage',
  components: {
    Host,
  },
  data() {
    return {
      filters: ['security'],
    };
  },
  computed: {
    ...mapState({ hosts: (state) => state.hosts.list }),
    ...mapState({ reports: (state) => state.reports.byHostname }),
    ...mapState({ problems: (state) => state.reports.problemsByHostname }),
  },
  async mounted() {
    await this.$store.dispatch('hosts/fetchHosts');
    await this.$store.dispatch('reports/fetchReports');
  },
  methods: {
    hostname: (url) => url.replace(/^http(s)*:\/\//, ''),
    problemsCount(url) {
      const problems = this.problems[this.hostname(url)];

      return problems ? problems.length : 0;
    },
    statusText(url) {
      const problemsCount = this.problemsCount(url);

      return problemsCount === 0 ? 'All good' : `Problems: ${problemsCount}`;
    },
    statusColor(url) {
      const problemsCount = this.problemsCount(url);

      return problemsCount === 0 ? 'success' : 'error';
    },
  },
};
</script>
