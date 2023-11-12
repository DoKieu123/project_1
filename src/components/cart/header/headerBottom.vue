<template>
    <div class="logo">
        <router-link to="/" class="img_logo">
            <img src="@/assets/Shopee.svg.png" alt="">
        </router-link>
        <h4>Giỏ Hàng</h4>
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
.logo{
    display: flex;
    text-align: left;
    align-items: end;
    padding: 25px 50px;
    background-color: white;
    .img_logo img{
        width: 140px;
        padding-right: 15px;
    }
    h4{
        font-size: 19px;
        padding-left: 15px;
        color: rgb(234, 62, 31);
        border-left:  1px solid rgb(234, 62, 31);
        
    }
}

</style>