<template>
  <div v-for="item in items" :key="item.image" style="margin: 25px 0">
    <cart-list
      :image="item.image"
      :title="item.title"
      :description="item.description"
      :price="item.price"
      class="cart-list"
    />
  </div>
</template>
<script>
import CartList from "@/components/CartList.vue";
export default {
  name: "CartPage",
  components: {
    CartList,
  },
  data() {
    return {
      items: [
        {
          image: "@/assets/test01.png",
          title: "Shoe Nike Air Max Sneakers Running",
          description:
            "Say hello to the next generation of Air technology. The Air Max Dn features our Dynamic Air unit system of dual-pressure tubes, creating a reactive sensation with every step. This results in a futuristic design that’s comfortable enough to wear from day to night. Go ahead—Feel the Unreal.",
          price: "$287",
        },
        {
          image: "@/assets/test02.png",
          title: "Adidas Ultraboost Running Shoes",
          description:
            "Experience unparalleled comfort with the Adidas Ultraboost. Its primeknit upper offers a snug fit, while the boost midsole provides exceptional energy return, making every stride effortless. Whether you're hitting the track or running errands, these shoes will keep you comfortable and stylish.",
          price: "$200",
        },
        {
          image: "@/assets/test03.png",
          title: "New Balance Fresh Foam Zante Pursuit",
          description:
            "Step up your running game with the New Balance Fresh Foam Zante Pursuit. Featuring Fresh Foam midsole cushioning, these shoes provide a smooth, responsive ride mile after mile. The sleek design and lightweight construction make them perfect for both training runs and race days.",
          price: "$150",
        },
        {
          image: "@/assets/test04.png",
          title: "Under Armour HOVR Sonic 4 Running Shoes",
          description:
            "Elevate your performance with the Under Armour HOVR Sonic 4. These running shoes feature UA HOVR technology, providing a 'zero-gravity' feel to maintain energy return that helps eliminate impact step after step. With breathable upper and comfortable cushioning, these shoes are perfect for long-distance runs.",
          price: "$120",
        },
        {
          image: "@/assets/test05.png",
          title: "Brooks Ghost 14 Running Shoes",
          description:
            "Find your stride with the Brooks Ghost 14. Engineered with DNA LOFT cushioning, these shoes provide a soft and luxurious feeling underfoot without sacrificing responsiveness or durability. Whether you're hitting the pavement or the trails, these shoes offer a smooth ride from start to finish.",
          price: "$160",
        },
        {
          image: "@/assets/test06.png",
          title: "Asics Gel-Nimbus 24 Running Shoes",
          description:
            "Experience ultimate comfort with the Asics Gel-Nimbus 24. Featuring Gel cushioning technology, these shoes offer exceptional shock absorption and a smooth transition from heel to toe. With a breathable mesh upper and supportive fit, they're perfect for long-distance runners seeking plush cushioning and reliable performance.",
          price: "$180",
        },
        {
          image: "@/assets/test07.png",
          title: "Hoka One One Clifton 8 Running Shoes",
          description:
            "Discover maximum cushioning and a smooth ride with the Hoka One One Clifton 8. These shoes feature a lightweight yet cushioned midsole, providing a responsive feel with every step. Whether you're logging miles on the road or hitting the trails, the Clifton 8 offers comfort and support for all your runs.",
          price: "$160",
        },
        {
          image: "@/assets/test08.png",
          title: "Saucony Ride 14 Running Shoes",
          description:
            "Enjoy a smooth and responsive ride with the Saucony Ride 14. These shoes feature PWRRUN cushioning, providing a plush underfoot feel that's both comfortable and supportive. With a breathable mesh upper and secure fit, they're perfect for runners seeking reliable cushioning and versatility.",
          price: "$130",
        },
        {
          image: "@/assets/test09.png",
          title: "Nike ZoomX Invincible Run Flyknit",
          description:
            "Experience unmatched energy return with the Nike ZoomX Invincible Run Flyknit. Featuring ZoomX foam cushioning, these shoes offer a responsive and cushioned feel with every stride. The Flyknit upper provides a secure and breathable fit, making them ideal for long-distance runs and everyday training.",
          price: "$180",
        },
        {
          image: "@/assets/test10.png",
          title: "Adidas Solarboost 3 Running Shoes",
          description:
            "Hit the ground running with the Adidas Solarboost 3. These shoes feature Boost cushioning, providing a responsive and energized feel with every step. The lightweight upper offers a supportive and breathable fit, while the durable outsole ensures traction on various surfaces. Whether you're training for a race or logging daily miles, the Solarboost 3 delivers comfort and performance.",
          price: "$160",
        },
      ],
    };
  },
};
</script>
<style scoped>
.cart-list {
  /* margin: 20px 0; */
}
</style>