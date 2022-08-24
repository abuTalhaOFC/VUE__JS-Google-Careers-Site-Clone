<template>
  <section class="mb-16">
    <h1 class="font-bold tracking-tighter text-8xl mb-14">
      <span :class="changeTitleColor">{{ action }}</span>
      <br />
      for everyone
    </h1>
    <h2 class="text-3xl">Find your next job at PRO Corp.</h2>
  </section>
</template>

<script>
import nextElementsList from "@/utils/nextElementsList";
export default {
  name: "Headline",
  data() {
    return {
      action: "Build",
      interval: null,
    };
  },
  computed: {
    changeTitleColor() {
      return {
        [this.action.toLowerCase()]: true,
      };
    },
  },
  created() {
    this.changeTitle();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        const actions = ["Build", "Create", "Design", "Code"];
        // const currentIndex = actions.indexOf(this.action);
        // const nextIndex = (currentIndex + 1) % 4;
        // const nextAction = actions[nextIndex];

        this.action = nextElementsList(this.action, actions);
      }, 3000);
    },
  },
};
</script>

<style scoped>
.build {
  color: #1a73e8;
}
.create {
  color: #34a853;
}
.design {
  color: #f9ab00;
}
.code {
  color: #d93025;
}
</style>
