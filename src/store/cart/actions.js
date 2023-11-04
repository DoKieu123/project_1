
export default {
  deleteValue(payload){
    // lấy ra shop có sản phẩm có id = payload
    const index = this.cart.find((item) => 
    item.products.find((product)=> product.id ===payload))
    // lấy ra danh sách sản phẩm có sản phẩm có id = payload . trả về vị trí của sản phẩm , nếu không có thì trả về -1 
    const indexproduct = index.products.findIndex(item=> item.id ===payload)
    // lấy ra độ dài của danh sách sản phẩm có sản phẩm có id = payload
    if(indexproduct !== -1){
      index.products.splice(indexproduct,1)
    }
  
}
}