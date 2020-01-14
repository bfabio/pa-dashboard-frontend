<template>
  <section class="section">
    <div class="is-mobile">
      <host
        v-for="host in hosts"
        :key="host"
        :url="host"
      >
        Open source on <a href="https://github.com/buefy/buefy">
          GitHub
        </a>
      </host>
    </div>
  </section>
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
