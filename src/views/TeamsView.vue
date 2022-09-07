<template>
  <header-container>
    <template #title>
      <h1 class="w-full text-4xl font-semibold">Teams</h1>
    </template>
    <template #subtitle>
      <div class="my-4 w-full flex justify-center items-center">
        <h1 class="w-1/2 text-base font-light">
          Together, we create access to information and build products that
          improve people's lives. Want to be a Googler? Find your role.
        </h1>
      </div>
    </template>
  </header-container>
</template>

<script>
import HeaderContainer from "@/components/Shared/HeaderContainer.vue";

export default {
  name: "TeamsView",
  components: {
    HeaderContainer,
  },
};
</script>
