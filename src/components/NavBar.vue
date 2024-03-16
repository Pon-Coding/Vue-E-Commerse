<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
  />
  <nav
    class="nav-bar fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 py-2 bg-gray-800 text-white dark:bg-gray-900"
  >
    <div class="nav-logo">
      <img src="@/assets/ropon_white.svg" alt="" class="h-14 w-auto" />
    </div>
    <div class="nav-container flex space-x-4">
      <router-link
        to="/"
        class="nav-link flex items-center hover:bg-gray-700 text-sm md:text-xl"
      >
        <i class="fa-solid fa-home mr-2 text-xl"></i>Home
      </router-link>
      <router-link
        to="/course"
        class="nav-link flex items-center hover:bg-gray-700 text-sm md:text-xl"
      >
        <i class="fa-solid fa-graduation-cap mr-2 text-xl"></i>Course
      </router-link>
    </div>
    <span
      class="relative inline-flex items-center rounded-full bg-white text-white font-bold"
    >
      <i
        class="fa-solid fa-shopping-cart text-xl text-red-500 bg-white p-3 rounded-full"
      ></i>
      <span
        class="absolute top-0 right-0 rounded-full bg-red-500 text-white px-1 text-xs"
        v-if="count > 0"
      >
        {{ count }}
      </span>
    </span>
  </nav>
</template>







<script>
import { useCounterStore } from "../store/counter";
import { mapState } from "pinia";
export default {
  name: "NavBar",
  computed: {
    ...mapState(useCounterStore, ["count"]),
  },
};
</script>

<style scoped>
</style>