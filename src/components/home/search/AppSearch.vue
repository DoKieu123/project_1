<template>
  <div>
    <div class="body">
      <div class="content">
        <div class="conten_top">
          <h5>TÌM KIẾM HÀNG ĐẦU</h5>
          <a href="">
            <span>Xem Tất Cả </span>
            <i class="fa-solid fa-chevron-up fa-rotate-90"></i>
          </a>
        </div>
        <div class="list">
          <ul class="contenList">
            <li>
              <a href="">
                <div class="img_conten">
                  <img src="@/assets/search/anh1.jpg" alt="" />
                  <div class="top">
                    <img src="@/assets/search/anh1.png" alt="" />
                  </div>
                  <div class="discount">
                    <span>Bán 3k+ /tháng </span>
                  </div>
                </div>
                <p class="describes">Mô Hình Dragon Ball</p>
              </a>
            </li>
            <li>
              <a href="">
                <div class="img_conten">
                  <img src="@/assets/search/anh1.jpg" alt="" />
                  <div class="top">
                    <img src="@/assets/search/anh1.png" alt="" />
                  </div>
                  <div class="discount">
                    <span>Bán 3k+ /tháng </span>
                  </div>
                </div>
                <p class="describes">Mô Hình Dragon Ball</p>
              </a>
            </li>
            <li>
              <a href="">
                <div class="img_conten">
                  <img src="@/assets/search/anh1.jpg" alt="" />
                  <div class="top">
                    <img src="@/assets/search/anh1.png" alt="" />
                  </div>
                  <div class="discount">
                    <span>Bán 3k+ /tháng </span>
                  </div>
                </div>
                <p class="describes">Mô Hình Dragon Ball</p>
              </a>
            </li>
            <li>
              <a href="">
                <div class="img_conten">
                  <img src="@/assets/search/anh1.jpg" alt="" />
                  <div class="top">
                    <img src="@/assets/search/anh1.png" alt="" />
                  </div>
                  <div class="discount">
                    <span>Bán 3k+ /tháng </span>
                  </div>
                </div>
                <p class="describes">Mô Hình Dragon Ball</p>
              </a>
            </li>
            <li>
              <a href="">
                <div class="img_conten">
                  <img src="@/assets/search/anh1.jpg" alt="" />
                  <div class="top">
                    <img src="@/assets/search/anh1.png" alt="" />
                  </div>
                  <div class="discount">
                    <span>Bán 3k+ /tháng </span>
                  </div>
                </div>
                <p class="describes">Mô Hình Dragon Ball</p>
              </a>
            </li>
            <li>
              <a href="">
                <div class="img_conten">
                  <img src="@/assets/search/anh1.jpg" alt="" />
                  <div class="top">
                    <img src="@/assets/search/anh1.png" alt="" />
                  </div>
                  <div class="discount">
                    <span>Bán 3k+ /tháng </span>
                  </div>
                </div>
                <p class="describes">Mô Hình Dragon Ball</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
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
  display: flex;
}
a {
  text-decoration: none;
 
}

.content {
  background-color: white;
  width: 95%;
  margin: auto;
  .conten_top {
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid #e6e4e4;

    a {
      color: rgb(255, 51, 0);
      font-size: 14px;
    }
  }

  h5 {
    color: rgb(220, 47, 8);
    font-size: 17px;
  }
}
.conten_list {
  padding: 15px;
  display: flex;
  justify-content: space-between;
}
.contenList li {
  max-width: calc(100% / 6);
  margin-top: 25px;
  padding: 0px 5px;

  .describes{
   padding: 30px 0px;
   color: #787676;
   display: flex;
  float: left;
  }

  .img_conten {
    position: relative;
    .top {
      max-width: 18%;
      position: absolute;
      top: 0px;
      left: 0px;
    }
    .discount {
      position: absolute;
      bottom: 0px;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.26);
      color: white;
    }
  }
}

.contenList li img {
  display: block;
  width: 95%;
}


.body {
  background-color: #f5f5f5;
  padding-top: 30px;
}
</style>
