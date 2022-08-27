<template>
  <input
    type="text"
    :value="value"
    :placeholder="placeholder"
    class="w-full h-full text-lg font-normal border-b-2 border-b-transparent hover:border-brand-blue-2 focus:outline-none   focus:border-brand-blue-2"
    @input="sentInputToParent"
  >
</template>

<script>
export default{
  name : "TextInput",  
  props: {
      placeholder: {
        type: String,
        required: false,
        default: "",
      },
    value: {
      type: String,
      required: true
    }
  },
  methods: {
    sentInputToParent(e){
          
          this.$emit("handelInput", e.target.value )
    }
  }


}
</script>