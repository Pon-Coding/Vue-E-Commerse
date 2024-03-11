<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
  />
  <body>
    <div class="course-card">
    <div class="course-image">
      <img :src="image" :alt="title" />
    </div>
    <div class="course-details">
      <h2 class="course-title">{{ title }}</h2>
      <p class="course-description">{{ des }}</p>
      <button class="add-to-cart-btn">
        ADD TO CART <i class="fa-solid fa-cart-shopping"></i>
      </button>
    </div>
  </div>
  </body>
</template>

<script>
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
};
</script>

<style scoped>

.course-card {
  transition: ease-in-out 0.2s;

  /* float: left; */
  /* margin: 20px; */
  width: 280px;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  /* box-shadow: white 8px 8px; */
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border: 1px solid #070f2b;
  box-shadow: white 8px 8px, #070f2b 9px 9px;
}

.course-image {
  background-color: rebeccapurple;
  height: 50%; /* Set a fixed height */
  overflow: hidden;
}

.course-image img {
  transition: ease-in-out 0.2s;
  width: 100%;
  height: 100%; /* Allow the image to maintain its aspect ratio */
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.course-card:hover .course-image img {
  transition: ease-in-out 0.2s;
  transform: scale(115%);
}
.fa-cart-shopping {
  transition: 1s;

  display: none;
}

/* ANIMATION */
.course-card:hover {
  transition: ease-in-out 0.2s;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  /* width: 250px;
  height: 250px; */
  transform: translateX(-5px) translateY(-5px);
  box-shadow: #070f2b 9px 9px;
}
/* ANIMATION */

.course-details {
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.course-title {
  margin: 0;
  font-size: 20px;
  font-weight: bold;
  color: #333333;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.course-description {
  margin: 10px 0;
  font-size: 16px;
  color: #666666;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.add-to-cart-btn {
  border: none;
  background-color: #070f2b;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 0;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
}

.add-to-cart-btn:hover {
  background-color: #00adb5;
}
.add-to-cart-btn:hover .fa-cart-shopping {
  transition: 1s;
  display: inline;
}
</style>
