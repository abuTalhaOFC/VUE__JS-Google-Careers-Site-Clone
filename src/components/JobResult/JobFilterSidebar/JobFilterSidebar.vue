<template>
  <div
    class="flex flex-col p-4 bg-white border-r border-solid border-brand-gray-1 w-96"
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between items-center">
        <h3 class="text-base font-semibold">What do you want to do?</h3>
        <div class="text-sm font-semibold">
          <action-button text="Clear filters" type="secondary" />
        </div>
      </div>
      <accordion header="Location"></accordion>
      <job-filter-sidebar-organization />
    </section>
  </div>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import Accordion from "@/components/Shared/Accordion.vue";
import JobFilterSidebarOrganization from "@/components/JobResult/JobFilterSidebar/JobFilterSidebarOrganization.vue";

export default {
  name: "JobFilterSidebar",
  components: {
    ActionButton,
    Accordion,
    JobFilterSidebarOrganization,
  },
};
</script>
