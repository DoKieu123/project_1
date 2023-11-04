<template>
  <div>
    <div class="backgrou">
      <img src="@/assets/login/PasedangNhap/bgr.jpg" alt="" />
      <form action="" id="login" onsubmit="return false">
        <div class="header" v-if="hidden">
          <h5>Đăng nhập</h5>
          <div class="text_qr">
            <span> Đăng nhập với mã QR </span>
            <a href="">
              <i class="fa-solid fa-qrcode"></i>
            </a>
          </div>
        </div>
        <div class="header" v-else>
          <h5>Đăng Ký</h5>
        </div>
        <div v-if="hidden">
          <input type="text" placeholder="Email/Số điện thoại/Tên đăng nhập" v-model="signin.number"/>
          <div class="password">
            <input type="text" placeholder="Mật khẩu" v-model="signin.password" />
            <i class="fa-regular fa-eye"></i>
          </div>
        </div>
        <div v-else>
          <input type="text" placeholder="Số điện thoại" v-model="logIn.phone"/>
          <input type="password" placeholder="Mật khẩu" v-model="logIn.password" />
        </div>
        <button v-if="hidden">ĐĂNG NHẬP</button>
        <button v-else @click="register('login_in')">ĐĂNG Ký</button>
        <div class="forget" v-if="hidden">
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
      <div class="rules" v-if="block">
        <span>
          Bằng việc đăng kí, bạn đã đồng ý shopee về <a href=""> Điều khoản dịch vụ </a> & <a href="">Chính sách bảo mật </a>
        </span>
      </div>
        <div class="know">
          <span>Bạn mới biết đến Shopee? <a href="" v-if="hidden">Đăng ký</a> <a href="" v-else> Đăng Nhập</a></span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import useUserStore from "@/store/user"
export default {
  data() {
    return {
    logIn:{phone:null,password:""},
    signin:{number:null , password:""}
    };
  },
  props:{
    hidden: Boolean,
    block: Boolean,
  },
  methods: {
    register(param){
      console.log(param);
      useUserStore().login(this.logIn)
      
      
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
.rules{
  margin: 40px 0px ;
  font-size: 13px;
  padding: 0px 40px;
  color: rgb(21, 21, 21);
  a{
    color: rgb(255, 38, 0);
  }
}
</style>
