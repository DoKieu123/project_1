<template>
  <div>
    <div class="backgrou">
      <img src="@/assets/login/PasedangNhap/bgr.jpg" alt="" />
      <form action="" id="login" @submit.prevent="loginshopee">
        <div class="header">
          <h5>Đăng nhập</h5>
          <div class="text_qr">
            <span> Đăng nhập với mã QR </span>
            <a href="">
              <i class="fa-solid fa-qrcode"></i>
            </a>
          </div>
        </div>
        <div>
          <input
            type="text"
            placeholder="Tên đăng nhập"
            v-model.trim="logins.loginname"
          />
          <div class="password">
            <input
              type="password"
              placeholder="Mật khẩu"
              v-model.trim="logins.loginpassword"
            />
            <i class="fa-regular fa-eye"></i>
          </div>
        </div>
        <p
          :class="{
            'my-class': formIsValid === true,
            'red': formIsValid === false,
          }"
        >
          Please fix above errors and submit again!
        </p>
        <button>ĐĂNG NHẬP</button>
        <div class="forget">
          <a href="">Quên mật khẩu</a>
          <a href="">Đăng nhập với SMS </a>
        </div>
        <div class="or">
          <span>HOẶC</span>
        </div>
        <div class="social">
          <a href="">
            <i class="fa-brands fa-facebook"></i>
            FaceBook
          </a>
          <a href="">
            <i class="fa-brands fa-google"></i>
            Google
          </a>
        </div>
        <div class="know">
          <span>Bạn mới biết đến Shopee? <router-link to="/register">Đăng ký</router-link></span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import useUserStore from "@/store/user";
export default {
  data() {
    return {
      logins: { loginname: "", loginpassword: "" ,logged:true},
      formIsValid: true,
      name_infor: localStorage.getItem("username"),
    };
  },
  props: {},
  methods: {
    // validateForm() {
    //   this.formIsValid = true;
    //   if ( this.logins.loginname.length < 10) {
    //     this.formIsValid = false;
    //   }
    //   if (this.logins.loginpassword.length < 10) {
    //     this.formIsValid = false;
    //   }
    // },
    
    loginshopee() {
      if (this.logins.loginname === "" || this.logins.loginpassword === "") {
        this.formIsValid = false;
        return;
      }

      const userToLogin = useUserStore().alluser.find((user) => {
        return (
          user.name === this.logins.loginname &&
          user.password === this.logins.loginpassword
        );
      });
      if (userToLogin) {
        localStorage.setItem("user", JSON.stringify(this.logins));
        const userDataString = localStorage.getItem("user");
        const users = JSON.parse(userDataString);
//gán biến listData = -giá trị lấy ra(đã biến đổi về kiểu dữ liệu javascrip) trong localStorage có key là "listData"
              //      - nếu key không tồn tại(null) thì gán bằng mảng rỗng 
// => để đảm bảo rằng biến listData lúc nào cũng tồn tại là một mảng 
        let listData = JSON.parse(localStorage.getItem("listData")) || [];
        // Thêm danh sách người dùng (users) vào mảng `listData`
        listData.push(users)
        // Lưu trữ `listData` vào `localStorage`
        localStorage.setItem("listData", JSON.stringify(listData));
        const userDataStrings = localStorage.getItem("listData");
        console.log(userDataStrings);
        alert("đăng nhập thành công");
        this.$router.replace("/");
      } else {
        alert("tên , mật khẩu chưa đúng ! xin mời mật lại");
        (this.logins.loginname = ""), (this.logins.loginpassword = "");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
ul {
  list-style: none;
}
.backgrou {
  position: relative;
  max-width: 100%;
  background-color: rgb(208, 1, 27);
  #login {
    width: 410px;
    position: absolute;
    top: 70px;
    right: 100px;
    padding: 20px 30px;
    background-color: white;
    border-radius: 5px;
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 25px;
      .text_qr {
        display: flex;
        align-items: center;
        a i {
          font-size: 43px;
          color: #ff2a00;
          position: relative;
        }
        a i::after {
          content: "";
          width: 0;
          height: 0;
          border-right: 35px solid transparent; /* Độ dài của cạnh góc vuông */
          border-bottom: 35px solid white; /* Màu và độ dài của cạnh góc vuông */
          position: absolute;
          bottom: 0;
          right: 8px;
        }
      }
    }
  }
}
.red {
  width: 100%;
  height: 16px;
  color: #ff2a00;
  text-align: left;
  font-size: 14px;
  margin-bottom: 5px;
}
.my-class {
  display: none;
  height: 16px;
  width: 100%;
}
.text_qr span {
  display: flex;
  justify-content: start;
  background-color: #fefaec;
  padding: 5px;
  border: 2px solid #ffbf00;
  border-radius: 2px;
  margin-right: 15px;
  color: #ffbf00;
  width: 160px;
  font-weight: 700;
  font-size: 15px;
  position: relative;
}
.text_qr span::after {
  position: absolute;
  content: "";
  box-sizing: border-box;
  width: 0.75rem;
  height: 0.75rem;
  transform: rotate(45deg) translateX(-50%);
  border-top: 2px solid #ffbf00;
  border-right: 2px solid #ffbf00;
  top: 50%;
  right: -0.75rem;
}
.text_qr span::after {
  background-color: #fefaec;
}
input {
  width: 100%;
  padding: 9px 15px;
  margin-bottom: 30px;
  font-size: 14px;
  border: 1px solid #dfdcdc;
}
.password {
  position: relative;
}
.fa-eye {
  position: absolute;
  top: 12px;
  right: 15px;
  color: #b1aeae;
}
button {
  margin-bottom: 5px;
  width: 100%;
  padding: 9px;
  border-radius: 2px;
  border: 0px;
  background-color: #ee4d2d;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.09);
  color: white;
  opacity: 0.7;
  font-size: 14px;
}
.forget {
  display: flex;
  justify-content: space-between;
  font-size: 13px;

  a {
    color: rgb(16, 19, 208);
  }
}
.or {
  border-bottom: 1px solid #e5e1e1;
  position: relative;
  margin: 30px;
}
.or span {
  position: absolute;
  top: -10px;
  left: 38%;
  font-size: 14px;
  padding: 0px 20px;
  background-color: white;
  color: #d3d3d3;
}
.social {
  margin: 20px;
  display: flex;
  justify-content: space-between;
}
.social a {
  color: rgb(44, 43, 43);
  border: 1px solid rgb(212, 209, 209);
  width: 47%;
  padding: 8px;
}
.fa-facebook {
  color: rgb(22, 77, 228);
  margin-right: 5px;
}
.fa-google {
  color: rgb(205, 205, 62);
}
.know {
  color: #ded9d9;
  font-size: 14px;
  margin-bottom: 20px;
  a {
    color: #ff2a00;
  }
}
.rules {
  margin: 40px 0px;
  font-size: 13px;
  padding: 0px 40px;
  color: rgb(21, 21, 21);
  a {
    color: rgb(255, 38, 0);
  }
}
</style>
