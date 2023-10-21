<template>
    <div class="content">
        <div class="infor">
            <div class="frame">
                <div class="frame_img">
                    <img src="@/assets/item-product/logo_shop/anh2.jpg" alt="">
                </div>
                <span>Yêu Thích</span>
            </div>
            <div class="name_shop">
                <h5>
                    RUBISHOES
                </h5>
                <p>Online 33 Phút Trước</p>
                <div class="btn">
                    <button class="chat">
                        <i class="fa-solid fa-message"></i> Chat Ngay
                    </button>
                    <button class="watch">
                        <i class="fa-solid fa-shop"></i> Xem Shop
                    </button>
                </div>
            </div>
        </div>
        <ul class="parameter">
          <li><span>Đánh Giá</span><p>8,4k</p></li>
          <li><span>Tỉ Lệ Phản Hồi</span><p>88%</p></li>
          <li><span>Tham Gia</span><p>38 tháng trước</p></li>
          <li><span>Sản Phẩm</span><p>3,8k</p></li>
          <li><span>Thời Gian Phản Hồi</span><p>trong vài giờ</p></li>
          <li><span>Người theo Dõi</span><p>83,5k</p></li>
        </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
ul{
    list-style: none;
}
a{
    text-decoration: none;
}
.content{
    width: 95%;
    margin: auto;
    background-color: white;
    margin-top: 20px;
    display: flex;
   padding: 20px;
}
.infor{
    width: 35%;
    display: flex;
    border-right: 1px solid #eae4e4;
    .frame{
        margin-right: 20px;
        padding-left: 10px;
        padding-top: 5px;
        position: relative;
        .frame_img{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            img{
                width: 80px;
                 height: 80px;
                 border-radius: 50%;
            }
        }
        span{
            font-size: 12px;
            background-color:#ee4d2d;
            color: white;
            padding: 0px 4px;
            border-radius: 2px;
            position: absolute;
            width: 70%;
            top: 70px;
            left: 17px;
        }
    }
    .name_shop{
        padding: 5px;
        padding-left: 15px;
        text-align: left;
        h5{
            font-size: 14px;
            color: black;
            margin-bottom: 5px;
        }
        p{
            font-size: 13px;
            color: #a5a4a4;
            margin-bottom: 5px;
        }
        .btn{
            .chat{
                background: rgba(255,87,34,.1);
                color:#ee4d2d ;
                padding: 6px 10px;
                border: 1px solid #ee4d2d;
                font-size: 14px;
                margin-right: 5px;
                border-radius: 2px;
            }
            .watch{
                padding: 6px 10px;
                border: 1px solid #d4d0d0;
                border-radius: 2px;
                font-size: 14px;
                background-color: white;
                color: #767474;
            }

        }
    }
   

}
.parameter{
    width: 65%;
    display: flex;
    flex-wrap: wrap;
    
    li{
        width: calc( 100% / 3);
        display: flex;
        justify-content: space-between;
        padding: 10px 20px;
        font-size: 14px;
        span{  
           align-items: left;
           color: #a5a4a4;
        }
        p{
            align-items: right;
            color: #ee4d2d;
           
        }
    }
}

</style>