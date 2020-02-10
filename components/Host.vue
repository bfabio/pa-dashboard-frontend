<template>
  <section>
    {{ reports }}
    <v-layout justify-center>
      <a
        :href="url"
        class="card-footer-item has-text-left"
        target="_blank"
      >
        Go to {{ url }}
        <v-icon>mdi-link</v-icon>
      </a>
    </v-layout>
  </section>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    reports: {
      type: String,
      default: '',
    },
  },
};
</script>
