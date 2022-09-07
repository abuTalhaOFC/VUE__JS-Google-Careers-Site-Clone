<template>
  <div class="flex flex-col mt-1 py-5  border-b border-brand-gray-1">
    <div
      class="flex flex-rew w-full justify-between items-center  cursor-pointer"
      @click="open"
    >
      <div class="flex flex-wrap ">
        <h3 class="text-base font-semibold">
          {{ title }}
        </h3>
      </div>
      <div class="flex items-center">
        <font-awesome-icon :icon="arrowChange" />
      </div>
    </div>

    <div
      v-if="isOpen"
      class=" mt-5"
    >
      <slot>
        <h1 class="text bg-red-600 font-bold">
          Put here something
        </h1>
      </slot>
    </div>
  </div>
</template>

<script>
  export default{
    name: "Accordion",
    props:{
      title:{
        type: String,
        required: true,
      }

    },
    data(){
        return {
          isOpen: false
        }
    },
    computed: {
      arrowChange(){
        return this.isOpen ? ['fas', 'angle-up'] : ['fas', 'angle-down']
      },
    },
    methods:{
      open(){
        this.isOpen = !this.isOpen
      }
    }

  }
</script>