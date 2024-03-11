<template>
  <div class="container">
    <div class="scope-image">
      <img src="@/assets/test01.png" alt="Nike Air Max Sneakers" />
    </div>

    <div class="scope-title-description">
      <div class="title">
        <h2>{{ title }}</h2>
      </div>
      <div class="description">
        <p>
          {{ description }}
        </p>
      </div>
    </div>

    <div class="scope-price-inc-dec">
      <div class="price">
        <p>{{ price }}</p>
      </div>
      <div class="inc-dec">
        <button class="quantity-button">-</button>
        <span class="number-status">2</span>
        <button class="quantity-button">+</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartList",
  props: {
    image: {
      default: "Image not found",
      type: String,
    },
    title: {
      default: "Title not found",
      type: String,
    },
    description: {
      default: "Description not found",
      type: String,
    },
    price: {
      default: "Price not found",
      type: String,
    },
  },
};
</script>

<style scoped>
.container {
  width: 80%;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-sizing: border-box;
  overflow: hidden;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: auto;
}

.scope-image {
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.scope-image img {
  width: 90%;
  max-height: 100%;
  object-fit: contain;
}

.scope-title-description {
  width: 60%;
  padding: 1rem;
}

.title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.description {
  font-size: 0.9rem;
  line-height: 1.5;
}

.price {
  font-size: 1.2rem;
  font-weight: bold;
}

.inc-dec {
  display: flex;
  align-items: center;
}

.quantity-button {
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 50%;
  margin: 0 0.5rem;
}

.number-status {
  font-size: 1.1rem;
  margin: 0 0.5rem;
}
</style>
