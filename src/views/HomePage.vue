<template>
  <body>
    <div class="banner-box">
      <div class="first-box">
        <div class="box-title">
          The <span class="one-site">#1 Site</span> for <br />
          E-Learning
        </div>
        <div class="box-des">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          veniam consequuntur quod dicta cumque vitae temporibus laudantium sit
          dolor! Animi nulla totam cum perspiciatis amet excepturi at sint
          exercitationem voluptate?
        </div>
        <button class="btn-start">
          <i class="fa-solid fa-graduation-cap"></i> START LEARN TODAY!
        </button>
        <button class="btn-start">
          <i class="fa-solid fa-circle-info"></i> ABOUT COURSE!
        </button>
      </div>

      <div class="second-box">
        <img class="img-banner" src="@/assets/image_1.svg" alt="" />
      </div>
    </div>

    <!-- About Course -->
    <div class="detail-box">
      <div class="image-detail-container">
        <img class="img-detail" src="@/assets/programing.svg" alt="" />
      </div>
      <div class="about-course-box">
        <div class="title">#COURSE AVAILABLE IN OUR WEBSITE</div>

        <div class="description">
          Master in-demand computer science skills. Launch your tech career with
          our extensive library of courses, including the latest programming
          languages.
        </div>

        <div class="course-detail">
          <div class="half-box">
            <label class="group-label">
              <i class="fa-solid fa-circle-check"></i> 100+ Programing Languages
            </label>
            <label class="group-label">
              <i class="fa-solid fa-circle-check"></i> Standard
            </label>
            <label class="group-label">
              <i class="fa-solid fa-circle-check"></i> Experience Teacher 20
              Years+
            </label>
          </div>

          <div class="half-box">
            <label class="group-label">
              <i class="fa-solid fa-circle-check"></i> Speak Khmer
            </label>
            <label class="group-label">
              <i class="fa-solid fa-circle-check"></i> Document in Khmer
              Language
            </label>
            <label class="group-label">
              <i class="fa-solid fa-circle-check"></i> Certificate
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

<style scoped>
body {
  padding: 0;
  margin: 0 50px;
  /* background-color: black; */
}
.banner-box {
  float: left;
}
.box-title {
  display: block;
  font-size: 85px;
  font-weight: bold;
  color: black;
  /* background-color: yellow; */
  text-align: start;
  /* height: 100px; */
  width: 100%;
}
.one-site {
  color: #070f2b;
}
.box-des {
  margin-top: 15px;
  color: black;
  width: 100%;
  display: block;
  font-size: 20px;
  /* background-color: yellow; */
  text-align: start;
}
.btn-start {
  width: 80%;
  margin-top: 15px;
  display: block;
  background-color: #070f2b;
  font-size: 20px;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 0;
}
.first-box {
  width: 50%;
  float: left;
}
.second-box {
  width: 50%;
  /* background-color: dodgerblue; */
  display: flex;
  align-items: center;
  justify-content: center;
  float: left;
}
.img-banner {
  /* background-color: red; */
  float: left;
  width: 80%;
}

/* About Detail */
.about-course-box {
  width: 50%;
  height: 100%;
  float: right;
  justify-content: end;
  /* background-color: green; */
}
.title {
  display: block;
  font-size: 30px;
  font-weight: bold;
  color: black;
  /* background-color: yellow; */
  text-align: start;
  /* height: 100px; */
  width: 100%;
}
.description {
  margin-top: 15px;
  color: black;
  width: 100%;
  display: block;
  font-size: 20px;
  /* background-color: yellow; */
  text-align: start;
}
.course-detail {
  background-color: yellow;
  justify-content: start;
  width: 100%;
}
.half-box {
  float: left;
  width: 50%;
}
.group-label {
  font-size: 20px;
  margin: 30px 0;
  display: block;
  display: flex;
  justify-content: start;
  color: black;
}
.fa-solid {
  margin-right: 5px;
}
.fa-circle-check {
  color: #070f2b;
}
.detail-box {
  height: 300px;
  width: 100%;
  /* float: right; */
}
.image-detail-container {
  /* background-color: red; */
  width: 50%;
  height: 100%;
  float: left;
}
.img-detail {
  /* width: 100%; */
  height: 100%;
}
/* About Detail */
</style>