<template>
  <h6>Lọc Theo Giá</h6>
  <div class="content">
    <div class="content_filter">
      <input type="text" placeholder="TỐI THIỂU" v-model="filter.min"/>
      <input type="text" placeholder="TỐI ĐA" v-model="filter.max" />
      <button class="btnfilter" @click="setfilter">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
    <div class="pricefilter">
      Giá <i class="fa-solid fa-arrow-up" v-if="hiden" @click="setprice"></i>
      <i class="fa-solid fa-arrow-up fa-rotate-180" v-else @click="setsprice"></i>
    </div>
  </div>
</template>

<script>
export default {
    emits: ["setfilter", "increasePrice","reduce"],
  data() {
    return {
        hiden: true,
        filter: { min: null, max: null}
    };
  },
  methods: {
    setfilter(){
        this.$emit("setfilter",this.filter)
    },
    setprice(){
        this.$emit("increasePrice")
        this.hiden = !this.hiden
    },
    setsprice(){
      this.$emit("reduce")
      this.hiden = !this.hiden
    }
  },
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
h6 {
  padding: 10px 0px;
  color: rgb(229, 40, 6);
  box-shadow: 5px 5px 3px #888888;
}
.content_filter {
  display: flex;
  justify-content: center;
  padding: 20px 0px;
  input{
    margin-right: 15px;
    
    margin: center;
  }
}
.pricefilter{
    color: rgb(229, 59, 8);
}
.btnfilter{
    padding: 5px 10px;
    background-color: rgb(229, 59, 8);
    border: 0px;
    outline: none;
    color: white;
    border-radius: 3px;
}
.content{
display: flex;
justify-content: space-between;
align-items: center;
}

</style>
