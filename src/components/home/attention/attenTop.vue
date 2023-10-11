<template>
  <div class="top">
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active round"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          class="round"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          class="round"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          class="round"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="4"
          class="round"
          aria-label="Slide 5"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="5"
          class="round"
          aria-label="Slide 6"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="6"
          class="round"
          aria-label="Slide 7"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="@/assets/body_top/image2.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="@/assets//body_top/image1.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="@/assets//body_top/image4.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="@/assets//body_top/anh3.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="@/assets//body_top/anh6.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="@/assets//body_top/image5.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="@/assets//body_top/image7.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon btn" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next "
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon btn" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <ul class="right">
      <li>
        <a href="">
          <img
            src="@/assets/body_top/right/vn-50009109-11daf1f4824bdff1a264947dbf187fd1_xhdpi.png"
            alt=""
          />
        </a>
      </li>
      <li>
        <a href=""
          ><img
            src="@/assets/body_top/right/vn-50009109-512fe93391e516e37fe226919c41b778_xhdpi.png"
            alt=""
        /></a>
      </li>
    </ul>
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
.top {
  display: flex;
  justify-content: center;
  height: 250px;
  overflow: hidden;
  margin-top: 150px;
  padding: 0px 30px;
}
.slide {
  width: 65%;
  margin-right: 5px;
}
.right {
  width: 35%;
}
.slide img {
  height: 250px;
  border-radius: 2px;
}

.right img {
  width: 100%;
  height: 123px;
  border-radius: 2px;
}
.right li:last-child {
  margin-top: 4px;
  height: 113px;
}
.right li {
  border-radius: 5px;
}
.right li img {
  border-radius: 3px;
}
.round {
  border-radius: 50%;
  height: 8px;
  width: 8px;
}
@media screen and (max-width: 970px){
.top {
  margin-top: 170px;
  
}
}
@media screen and (max-width: 960px){
  .top {
  display: block;
  justify-content: center;
  overflow: visible;
  margin-top: 100px;
  padding: 0px 30px;
}
.slide {
  width: 100%;
  margin-right: 5px;
}
.right {
  margin-top: 5px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  
}
.right li {
  width: 49.5%;
}
.right img {
  width: 100%;
}
.right li:last-child {
  margin-top: 0px;
  height: 113px;
}

}
@media screen and (max-width: 500px){
  .right{
    display: block;
  }
  .right li {
  width: 100%;
  margin-bottom: 5px;
  
}
}

</style>
