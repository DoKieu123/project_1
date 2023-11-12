<template>
  <div class="flex">
    <ul>
      <li class="vertical"><a href="">Kênh Người Bán </a></li>
      <li class="vertical"><a href="">Trở thành Người bán Shopee </a></li>
      <li class="vertical"><a href="">Tải úng dụng </a></li>
      <li>
        Kết nối
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram"></i>
      </li>
    </ul>
    <ul>
      <li>
        <a href=""><i class="fa-regular fa-bell"></i> Thông Báo </a>
      </li>
      <li>
        <a href=""><i class="fa-regular fa-circle-question"></i> Hộ Trợ </a>
      </li>
      <li>
        <a href=""
          ><i class="fa-solid fa-globe"></i> Tiếng Việt
          <i class="fa-solid fa-chevron-up fa-rotate-180"></i
        ></a>
      </li>
      <!-- <li class="vertical"><a href="" @click="login('sign_in')">Đăng ký </a></li>
      <li><a href="" @click="login('login_in')">Đăng nhập</a></li> -->
      <div class="infor_use">
        <div class="avatar">
          <img src="@/assets/uer/use_one.jpg" alt="">
        </div>
        <span class="name"> {{ user }}</span>
      </div>
    </ul>
  </div>
  <!-- tab phụ bên phải khi reponsive -->

 
</template>

<script>

export default {
  data() {
    return {
      showList: false,
      userDataStrings: localStorage.getItem("listData") || null
    };
  },
  computed:{
    user(){
      if (this.userDataStrings) {
      const users = JSON.parse(this.userDataStrings);
      const lastUser = users[users.length - 1];
      return lastUser ? lastUser.loginname : null;
    }
    return null;
    }
  },
  methods: {
    listShow() {
      this.showList = !this.showList;
    },
    closedList() {
      this.showList = !this.showList;
    },
    login(param){
      this.$router.push({//Phương thức push được sử dụng để chuyển hướng người dùng đến một địa chỉ URL mới.
        path:"/login", // điều hướng tới trang login 
        query: { param: param } // thêm giá trị {param được truyền ở trên} vào đối tượng param để thay đổi đường dấn url
      });
    }
  },
};
</script>

<style lang="scss" scoped>
* {
  padding: 0px;
  margin: 0;
  box-sizing: border-box;
  font-size: 14px;
}
.flex{
  background: rgb(239, 72, 26)
}
.infor_use{
  display: flex;
}
.avatar img{
    width: 23px;
    height: 23px;
    border-radius: 50%;
  }
.flex_mobile {
  display: none;
}
.vertical {
  position: relative;
}
.vertical ::after {
  content: "";
  position: absolute;
  top: 0;
  width: 2px;
  height: 100%;
  background-color: rgb(214, 56, 56);
  margin-left: 12px;
}
i {
  margin-right: 7px;
  font-size: 16px;
}
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  color: white;
}

ul {
  list-style: none;
  display: flex;
}
li {
  padding: 0px 10px;
}
a {
  text-decoration: none;
  color: white;
}
.menu{
  display: none;
}
// reponsive
@media screen and (max-width: 1080px) {
  li {
    padding: 0px 3px;
  }
  .vertical ::after {
    width: 0px;
  }
}
@media screen and (max-width: 960px) {
  .flex {
    display: none;
  }
  .menu{
  display: block;
}
  .flex_mobile {
    display: block;
    position: fixed;
    top: 0px;
    right: 0px;
  }

  .flex_mobile ul {
    display: block;
    color: rgb(214, 56, 56);
    background-color: white;
    height: 100vh;
    padding: 20px 30px;
  }
  .flex_mobile ul a {
    color: rgb(214, 56, 56);
    font-size: 16px;
  }
  .flex_mobile ul img {
    width: 150px;
    height: 40px;
  }
  .flex_mobile li {
    padding: 10px 0px;
  }
  .menu {
    font-size: 30px;
    position: fixed;
    top: 40px;
    right: 50px;
  }
  .closed {
    position: absolute;
    top: 30px;
    right: 20px;
  }

}
</style>
