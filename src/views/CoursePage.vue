<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mx-10 pt-10"
  >
    <div v-for="course in courseList" :key="course.title" class="w-full">
      <card-box
        :title="course.title"
        :image="course.image"
        :des="course.des"
        class="w-full"
      />
    </div>
  </div>
</template>

<script>
import CardBox from "@/components/CardBox.vue";

export default {
  name: "CoursePage",
  components: {
    CardBox,
  },
  data() {
    return {
      courseList: [
        {
          image: require("@/assets/shoe1.png"),
          title: "The Vue.js 3 Masterclass Update Course 2024",
          des: "Learn how to build a real-world application with Vue.js 3 in the supercharged and remastered Vue.js MasterclassLearn how to build a real-world application with Vue.js 3 in the supercharged and remastered Vue.js MasterclassLearn how to build a real-world application with Vue.js 3 in the supercharged and remastered Vue.js MasterclassLearn how to build a real-world application with Vue.js 3 in the supercharged and remastered Vue.js MasterclassLearn how to build a real-world application with Vue.js 3 in the supercharged and remastered Vue.js MasterclassLearn how to build a real-world application with Vue.js 3 in the supercharged and remastered Vue.js Masterclass.",
        },
        {
          image: require("@/assets/shoe2.png"),
          title: "The Complete JavaScript Course 2024: From Zero to Expert!",
          des: "The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!",
        },
        {
          image: require("@/assets/shoe3.png"),
          title: "Build Responsive Real-World Websites with HTML and CSS",
          des: "Kotlin is a cross-platform, statically typed, general-purpose high-level programming language with type inference. Kotlin is designed to interoperate fully with Java, and the JVM version of Kotlin's standard library depends on the Java Class Library, but type inference allows its syntax to be more concise.",
        },
        //NEW
        {
          image: require("@/assets/shoe4.png"),
          title:
            "Kotlin is a programming language that makes coding concise, cross-platform, and fun. It is Google's preferred language for Android app development.",
          des: "Learn modern HTML5, CSS3 and web design by building a stunning website for your portfolio! Includes flexbox and CSS Grids",
        },
        {
          image: require("@/assets/shoe5.png"),
          title:
            "Swift is a general-purpose programming language that’s approachable for newcomers and powerful for experts.",
          des: "Everyone is welcome to contribute to Swift. Contributing doesn’t just mean writing code or submitting pull request — there are many different ways for you to get involved, including answering questions on the forums, reporting or triaging bugs, and participating in the Swift evolution process.",
        },
        {
          image: require("@/assets/shoe6.png"),
          title: "C Programming For Beginners - Master the C Language",
          des: "Have you never programmed a computer before, and think or have been told that C is a good programming language to get started with.  It is!",
        },
        {
          image: require("@/assets/shoe7.png"),
          title: "Java 17 Masterclass: Start Coding in 2024",
          des: "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
        },
        {
          image: require("@/assets/shoe9.png"),
          title: "Node.js, Express, MongoDB & More: The Complete Bootcamp 2024",
          des: "Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting.",
        },
        {
          image: require("@/assets/shoe10.png"),
          title: "Node.js, Express, MongoDB & More: The Complete Bootcamp 2024",
          des: "Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting.",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* No scoped styles needed as Tailwind CSS is used */
</style>


