<template>
  <aside class="_AsideUsers aside">
    <div class="block mb-20">
      <FieldFilter placeholder="Введите имя..." isSelected/>
    </div>
    <div class="block">
      <CardPersonList :userList="getSelectedUserList()" v-if="getSelectedUserList() && getSelectedUserList().length"/>
      <span v-if="isFiltered && getSelectedUserList().length === 0">Ничего на найдено, попробуйте изменить строку поиска</span>
    </div>
  </aside>
</template>

<script>
	import FieldFilter from "@/components/Field/FieldFilter";
	import CardPersonList from "@/components/Card/CardPersonList";

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
			isFiltered() {
				return this.$store.state.userList.isFilteredSelectedUsers;
			},
		},
		methods: {
			getSelectedUserList() {
				if (this.$store.state.userList.isFilteredSelectedUsers) {
					return this.$store.state.userList.filteredSelectedUsers;
				} else {
					return this.$store.state.userList.selectedUsers;
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
