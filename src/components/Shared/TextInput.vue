<template>
  <input
    :value="value"
    type="text"
    :placeholder="placeholder"
    class="w-full text-lg font-normal focus:outline-none"
    @input="handelInput"
  />
</template>

<script>
export default {
  name: "TextInput",
  props: {
    placeholder: {
      type: String,
      required: false,
      default: "",
    },
  },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    handelInput(e) {
      this.value = e.target.value;
      this.$emit("handelInput", this.value);
    },
  },
};
</script>
