export default {
  filterPrice(payload){
        this.product = this.product.filter(
          (item) => item.price >= parseInt(payload.min) && item.price <= parseInt(payload.max)
        );
      },
      increase(){
       this.product = this.product.sort(function(a, b) {
        return a.price - b.price
       });
      },
      reduceProduct(){
        this.product = this.product.sort(function(a, b) {
            return b.price - a.price
           });
          },
      
}