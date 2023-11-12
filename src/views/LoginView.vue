<template>
  <div class="about">
    <AppHeader></AppHeader>
    <AppBody></AppBody>
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
      
    }
  },
 components:{
  AppHeader,
  AppBody,
  AppFooter,
 },
 
};
</script>
