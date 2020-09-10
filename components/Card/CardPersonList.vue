<template>
  <div class="_CardPersonList list">
    <div class="list__item" v-for="userListItem in userList" :key="`userListItem-${userListItem.id}`">
      <CardPerson v-if="userListItem" :user="userListItem"/>
    </div>
  </div>
</template>

<script>
  import CardPerson from "@/components/Card/CardPerson";

  export default {
    name: "CardPersonList",
    scrollToTop: true,
    props: {
      userList: {
        type: Array,
        default: () => [],
      },
    },
    components: {
      CardPerson,
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
