<template>
  <accordion header="Organizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li class="w-1/2 h-8">
            <input id="Vue Tube" type="checkbox" class="mr-3" />
            <label for="Vue Tube">Vue Tube</label>
          </li>
          <li class="w-1/2 h-8">
            <input id="Between Vue And Me" type="checkbox" class="mr-3" />
            <label for="Between Vue And Me">Between Vue</label>
          </li>
          <li class="w-1/2 h-8">
            <input id="Et Vue Brute" type="checkbox" class="mr-3" />
            <label for="Et Vue Brute">Et Vue Brute</label>
          </li>
          <li class="w-1/2 h-8">
            <input id="Vue And Half Man" type="checkbox" class="mr-3" />
            <label for="Vue And Half Man">Vue And Half</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </accordion>
</template>

<script>
import Accordion from "@/components/Shared/Accordion.vue";

export default {
  name: "JobListingSidebarOrganization",
  components: {
    Accordion,
  },
};
</script>
