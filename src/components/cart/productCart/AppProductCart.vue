<template>
  <div class="content">
    <div class="content_top" ref="componentA">
      <div class="instruct while">
        <img src="@/assets/item-product/vanchuyen.png" alt="" />
        <span
          >Nhấn vào mục Mã giảm giá ở cuối trang để hưởng miễn phí vận chuyển
          bạn nhé!</span
        >
      </div>
      <div class="standard while">
        <div class="input">
          <input type="checkbox" id="product" />
          <label for="product">Sản Phẩm</label>
        </div>
        <div class="list">
          <span>Đơn Giá</span>
          <span>Số Lượng</span>
          <span>Số Tiền</span>
          <span>Thao Tác</span>
        </div>
      </div>
      <ul>
        <li v-for="cart in listCart"
            :key="cart.id"
         class="item_cart">
          <div class="shop while">
            <input type="checkbox"/>
            <div class="name_shop">
              <span class="love">Yêu thích</span>
              <span class="name"> Beauty Gril.vn</span>
              <i class="fa-solid fa-message"></i>
            </div>
          </div>
          <div class="flex while">
            <div class="products">
              <input type="checkbox" />
              <div class="img_product">
                <img :src="cart.link" alt="" />
              </div>
              <div class="detail_product">
                <p>{{ cart. describe }}</p>
                <img src="@/assets/anh1.jpg" alt="" />
                <div class="sevent">
                  <img src="@/assets/giam7.png" alt="" />
                  <p>7 Ngày Miễn Phí Trả Hàng</p>
                </div>
              </div>
            </div>
            <div class="list">
              <div class="compare">
                <span class="discount">đ 299000</span>
                <span class="prices">đ{{ cart.priceunit }}</span>
              </div>
              <div class="quantity">
                <span @click="reduce(cart.id)">-</span>
                <span>{{ number }}</span>
                <span @click="increase(cart)">+</span>
              </div>
              <span class="price">đ {{ cart.price }}</span>
              <button @click="deleteCart(cart.id)">Xóa</button>
            </div>
          </div>
          <div class="ticket while">
            <i class="fa-solid fa-ticket"></i>
            <span>Shop Voucher giảm đến 10%</span>
            <span class="new"> Mới</span>
          </div>
          <div class="free_ship while">
            <img src="@/assets/item-product/vanchuyen.png" alt="" />
            <span>Giảm đ25.000 phí vận chuyển đơn tối thiểu đ99.000</span>
            <a href="">Tìm hiểm thêm</a>
          </div>
        </li>
      </ul>
    </div>
     <div class="butoon"> 
      <div class="voucher">
        <div>
          <i class="fa-solid fa-ticket"></i>
          <span> Shopee Voucher </span>
        </div>
        <a href="">Chon hoặc nhập mã</a>
      </div>
      <div class="coin">
        <div class="item_coin">
          <input type="checkbox" />
          <i class="fa-solid fa-coins"></i>
          <p>Shopee Xu</p>
          <span>Bạn chưa chọn sản phẩm ?</span>
        </div>
        <span class="price">-đ0</span>
      </div>
      <div class="position">
        <div class="buy">
          <div class="all">
            <input type="checkbox" />
            <span>Chọn Tất Cả <span>({{ total }})</span></span>
          </div>
          <div class="btn">
            <span>Tổng thanh toán (<span>0</span> Sản phẩm ):</span>
            <span class="red">đ0</span>
            <button>Mua Hàng</button>
          </div>
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
import useCartStore from "@/store/cart"
export default {
  data() {
    return {
      number: 1,
    }
  },
  computed: {
    listCart(){ 
      return useCartStore().allcart
    },
    total(){
      return useCartStore().allcart.length
    }
    ,
  }
  ,
  methods:{
    reduce(data){
      this.number = this.number - 1
      const pro = useCartStore().allcart.find(
        (cart) => cart.id === data
      );
      pro.price =parseInt((pro.priceunit*this.number))
    },

    increase(data){
      this.number = this.number + 1
      const pro = useCartStore().allcart.find(
        (cart) => cart.id === data.id
      );
      pro.price =parseInt(pro.priceunit*this.number)
    },
    deleteCart(value){
      useCartStore().deleteValue(value)
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
input {
  width: 20px;
  height: 18px;
  margin-right: 15px;
}
.content {
  position: relative;
  margin-top: 20px;
 
}
.content_top{
  margin-bottom: 0px;
 
}
.item_cart {
  margin-bottom: 20px;
}
.while {
  background-color: white;
  width: 95%;
  margin: auto;
}
.instruct {
  display: flex;
  border: 1px solid rgb(213, 213, 12);
  border-radius: 2px;
  padding: 10px 17px;
  img {
    width: 25px;
    margin-right: 10px;
  }
  span {
    font-size: 14px;
    color: black;
  }
}
.standard {
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  padding: 15px 40px;
  border-radius: 2px;
  font-size: 14px;
  box-shadow: 0px 2px 2px rgba(206, 203, 203, 0.5);
  .input {
    display: flex;
    align-items: center;
  }

  .list {
    span {
      padding: 0px 45px;
      color: #6d6c6cf5;
    }
  }
}
.shop {
  display: flex;
  align-items: center;
  padding: 15px 40px;
  margin-bottom: 2px;
  .love {
    background-color: rgb(241, 76, 31);
    color: white;
    font-size: 12px;
    padding: 2px 5px;
    border-radius: 2px;
    margin-right: 5px;
  }
  .name {
    color: black;
    font-size: 14px;
    margin-right: 8px;
  }
  i {
    font-size: 14px;
    color: rgb(241, 80, 31);
  }
}
.flex {
  display: flex;
  padding: 15px 40px;
  .products {
    font-size: 14px;
    display: flex;
    width: 52%;
    align-items: center;
    .img_product img {
      width: 90px;
      margin-right: 10px;
    }
    .detail_product {
      text-align: left;
      width: 60%;
    }
    p {
      line-height: 15px;
      margin-bottom: 8px;
    }
    .detail_product > img {
      width: 207px;
      height: 20px;
      margin-right: 10px;
    }
    .sevent {
      margin-top: 10px;
      display: flex;
      align-items: start;
      img {
        width: 15px;
        height: 15px;
        margin-right: 5px;
      }
    }
  }
  .list {
    width: 42%;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .quantity {
      span {
        border: 1px solid #6d6c6cf5;
        padding: 8px 15px;
      }
      span:nth-child(2) {
        border: 0px;
        border-bottom: 1px solid #6d6c6cf5;
        border-top: 1px solid #6d6c6cf5;
      }
    }
    .prices {
      margin-left: 8px;
    }
    .discount {
      color: #6d6c6cf5;
      position: relative;
    }
    .discount::after {
      position: absolute;
      content: "";
      width: 100%;
      border-bottom: 1px solid #6d6c6cf5;
      left: 0px;
      top: 50%;
    }
    button {
      border: 0px;
      background-color: white;
    }
    button:hover {
      color: rgb(236, 62, 31);
    }
    .price {
      color: rgb(237, 75, 30);
    }
  }
}
.ticket {
  margin-top: 1px;
  text-align: left;
  align-items: center;
  padding: 15px 40px;
  margin-bottom: 1px;
  i {
    color: rgb(247, 66, 42);
    margin-right: 15px;
  }
  span {
    font-size: 14px;
  }
  .new {
    color: white;
    background-color: rgb(238, 66, 36);
    margin-left: 7px;
    padding: 2px 0px;
    padding-right: 3px;
    border-radius: 1px;
    font-size: 13px;
  }
}
a {
  text-decoration: none;
}
.free_ship {
  text-align: left;
  padding: 15px 40px;
  img {
    width: 25px;
    margin-right: 8px;
  }
  span {
    font-size: 13px;
    margin-right: 7px;
  }
  a {
    font-size: 13px;
  }
}

.butoon {
  position: sticky;
  bottom: 0;
  left: 31px;
  width: 95%;
  margin: auto;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px -3px 5px rgba(215, 215, 215, 0.5);
  .voucher {
    display: flex;
    justify-content: right;
    padding: 10px 30px;
    border-bottom: 1px dashed #c6c5c5f5;
    i {
      color: rgb(227, 62, 28);
      margin-right: 5px;
    }
    span {
      color: black;
    }
    a {
      text-decoration: none;
      margin-left: 170px;
      font-size: 14px;
      color: rgb(15, 33, 198);
    }
  }
  .coin {
    display: flex;
    justify-content: right;
    padding: 10px 30px;
    border-bottom: 1px dashed #c6c5c5f5;
    .price {
      color: #c6c5c5f5;
      margin-left: 140px;
    }
    .item_coin {
      display: flex;
      align-items: center;
      font-size: 14px;
      span {
        color: #c6c5c5f5;
        margin-left: 15px;
      }
      p {
        color: black;
        margin-left: 20px;
      }
      i {
        color: rgb(237, 234, 37);
        margin-left: 20px;
        font-size: 20px;
      }
      input {
        height: 20px;
        width: 20px;
        background: #c6c5c5f5;
      }
    }
  }
  .buy {
    display: flex;
    padding: 10px 30px;
    justify-content: space-between;
    .all {
      display: flex;
      align-items: center;
      input {
        height: 20px;
        width: 20px;
        margin-right: 15px;
      }
    }
    .btn {
      button {
        margin-left: 10px;
        padding: 10px 80px;
        background-color: rgb(234, 70, 29);
        color: white;
        border: 0px;
        border-radius: 2px;
        font-size: 14px;
      }
      .red {
        font-size: 22px;
        color: rgb(245, 75, 32);
      }
    }
  }
  .position {
    position: relative;
  }
  .chat {
    position: absolute;
    bottom: 0px;
    right: -20px;
    background-color: rgb(235, 52, 24);
    width: 100px;
    color: white;
    padding: 10px;
    box-shadow: 0px 5px 3px rgb(211, 66, 21);
    border-radius: 2px;
  }
}
</style>
