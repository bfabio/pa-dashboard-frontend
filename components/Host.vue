<template>
  <section>
    <b-collapse
      :open="false"
      class="card"
      aria-id="contentIdForA11y3"
    >
      <div
        slot="trigger"
        slot-scope="props"
        class="card-header"
        role="button"
        aria-controls="contentIdForA11y3"
      >
        <div class="card-header-title columns">
          <b-icon icon="web" />
          <span class="column">{{ url }}</span>

          <b-tag
            class="column is-1"
            type="is-success"
          >
            All good
          </b-tag>
        </div>
        <a class="card-header-icon">
          <b-icon
            :icon="props.open ? 'menu-down' : 'menu-up'"
          />
        </a>
      </div>
      <div class="card-content">
        <div class="content">
          {{ reports }}
        </div>
      </div>
      <footer class="card-footer">
        <a
          :href="url"
          class="card-footer-item has-text-left"
          target="_blank"
        >
          <b-icon icon="link" />
          &nbsp; Go to {{ url }}
        </a>
      </footer>
    </b-collapse>
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
