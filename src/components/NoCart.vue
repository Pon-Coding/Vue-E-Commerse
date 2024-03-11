<template>
  <div class="container">
    <!-- Logo -->
    <div class="box-logo">
      <img src="@/assets/cart_logo.svg" alt="Cart Logo" />
    </div>
    <!-- Title -->
    <div class="box-title">
      <p>There are no products in the cart!</p>
    </div>
    <!-- Button Join Course Now -->
    <div class="btn-join-now">
      <button>Join Course Now!</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoCart",
};
</script>

<style scoped>
/* Add your scoped styles here */
.container {
  text-align: center;
  margin-top: 50px;
}

.box-logo img {
  width: 100px;
  height: auto;
}

.box-title p {
  font-size: 20px;
  color: #333;
  margin-top: 20px;
}

.btn-join-now button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
}

.btn-join-now button:hover {
  background-color: #0056b3;
}
</style>
