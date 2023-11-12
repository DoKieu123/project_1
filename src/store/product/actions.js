export default {
  // lọc theo khoảng giá
  filterPrice(payload) {
    // nếu 2 ô input bị bỏ trống
    if (payload.min === null && payload.max === null ) {
      return this.product.forEach((item)=>{
        item.hidden =true
      })
    } 
    // nếu ô giá trị nhỏ bị bỏ trống
    else if(payload.min === null){
      return this.product.forEach((item)=>{
        if (item.price <= parseInt(payload.max)) {
          item.hidden = true;
        } else {
          item.hidden = false;
        }
      })
    }
    // nếu ô giá trị lớn bị bỏ trống 
    else if(payload.max === null){
      return this.product.forEach((item)=>{
        if (item.price >= parseInt(payload.min)) {
          item.hidden = true;
        } else {
          item.hidden = false;
        }
      })
    }
    // nếu 2 ô có dữ liệu
    else {
      // lặp qua từng sản phẩm và lấy ra các sản phẩm nằm trong khoảng giá và cho thuộc tính hidden = true 
      // để sản phẩm đó được hiển thị bên compoment AppProduct
      this.product.forEach((item) => {
        if (  item.price >= parseInt(payload.min) && item.price <= parseInt(payload.max)) {
          item.hidden = true;
        } else {
          item.hidden = false;
        }
      });
      return this.product;
    }
  },

  // sắp xếp sp tăng
  // sort() :sử dụng để sắp xếp các phần tử của một mảng.
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
      return this.product.forEach((item)=>{
        item.hidden =true
      })
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
