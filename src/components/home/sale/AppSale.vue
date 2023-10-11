<template>
  <div class="body">
    <div class="conten">
      <div class="top">
        <img src="@/assets/sale/sale.png" alt="" />
        <a href="">
          Xem tât cả
          <i class="fa-solid fa-chevron-up fa-rotate-90"></i>
        </a>
      </div>
      <div class="botton">
        <ul class="under">
          <li v-for="item in sales" :key="item.id">
            <a href="" class="opaciti">
              <img :src="item.link" />
              <p>{{ item.description }}</p>
            </a>
            <div class="cha">
              <div class="in">ĐANG BÁN CHAY</div>
              <div class="on"></div>
            </div>
          </li>
        </ul>
        <button class="icon" v-if="hi" @click="toggleButtonsSale">
          <i class="fa-solid fa-chevron-up fa-rotate-90"></i>
        </button>
        <button class="iconSale" v-else @click="toggleButtonsSaleLeft">
          <i class="fa-solid fa-chevron-up fa-rotate-270"></i>
        </button>
      </div>
    </div>
    <div class="img_conten">
      <img class="conten_botton" src="@/assets/anh1.jpg" alt="" />
    </div>
  </div>
</template>

<script>
import useSaleStore from "@/store/sale";
export default {
  data() {
    return {
      hi:true
    };
  },
  computed: {
    sales() {
      return useSaleStore().visibleItemsSale;
    },
  },
  methods: {
    toggleButtonsSale() {
      useSaleStore().toggleItemsSale()
      this.hi =!this.hi
    },
    toggleButtonsSaleLeft(){
      useSaleStore().toggleItemsSaleLeft()
      this.hi =true
    }

  },
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
  display: flex;
}
a {
  text-decoration: none;
  color: rgb(235, 87, 33);
}
.opaciti {
  margin-bottom: 10px;
}

.conten {
  background-color: white;
  width: 95%;
  margin: auto;
  padding: 20px;
}
.body {
  background-color: #f5f5f5;
  padding-top: 30px;
}
.top {
  display: flex;
  justify-content: space-between;
}
li {
  width: calc(100% / 6);
}
li img {
  width: 100%;
}
p {
  display: flex;
  justify-content: center;
}
.cha {
  width: 90%;
  position: relative;
  margin-top: 20px;
  margin: 20px auto;
}
.in {
  margin-top: 0px;
  width: 90%;
  background-color: rgba(220, 39, 7, 0.826);
  font-size: 12px;
  font-weight: 700;
  color: white;
  border-radius: 10px;
  opacity: 0.2;
}

.on {
  position: absolute;
  top: 0px;
  height: 18px;
  width: 20px;
  display: block;
  background-color: rgb(236, 6, 6);
  border-radius: 10px 0px 0px 10px;
}
.icon {
  background-color: white;
  position: absolute;
  top: 46%;
  right: -30px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 0px;
  box-shadow: 0px 0px 2px 2px #d0cdcd;
}
.iconSale {
  background-color: white;
  position: absolute;
  top: 46%;
  left: -30px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 0px;
  box-shadow: 0px 0px 2px 2px #d0cdcd;
}
.botton {
  position: relative;
}
.botton:hover .icon {
  width: 40px;
  height: 40px;
  right: -40px;
}
.botton:hover .iconSale {
  width: 40px;
  height: 40px;
  right: -40px;
}
.icon i {
  color: #aeadad;
  font-size: 12px;
}
.iconSale i {
  color: #aeadad;
  font-size: 12px;
}
.img_conten {
  margin-top: 20px;
}
.img_conten img {
  max-width: 95%;
  height: auto;
}

@media screen and (max-width: 1010px) {
  ul li:nth-child(n + 6) {
    display: none;
  }
  li {
    width: calc(100% / 5);
  }
}

@media screen and (max-width: 910px) {
  ul li:nth-child(n + 5) {
    display: none;
  }
  li {
    width: calc(100% / 4);
  }
}
@media screen and (max-width: 710px) {
  ul li:nth-child(n + 4) {
    display: none;
  }
  li {
    width: calc(100% / 3);
  }
}
@media screen and (max-width: 510px) {
  ul li:nth-child(n + 3) {
    display: none;
  }
  li {
    width: calc(100% / 2);
  }
}
@media screen and (max-width: 310px) {
  ul li:nth-child(n + 2) {
    display: none;
  }
  li {
    width: calc(100% / 1);
  }
}
</style>
