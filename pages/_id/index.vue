<template>
  <div class="_UserDescription">

  </div>
</template>

<script>
  export default {
    name: "UserDescription",
    scrollToTop: true,
    props: {},
    components: {},
    async asyncData({ app, error, route }) {
      let userList;
      return {
        // Запрос на юзера по айди
        userList,
      };
    },
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
