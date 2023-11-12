export default {
  // allproduct:(state) => state.product
  allproduct(state){
    if(state.fullProduct){
      return state.product.slice(0, 49);
    }
    else{
      return state.product.slice(0,36);
    }
  }
};
