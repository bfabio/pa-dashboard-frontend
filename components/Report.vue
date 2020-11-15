<template>
  <section>
    <v-card
      class="mx-auto pa-5 my-2"
      max-width="70%"
    >
      <div
        class="text-caption font-weight-light pt-2 pb-4"
      >
        <v-icon
          class="mr-2"
        >
          {{ icon }}
        </v-icon>

        {{ report.key }}
      </div>

      <div
        class="text-body-1"
      >
        <span>
          <v-chip
            :color="severityColor"
            class="mr-3"
            large
            label
          >
            {{ severityText }}
          </v-chip>

          {{ report.description }}
        </span>
        <div
          class="text-caption font-weight-thin float-right"
        >
          <a
            :href="`https://github.com/bfabio/pa-dashboard-inspectors/wiki/${ report.key }`"
            target="_blank"
          >
            More info
          </a>
        </div>
      </div>
    </v-card>
  </section>
</template>

<script>
export default {
  props: {
    report: {
      type: Array,
      required: true,
    },
  },
  computed: {
    severityText() {
      const text = {
        info: 'Info',
        ok: 'Good',
        low: 'Low severity',
        medium: 'Medium severity',
        high: 'High severity',
      };

      return text[this.report.severity];
    },
    severityColor() {
      const icons = {
        info: 'gray lighten-4',
        ok: 'success',
        low: 'yellow lighten-3',
        medium: 'red lighten-2',
        high: 'red',
      };

      return icons[this.report.severity];
    },
    icon() {
      const icons = {
        security: 'mdi-security',
        ux: 'mdi-palette',
        links: 'mdi-link-off',
        best_practice: 'mdi-star',
      };

      return icons[this.report.category];
    },
  },
};
</script>
