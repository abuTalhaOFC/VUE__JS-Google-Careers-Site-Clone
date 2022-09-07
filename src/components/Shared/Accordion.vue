<template>
  <div class="py-5 border-b border-solid border-brand-gray-1">
    <div
      class="flex flex-wrap cursor-pointer flex-row items-center justify-between"
      @click="open"
    >
      <h3 class="text-base font-semibold">{{ header }}</h3>
      <font-awesome-icon :icon="iconClassToggle" />
    </div>

    <div v-if="isOpen" class="w-full mt-5">
      <slot
        ><h4 class="text-sm text-red-600">
          !!Opss Slot need some content
        </h4></slot
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Accordion",
  props: {
    header: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },

  computed: {
    iconClassToggle() {
      return this.isOpen ? ["fas", "angle-up"] : ["fas", "angle-down"];
    },
  },
  methods: {
    open() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
