<template>
  <div class="about">
    <AppHeader :hiddens="hiddens"></AppHeader>
    <!-- :tên thuộc tính =giá trị truyền từ con lên  -->
    <AppBody :hidden="hidden" :block="block"></AppBody>
    <AppFooter></AppFooter>
  </div>
</template>
<script>
import AppHeader from "@/components/logIn/header/AppHeader.vue"
import AppBody from "@/components/logIn/body/AppBody.vue"
import AppFooter from "@/components/home/footer/AppFooter.vue"
export default {
  data(){
    return{
      hidden:true,
      block:true,
    }
  },
 components:{
  AppHeader,
  AppBody,
  AppFooter,
 },
 mounted() { 
   if (this.$router.currentRoute.value.query.param === "sign_in") {
      console.log(this.$router.currentRoute.value.query.param);
      this.hidden= false
      this.hiddens=false
    }
    else{
      console.log(this.$router.currentRoute.value.query.param);
      this.block=false
    }
  },
};
</script>
