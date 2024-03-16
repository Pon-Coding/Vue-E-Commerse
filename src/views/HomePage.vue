<template>
  <body class="bg-gray-100">
    <div
      class="banner-box flex flex-wrap justify-between items-center py-12 px-4 md:px-12 lg:px-24 xl:px-32"
    >
      <div class="first-box w-full md:w-1/2 md:pr-8 lg:pr-16 xl:pr-24">
        <div
          class="box-title text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
        >
          The <span class="one-site text-blue-900">#1 Site</span> for
          <br class="hidden md:inline" />
          E-Learning
        </div>
        <div class="box-des text-lg md:text-xl text-gray-800 mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          veniam consequuntur quod dicta cumque vitae temporibus laudantium sit
          dolor! Animi nulla totam cum perspiciatis amet excepturi at sint
          exercitationem voluptate?
        </div>
        <button
          class="btn-start px-8 py-3 bg-blue-900 text-white text-lg md:text-xl font-bold rounded-lg mr-4"
        >
          <i class="fa-solid fa-graduation-cap"></i> START LEARN TODAY!
        </button>
      </div>

      <div class="second-box w-full md:w-1/2 mt-8 md:mt-0">
        <img
          class="img-banner mx-auto w-3/4 md:w-full"
          src="@/assets/image_1.svg"
          alt=""
        />
      </div>
    </div>

    <!-- About Course -->
    <div
      class="detail-box flex flex-wrap items-center py-12 px-4 md:px-12 lg:px-24 xl:px-32"
    >
      <div
        class="image-detail-container w-full md:w-1/2 md:pr-8 lg:pr-16 xl:pr-24"
      >
        <img class="img-detail w-full" src="@/assets/programing.svg" alt="" />
      </div>
      <div class="about-course-box w-full md:w-1/2 md:pl-8 lg:pl-16 xl:pl-24">
        <div
          class="title text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6"
        >
          #COURSE AVAILABLE IN OUR WEBSITE
        </div>

        <div class="description text-lg md:text-xl text-gray-800 mb-8">
          Master in-demand computer science skills. Launch your tech career with
          our extensive library of courses, including the latest programming
          languages.
        </div>

        <div class="course-detail mb-8 md:mb-0 flex flex-wrap justify-between">
          <div class="half-box w-full md:w-5/12">
            <label
              class="group-label flex items-center text-lg md:text-xl text-gray-800 mb-6 md:mb-4"
            >
              <i class="fa-solid fa-circle-check text-blue-900 mr-2"></i> 100+
              Languages
            </label>
            <label
              class="group-label flex items-center text-lg md:text-xl text-gray-800 mb-6 md:mb-4"
            >
              <i class="fa-solid fa-circle-check text-blue-900 mr-2"></i>
              Standard
            </label>
            <label
              class="group-label flex items-center text-lg md:text-xl text-gray-800 mb-6 md:mb-4"
            >
              <i class="fa-solid fa-circle-check text-blue-900 mr-2"></i>
              Experience
            </label>
          </div>

          <div class="half-box w-full md:w-5/12">
            <label
              class="group-label flex items-center text-lg md:text-xl text-gray-800 mb-6 md:mb-4"
            >
              <i class="fa-solid fa-circle-check text-blue-900 mr-2"></i> Speak
              Khmer
            </label>
            <label
              class="group-label flex items-center text-lg md:text-xl text-gray-800 mb-6 md:mb-4"
            >
              <i class="fa-solid fa-circle-check text-blue-900 mr-2"></i>
              Khmer Document
            </label>
            <label
              class="group-label flex items-center text-lg md:text-xl text-gray-800 mb-6 md:mb-4"
            >
              <i class="fa-solid fa-circle-check text-blue-900 mr-2"></i>
              Certificate
            </label>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "HomePage",
};
</script>