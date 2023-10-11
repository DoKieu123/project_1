import { defineStore } from "pinia";

const useSaleStore = defineStore("sale", {
  state: () => {
    return {
      sale: [
          {
            id: 1,
            link: "/catego/anh10.png",
            description: "đ 123.000",
          },
          {
            id: 2,
            link: "/catego/anh11.png",
            description: "đ 99.000",
          },
          {
            id: 3,
            link: "/catego/anh12.png",
            description: "đ 159.000",
          },
          {
            id: 4,
            link: "/catego/anh13.png",
            description: "đ 98.000",
          },
          {
            id: 5,
            link: "/catego/anh14.png",
            description: "đ 129.000",
          },
          {
            id: 6,
            link: "/catego/anh13.png",
            description: "đ 97.000",
          },
          {
            id: 7,
            link: "/catego/sale6.jpg",
            description: "đ 654.000",
          },
          {
            id: 8,
            link: "/catego/sale5.png",
            description: "đ 987.000",
          },
          {
            id: 9,
            link: "/catego/sale4.jpg",
            description: "đ 267.000",
          },
          {
            id: 10,
            link: "/catego/sale3.jpg",
            description: "đ 980.000",
          },
          {
            id: 11,
            link: "/catego/sale2.png",
            description: "đ 2.000",
          },
          {
            id: 12,
            link: "/catego/sale1.png",
            description: "đ 1.000",
          },
      ],
      showLast: true,
    };
  },
  actions: {
    toggleItemsSale(){
      this.showLast =! this.showLast
    },
    toggleItemsSaleLeft(){
      this.showLast = true 
    }
  }
  ,
  getters: {
    visibleItemsSale(){
      if(this.showLast){
        return this.sale.slice(0,6);
      }
      else{
        return this.sale.slice(-6)
      }
    }
  }
 
});

export default useSaleStore;