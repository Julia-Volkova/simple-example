<template>
  <div class="content">
    <div class="block mb-20">
      <FieldFilter placeholder="Введите имя..."/>
    </div>
    <div class="block" v-if="isFetch">Загрузка...</div>
    <div class="block" v-else>
      <CardPersonList :userList="userList" v-if="userList && userList.length"/>
      <span v-if="isFilteredAllUsers && userList.length === 0">Ничего на найдено, попробуйте изменить строку поиска</span>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  import FieldFilter from "@/components/Field/FieldFilter";
  import CardPersonList from "@/components/Card/CardPersonList";
  import { getterTypes, actionTypes } from "@/store/userList";

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
      ...mapGetters({
        userList: getterTypes.USER_LIST_FOR_TEMPLATE,
        isFetch: getterTypes.IS_FETCH,
        isFilteredAllUsers: getterTypes.IS_FILTERED_ALL_USERS,
      }),
    },
    methods: {
    },
    directives: {},
    filters: {},
    watch: {},
    mounted() {
    },
  };
</script>
