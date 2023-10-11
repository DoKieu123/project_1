<template>
    <div>
        <ul class="header">
          <li class="logo">
            <a href="">
                <img src="@/assets/login/PasedangNhap/logo.png" alt="">
            </a>
            <h3 v-if="hiddens">
                Đăng nhập
            </h3>
            <h3 v-else>
                Đăng ký 
            </h3>
          </li>
          <li class="right">
            <a href="">
                Bạn cần giúp đỡ ?
            </a>
          </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
           return{
            
           }
        },
        props:{
            hiddens:Boolean
        }
    }
</script>

<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
a{
    text-decoration: none;
}
ul{
    list-style: none;
}
.header{
    display: flex;
    padding: 20px 70px ;
    justify-content: space-between;
    align-items: center;
    .logo{
        display: flex;
        align-items: end;
        justify-content: space-between;

        img{
            max-width: 120px;
            height: 100%;
        }
        h3{
            font-size: 23px;
            color: black;
            margin-left: 20px;
        }
    }
    .right{
        a{
            color: rgb(255, 25, 0);
            font-size: 14px;
        }
    }
}
</style>