<template>
  <div class="list">
    <div class="conten">
      <span>DANH MỤC</span>
      <div class="body">

     <transition name="slide-enter">
          <ul>
            <li v-for="item in lists" :key="item.id"  ><a href="">
              <img :src="item.link" >
              <p>{{item.description}}</p>
            </a></li>
          </ul>
     </transition>
        <ul>
          <li v-for="item,key in lists" :key="key"><a href="">
            <img :src="item.link" >
            <p>{{item.description}}</p>
          </a></li>
        </ul>

      <button class="icon" @click="toggleButtons" v-if="helo">
      <i class="fa-solid fa-chevron-up fa-rotate-90"></i>
      </button>
      <button class="icon-left" @click="toggleButtonsLeft" v-else>
        <i class="fa-solid fa-chevron-up fa-rotate-270"></i>
      </button>
    </div>
    </div>
  </div>
</template>

<script >

import useCoachesStore from "@/store/list";
export default {
  data() {
    return {
      helo:true
    }
    
  },
  computed: {
    lists() {
      return useCoachesStore().visibleItems;
    },
 

  }
  , 
  methods: {
    toggleButtons() {
      useCoachesStore().toggleItems()
       this.helo =!this.helo
        },
        toggleButtonsLeft(){
          useCoachesStore().toggleItemsLeft()
          this.helo =true
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
a{
  text-decoration: none;
  color: black;
}
ul {
  list-style: none;
  display: flex;

}
.list {
  background-color: #f5f5f5;
  padding-top: 20px;
}
.conten {
  background-color: white;
  width: 95%;
  margin: auto;
}
.body{
  position: relative;
}
.body:hover .icon {
  width: 40px;
  height: 40px;
  transition: all 0.1s;
}
.body:hover .icon-left {
  width: 40px;
  height: 40px;
  transition: all 0.1s;
}

.icon{
  background-color: white;
  position: absolute;
  top: 46%;
  right: -12px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 0px;
  box-shadow: 0px 0px 2px 2px #d0cdcd;
}
.icon-left{
  background-color: white;
  position: absolute;
  top: 46%;
  left: -12px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 0px;
  box-shadow: 0px 0px 2px 2px #d0cdcd;
}

.icon i {
  color: #aeadad;
  font-size: 12px;
}
.icon-left i {
  color: #aeadad;
  font-size: 12px;
}
.list_item{
 display: flex;
}


.list_item{
  display: flex;
}
li{
  width: calc(100% / 9 );
  padding: 20px 15px;
  border: 1px solid #f5f5f5;
}
li img {
  width:90px ;
}

.list {
  background-color: #f5f5f5;
  padding-top: 20px;
}
.conten {
  background-color: white;
  width: 95%;
  margin: auto;
}
.conten span {
  display: flex;
  width: 100%;
  padding: 20px ;
  color: #605a5a;
  border-bottom: 1px solid #f5f5f5;
}
.slide-enter-active{
  transition: all 3s ease-out;
}
.slide-leave-active {
  transition: all 3s ease-in;
}

.slide-enter, .slide-leave-to  {
  transition: transform 3s;
  transform: translateX(-100%); 
}
///
@media screen and (max-width: 1010px) {
    ul li:nth-child(n+9) {
        display: none;
    }
    li{
  width: calc(100% / 8 );
}
}
@media screen and (max-width: 920px) {
    ul li:nth-child(n+8) {
        display: none;
    }
    li{
  width: calc(100% / 7 );
}
}
@media screen and (max-width: 820px) {
    ul li:nth-child(n+7) {
        display: none;
    }
    li{
  width: calc(100% / 6 );
}
}
@media screen and (max-width: 720px) {
    ul li:nth-child(n+6) {
        display: none;
    }
    li{
  width: calc(100% / 5 );
}
}
@media screen and (max-width: 620px) {
    ul li:nth-child(n+5) {
        display: none;
    }
    li{
  width: calc(100% / 4 );
}
}
@media screen and (max-width: 520px) {
    ul li:nth-child(n+4) {
        display: none;
    }
    li{
  width: calc(100% / 3 );
}
}
@media screen and (max-width: 420px) {
    ul li:nth-child(n+3) {
        display: none;
    }
    li{
  width: calc(100% / 2 );
}
}
@media screen and (max-width: 320px) {
    ul li:nth-child(n+2) {
        display: none;
    }
    li{
  width: calc(100% / 1 );
}
}
</style>
