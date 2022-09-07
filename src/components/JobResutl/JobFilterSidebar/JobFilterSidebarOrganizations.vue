<template>
  <accordion title="Organizations"> 
    <fieldset>
      <ul class="flex flex-row flex-wrap w-full">
        <li
          v-for="organization in UNQ_ORZ"
          :key="organization"
          class="w-1/2 p-2 text-sm font-normal"
        >
          <input
            :id="organization"
            type="checkbox"
          >
          <label
            :for="organization"
            class="ml-2"
          >{{ organization }}</label>
        </li>
      </ul>
    </fieldset>
  </accordion>
</template>

<script>
import Accordion from '@/components/Shared/Accordion.vue';

  export default{
    name: "JobFilterSidebarOrganization",
    components: {
          Accordion,
    },
    computed: {
      UNQ_ORZ(){
        return this.$store.getters.UNIQUE_ORGANIZATION
      }
    }
  }
</script>