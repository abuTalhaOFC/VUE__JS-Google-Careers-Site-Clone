<template>
  <li class="mb-7">
    <router-link
      to="/job/result/1"
      class="block mx-auto pb-5 bg-white border border-solid border-brand-gray-1 rounded hover:shadow-gray"
    >
      <div class="pt-5 pb-2 mx-8 border-b border-solid border-brand-gray-1">
        <h2 class="mb-2 text-2xl">
          Software Engineer III, Infrastructure, Google Cloud Networking
        </h2>
        <div class="flex flex-row text-sm align-middle">
          <div class="mr-5">
            <font-awesome-icon
              :icon="['fas', 'mountain-city']"
              size="sm"
              class="mr-2 text-brand-gray-3"
            />
            <span class="font-semibold">Google</span>
          </div>
          <div>
            <span>
              <font-awesome-icon
                :icon="['fas', 'location-dot']"
                size="md"
                class="mr-2 text-brand-gray-3"
              />
              <span class="font-semibold">In-office: </span>Sunnyvale, CA, USA
            </span>
          </div>
        </div>
      </div>

      <div class="px-8 py-4">
        <div class="mb-2">
          <h3 class="font-semibold">Qualifications:</h3>
        </div>
        <ul class="pl-8 list-disc">
          <li>Bachelors degree or equivalent practical experience.</li>
          <li>
            2 years of experience with software development in one or more
            programming languages, or 1 year of experience with an advanced
            degree.
          </li>
          <li>
            2 years of experience with data structures or algorithms in either
            an academic or industry setting.
          </li>
        </ul>
      </div>

      <div class="mt2 text-center">
        <router-link
          to="/job/result/1"
          class="text-brand-blue-1 text-sm font-semibold"
          >Expand</router-link
        >
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "JobListing",
};
</script>
