<template>
  <div class="_CardPerson card">
    <nuxt-link :to="`/${user.id}`" class="card__title">{{ user.fullName }}</nuxt-link>
    <slot/>
    <button class="card__btn btn btn--small" @click="removeUserFromSelected" v-if="user.selected">-</button>
    <button class="card__btn btn btn--small" @click="addUserInSelected" v-else>+</button>
  </div>
</template>

<script>
	import { actionTypes } from "@/store/userList";

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
    methods: {
	    async addUserInSelected() {
		    await this.$store.dispatch(actionTypes.ADD_USER_TO_SELECTED, this.user.id);
      },
	    async removeUserFromSelected() {
		    await this.$store.dispatch(actionTypes.REMOVE_USER_TO_SELECTED, this.user.id);
      },
    },
    directives: {},
    filters: {},
    watch: {},
    mounted() {
    },
  };
</script>
