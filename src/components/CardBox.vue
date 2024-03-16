<template>
  <div
    class="course-card bg-white shadow-xl rounded-lg overflow-hidden flex flex-col"
  >
    <div class="course-image aspect-w-16 h-52">
      <img
        :src="image"
        :alt="title"
        class="w-full h-full object-contain py-10 rounded-t-lg transition-transform duration-200 transform hover:scale-105"
      />
    </div>
    <div class="course-details flex flex-col justify-between p-4">
      <h2 class="course-title text-lg font-bold text-gray-800 line-clamp-2">
        {{ title }}
      </h2>
      <p class="course-description text-base text-gray-600 line-clamp-3">
        {{ des }}
      </p>
      <button
        @click="addToCart"
        class="add-to-cart-btn mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded transition-colors duration-300 hover:bg-blue-600 flex items-center justify-center"
      >
        ADD TO CART
        <i class="fas fa-cart-shopping ml-2 hidden"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { useCounterStore } from "../store/counter";
import { mapActions } from "pinia";

export default {
  name: "CourseCard",
  props: {
    image: {
      type: String,
      default: "@/assets/vue.png",
    },
    title: {
      type: String,
      default: "Title",
    },
    des: {
      type: String,
      default: "Description",
    },
  },
  methods: {
    ...mapActions(useCounterStore, ["addToCart"]),
  },
};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css");

/* Define aspect ratio */
.aspect-w-16 {
  width: 100%;
}

.aspect-h-9 {
  /* Set height to auto to dynamically adjust based on width */
  height: auto;
}

/* Maintain aspect ratio for images */
.course-image img {
  width: 100%;
  height: 100%;
}
</style>
