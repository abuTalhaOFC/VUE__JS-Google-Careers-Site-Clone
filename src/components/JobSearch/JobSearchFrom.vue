<template>
  <form
    class="flex items-center w-full h-12 mt-14 border border-solid border-brand-gray-3 rounded-3xl"
    @submit.prevent="searchJobs"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />
    <div class="flex flex-nowrap flex-1 h-full text-base font-light">
      <div class="relative flex items-center flex-1 h-full mr-3">
        <label class="absolute left-0 -top-10">Role</label>
        <!-- <input
          v-model="role"
          type="text"
          placeholder="Softeare engineer"
          class="w-full text-lg font-normal focus:outline-none"
        /> -->
        <text-input placeholder="Softeare engineer" @handelInput="updateRole" />
      </div>
      <span
        class="flex items-center h-full px-3 border-l border-r text-brand-gray-3 border-brand-gray-3 bg-brand-gray-2"
        >in</span
      >
      <div class="relative flex items-center flex-1 h-full ml-3 mr-1">
        <label class="absolute left-0 -top-10">Where?</label>
        <!-- <input
          v-model="location"
          type="text"
          placeholder="Los Angeles"
          class="w-full text-lg font-normal focus:outline-none"
        /> -->

        <text-input placeholder="Los Angeles" @handelInput="updateLocation" />
      </div>
    </div>
    <action-button text="Search" type="secondary" class="rounded-r-3xl" />
  </form>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import TextInput from "@/components/Shared/TextInput.vue";

export default {
  name: "JobSearchForm",
  components: {
    ActionButton,
    TextInput,
  },
  data() {
    return {
      role: "",
      location: "",
    };
  },
  methods: {
    updateRole(payload) {
      this.role = payload;
    },
    updateLocation(payload) {
      this.location = payload;
    },
    searchJobs() {
      this.$router.push({
        name: "JobResults",
        query: { role: this.role, location: this.location },
      });
    },
  },
};
</script>
