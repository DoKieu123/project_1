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

      <li>
        <ul v-if="!logged">
          <li class="vertical">
            <router-link to="/register">Đăng ký </router-link>
          </li>
          <li><router-link href="" to="/login">Đăng nhập</router-link></li>
        </ul>
        <ul class="logged" v-else>
          <li class="name">{{ getUsers }}</li>
          <ul class="extra">
            <li><router-link to="/cart"> Đơn Hàng </router-link></li>
            <li>
              <div @click="logout">Đăng Xuất </div>
            </li>
          </ul>
        </ul>
      </li>
    </ul>
  </div>
  <!-- tab phụ bên phải khi reponsive -->
  <base-dialog v-if="showList" @close="listShow">
    <template #default>
      <div class="flex_mobile">
        <ul class="list_mobie">
          <li>
            <img src="@/assets/SHOPEEMALL-LOGO.png" alt="" />
            <i class="fa-solid fa-x closed" @click="closedList"></i>
          </li>
          <li class="vertical"><a href="">Kênh Người Bán </a></li>
          <li class="vertical"><a href="">Trở thành Người bán Shopee </a></li>
          <li class="vertical"><a href="">Tải úng dụng </a></li>
          <li>
            Kết nối
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
          </li>
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
          <li class="vertical"><a href="">Đăng ký </a></li>
          <li><a href="">Đăng nhập</a></li>
        </ul>
      </div>
    </template>
  </base-dialog>

  <i class="fa-solid fa-list menu" @click="listShow" v-else></i>
</template>

<script>
export default {
  data() {
    return {
      showList: false,
      userDataStrings: localStorage.getItem("listData") || null
    };
  },
  computed: {
    getUsers() {
    if (this.userDataStrings) {
      const users = JSON.parse(this.userDataStrings);
      const lastUser = users[users.length - 1];
      return lastUser ? lastUser.loginname : null;
    }
    return null;
  }
    ,
    logged() {
      if(this.userDataStrings){
      const users = JSON.parse(this.userDataStrings);
      const lastUser = users[users.length - 1];
      const nameOfLastUsers = lastUser.logged;
      return nameOfLastUsers;
      }
      else{
        return false
      }
    },
  },
  methods: {
    listShow() {
      this.showList = !this.showList;
    },
    closedList() {
      this.showList = !this.showList;
    },
    logout() {
      localStorage.removeItem("listData");
      const userDataStrings = localStorage.getItem("listData");
      console.log(userDataStrings);
      console.log("aaaaa");
      this.userDataStrings = null;
    },
    
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
.menu {
  display: none;
}
.logged {
  position: relative;
}
.extra {
display: none !important;
  position: absolute;
  background-color: white;
  padding: 15px 30px;
  top: 20px;
  left: -79px;
  color: black;
  display: block;
  text-align: left;
  border-radius: 2px;
  li {
    padding: 8px 0px;
    font-size: 16px;
    a {
      color: black;
      font-size: 16px;
    }
  }
  li:hover a {
    color: rgb(24, 205, 151);
  }
  li:hover  {
    color: rgb(24, 205, 151);
  }
}
.name:hover + .extra {
  display: block !important;
}
.extra:hover{
    display: block!important;
  }
.name:hover {
  color: black;
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
  .menu {
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
