<template>
  <main class="flex-auto p-8 bg-brand-gray-1">
    <ol>
      <job-listing
        v-for="job in jobsInOnePage"
        :key="job.id"
        :job="job"
      />
    </ol>
    <!-- pagination -->
    <div class=" flex justify-between flex-row flex-grow">
      <p class="text-sm text-black font-semibold ml-2">
        Page {{ currentPageNumber }}
      </p>
      <div class="flex flex-row">
        <router-link
          v-if="previousPage"
          :to="{name: 'JobResult', query: {page: previousPage}}"
          class="mx-3 text-sm text-brand-blue-1 font-semibold"
        >
          Prev
        </router-link>
        <router-link
          v-if="nextPage"
          :to="{neme: 'JobResult', query: {page: nextPage}}"
          class="mx-3 text-sm text-brand-blue-1 font-semibold"
        >
          Next
        </router-link>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios"

import JobListing from '@/components/JobResutl/JobListing.vue';

export default{
    name: "JobListings",
    components: {
        JobListing,
    },
    data(){
      return{
        jobs: []
      }
    },
    computed: {
      currentPageNumber(){
        const currentPageNumberStr = this.$route.query.page|| 1
        return Number.parseInt(currentPageNumberStr)
      },
      previousPage(){
          const prevPage = this.currentPageNumber - 1
          const fastPage = 1
          return this.currentPageNumber > fastPage ? prevPage : undefined 

      },
      nextPage(){
        const nxtPage = this.currentPageNumber + 1
        const lastPage = this.jobs.length / 10
          return this.currentPageNumber < lastPage ? nxtPage : undefined
      },
      jobsInOnePage(){
        const pageStarting = (this.currentPageNumber - 1) *10
        const pageEnding = this.currentPageNumber  *10
         return this.jobs.slice(pageStarting, pageEnding)
      }
    },
    async mounted(){
      const res = await axios.get("http://localhost:3000/jobs")
       this.jobs = res.data
    }
  }
</script>