<template>
  <ul>
    <li>
      <a href=""
        ><img src="@/assets/icon/icon1.png" alt="" /><span>
          Khung Gio Săn Sale
        </span>
      </a>
    </li>
    <li>
      <a href=""
        ><img src="@/assets/icon/icon2.png" alt="" /><span>
          Miễn Phí Ship -Có Shopee
        </span>
      </a>
    </li>
    <li>
      <a href=""
        ><img src="@/assets/icon/icon3.png" alt="" /><span>
          Voucher Giảm Đến 500.000Đ
        </span>
      </a>
    </li>
    <li>
      <a href=""
        ><img src="@/assets/icon/icon4.png" alt="" /><span>
          Hàng Hiệu Outlet Giảm 50%
        </span>
      </a>
    </li>
    <li>
      <a href=""
        ><img src="@/assets/icon/icon5.png" alt="" /><span>
          Hàng Hiệu Outlet Giảm 50%
        </span>
      </a>
    </li>
    <li>
      <a href=""
        ><img src="@/assets/icon/icon6.png" alt="" /><span> Mã Giảm Gía </span>
      </a>
    </li>
    <li>
      <a href=""
        ><img src="@/assets/icon/icon7.png" alt="" /><span>
          Gì Cũng Rẻ - Deal Sốc 9.000Đ
        </span>
      </a>
    </li>
    <li>
      <a href=""
        ><img src="@/assets/icon/icon8.png" alt="" /><span> Hàng Quốc Tế </span>
      </a>
    </li>
    <li>
      <a href=""
        ><img src="@/assets/icon/icon9.png" alt="" /><span>
          Bắt Trend - Gía Sốc
        </span>
      </a>
    </li>
  </ul>
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0px 40px;
  margin-top: 30px;
}
a {
  text-decoration: none;
  color: black;
}
ul li {
  width: calc(100% / 9 - 30px);
  display: block;
  transition: transform 0.3s ease;
}
ul li:hover{
    transform: translateY(-2px);
}
ul li img {
  width: 45px;
  display: block;
  margin: auto;
  margin-bottom: 10px;
}
span {
  font-size: 13px;
  line-height: 1.1rem;
}
//////
@media screen and (max-width: 980px) {
  ul {
    justify-content: start;
    margin-top: 30px;
  }
  ul li {
    width: calc(100% / 5 - 30px);
   
  }
}
@media screen and (max-width: 960px) {
  ul {
    justify-content: center;
    margin-top: 140px;
  }
}
@media screen and (max-width: 760px) {
  ul li {
    width: calc(100% / 4 - 30px);
    
  }
}
@media screen and (max-width: 690px) {
  ul li {
    width: calc(100% / 4 );
    
  }
}
@media screen and (max-width: 500px) {
  ul {
    justify-content: center;
    margin-top: 270px;
  }
}
@media screen and (max-width: 450px) {
  ul li {
    width: calc(100% / 3 );
    display: block;
  }
  ul {
    justify-content: center;
    margin-top: 270px;
  }
}
@media screen and (max-width: 350px) {
  ul li {
    width: calc(100% / 2 );
    display: block;
  }
  ul {
    justify-content: center;
    margin-top: 270px;
  }
}
@media screen and (max-width: 250px) {
  ul li {
    width: calc(100% / 1 );
    display: block;
  }
  ul {
    justify-content: center;
    margin-top: 270px;
  }
}
</style>
