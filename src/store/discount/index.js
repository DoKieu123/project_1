import { defineStore } from "pinia";

const useDiscountStore = defineStore("discount", {
  state: () => {
    return {
      discount: [
        {
          id: 1,
          link: "/discont_img/anh1.png",
          description: "Giảm đến 4 triệu",
        },
        {
          id: 2,
          link: "/discont_img/anh2.jpg",
          description: "Giảm đến 4 triệu",
        },
        {
          id: 3,
          link: "/discont_img/anh3.jpg",
          description: "Giảm đến 4 triệu",
        },
        {
          id: 4,
          link: "/discont_img/anh4.jpg",
          description: "Giảm đến 4 triệu",
        },
        {
          id: 5,
          link: "/discont_img/anh5.jpg",
          description: "Giảm đến 4 triệu",
        },
        {
          id: 6,
          link: "/discont_img/anh6.jpg",
          description: "Giảm đến 4 triệu",
        },
        {
          id: 7,
          link: "/discont_img/anh7.png",
          description: "Giảm đến 4 triệu",
        },
        {
          id: 8,
          link: "/discont_img/anh8.jpg",
          description: "Giảm đến 4 triệu",
        },
        {
          id: 9,
          link: "/discont_img/anh7.png",
          description: "Giảm đến 4 triệu",
        },
        {
          id: 10,
          link: "/discont_img/anh2.jpg",
          description: "Giảm đến 4 triệu",
        },
        {
          id: 11,
          link: "/discont_img/anh3.jpg",
          description: "Giảm đến 4 triệu",
        },
        {
          id: 12,
          link: "/discont_img/anh4.jpg",
          description: "Giảm đến 4 triệu",
        },
        {
          id: 13,
          link: "/discont_img/anh5.jpg",
          description: "Giảm đến 4 triệu",
        },
        {
          id: 14,
          link: "/discont_img/anh6.jpg",
          description: "Giảm đến 4 triệu",
        },
        {
          id: 15,
          link: "/discont_img/anh1.png",
          description: "Giảm đến 4 triệu",
        },
        {
          id: 16,
          link: "/discont_img/anh8.jpg",
          description: "Giảm đến 4 triệu",
        },
      ],
      showDiscount: true,
    };
  },
  actions: {
    ToggleEvent() {
      this.showDiscount = !this.showDiscount;
    },
    toggleItemDis() {
      this.showDiscount = true;
    },
  },
  getters: {
    visibleItems() {
      if (this.showDiscount) {
        return this.discount.slice(0, 8);
      } else {
        return this.discount.slice(-8);
      }
    },
  },
});

export default useDiscountStore;
