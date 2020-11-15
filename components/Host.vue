<template>
  <section>
    <report
      v-for="report in reports"
      :key="report.id"
      :report="report"
    />
    <v-layout justify-center>
      <a
        :href="url"
        class="card-footer-item has-text-left my-5"
        target="_blank"
      >
        Go to {{ url }}
        <v-icon>mdi-link</v-icon>
      </a>
    </v-layout>
  </section>
</template>

<script>
import Report from '~/components/Report.vue';

export default {
  components: {
    Report,
  },
  props: {
    url: {
      type: String,
      required: true,
    },
    reports: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
