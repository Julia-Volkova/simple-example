<template>
  <aside class="_AsideUsers aside">
    <div class="block mb-20">
      <FieldFilter placeholder="Введите имя..." isSelected/>
    </div>
    <div class="block">
      <CardPersonList :userList="selectedUserListForTemplate" v-if="selectedUserListForTemplate && selectedUserListForTemplate.length"/>
      <span v-if="isFilteredSelectedUsers && selectedUserListForTemplate.length === 0">Ничего на найдено, попробуйте изменить строку поиска</span>
    </div>
  </aside>
</template>

<script>
  import { mapGetters } from "vuex";
	import FieldFilter from "@/components/Field/FieldFilter";
	import CardPersonList from "@/components/Card/CardPersonList";
  import { getterTypes } from "@/store/userList";

	export default {
		name: "AsideUsers",
		scrollToTop: true,
		props: {},
		components: {
			CardPersonList,
			FieldFilter,
		},
		data() {
			return {
			};
		},
		computed: {
		  ...mapGetters({
        isFilteredSelectedUsers: getterTypes.IS_FILTERED_SELECTED_USERS,
        selectedUserListForTemplate: getterTypes.SELECTED_USER_LIST_FOR_TEMPLATE,
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
