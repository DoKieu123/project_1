<template>
  <div class="home">
    <div class="header">
    <AppHeader ></AppHeader>
    </div>
   
    <attenTion></attenTion>
    <AppList></AppList>
    <AppSale></AppSale>

    <AppDiscount></AppDiscount>
    <AppSearch> </AppSearch>
    
    <AppProduct ></AppProduct>
    <AppFooter></AppFooter>
   
    
  </div>
</template>

<script>
import AppHeader from "@/components/home/header/AppHeader.vue";
import attenTion from "@/components/home/attention/attenTion.vue";
import AppList from "@/components/home/list/AppList.vue"
import AppSale from "@/components/home/sale/AppSale.vue"
import AppProduct from "@/components/home/product/AppProduct.vue"
import AppSearch from "@/components/home/search/AppSearch.vue"
import AppDiscount from "@/components/home/discount/AppDiscount.vue"
import AppFooter from "@/components/home/footer/AppFooter.vue"
export default {
  name: "HomeView",
  components: {
    AppHeader,
    attenTion,
    AppList,
    AppSale,
    AppProduct,
    AppDiscount,
    AppSearch,
    AppFooter,
  
  
  },
  data() {
    return {
      nameproduct: ""
    }
  },
  methods:{
   
  }
};
</script>
<style>
.home{
display: block;
}
.header{
  z-index: 1000000;
}
</style>
