<template>
  <form
    class="flex h-12 w-full items-center border border-solid border-brand-gray-1 rounded-3xl mt-14"
    @submit.prevent="goToJobResultVue"
  >
    <font-awesome-icon
      :icon="['fas', 'search']"
      class="ml-4 mr-3"
    />

    <div class="flex flex-nowrap flex-1 h-full text-base font-light ">
      <div class="relative flex items-center flex-1 h-full  border-b-2 border-b-transparent hover:border-brand-blue-2      ">
        <label class="absolute left-0 -top-10">Role</label>
        <!-- <input
          v-model="role"
          type="text"
          placeholder="Softeare engineer"
          class="w-full text-lg font-normal focus:outline-none"
        > -->
        <text-input
          placeholder="Software engineer"
          :value="role"
          @handelInput="updateRole"
        />
      </div>
      <span
        class="flex items-center h-full px-3 border-l border-r text-brand-gray-3 border-brand-gray-3 bg-brand-gray-2"
      >in</span>
      <div class="relative flex items-center flex-1 h-full pl-3    border-b-2 border-b-transparent hover:border-brand-blue-2     ">
        <label class="absolute  left-0 -top-10">Where?</label>
        <!-- <input
          v-model="location"
          type="text"
          placeholder="Los Angeles"
          class="w-full text-lg font-normal focus:outline-none"
        > -->
        <text-input
          placeholder="Los Angelese"
          :value="location"
          @handelInput="updateLocation"
        />
      </div>
    </div>
    <action-button
      text="Search"
      type="secondary"
      class="rounded-r-3xl"
    />
  </form>
</template>



<script>
import ActionButton from "@/components/Shared/ActionButton.vue"
import TextInput from "@/components/Shared/TextInput.vue"

export default{
  name: "JobSearchFrom",
  components:{
    ActionButton,
    TextInput,
  },
  data(){
    return{
      role: "",
      location: ""
    }
  },
  methods: {
    updateRole(payload){
        
        this.role = payload
        
    },
    updateLocation(payload){
        
        this.location = payload
        
    },
    goToJobResultVue(){
          this.$router.push({
            name: "JobResult",
            query: {role: this.role, location: this.location}
          })
    }
  }

}
</script>