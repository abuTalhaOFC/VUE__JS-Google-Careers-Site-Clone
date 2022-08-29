<template>
  <input
    type="text"
    :value="value"
    :placeholder="placeholder"
    class="w-full h-full text-lg font-normal focus:outline-none"
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