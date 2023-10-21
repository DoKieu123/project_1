<template>
  <div class="content">
    <div class="left">
      <div class="img_important">
        <img :src="img" alt="" v-if="hinden" />
        <img :src="mainImage" alt="" v-else>
      </div>
      <ul class="img_list">
        <li class="red" v-for="(item,index) in list" :key="index" >
          <img :src="item" alt="" 
           @mouseenter="showMainImage(item)"
          @mouseleave="clearMainImage"/>
        </li>
      </ul>
      <ul class="social_like">
        <ul class="social">
          Chia sẻ :
          <li>
            <a href=""><i class="fa-brands fa-facebook-messenger"></i></a>
          </li>
          <li>
            <a href=""
              ><i
                class="fa-brands fa-facebook"
                style="color: rgb(21, 6, 181)"
              ></i
            ></a>
          </li>
          <li>
            <a href=""
              ><i
                class="fa-brands fa-pinterest"
                style="color: rgb(213, 21, 11)"
              ></i
            ></a>
          </li>
          <li>
            <a href=""
              ><i
                class="fa-brands fa-twitter"
                style="color: rgb(16, 143, 198)"
              ></i
            ></a>
          </li>
        </ul>
        <div class="like">
          <i
            class="fa-regular fa-heart"
            style="color: rgb(213, 34, 30); font-size: 22px"
          ></i>
          Đã thích(78)
        </div>
      </ul>
    </div>
    <div class="right">
      <h5>
        <span>Yêu Thích</span>{{ name }}
      </h5>
      <div class="describe_report">
        <ul class="describe">
          <li class="star">
            <span style="color: red">4.9</span> <i class="fa-solid fa-star"></i
            ><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
            ><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
          </li>
          <li><span>170</span> Đánh Giá</li>
          <li><span>776 </span> Đã Bán</li>
        </ul>
        <div class="report">
          <a href=""> Tố cáo</a>
        </div>
      </div>
      <div class="reduce">
        <div class="nike">đ 99.000</div>
        <h6>{{ price }} đ</h6>
        <span> 30% GIẢM </span>
      </div>
      <ul class="subtitle">
        <li>
          <span>Deal Sốc</span>
          <div>Mua để nhận quà</div>
        </li>
        <li>
          <span>Bảo Hiểm</span>
          <div class="know">
            <p>Bảo hiểm Thời trang <span class="new">Mới</span></p>
            <a href="">Tìm hiểu thêm</a>
          </div>
        </li>
        <li>
          <span>Vận Chuyển</span>
          <div>
            <div class="free">
              <img src="@/assets/item-product/vanchuyen.png" alt="" />
              Miễn phí vận chuyển
            </div>
            <div class="left">
              <i class="fa-solid fa-car"></i> <span>Vận Chuyển Tới</span>
              <p>Hà Nội <i class="fa-solid fa-chevron-up fa-rotate-180"></i> </p>
            </div>
            <div class="transport">
              <span>Phí Vận Chuyển</span>
              <p>đ0 <i class="fa-solid fa-chevron-up fa-rotate-180"></i></p>
            </div>
          </div>
        </li>
        <li class="color">
          <span>Loại</span>
          <div>
            <ul class="list_color">
              <li><a href="">Trắng Đen 36-37</a></li>
              <li><a href="">Vàng Đen 38-39</a></li>
              <li><a href="">Vàng Đen 40-41</a></li>
              <li><a href="">Vàng Đen 42-43</a></li>
              <li><a href="">Trắng Đen 44-45</a></li>
              <li><a href="">ngẫu nhiên</a></li>
            </ul>
          </div>
        </li>
        <li>
          <span>Số Lượng</span>
          <div class="number">
            <div class="quantity">
              <span>-</span>
              <span>1</span>
              <span>+</span>
            </div>
            <div>
              <span>18244</span>
              sản phẩm có sẵn
            </div>
          </div>
        </li>
      </ul>
      <div class="btn">
        <button class="cart">
          <i class="fa-solid fa-cart-shopping"></i> Thêm Vào Giỏ Hàng
        </button>
        <button class="buy">Mua Ngay</button>
      </div>
      <div class="boder">
        <div class="black">
          <img src="@/assets/item-product/baove.png" alt="" />
          Shopee Đảm Bảo
        </div>
        <span>3 Ngày Trả Hàng / Hoàn Tiền</span>
      </div>
    </div>
  </div>
</template>

<script>
import useProStore from "@/store/product";
import { mapStores } from "pinia";
export default {
  props:["id"],
  data() {
    return {
      selectItem: null,
      hinden: true
    }
  },
  mounted(){
    console.log(this.id);
  },
 
  computed: {
    ...mapStores(useProStore),
  

    img(){
      return this.selectItem.link;
    },
    name(){
      return this.selectItem.describe
    },
    price(){
        return this.selectItem.price
    },
    list(){
      return this.selectItem.list
    }
  },
  //  tìm kiếm một "sản phẩm" cụ thể trong mảng allproduct.
  // allCoaches dựa trên giá trị id và sau đó gán đối tượng sản phẩm tìm thấy vào thuộc tính selectedCoach của component
  created() {
    this.selectItem = useProStore().allproduct.find(
      (product) => product.id === this.$route.params.id
      )
      console.log(this.selectItem.list);
  },
  methods: {
    showMainImage(imageUrl) {
      this.hinden = !this.hinden
      this.mainImage = imageUrl; // Gán hình ảnh chính bằng hình ảnh được hover
    },
    clearMainImage() {
      this.mainImage = ''; // Xóa hình ảnh chính khi không hover
    },
  }

};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
.content {
  width: 95%;
  margin: auto;
  background-color: white;
  display: flex;
  margin-top: 30px;
  padding: 20px;
}
.left {
  width: 40%;
  .img_important img {
    width: 99%;
  }
  .img_list {
    display: flex;
    margin-top: 10px;

    li {
      width: calc(100% / 5);
      img {
        width: 95%;
      }
    }
  }
  .social_like {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;

    ul {
      display: flex;
      padding: 0px 35px;
      li {
        padding: 0px 3px;
        i {
          font-size: 25px;
        }
      }
    }
    .like {
      border-left: 1px solid #dedadaf5;
      padding: 0px 42px;
    }
  }
}
.right {
  width: 58%;
  padding: 8px 17px;
  h5 {
    text-align: left;
    display: inline-flex;
    font-size: 18px;
    color: black;
    font-family: Arial, Helvetica, sans-serif;
    span {
      margin-right: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 18px;
      width: 80px;
      background-color: rgba(223, 56, 10, 0.909);
      color: white;
      font-size: 13px;
      border-radius: 2px;
    }
  }
  .describe_report {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    a {
      color: #9e9c9c;
      font-size: 14px;
    }
    ul {
      display: flex;
      li {
        padding: 0px 20px;
        font-size: 14px;
        color: #9e9c9c;
        span {
          color: black;
        }
      }
      li:nth-child(2) {
        border-left: 1px solid #9e9c9c;
        border-right: 1px solid #9e9c9c;
        span {
          border-bottom: 1px solid #9e9c9c;
        }
      }
      .star {
        color: rgb(250, 45, 9);
        span {
          border-bottom: 1px solid red;
        }
      }
    }
  }
  .reduce {
    display: flex;
    align-items: center;
    padding: 0px 20px;
    div {
      font-size: 17px;
      position: relative;
      padding: 0px 15px;
      color: #9e9c9c;
    }
    .nike::before {
      content: "";
      position: absolute;
      width: 60%;
      height: 1px;
      top: 13px;
      background-color: rgb(170, 168, 168);
    }
    h6 {
      font-size: 28px;
      color: rgb(251, 68, 7);
      padding: 0px 15px;
    }
    span {
      font-size: 11px;
      background-color: rgb(240, 56, 6);
      color: white;
      font-weight: 600;
      padding: 0px 3px;
      border-radius: 2px;
    }
  }
  .subtitle {
    margin-top: 20px;
    padding: 0px 30px;
    li {
      display: flex;
      margin-top: 15px;
    }
    li > span {
      width: 20%;
      color: #727070;
      font-size: 14px;
      padding-right: 10px;
      text-align: left;
    }
    li >div{
        font-size: 14px;
    }
  }
  .know{
    display: flex;
    color: black;
    .new{
        background-color: rgb(241, 43, 8);
        color: white;
        padding: 2px 5px;
        border-radius: 10px 10px 10px 0px;
        font-size: 11px;
        margin-right: 15px;
    }
  }
  .free{
    text-align: left;
    img{
        width: 25px;
    }
  }
  .left{
    margin-top: 10px;
    display: flex;
    width: 250px;
    i{
        color: black;
        margin-right: 10px;
    }
    span{
        color: #727070;
        margin-right: 10px;
    }
    i{
        color: #727070;
    }
    
  }
  .transport{
    text-align: left;
    display: flex;
    padding-left: 23px;
    margin-top: 10px;
    span{
        color: #727070;
        padding-right: 10px;
    }
    i{
        color: #727070;
    }
  }
  .color{
    span{
        margin-right: 30px;
    }
  }
 
  .list_color{
    display: flex;
    flex-wrap: wrap;
    li{
        display: flex;
        align-items: center;
        justify-content: center;
        width: calc( 100% / 3 - 30px );
        margin-right: 10px;
        border: 1px solid #727070;
        padding: 7px 0px;
        
        a{
            color: black;
        }
    }
  }
  .number{
    display: flex;
    margin-top: 10px;
  }
  .quantity{
    align-items: left;
    margin-right: 15px;
    span{
        padding: 10px 15px;
        border: 1px solid #696666;
    }
    span:nth-child(2){
        border-left: 0px;
        border-right: 0px;
    }
  }
  .btn{
    margin-top: 30px;
    margin-right: 180px;
    margin-bottom: 30px;
    .cart{
        margin-right: 10px;
        padding: 10px 25px;
        background: rgba(255,87,34,.1);
        color: #ee4d2d;
        border: 1px solid #ee4d2d;
        border-radius: 2px;
  
    }
    .buy{
        padding: 10px 49px;
        border: 1px solid #ee4d2d;
        background-color: #ee4d2d;
        color: white;
        border-radius: 2px;
    }
  }
  .boder{
    display: flex;
    margin-left: 25px;
    font-size: 14px;
    border-top: 1px solid #cecaca;
    padding-top: 30px;
    .black{
        color: black;
        margin-right: 20px;
    }
    img {
        width: 20px;
    }
    span{
        color: #727070;
    }
  }
  

}
</style>
