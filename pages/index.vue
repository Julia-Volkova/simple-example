<template>
  <div class="content">
    <div class="block mb-20">
      <FieldFilter placeholder="Введите имя..."/>
    </div>
    <div class="block">
      <CardPersonList :userList="userList" v-if="userList && userList.length"/>
      <span v-else>Ничего на найдено, попробуйте изменить строку поиска</span>
    </div>
  </div>
</template>

<script>
  import FieldFilter from "@/components/Field/FieldFilter";
  import CardPersonList from "@/components/Card/CardPersonList";
  import { actionTypes } from "@/store/userList";

  export default {
    name: "MainPage",
    scrollToTop: true,
    props: {},
    components: {
      CardPersonList,
      FieldFilter,
    },
    async asyncData({ store }) {
      await store.dispatch(actionTypes.GET_USERS);
      return {};
    },
    data() {
      return {};
    },
    computed: {
      userList() {
        return this.$store.state.userList.allUsers;
      },
    },
    methods: {},
    directives: {},
    filters: {},
    watch: {},
    mounted() {
    },
  };
</script>
