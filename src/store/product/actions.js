export default {
  filterPrice(payload) {
    this.product = this.product.filter(
      (item) =>
        item.price >= parseInt(payload.min) &&
        item.price <= parseInt(payload.max)
    );
  },
  // sắp xếp sp tăng
  increase() {
    this.product = this.product.sort(function (a, b) {
      return a.price - b.price;
    });
  },
  // sắp xếp sp giảm
  reduceProduct() {
    this.product = this.product.sort(function (a, b) {
      return b.price - a.price;
    });
  },
  // lọc theo tên sản phẩm
  filterProducts(param) {
    if (param === "") {
      // Nếu param rỗng, không cần ẩn sản phẩm nào, trả về danh sách sản phẩm nguyên gốc
      return this.product;
    } else {
      // Nếu param không rỗng, ta cần lặp qua danh sách sản phẩm và kiểm tra xem mỗi sản phẩm có chứa param hay không.
      this.product.forEach((item) => {
        if (!item.describe.toLowerCase().includes(param.toLowerCase())) {
          // Nếu sản phẩm không chứa param, thì đánh dấu sản phẩm này để ẩn
          item.hidden = false;
        } else {
          // Ngược lại, sản phẩm chứa param, không cần ẩn nó
          item.hidden = true;
        }
      });
      // Trả về danh sách sản phẩm sau khi đã đánh dấu ẩn hoặc không ẩn
      return this.product;
    }
  }
};
