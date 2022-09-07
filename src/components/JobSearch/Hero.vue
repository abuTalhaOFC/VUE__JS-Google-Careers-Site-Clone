<template>
  <main class="flex flex-col h-screen">
    <section class="flex flex-col pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1"></div>

        <div class="col-start-2 col-span-5">
          <headline />
          <job-search-from />
        </div>

        <div class="col-start-7 col-span-5 self-center justify-self-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
            alt="VUE"
            class="w-80 h-80 object-contain"
          />
        </div>

        <div class="col-start-12 col-span-1"></div>
      </div>
    </section>

    <spot-light class="flex flex-row justify-center pb-16">
      <template #default="{ img, title, description }">
        <router-link
          to="/job/result"
          class="flex flex-col mx-5 border rounded-lg w-72 bg-brand-gray-2 h-96"
        >
          <img :src="img" alt="xx" class="object-center" />
          <div class="h-48 px-6 py-4 mt-3">
            <h3 class="text-lg font-medium">
              {{ title }}
            </h3>
            <p class="mt-3 text-sm">{{ description }}</p>
          </div>

          <router-link
            to="/job/result"
            class="px-6 pb-4 text-sm text-brand-blue-1"
            >See jobs</router-link
          >
        </router-link>
      </template>
    </spot-light>
  </main>
</template>

<script>
import Headline from "@/components/JobSearch/Headline.vue";
import JobSearchFrom from "@/components/JobSearch/JobSearchFrom.vue";
import SpotLight from "@/components/JobSearch/SpotLight.vue";
export default {
  name: "Hero",
  components: {
    Headline,
    JobSearchFrom,
    SpotLight,
  },
};
</script>
