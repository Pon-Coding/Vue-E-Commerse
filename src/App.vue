<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <CardBox
    title="Vue JS || The Best Language In 2024 Join Us Now So What Are You Waiting For ? Join Now Dude Don't Miss The Oppoturniity."
  /> -->
  <NavBar />
  <!-- <div v-for="course in courseList" :key="course.title">
    <CardBox :title="course.title" :image="course.image" :des="course.des" />
  </div> -->
  <!-- <home-page /> -->
  <router-view></router-view>
</template>

<script>
// import CardBox from "@/components/CardBox.vue";
import NavBar from "@/components/NavBar.vue";
// import HomePage from "@/views/HomePage.vue";

export default {
  name: "App",
  components: {
    // CardBox,
    NavBar,
    // HomePage,
  },
  
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
