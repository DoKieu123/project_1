<template>
  <div class="content">
    <ul class="product_details">
      <h4>CHI TIẾT SẢN PHẨM</h4>
      <li>
        <span>Danh Mục</span>
        <p>
          <a href="">Shopee</a
          ><i class="fa-solid fa-chevron-up fa-rotate-90"></i
          ><a href="">Fashion Accessories</a
          ><i class="fa-solid fa-chevron-up fa-rotate-90"></i
          ><a href="">Bracelets & Bangles</a>
        </p>
      </li>
      <li>
        <span>Chất liệu</span>
        <p>Khác</p>
      </li>
      <li>
        <span>Giới tính</span>
        <p>Nữ</p>
      </li>
      <li>
        <span>Kiểu vòng tay/vò..</span>
        <p>Khác</p>
      </li>
      <li>
        <span>Kho hàng</span>
        <p>237488</p>
      </li>
      <li>
        <span>Gửi từ</span>
        <p>Nước ngoài</p>
      </li>
    </ul>
    <div class="Product_Description">
      <h4>MÔ TẢ SẢN PHẨM</h4>
      <p class="delivery">Giao hàng trong 48 giờ kể từ khi đặt hàng</p>
      <p class="all">
        Tất cả các sản phẩm có trong kho, xin vui lòng yên tâm để mua.<br />Nếu
        Đơn Hàng Hết Hàng ,Chúng Tôi Sẽ Thông Báo Cho Bạn Trong Thời Gian Sớm
        Nhất Có Thể Trao Đổi<br />Chất liệu: Kính/Kính
      </p>
      <p>
        ****************************************************** ****<br />

        ****************************************************** ****
      </p>
    </div>
  </div>
</template>

<script>
export default {};
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
  width: 100%;
  background-color: white;
  text-align: left;
  padding: 40px;
  h4 {
    color: black;
    font-size: 17px;
    margin-bottom: 40px;
  }
  .product_details {
    margin-bottom: 40px;
    font-size: 14px;
    li {
      display: flex;
      margin-bottom: 20px;
      span {
        color: #a8a5a5;
        width: 15%;
      }
      i {
        padding: 0px 7px;
        color: #727171;
      }
    }
  }
  .Product_Description {
    p {
      font-size: 14px;
    }
    .delivery {
      margin-bottom: 30px;
    }
    .all {
      padding-left: 30px;
      line-height: 25px;
      margin-bottom: 5px;
    }
  }
}
</style>
