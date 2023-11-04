<template>
  <div class="below">
    <ul class="top">
      <li class="img">
        <img src="@/assets/SHOPEEMALL-LOGO.png" alt="" />
      </li>
      <li>
        <div class="input">
          <input type="text" placeholder="Shopee bao ship 0Đ - Đăng ký ngay!" v-model.trim ="content" @keydown.enter="handleEnter" />
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </li>
      <li>
        <router-link to="/cart" class="cart">
          <i class="fa-solid fa-cart-shopping"></i>
        </router-link>
      </li>
    </ul>
    <ul class="top-mobie">
      <li class="img">
        <img src="@/assets/SHOPEEMALL-LOGO.png" alt="" />
      </li>
      <li class="icon">
        <div>
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div>
          <a href="">
            <i class="fa-solid fa-cart-shopping"></i>
          </a>
        </div>
      </li>
    </ul>
    <ul class="bottom">
      <li><a href="">iPhone 1k</a></li>
      <li><a href="">Váy 1k</a></li>
      <li><a href="">Áo 1k</a></li>
      <li><a href="">Acc Liên Quân</a></li>
      <li><a href="">Dép Nữ</a></li>
      <li><a href="">Đồ 1k</a></li>
      <li><a href="">Thước kẻ Free Fire</a></li>
      <li><a href="">iPhone 14 Pro Mã 1k</a></li>
      <li><a href="">iPhone 1K Siêu Rẻ Chính Hãng </a></li>
    </ul>
  </div>
</template>

<script>
  import  useProStore  from '@/store/product';
export default {
  data() {
    return {
      content: "",
    }
  },
  methods: {
    handleEnter(){
      useProStore().filterProducts(this.content);
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  padding: 0px;
  margin: 0;
  box-sizing: border-box;
  font-size: 14px;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
.below {
  padding: 7px 30px;
  color: white;
}
.below .top {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.below .top-mobie {
  display: none;
}
.img {
  width: 190px;
  height: 50px;
}
img {
  width: 190px;
  height: 50px;
}
.input {
  width: 810px;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border-radius: 3px;
}
.input input {
  height: 40px;
  width: 750px;
  padding-left: 15px;
  outline: none;
  border: none;
  border-radius: 3px;
}
.input i {
  background-color: #ee4d2d;
  width: 50px;
  margin: auto;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
}
.cart i {
  font-size: 25px;
  margin-right: 50px;
  color: white;
}
// ul dưới
.below .bottom {
  padding-top: 7px;
  width: 770px;
  padding-left: 36px;
  margin: auto;
  display: flex;
  justify-content: space-between;
}
.below .bottom a {
  font-size: 12px;
  margin-right: 3px;
  color: white;
}
//reponsive
@media screen and (max-width: 1160px) {
  .input input {
    width: 550px;
  }
  .input {
    width: 610px;
  }

  @media screen and (max-width: 960px) {
    .below .top {
      display: none;
    }
    .below .top-mobie {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    .below .top-mobie .icon {
      display: flex;
      
    }
    .below .top-mobie .icon i {
      color: white;
      font-size: 28px;
      margin-left: 40px;
    }
    .below .bottom {
      display: none;
    }
  }
  @media screen and (max-width: 930px) {
    .input input {
      width: 300px;
    }
    .input {
      width: 360px;
      margin: 0px 30px;
    }
  }
  @media screen and (max-width: 760px) {
    .input input {
      width: 250px;
    }
    .input {
      width: 310px;
      margin: 0px 30px;
    }
  }
  @media screen and (max-width: 710px) {
  }
}
</style>
