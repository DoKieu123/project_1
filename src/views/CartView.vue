<template>
  <div id="cart">
    <AppHeader></AppHeader>

    <AppProductCart></AppProductCart>
   <AppProduct></AppProduct>
    <AppFooter></AppFooter>
    <div class="chat">
      <i class="fa-solid fa-message"></i>
      Chat
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/cart/header/AppHeader.vue";
import AppProductCart from "@/components/cart/productCart/AppProductCart.vue";
import AppProduct from "@/components/cart/product/AppProduct.vue";
import AppFooter from "@/components/home/footer/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppProductCart,
    AppProduct,
    AppFooter
  },
};
</script>

<style lang="scss" scoped>
#cart {
  background-color: #f5f5f5f5;
  height: 100%;
  position: relative;
  .chat {
    position: fixed;
    bottom: 0px;
    right: 23px;
    background-color: rgb(235, 52, 24);
    width: 100px;
    color: white;
    padding: 10px;
    box-shadow: 0px 5px 3px rgb(211, 66, 21);
    border-radius: 2px;
  }
}
</style>
