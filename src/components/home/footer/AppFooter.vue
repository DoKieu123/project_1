<template>
  <div>
    <div class="top">
      <ul class="list_item">
        <h6>CHĂM SÓC KHÁCH HÀNG</h6>
        <li>Trung Tâm Trợ Gíup</li>
        <li>Shopee Blog</li>
        <li>Shopee Mall</li>
        <li>Hướng Dẫn Mua Hàng</li>
        <li>Thanh Toán</li>
        <li>Shopee Xu</li>
        <li>Vận Chuyển</li>
        <li>Trả Hàng & Hoàn Tiền</li>
        <li>Chăm Sóc Khách Hàng</li>
        <li>Chính Sách Bảo Hành</li>
      </ul>
      <ul class="list_item">
        <h6>VỀ SHOPEE</h6>
        <li>Giới Thiệu Về Shopee Việt nam</li>
        <li>Tuyển Dụng</li>
        <li>Điều Khoảng Shopee</li>
        <li>Chính Sách Bảo Mật</li>
        <li>Chính Hãng</li>
        <li>Kênh Người Bán</li>
        <li>Flash Sales</li>
        <li>Chương Trình Tiếp Thị Liên Kiết Shopee</li>
        <li>Liên Hệ Với truyền Thông</li>
      </ul>
      <ul class="list_item">
        <h6>THANH TOÁN</h6>
        <ul class="item_img">
          <li><img src="@/assets/footer/anh1.png" alt="" /></li>
          <li><img src="@/assets/footer/anh2.png" alt="" /></li>
          <li><img src="@/assets/footer/anh3.png" alt="" /></li>
          <li><img src="@/assets/footer/anh4.png" alt="" /></li>
          <li><img src="@/assets/footer/anh5.png" alt="" /></li>
          <li><img src="@/assets/footer/anh6.png" alt="" /></li>
          <li><img src="@/assets/footer/anh7.png" alt="" /></li>
          <li><img src="@/assets/footer/anh8.png" alt="" /></li>
        </ul>
        <h6>ĐƠN VỊ VẬN CHUYỂN</h6>
        <ul class="item_img">
          <li><img src="@/assets/footer/transport/anh1.png" alt="" /></li>
          <li><img src="@/assets/footer/transport/anh2.png" alt="" /></li>
          <li><img src="@/assets/footer/transport/anh3.jpg" alt="" /></li>
          <li><img src="@/assets/footer/transport/anh4.png" alt="" /></li>
          <li><img src="@/assets/footer/transport/anh5.png" alt="" /></li>
          <li><img src="@/assets/footer/transport/anh6.png" alt="" /></li>
          <li><img src="@/assets/footer/transport/anh7.png" alt="" /></li>
          <li><img src="@/assets/footer/transport/anh8.png" alt="" /></li>
          <li><img src="@/assets/footer/transport/anh9.png" alt="" /></li>
          <li><img src="@/assets/footer/transport/anh10.png" alt="" /></li>
          <li><img src="@/assets/footer/transport/anh11.png" alt="" /></li>
        </ul>
      </ul>
      <ul class="list_item">
        <h6>THEO DÕI CHÚNG TÔI TRÊN</h6>
        <li><i class="fa-brands fa-facebook"></i> <span>Facebook</span></li>
        <li><i class="fa-brands fa-instagram"></i> <span>Instagram</span></li>
        <li><i class="fa-brands fa-linkedin"></i> <span>Linkedin</span></li>
      </ul>
      <div class="list_item">
        <h6>TẢI ỨNG DỤNG SHOPEE NAGY THÔI</h6>
        <ul class="dowload">
          <div>
            <img src="@/assets/footer/code.png" alt="" />
          </div>
          <ul>
            <li><img src="@/assets/footer/app.png" alt="" /></li>
            <li><img src="@/assets/footer/ggplay.png" alt="" /></li>
            <li><img src="@/assets/footer/ry.png" alt="" /></li>
          </ul>
        </ul>
      </div>
    </div>
    <div>
      <ul class="item_top">
        <li>c 2023 Shopee.Tất cả các quyền được bảo lưu</li>
        <li>
          <ul class="nation">
            Quốc gia & Khu vực:
            <li>Singapore</li>
            <li>Đài Loan</li>
            <li>Thái Lan</li>
            <li>Malaysia</li>
            <li>Việt Nam</li>
            <li>Philippines</li>
            <li>Brazil</li>
            <li>Mexico</li>
            <li>Colombia</li>
            <li>Chile</li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="bottom">
      <ul class="bottom_item">
        <li>CHÍNH SÁCH BẢO MẬT</li>
        <li>QUY CHẾ HOẠT ĐỘNG</li>
        <li>CHÍNH SÁCH VẬN CHUYỂN</li>
        <li>CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN</li>
      </ul>
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
.item_top {
  padding: 30px 0px;
  font-size: 14px;
  margin: 0px 40px;
  color: #8c8a8a;
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  .nation {
    display: flex;
    justify-content: space-between;
    li {
      padding: 0px 7px;
    }
    li:not(:first-child) {
      border-left: 1px solid rgb(197, 197, 197);
    }
  }
}
.top {
  border-bottom: 1px solid #8c8a8a;
  padding: 90px 0px 0px 10px;
  margin: 0px 40px;
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  h6 {
    font-weight: 700;
    font-size: 12px;
    display: flex;
    justify-content: start;
    margin-bottom: 15px;
  }
  .list_item {
    max-width: calc(100% / 5);
  }

  .list_item > li {
    display: flex;
    justify-content: start;
    font-size: 12px;
    padding: 5px 0px;
    color: #6a6969;
  }
  .item_img {
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    margin-bottom: 50px;
  }
  .item_img li {
    width: calc(100% / 3);
  }
  .item_img li img {
    display: block;
    width: 80%;
    padding: 3px;
    background-color: white;
    margin-bottom: 3px;
    border-radius: 2px;
    box-shadow: 5px 5px 5px rgb(173, 173, 171);
  }
  ul li i {
    font-size: 15px;
    margin-right: 10px;
  }
  .dowload {
    display: flex;
    ul {
      margin-left: 15px;
      li img {
        width: 90%;
        background-color: white;
        box-shadow: 5px 5px 5px rgb(173, 173, 171);
        padding: 5px;
        margin-bottom: 3px;
        border-radius: 2px;
      }
    }
  }
}
.bottom {
  background-color: #f4f1f1;
  ul {
    display: flex;
    justify-content: center;
    font-size: 12px;
    color: #6a6969;
    padding: 40px 0px;
    li {
      padding: 0px 18px;
    }
    li:not(:first-child) {
        border-left: 1px solid rgb(201, 190, 190);
      }
  }
}
</style>
