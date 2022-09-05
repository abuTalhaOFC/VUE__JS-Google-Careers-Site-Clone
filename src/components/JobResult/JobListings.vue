<template>
  <main v-if="jobs.length > 0" class="flex-auto p-8 bg-brand-gray-2">
    <ol>
      <job-listing v-for="job in jobsIncludeTen" :key="job.id" :job="job" />
    </ol>
    <!-- page number show on left-button -->
    <div class="mt-8 mx-auto">
      <div class="flex flex-row flex-nowrap">
        <p class="text-sm flex-grow">page {{ currentPage }}</p>
        <!-- Next And Prev Button -->
        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            :to="{ name: 'JobResults', query: { page: previousPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            >Previous</router-link
          >
          <router-link
            v-if="nextPage"
            :to="{ name: 'JobResults', query: { page: nextPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            >Next</router-link
          >
        </div>
      </div>
    </div>
  </main>
  <div
    v-if="jobs.length < 1"
    class="flex-auto p-8 bg-brand-gray-2 mx-11 w-full h-screen"
  >
    <job-linting-skeleton />
  </div>
</template>

<script>
import JobListing from "@/components/JobResult/JobListing.vue";
import JobLintingSkeleton from "@/components/JobResult/JobLintingSkeleton.vue";
import { mapState } from "vuex";
import { FATCH_JOBS } from "@/store";

export default {
  name: "JobListings",
  components: {
    JobListing,
    JobLintingSkeleton,
  },
  // data() {
  //   return {
  //     jobs: [],
  //   };
  // },
  computed: {
    currentPage() {
      const pageNumberStr = this.$route.query.page || "1";
      return Number.parseInt(pageNumberStr);
    },
    previousPage() {
      const prevPage = this.currentPage - 1;
      const fristPage = 1;
      return prevPage >= fristPage ? prevPage : undefined;
    },
    nextPage() {
      const nextPage = this.currentPage + 1;
      const lastPage = this.jobs.length / 10;
      return nextPage <= lastPage ? nextPage : undefined;
    },
    jobsIncludeTen() {
      const startingPage = (this.currentPage - 1) * 10;
      const endingPage = this.currentPage * 10;

      return this.jobs.slice(startingPage, endingPage);
    },
    ...mapState(["jobs"]),
  },

  async mounted() {
    this.$store.dispatch(FATCH_JOBS);
  },
};
</script>
