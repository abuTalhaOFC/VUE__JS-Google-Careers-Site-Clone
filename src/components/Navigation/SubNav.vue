<template>
  <div class="w-full h-16 bg-white border-b border-solid border-brand-gray-1">
    <div v-if="onJobPageOnly" class="flex items-center h-full px-8">
      <font-awesome-icon :icon="['fas', 'search']" size="lg" class="mr-3" />
      <span><span class="text-brand-green-1"> 1650</span> jobs matched </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubNav",
  computed: {
    onJobPageOnly() {
      return this.$route.name === "JobResults";
    },
  },
};
</script>
