<template>
  <div class="flex flex-row flex-nowrap w-full">
    <job-filter-sidebar />
    <job-listings />
  </div>
</template>

<script>
import JobListings from "@/components/JobResult/JobListings.vue";
import JobFilterSidebar from "@/components/JobResult/JobFilterSidebar/JobFilterSidebar.vue";

export default {
  name: "JobResultsView",

  components: {
    JobListings,
    JobFilterSidebar,
  },
};
</script>
