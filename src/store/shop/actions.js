import useCartStore from "../cart";
export default {
  registershop(payload) {
    const cartData = {
      id: payload.id,
      link: payload.link,
      describe: payload.describe,
      priceunit: payload.price,
      price: payload.price * payload.selected ,
      chone: payload.chone,
      warehouse: payload.warehouse,
      selected: payload.selected,
      shop_id: payload.shop_id,
    };
    const idshop = cartData.shop_id;

    // điều kiện 1 : nếu id sản phẩm === id sản phẩm đã có 
    // => sản phẩm này đã có trong giỏ hàng nhưng được chọn 1 lần nữa
    // không push lại sản phẩm , không push lại shop => chỉ tăng số lương lên 
    const idproduct = cartData.id;
    const abc = this.shop.some((shop) =>
      shop.products.some((product) => product.id === idproduct)
    );
    // điều kiện 2 :(shop_id của sản phẩm) === (id của shop)
    // push sản phẩm vào products của shop
    // push shop đó vào trong store cart để rende ra ngoài
    const matchingShop = this.shop.find((item) => item.id === idshop);
    // điều kiện 3:(shop_id của sản phẩm) === (shop_id của sản phẩm trong mảng products của shop) 
    // push sản phẩm , không push shop
    const isIdInProducts = this.shop.some((shop) =>
      shop.products.some((product) => product.shop_id === idshop)
    );

  //  kiểm tra các kiều kiện
    if (abc && matchingShop && isIdInProducts) {
      // shop có id sản phẩm === id sản phẩm mới 
      const aa = this.shop.find((shop) =>
        shop.products.find((product) => product.id === idproduct)
      );
      // product có id sản phẩm === id sản phẩm mới
      const bb = aa.products.find((shop) => shop.id === idproduct);
      console.log(bb.selected);
      // thuộc tính selected của sản phẩm có id === id sản phẩm mới
      bb.selected +=cartData.selected
      bb.price = bb.selected* bb.priceunit
    } else if (matchingShop && isIdInProducts) {
      matchingShop.products.push(cartData);
    } else if (matchingShop) {
      matchingShop.products.push(cartData);
      useCartStore().cart.push(matchingShop);
      // console.log(useCartStore().cart);
    }
  },
};
