<template>
  <div class="header">
    <headerTop></headerTop>
    <div class="Below">
      <headerBelow></headerBelow>
    </div>
  </div>
</template>

<script>
import headerBelow from "./headerBelow.vue";
import headerTop from "./headerTop.vue";
export default {
  components: {
    headerTop,
    headerBelow,
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
.header {
  z-index: 999999;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background: linear-gradient(-180deg, rgb(245, 61, 45), rgb(255, 102, 51));
  width: 100%;
  color: white;
}
//
@media screen and (max-width: 960px) {
  .header {
    padding: 10px 0px;
    display: flex;
  }
  .Below {
    width: 90%;
  }
}
@media screen and (max-width: 790px) {
  .Below {
    width: 85%;
  }
}
@media screen and (max-width: 560px) {

.Below {
  width: 80%;
}
}
@media screen and (max-width: 470px) {

.Below {
  width: 60%;
}
}
</style>
