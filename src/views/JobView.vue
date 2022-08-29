<template>
  <div class="w-28 h-28 text-lg text-yellow-50 text-center bg-red-500 roundes">
    This Is a Job View{{ routerId }}
  </div>
</template>

<script>
export default {
  name: "JobView",
  computed: {
    routerId() {
      return this.$route.params.id;
    },
  },
};
</script>
