<template>
  <div class="flex flex-row flex-nowrap w-full">
    <job-filtre-sidebar />
    <job-listings />
  </div>
</template>

<script>
import JobListings from '@/components/JobResutl/JobListings.vue';
import JobFiltreSidebar from '@/components/JobResutl/JobFilterSidebar/JobFiltreSidebar.vue';

export default{
    name: "JobResultView",
    components: {
        JobListings,
        JobFiltreSidebar
    },
    methods: {
        
    }
    
  }
</script>