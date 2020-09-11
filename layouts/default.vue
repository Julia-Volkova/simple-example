<template>
  <div class="page">
    <div class="page__main">
      <Nuxt/>
    </div>
    <div class="page__aside">
      <AsideUsers/>
    </div>
  </div>
</template>
<script>
	import AsideUsers from "@/components/Aside/AsideUsers";

	export default {
		name: "DefaultLayout",
		components: {
			AsideUsers,
		},
		data() {
			return {};
		},
	}
</script>
