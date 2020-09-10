<template>
  <div class="_CardPerson card">
    <h3 class="card__title">{{ user.fullName }}</h3>
    <slot/>
    <button class="btn btn--small">+</button>
  </div>
</template>

<script>
  export default {
    name: "CardPerson",
    scrollToTop: true,
    props: {
      user: {
        type: Object,
        default: () => {},
      },
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
