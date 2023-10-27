<template>
  <div id="item"  >
    <AppHeader></AppHeader>
    <AppItemCenter :acd=  "dulieu" ></AppItemCenter>
    <AppSalesman></AppSalesman>
    <div class="section">
      <div class="detail">
        <AppDetail></AppDetail>
      </div>
    </div>
    <AppProduct @abc="receive"></AppProduct>
    <AppFooter></AppFooter>


  </div>
</template>

<script>

import AppHeader from "@/components/ItemProduct/header/AppHeader.vue";
import AppItemCenter from "@/components/ItemProduct/Item/AppItemCenter.vue";
import AppSalesman from "@/components/ItemProduct/salesman/AppSalesman.vue";
import AppDetail from "@/components/ItemProduct/detail/AppDetail.vue";
import AppProduct from "@/components/ItemProduct/product/AppProduct.vue"
import AppFooter from "@/components/home/footer/AppFooter.vue"


export default {
  name: "ItemView",
  components: {
    AppHeader,
    AppItemCenter,
    AppSalesman,
    AppDetail,
    AppProduct,
    AppFooter,
   
  },
  data() {
    return {
      dulieu : null
    }
  },
  methods:{
    receive(pros){
      this.dulieu = pros
    }
  }
  
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
      width: 100%;
    }
    .selling{
      width: 0%;
    }

  }
}
// khi muốn một component hiện dữ liệu sang một component khác (cùng cha) : thì phải $emit dữ liệu lên cha , từ tra truyền xuống con khác 
// vd AppItemCenter và AppProduct cùng là con của ItemView : thì phải truyền như sau :
// AppProduct gửi dữ liệu lên qua $emit => ItemView nhận dữ liệu ý thông qua thẻ component con <AppProduct><AppProduct>
// dữ liệu vừa nhận ItemView gán vào 1 biến và truyền nó xuống thông qua props

</style>
