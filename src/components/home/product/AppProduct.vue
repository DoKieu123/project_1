<template>
  <div class="body">
    <div class="conten">
      <div class="suggest">
        <a href="">
          <h5>GỢI Ý HÔM NAY</h5>
        </a>
      </div>
      <div>
        <AppFilter
          @setfilter="setfilter"
          @increasePrice="increaseprice"
          @reduce="reduce"
        ></AppFilter>
        <ul>
          <li
            v-for="product in products"
            :key="product.id"
            style="position: relative"
            :class="{ 'my-class': product.hidden === false,'my-classs': product.hidden === true }"
          >
            <div
              v-if="product.hidden"
            >
              <router-link :to="to(product.id)">
                <div class="img_bg">
                  <div class="img_conten">
                    <img :src="product.link" />
                  </div>
                  <div class="love">
                    <p>Yêu thích</p>
                  </div>
                  <div class="reduce">
                    <span> {{ product.reduce }}</span>
                    <p>GIẢM</p>
                  </div>
                  <div class="img_main">
                    <img src="@/assets/booton1.png" alt="" />
                  </div>
                </div>
                <p class="describe">{{ product.describe }}</p>
                <div class="unit">
                  <p class="price">{{ product.price }}</p>
                  <p class="sold">Đã bán {{ product.sold }}</p>
                </div>
              </router-link>
              <div class="more" style="position: absolute; left: 0px">
                <p>Tìm sản phẩm tương tự</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <button class="add">
        <a href=""> Xem Thêm </a>
      </button>
    </div>
  </div>
</template>

<script>
import useProStore from "@/store/product";
import AppFilter from "./filter/AppFilter.vue";
import { mapStores } from "pinia";
export default {
  data() {
    return {
      minprice: null,
      maxprice: null,
    };
  },
  components: {
    AppFilter,
  },
  computed: {
    ...mapStores(useProStore),
    products() {
      return useProStore().allproduct;
    },
  },
  methods: {
    setfilter(data) {
      useProStore().filterPrice(data);
    },
    //  lấy id của sản phẩm đó để cho vào đường dẫn url để sang trang AppItemCenter.vue
    to(productId) {
      return `/item/${productId}`;
    },
    //sắp xếp theo tăng giá gọi hàm bên action(product)
    increaseprice() {
      useProStore().increase();
      console.log(useProStore().allproduct);
    },
    // sắp xếp theo giảm giá gọi hàm bên action (product)
    reduce() {
      useProStore().reduceProduct();
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.body {
  background-color: #f5f5f5;
  padding-top: 20px;
}
.conten {
  width: 95%;
  margin: auto;
}
a {
  text-decoration: none;
  color: black;
}
ul {
  list-style: none;
  display: flex;
  justify-content: start;
  margin-top: 10px;
  flex-wrap: wrap;
}
.my-classs {
  // z-index: 1;
  max-width: calc(100% / 6 - 10px);
  margin: 0px 5px;
  margin-bottom: 10px;
  background-color: white;
  border-radius: 2px;
  border: 1px solid transparent;
}
.my-class{
  width: 0px;
  height: 0px;
  
}
.my-classs:hover {
  // transform: translateY(-2px);
  // transform: scale(1.1);
  margin-top: -1px;
  border: 1px solid rgb(216, 43, 12);
}
.my-classs:hover .more {
  display: unset;
}

.img_bg {
  position: relative;
}
.img_conten img {
  max-width: 100%;
  margin: auto;
}
.love {
  position: absolute;
  top: 10px;
  left: -3px;
  font-size: 11px;
  background-color: rgba(214, 60, 36, 0.918);
  color: white;
  border-radius: 0px 2px 2px 0px;
}
.love::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 4px solid transparent; /* Cạnh trái của tam giác */
  border-top: 4px solid rgb(155, 49, 22); /* Cạnh dưới của tam giác và màu sắc có thể thay đổi */
  position: absolute;
  bottom: -5px;
  left: -1px;
}
.reduce {
  position: absolute;
  top: 0px;
  right: 0px;
  font-size: 11px;
  background-color: rgba(224, 193, 20, 0.623);
  color: white;
  padding: 0px 3px 0px 3px;
}
.reduce::before,
.reduce::after {
  content: "";
  width: 0;
  height: 0;
  border-right: 17px solid transparent; /* Cạnh trái của tam giác */
  border-left: 18x solid transparent; /* Cạnh phải của tam giác */
  position: absolute;
  bottom: 0; /* Đặt tam giác ở phía dưới */
}

.reduce::before {
  border-top: 10px solid rgba(224, 193, 20, 0.623); /* Cạnh dưới của tam giác và màu sắc có thể thay đổi */
  left: 0; /* Đặt tam giác bên trái */
  position: absolute;
  bottom: -10px;
}

.reduce:after {
  border-bottom: 10px solid rgba(224, 193, 20, 0.623); /* Cạnh dưới của tam giác và màu sắc có thể thay đổi */
  right: 0; /* Đặt tam giác bên phải */
  position: absolute;
  bottom: -10px;
  transform: rotate(180deg);
}

.unit {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 0px 7px;
}
.price {
  color: rgb(244, 62, 12);
  font-size: 15px;
}
.sold {
  font-size: 12px;
  color: #a59c9c;
}
.reduce span {
  color: red;
}
.img_main img {
  position: absolute;
  width: 90%;
  bottom: 0px;
  left: 0px;
}
.describe {
  width: 90%;
  height: 32px;
  margin: auto;
  font-size: 12px;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-top: 8px;
}
///suggest////
.suggest {
  background-color: white;
  z-index: 9999;
  position: sticky;
  top: 133.5px;
  width: 100%;
  padding: 18px;
  border-bottom: 3px solid rgb(239, 96, 35);
}
.suggest h5 {
  color: rgb(193, 57, 12);
  font-size: 18px;
}
.more {
  z-index: 999;
  background-color: rgb(210, 51, 7);
  color: white;
  border-radius: 0px 0px 2px 2px;
  display: none;
  width: 100%;
  height: max-content;
  font-size: 14px;
  padding-top: 3px;
  padding-bottom: 3px;
}
.add {
  margin-top: 20px;
  background-color: white;
  padding: 7px 150px;
  margin-bottom: 80px;
  border: 1px solid #c7c2c2;
}
.add a {
  color: #7e7171;
}
.body {
  border-bottom: 3px solid rgb(255, 47, 0);
}
</style>
