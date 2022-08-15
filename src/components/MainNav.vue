<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <!-- Company Logo Start -->
        <a :href="url" class="flex items-center h-full text-xl">{{
          company
        }}</a>
        <!-- Company Logo end -->
        <!-- Nav menu start -->
        <nav class="h-full ml-12">
          <ul class="flex h-full m-0 p-0 list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem"
              class="h-full ml-9 first:ml-0"
            >
              <a href="" class="flex items-center h-full py-2.5">{{
                menuItem
              }}</a>
            </li>
          </ul>
        </nav>
        <!-- Nav menu end -->
        <!-- SignIn btn & profile img start -->
        <div class="flex items-center h-full ml-auto">
          <profile-image v-if="isLogedIn" @click="handelClick" />
          <action-button
            type="primary"
            text="Sign in"
            v-else
            @click="handelClick"
          />
        </div>
        <!-- SignIn btn & profile img end -->
      </div>
    </div>
  </header>
</template>

<script>
import ActionButton from "./ActionButton.vue";
import ProfileImage from "./ProfileImage.vue";

export default {
  name: "MainNav",

  components: {
    ActionButton,
    ProfileImage,
  },
  data() {
    return {
      company: "Google Careers",
      url: "https://react.protalha.com",
      menuItems: [
        "Teams",
        "Location",
        "Life at PRO",
        "How we hire",
        "Students",
        "Jobs",
      ],
      isLogedIn: false,
    };
  },
  methods: {
    handelClick() {
      this.isLogedIn ? (this.isLogedIn = false) : (this.isLogedIn = true);
    },
  },
};
</script>
