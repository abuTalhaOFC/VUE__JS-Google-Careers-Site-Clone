<template>
  <div class="flex flex-col text-lg text-brand-green-1">
    <h1>This is an JOb Result page page</h1>

    <h3>{{ consolRout }}</h3>
  </div>
</template>

<script>
export default {
  name: "JobResultsView",

  computed: {
    consolRout() {
      console.log(this.$route);
      console.log(this.$router);

      return "Consol Working Well";
    },
  },
};
</script>
