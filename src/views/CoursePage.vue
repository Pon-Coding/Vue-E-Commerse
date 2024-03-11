<template>
  <!-- <card-box /> -->

  <div v-for="course in courseList" :key="course.title" class="grid-container">
    <card-box
      :title="course.title"
      :image="course.image"
      :des="course.des"
      class="grid-item"
    />
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
          image: "https://i.ytimg.com/vi/qZXt1Aom3Cs/maxresdefault.jpg",
          title: "The Vue.js 3 Masterclass Update Course 2024",
          des: "Learn how to build a real-world application with Vue.js 3 in the supercharged and remastered Vue.js MasterclassLearn how to build a real-world application with Vue.js 3 in the supercharged and remastered Vue.js MasterclassLearn how to build a real-world application with Vue.js 3 in the supercharged and remastered Vue.js MasterclassLearn how to build a real-world application with Vue.js 3 in the supercharged and remastered Vue.js MasterclassLearn how to build a real-world application with Vue.js 3 in the supercharged and remastered Vue.js MasterclassLearn how to build a real-world application with Vue.js 3 in the supercharged and remastered Vue.js Masterclass.",
        },
        {
          image:
            "https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png",
          title: "The Complete JavaScript Course 2024: From Zero to Expert!",
          des: "The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!",
        },
        {
          image:
            "https://images.prismic.io/qovery/c952e642-7c8c-4e2f-854e-b14a14868b3e_kotlin.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=50",
          title: "Build Responsive Real-World Websites with HTML and CSS",
          des: "Kotlin is a cross-platform, statically typed, general-purpose high-level programming language with type inference. Kotlin is designed to interoperate fully with Java, and the JVM version of Kotlin's standard library depends on the Java Class Library, but type inference allows its syntax to be more concise.",
        },
        //NEW
        {
          image:
            "https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg",
          title:
            "Kotlin is a programming language that makes coding concise, cross-platform, and fun. It is Google's preferred language for Android app development.",
          des: "Learn modern HTML5, CSS3 and web design by building a stunning website for your portfolio! Includes flexbox and CSS Grids",
        },
        {
          image:
            "https://nimblehq.co/public/images/posts/modern-approach-modularize-ios-swiftui-spm/modern-approach-modularize-ios-swiftui-spm-cover.png",
          title:
            "Swift is a general-purpose programming language that’s approachable for newcomers and powerful for experts.",
          des: "Everyone is welcome to contribute to Swift. Contributing doesn’t just mean writing code or submitting pull request — there are many different ways for you to get involved, including answering questions on the forums, reporting or triaging bugs, and participating in the Swift evolution process.",
        },
        {
          image:
            "https://miro.medium.com/v2/resize:fit:1400/1*0D9zGIQXQEIZFYD9tpRXgQ.png",
          title: "C Programming For Beginners - Master the C Language",
          des: "Have you never programmed a computer before, and think or have been told that C is a good programming language to get started with.  It is!",
        },
        {
          image:
            "https://www.macworld.com/wp-content/uploads/2023/01/learn_java_on_mac.jpg?quality=50&strip=all",
          title: "Java 17 Masterclass: Start Coding in 2024",
          des: "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
        },
        {
          image:
            "https://miro.medium.com/v2/resize:fit:1400/1*9oOlDJKiLq1KhGoOivv51A.png",
          title: "Node.js, Express, MongoDB & More: The Complete Bootcamp 2024",
          des: "Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting.",
        },
      ],
    };
  },
};
</script>
<style scoped>
.grid-container {
  display: grid;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 20px;
  float: left;
}
.grid-item {
  display: block;
  background-color: red;
}
</style>