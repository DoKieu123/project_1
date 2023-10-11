
import { defineStore } from "pinia";

const useCoachesStore = defineStore("coaches", {
  state: () => {
    return {
      userIsCoach: false,
      coaches: [
        {
          id: 1,
          link: "/catego/anh1.png",
          description: "Thời Trang Nam",
        },
        {
          id: 2,
          link: "/catego/anh2.png",
          description: "Thời Trang Nam",
        },
        {
          id: 3,
          link: "/catego/anh3.png",
          description: "Thời Trang Nam",
        },
        {
          id: 4,
          link: "/catego/anh4.png",
          description: "Thời Trang Nam",
        },
        {
          id: 5,
          link: "/catego/anh5.png",
          description: "Thời Trang Nam",
        },
        {
          id: 6,
          link: "/catego/anh6.png",
          description: "Thời Trang Nam",
        },
        {
            id: 7,
            link: "/catego/anh7.png",
            description: "Thời Trang Nam",
          },
          {
            id: 8,
            link: "/catego/anh8.png",
            description: "Thời Trang Nam",
          },
          {
            id: 9,
            link: "/catego/anh9.png",
            description: "Thời Trang Nam",
          },
          {
            id: 10,
            link: "/catego/anh10.png",
            description: "Thời Trang Nam",
          },
          {
            id: 11,
            link: "/catego/anh11.png",
            description: "Thời Trang Nam",
          },
          {
            id: 12,
            link: "/catego/anh12.png",
            description: "Thời Trang Nam",
          },
          {
            id: 13,
            link: "/catego/anh13.png",
            description: "Thời Trang Nam",
          },
          {
            id: 14,
            link: "/catego/anh14.png",
            description: "Thời Trang Nam",
          },
      ],
      showFirst: true,
    };
  },
  actions: {
    toggleItems() {
      this.showFirst = !this.showFirst;
    },
    toggleItemsLeft(){
      this.showFirst = true 
    }
  
  },
  getters: {
    visibleItems() {
      // Dựa vào giá trị của biến showFirst để trả về danh sách item hiển thị
      if (this.showFirst) {
        return this.coaches.slice(0, 10);
      } else {
        return this.coaches.slice(-10);
      }
    },
  },

});


export default useCoachesStore;
