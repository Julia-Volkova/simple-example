<template>
  <input type="text" :placeholder="placeholder" class="_FieldFilter field">
</template>

<script>
  export default {
    name: "FieldFilter",
    scrollToTop: true,
    props: {
      placeholder: {
        type: String,
        default: '',
      }
    },
    components: {},
    data() {
      return {};
    },
    computed: {},
    methods: {},
    directives: {},
    filters: {},
    watch: {},
    mounted() {
    },
  };
</script>
