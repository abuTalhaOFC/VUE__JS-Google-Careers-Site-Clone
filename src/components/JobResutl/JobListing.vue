<template>
  <li class="mb-7">
    <router-link
      :to="toJobViwePage"
      class="block mx-auto pb-5 bg-white border border-solid border-brand-gray-1 rounded hover:shadow-gray"
    >
      <div class="pt-5 pb-2 mx-8 border-b border-solid border-brand-gray-1">
        <h2 class="mb-2 text-2xl">
          {{ job.title }}
        </h2>
        <div class="flex flex-row text-sm align-middle">
          <div class="mr-5">
            <font-awesome-icon
              :icon="['fas', 'mountain-city']"
              size="sm"
              class="mr-2 text-brand-gray-3"
            />
            <span class="font-semibold">{{ job.organization }}</span>
          </div>
          <div>
            <span class="flex items-center">
              <font-awesome-icon
                :icon="['fas', 'location-dot']"
                size="sm"
                class="mr-2 text-brand-gray-3"
              />
              <span class="font-semibold">In-office: </span>
              <ul>
                <li
                  v-for="location in job.locations"
                  :key="location"
                  class="inline-block ml-2"
                >
                  {{ location }}
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>

      <div class="px-8 py-4">
        <div class="mb-2">
          <h3 class="font-semibold">
            Qualifications:
          </h3>
        </div>
        <ul class="pl-8 list-disc">
          <li
            v-for="minimumQualification in job.minimumQualifications"
            :key="minimumQualification"
          >
            {{ minimumQualification }}
          </li>
        </ul>
      </div>

      <div class="mt2 text-center">
        <router-link
          :to="toJobViwePage"
          class="text-brand-blue-1 text-sm font-semibold"
        >
          Expand
        </router-link>
      </div>
    </router-link>
  </li>
</template>

<script>
  export default{
    name: "JobListing",
    props:{
      job:{
        type: Object,
        required: true
      }
    },
    computed:{
      toJobViwePage(){
        return `/job/result/${this.job.id}`
      }
    }
    
  }
</script>