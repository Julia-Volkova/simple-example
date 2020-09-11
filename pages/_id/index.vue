<template>
  <div class="_UserDescription">
    <CardPerson class="card--large" :user="userDescription">
      <p class="card__info block mt-20" v-if="userDescription && userDescription.phoneNumber">Номер телефона: {{ userDescription.phoneNumber }}</p>
      <p class="card__info block mt-20" v-if="userDescription && userDescription.address">Адрес: {{ userDescription.address }}</p>
    </CardPerson>
  </div>
</template>

<script>
	import CardPerson from "@/components/Card/CardPerson";
	import { actionTypes } from "@/store/userList";

	export default {
		name: "UserDescription",
		scrollToTop: true,
		props: {},
		components: {
			CardPerson,
    },
		async asyncData({store, route}) {
			await store.dispatch(actionTypes.GET_USER_INFO, route.params.id);
			return {
			};
		},
		data() {
			return {};
		},
		computed: {
			userDescription() {
				return this.$store.state.userList.userDescription;
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
