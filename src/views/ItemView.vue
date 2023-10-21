<template>
  <div id="item">
    <AppHeader></AppHeader>
    <AppItemCenter></AppItemCenter>
    <AppSalesman></AppSalesman>
    <div class="section">
      <div class="detail">
        <AppDetail></AppDetail>
        <AppComment></AppComment>
      </div>
      <div class="selling">
        <AppSelling></AppSelling> 
      </div>
    </div>
  </div>
</template>

<script>

import AppHeader from "@/components/ItemProduct/header/AppHeader.vue";
import AppItemCenter from "@/components/ItemProduct/Item/AppItemCenter.vue";
import AppSalesman from "@/components/ItemProduct/salesman/AppSalesman.vue";
import AppDetail from "@/components/ItemProduct/detail/AppDetail.vue";
import AppSelling from "@/components/ItemProduct/selling/AppSelling.vue";
import AppComment from "@/components/ItemProduct/comment/AppComment.vue"

export default {
  name: "ItemView",
  components: {
    AppHeader,
    AppItemCenter,
    AppSalesman,
    AppDetail,
    AppSelling,
    AppComment
  },
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#item {
  background-color: #f5f5f5f5;
  .section{
    width: 95%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    .detail{
      width: 79%;
    }
    .selling{
      width: 20%;
    }

  }
}

</style>
