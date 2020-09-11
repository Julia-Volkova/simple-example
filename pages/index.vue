<template>
  <div class="content">
    <div class="block mb-20">
      <FieldFilter placeholder="Введите имя..."/>
    </div>
    <div class="block" v-if="isFetch">Загрузка...</div>
    <div class="block" v-else>
      <CardPersonList :userList="getUserList()" v-if="getUserList() && getUserList().length"/>
      <span v-if="isFiltered && getUserList().length === 0">Ничего на найдено, попробуйте изменить строку поиска</span>
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
      return {
      };
    },
    data() {
      return {
      };
    },
    computed: {
    	isFetch() {
		    return this.$store.state.userList.isFetch;
      },
      isFiltered() {
	      return this.$store.state.userList.isFilteredAllUsers;
      },
    },
    methods: {
    	getUserList() {
    		if (this.$store.state.userList.isFilteredAllUsers) {
			    return this.$store.state.userList.filteredAllUsers;
        } else {
			    return this.$store.state.userList.allUsers;
        }
      },
    },
    directives: {},
    filters: {},
    watch: {},
    mounted() {
    },
  };
</script>
