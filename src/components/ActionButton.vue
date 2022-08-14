<template>
  <button :class="{ primary: isPrimary }">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: ["text"],
  data() {
    return {
      isPrimary: true,
    };
  },
};
</script>

<style scoped>
button {
  @apply px-5 py-3 font-medium;
}
.primary {
  @apply text-white border-0 rounded bg-brand-blue-1 hover:shadow-blue;
}
</style>
