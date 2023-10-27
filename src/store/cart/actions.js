
export default {
    registerCart(payload) {
        const cartData = {
            id:payload.id,
            link:payload.link,
            describe:payload.describe,
            price: payload.price, 
            priceunit: payload.price
        };
        this.cart.push(cartData);
    },
  deleteValue(payload){
    const index = this.cart.findIndex(item => item.id === payload);
    if(index !==1){
        this.cart.splice(index, 1);
    }
  }
  
}