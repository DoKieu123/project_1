<template>
  <div class="body">
    <div class="content">
      <div class="top">
        <ul>
          <li class="logo">
            <a href="">
              <h4>SHOPEE MALL</h4>
            </a>
          </li>
          <li>
            <img src="@/assets/discount/anh1.png" alt="" />
            <span>7 Ngày Miễn Phí Trả Hàng</span>
          </li>
          <li>
            <img src="@/assets/discount/anh2.png" alt="" />
            <span>Hàng Chính Hãng 100%</span>
          </li>
          <li>
            <img src="@/assets/discount/anh3.png" alt="" />
            <span>Miễn Phí Vẫn Chuyển </span>
          </li>
        </ul>
        <a href="" class="all">
          <span>Xem Tất Cả</span>
          <i class="fa-solid fa-chevron-up fa-rotate-90"></i>
        </a>
      </div>
      <div class="below">
        <div
          id="carouselExampleIndicators1"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators1"
              data-bs-slide-to="0"
              class="active round"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators1"
              data-bs-slide-to="1"
              class="round"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators1"
              data-bs-slide-to="2"
              class="round"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators1"
              data-bs-slide-to="3"
              class="round"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators1"
              data-bs-slide-to="4"
              class="round"
              aria-label="Slide 5"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators1"
              data-bs-slide-to="5"
              class="round"
              aria-label="Slide 6"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators1"
              data-bs-slide-to="6"
              class="round"
              aria-label="Slide 7"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="@/assets/slide2/anh1.jpg"
                class="d-block w-100"
              />
            </div>
            <div class="carousel-item">
              <img
                src="@/assets/slide2/anh3.jpg"
                class="d-block w-100"
              />
            </div>
            <div class="carousel-item">
              <img
                src="@/assets/slide2/anh4.png"
                class="d-block w-100"
              />
            </div>
            <div class="carousel-item">
              <img
                src="@/assets/slide2/anh5.png"
                class="d-block w-100"
              />
            </div>
            <div class="carousel-item">
              <img
                src="@/assets/slide2/anh6.jpg"
                class="d-block w-100"
              />
            </div>
            <div class="carousel-item">
              <img
                src="@/assets/slide2/anh7.jpg"
                class="d-block w-100"
              />
            </div>
            <div class="carousel-item">
              <img
                src="@/assets/slide2/anh22.png"
                class="d-block w-100"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators1"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon btn"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators1"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon btn"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div class="list">
        <ul class="list-item">
          <li v-for="discount in discounts" :key="discount.id">
            <a href="" class="img">
              <img :src= "discount.link" />
            </a>
            <span class="discount"> {{ discount.description }}</span>
          </li>
        </ul>
        <button class="icon" @click="toggleButtons" v-if="ha">
        <i class="fa-solid fa-chevron-up fa-rotate-90"></i>
       </button>
       <button class="iconDis" @click="toggleButtonsLeft" v-else>
        <i class="fa-solid fa-chevron-up fa-rotate-270"></i>
       </button>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import useDiscountStore from "@/store/discount"
export default {
  data(){
    return{
      ha: true
    }
  },
   computed: {
    discounts(){
       return useDiscountStore().visibleItems;
    }
   }
   ,
   methods: {
    toggleButtons(){
       useDiscountStore().ToggleEvent()
       this.ha = !this.ha
    },
    toggleButtonsLeft(){
      useDiscountStore().toggleItemDis
      this.ha = true 
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
a {
  text-decoration: none;
  color: black;
}
ul {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.body {
  background-color: #f5f5f5;
  padding-top: 20px;
}
.content {
  background-color: white;
  width: 95%;
  margin: auto;
}
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  li {
    margin-right: 15px;
  }
  li:first-child {
    border-right: 1px solid rgb(163, 158, 158);
    padding-right: 15px;
  }

  li img {
    width: 18px;
    margin-right: 10px;
  }
}
.logo h4 {
  font-size: 18px;
  color: rgb(192, 21, 21);
}
.all {
  display: flex;
  align-items: center;
}
.all span {
  font-size: 14px;
  color: rgba(213, 1, 1, 0.95);
}
.all i {
  background-color: rgb(202, 6, 6);
  padding: 3px;
  margin-left: 5px;
  color: white;
  border-radius: 50%;
  font-size: 10px;
}
.below {
  display: flex;
  padding: 10px;
}
.slide {
  width: 40%;
}

.slide img {
  width: 100%;
  height: 500px;
}
.list-item {
  display: flex;
  flex-wrap: wrap;
  height: 500px;

}
.list{
  width: 60%;
  position: relative;
}
.list li {
  max-width: calc( 100% / 4 );
  position: relative;
  margin-bottom: 10px;
  height: 250px;
}
.list li img {
  max-width: 90%;
  margin: auto;
}
 .list-item li span{
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 15px;
  font-size: 17px;
  color: rgb(202, 6, 6);
}
.round {
  border-radius: 50%;
  height: 8px;
  width: 8px;
}
.icon{
  position: absolute;
  right: -20px;
  top: 50%;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 0px ;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 0px 2px 2px #d0cdcd;
}
.iconDis{
  position: absolute;
  left: -20px;
  top: 50%;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 0px ;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 0px 2px 2px #d0cdcd;
}
.icon i {
   color: rgb(165, 164, 164);
   font-size: 14px;
}
.iconDis i {
   color: rgb(165, 164, 164);
   font-size: 14px;
}
.list:hover .icon {
  width: 40px;
  height: 40px;
  transition: all 0.1s;
}
.list:hover .iconDis {
  width: 40px;
  height: 40px;
  transition: all 0.1s;
}


</style>
