<template>
  <input type="text" :placeholder="placeholder" class="_FieldFilter field" @input="searchUsers" v-model="search">
</template>

<script>
	import { actionTypes } from "@/store/userList";

  export default {
    name: "FieldFilter",
    scrollToTop: true,
    props: {
      placeholder: {
        type: String,
        default: '',
      },
      isSelected: {
	      type: Boolean,
	      default: false,
      }
    },
    components: {},
    data() {
      return {
	      search: '',
        timeout: null,
      };
    },
    computed: {},
    methods: {
	    searchUsers() {
		    clearTimeout(this.timeout);
		    this.timeout = setTimeout(() => {
		    	if (this.isSelected) {
				    this.$store.dispatch(actionTypes.GET_FILTERED_SELECTED_USERS, this.search);
          } else {
				    this.$store.dispatch(actionTypes.GET_FILTERED_ALL_USERS, this.search);
          }
		    }, 300);
      },
    },
    directives: {},
    filters: {},
    watch: {},
    mounted() {
    },
  };
</script>
