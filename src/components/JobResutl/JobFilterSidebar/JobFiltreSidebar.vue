<template>
  <div class="flex flex-col p-4 bg-white border-r border-solid border-brand-gray-1 w-96">
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">
          What do you want to do?
        </h3>
        <div class="flex items-center text-sm" />
        <action-button
          text="Clear filter"
          type="secondary"
        />
      </div>
      <job-filter-sidebar-organizations />
      <accordion title="Student" />
      <accordion title="Somthing" />
      <accordion title="Nonsens" />
    </section>
  </div>
</template>

<script>
import ActionButton from '@/components/Shared/ActionButton.vue';
import Accordion from '@/components/Shared/Accordion.vue';
import JobFilterSidebarOrganizations from '@/components/JobResutl/JobFilterSidebar/JobFilterSidebarOrganizations.vue';

  export default{
    name: "JobFilterSidebar",
    components: {
          ActionButton,
          Accordion,
          JobFilterSidebarOrganizations,
    }
  }
</script>