import getters from "./getters";
import actions from "./actions";
import { defineStore } from "pinia";

const useProStore = defineStore("product", {
  state: () => {
    return {
      product: [
          {
            id: 'c1',
            link: "/product/anh2.jpg",
            reduce:"45%",
            describe: "[Mã COSXANH100 giảm 10% đơn 250K] Son Handmade mazinnnnnnnnnnnn",
            price:99000,
            sold:"5.7k",
            list:["/product/bs1.jpg","/product/bs2.jpg","/product/bs3.jpg","/product/bs4.jpg","/product/bs5.jpg"]
          },
          {
            id: 'c2',
            link: "/product/anh3.jpg",
            reduce:"5%",
            describe: "[Mã COSXANH100 giảm 10% đơn 250K] Son Handmade mazinnnnnnnnnnnn",
            price: 99000,
            sold:"5.7k",
            list:["/product/bs5.jpg","/product/bs6.jpg","/product/bs7.jpg","/product/bs8.jpg","/product/bs1.jpg"]
          },
          {
            id: 'c3',
            link: "/product/anh4.jpg",
            reduce:"87%",
            describe: "[Mã COSXANH100 giảm 10% đơn 250K] Son Handmade mazinnnnnnnnnnnn",
            price:888000,
            sold:"7k",
            list:["/product/bs8.jpg","/product/bs9.jpg","/product/bs10.jpg","/product/bs11.jpg","/product/bs1.jpg"]
          },
          {
            id: 'c4',
            link: "/product/anh5.jpg",
            reduce:"90%",
            describe: "[Mã COSXANH100 giảm 10% đơn 250K] Son Handmade mazinnnnnnnnnnnn",
            price: 1000,
            sold:"17k",
            list:["/product/bs9.jpg","/product/bs10.jpg","/product/bs11.jpg","/product/bs12.jpg","/product/bs1.jpg"]
          },
          {
            id: 'c5',
            link: "/product/anh6.jpg",
            reduce:"65%",
            describe: "[Mã COSXANH100 giảm 10% đơn 250K] Son Handmade mazinnnnnnnnnnnn",
            price: 990000,
            sold:"1k",
            list:["/product/bs1.jpg","/product/bs2.jpg","/product/bs3.jpg","/product/bs4.jpg","/product/bs1.jpg"]
          },
          {
            id: 'c6',
            link: "/product/anh7.jpg",
            reduce:"3%",
            describe: "[Mã COSXANH100 giảm 10% đơn 250K] Son Handmade mazinnnnnnnnnnnn",
            price: 998000,
            sold:"34k",
            list:["/product/bs11.jpg","/product/bs12.jpg","/product/bs3.jpg","/product/bs4.jpg","/product/bs1.jpg"]
          },
          {
            id: 'c7',
            link: "/product/anh8.jpg",
            reduce:"17%",
            describe: "[Mã COSXANH100 giảm 10% đơn 250K] Son Handmade mazinnnnnnnnnnnn",
            price: 909000,
            sold:"6k",
            list:["/product/bs4.jpg","/product/bs8.jpg","/product/bs3.jpg","/product/bs9.jpg","/product/bs1.jpg"]
          },
          {
            id: 'c8',
            link: "/product/anh9.jpg",
            reduce:"1%",
            describe: "[Mã COSXANH100 giảm 10% đơn 250K] Son Handmade mazinnnnnnnnnnnn",
            price: 199000,
            sold:"2k",
            list:["/product/bs9.jpg","/product/bs10.jpg","/product/bs11.jpg","/product/bs12.jpg","/product/bs1.jpg"]
          },
          {
            id: 'c9',
            link: "/product/anh10.jpg",
            reduce:"9%",
            describe: "[Mã COSXANH100 giảm 10% đơn 250K] Son Handmade mazinnnnnnnnnnnn",
            price: 999000,
            sold:"8k",
            list:["/product/bs1.jpg","/product/bs2.jpg","/product/bs3.jpg","/product/bs4.jpg","/product/bs1.jpg"]
          },
          {
            id: 'c10',
            link: "/product/anh11.jpg",
            reduce:"87%",
            describe: "[Mã COSXANH100 giảm 10% đơn 250K] Son Handmade mazinnnnnnnnnnnn",
            price: 9000,
            sold:"97k",
            list:["/product/bs12.jpg","/product/bs11.jpg","/product/bs10.jpg","/product/bs9.jpg","/product/bs1.jpg"]
          },
          {
            id: 'c11',
            link: "/product/anh12.jpg",
            reduce:"2%",
            describe: "[Mã COSXANH100 giảm 10% đơn 250K] Son Handmade mazinnnnnnnnnnnn",
            price: 987000,
            sold:"65k",
            list:["/product/bs5.jpg","/product/bs6.jpg","/product/bs7.jpg","/product/bs8.jpg","/product/bs1.jpg"]
          },
          {
            id: 'c12',
            link: "/product/anh13.jpg",
            reduce:"2%",
            describe: "[Mã COSXANH100 giảm 10% đơn 250K] Son Handmade mazinnnnnnnnnnnn",
            price: 19000,
            sold:"97k",
            list:["/product/bs1.jpg","/product/bs2.jpg","/product/bs3.jpg","/product/bs4.jpg","/product/bs1.jpg"]
          },
          {
            id: 'c13',
            link: "/product/anh14.jpg",
            reduce:"34%",
            describe: "[Mã COSXANH100 giảm 10% đơn 250K] Son Handmade mazinnnnnnnnnnnn",
            price: 765000,
            sold:"5k",
            list:["/product/bs8.jpg","/product/bs7.jpg","/product/bs6.jpg","/product/bs5.jpg","/product/bs1.jpg"]
          },
          {
            id: 'c14',
            link: "/product/anh15.jpg",
            reduce:"9%",
            describe: "[Mã COSXANH100 giảm 10% đơn 250K] Son Handmade mazinnnnnnnnnnnn",
            price: 908000,
            sold:"7k",
            list:["/product/bs3.jpg","/product/bs2.jpg","/product/bs2.jpg","/product/bs4.jpg","/product/bs1.jpg"]
          },
          {
            id: 'c15',
            link: "/product/anh16.jpg",
            reduce:"30%",
            describe: "[Mã COSXANH100 giảm 10% đơn 250K] Son Handmade mazinnnnnnnnnnnn",
            price: 999000,
            sold:"12.7k",
            list:["/product/bs8.jpg","/product/bs6.jpg","/product/bs5.jpg","/product/bs7.jpg","/product/bs1.jpg"]
          },
          {
            id: 'c16',
            link: "/product/anh17.jpg",
            reduce:"4%",
            describe: "[Mã COSXANH100 giảm 10% đơn 250K] Son Handmade mazinnnnnnnnnnnn",
            price: 99000,
            sold:"8.7k",
            list:["/product/bs11.jpg","/product/bs10.jpg","/product/bs9.jpg","/product/bs12.jpg","/product/bs1.jpg"]
          },
          {
            id: 'c17',
            link: "/product/anh18.jpg",
            reduce:"5%",
            describe: "[Mã COSXANH100 giảm 10% đơn 250K] Son Handmade mazinnnnnnnnnnnn",
            price: 99000,
            sold:"7.7k",
            list:["/product/bs8.jpg","/product/bs6.jpg","/product/bs5.jpg","/product/bs7.jpg","/product/bs12.jpg"]
          },
          {
            id: 'c18',
            link: "/product/anh19.jpg",
            reduce:"15%",
            describe: "[Mã COSXANH100 giảm 10% đơn 250K] Son Handmade mazinnnnnnnnnnnn",
            price: 199000,
            sold:"1.7k",
            list:["/product/bs1.jpg","/product/bs2.jpg","/product/bs3.jpg","/product/bs4.jpg","/product/bs12.jpg"]
          },
          {
            id: 'c19',
            link: "/product/anh20.jpg",
            reduce:"45%",
            describe: "[Mã COSXANH100 giảm 10% đơn 250K] Son Handmade mazinnnnnnnnnnnn",
            price: 99000,
            sold:"5.7k",
            list:["/product/bs5.jpg","/product/bs6.jpg","/product/bs8.jpg","/product/bs7.jpg","/product/bs12.jpg"]
          },
          {
            id: 'c20',
            link: "/product/anh3.jpg",
            reduce:"5%",
            describe: "[Mã COSXANH100 giảm 10% đơn 250K] Son Handmade mazinnnnnnnnnnnn",
            price: 99000,
            sold:"5.7k",
            list:["/product/bs1.jpg","/product/bs2.jpg","/product/bs3.jpg","/product/bs4.jpg","/product/bs12.jpg"]
          },
          {
            id: 'c21',
            link: "/product/anh4.jpg",
            reduce:"87%",
            describe: "[Mã COSXANH100 giảm 10% đơn 250K] Son Handmade mazinnnnnnnnnnnn",
            price: 9000,
            sold:"7k",
            list:["/product/bs5.jpg","/product/bs6.jpg","/product/bs7.jpg","/product/bs8.jpg","/product/bs12.jpg"]
          },
          {
            id: 'c22',
            link: "/product/anh5.jpg",
            reduce:"90%",
            describe: "[Mã COSXANH100 giảm 10% đơn 250K] Son Handmade mazinnnnnnnnnnnn",
            price: 1000,
            sold:"17k",
            list:["/product/bs3.jpg","/product/bs2.jpg","/product/bs1.jpg","/product/bs12.jpg","/product/bs12.jpg"]
          },
          {
            id: 'c23',
            link: "/product/anh6.jpg",
            reduce:"65%",
            describe: "[Mã COSXANH100 giảm 10% đơn 250K] Son Handmade mazinnnnnnnnnnnn",
            price: 990000,
            sold:"1k",
            list:["/product/bs1.jpg","/product/bs2.jpg","/product/bs3.jpg","/product/bs4.jpg","/product/bs12.jpg"]
          },
          {
            id: 'c24',
            link: "/product/anh7.jpg",
            reduce:"3%",
            describe: "[Mã COSXANH100 giảm 10% đơn 250K] Son Handmade mazinnnnnnnnnnnn",
            price: 998000,
            sold:"34k",
            list:["/product/bs5.jpg","/product/bs6.jpg","/product/bs7.jpg","/product/bs8.jpg","/product/bs12.jpg"]
          },
          {
            id: 'c25',
            link: "/product/anh8.jpg",
            reduce:"17%",
            describe: "[Mã COSXANH100 giảm 10% đơn 250K] Son Handmade mazinnnnnnnnnnnn",
            price: 909000,
            sold:"6k",
            list:["/product/bs1.jpg","/product/bs3.jpg","/product/bs2.jpg","/product/bs4.jpg","/product/bs12.jpg"]
          },
          {
            id:'c26',
            link: "/product/anh9.jpg",
            reduce:"1%",
            describe: "[Mã COSXANH100 giảm 10% đơn 250K] Son Handmade mazinnnnnnnnnnnn",
            price: 199000,
            sold:"2k",
            list:["/product/bs8.jpg","/product/bs6.jpg","/product/bs5.jpg","/product/bs7.jpg","/product/bs12.jpg"]
          },
          {
            id: 'c27',
            link: "/product/anh10.jpg",
            reduce:"9%",
            describe: "[Mã COSXANH100 giảm 10% đơn 250K] Son Handmade mazinnnnnnnnnnnn",
            price: 999000,
            sold:"8k",
            list:["/product/bs4.jpg","/product/bs3.jpg","/product/bs2.jpg","/product/bs1.jpg","/product/bs12.jpg"]
          },
          {
            id: 'c28',
            link: "/product/anh11.jpg",
            reduce:"87%",
            describe: "[Mã COSXANH100 giảm 10% đơn 250K] Son Handmade mazinnnnnnnnnnnn",
            price: 9000,
            sold:"97k",
            list:["/product/bs8.jpg","/product/bs7.jpg","/product/bs6.jpg","/product/bs5.jpg","/product/bs12.jpg"]
          },
          {
            id: 'c29',
            link: "/product/anh12.jpg",
            reduce:"2%",
            describe: "[Mã COSXANH100 giảm 10% đơn 250K] Son Handmade mazinnnnnnnnnnnn",
            price: 987000,
            sold:"65k",
            list:["/product/bs9.jpg","/product/bs10.jpg","/product/bs11.jpg","/product/bs12.jpg","/product/bs12.jpg"]
          },
          {
            id: 'c30',
            link: "/product/anh13.jpg",
            reduce:"2%",
            describe: "[Mã COSXANH100 giảm 10% đơn 250K] Son Handmade mazinnnnnnnnnnnn",
            price: 19000,
            sold:"97k",
            list:["/product/bs12.jpg","/product/bs11.jpg","/product/bs10.jpg","/product/bs9.jpg","/product/bs12.jpg"]
          },
          {
            id: 'c31',
            link: "/product/anh14.jpg",
            reduce:"34%",
            describe: "[Mã COSXANH100 giảm 10% đơn 250K] Son Handmade mazinnnnnnnnnnnn",
            price: 765000,
            sold:"5k",
            list:["/product/bs8.jpg","/product/bs6.jpg","/product/bs5.jpg","/product/bs7.jpg","/product/bs12.jpg"]
          },
          {
            id: 'c32',
            link: "/product/anh15.jpg",
            reduce:"9%",
            describe: "[Mã COSXANH100 giảm 10% đơn 250K] Son Handmade mazinnnnnnnnnnnn",
            price: 908000,
            sold:"7k",
            list:["/product/bs1.jpg","/product/bs2.jpg","/product/bs3.jpg","/product/bs4.jpg","/product/bs12.jpg"]
          },
          {
            id: 'c33',
            link: "/product/anh16.jpg",
            reduce:"30%",
            describe: "[Mã COSXANH100 giảm 10% đơn 250K] Son Handmade mazinnnnnnnnnnnn",
            price: 999000,
            sold:"12.7k",
            list:["/product/bs8.jpg","/product/bs6.jpg","/product/bs5.jpg","/product/bs7.jpg","/product/bs12.jpg"]
          },
          {
            id: 'c34',
            link: "/product/anh17.jpg",
            reduce:"4%",
            describe: "[Mã COSXANH100 giảm 10% đơn 250K] Son Handmade mazinnnnnnnnnnnn",
            price: 99000,
            sold:"8.7k",
            list:["/product/bs5.jpg","/product/bs6.jpg","/product/bs8.jpg","/product/bs7.jpg","/product/bs7.jpg"]
          },
          {
            id: 'c35',
            link: "/product/anh18.jpg",
            reduce:"5%",
            describe: "[Mã COSXANH100 giảm 10% đơn 250K] Son Handmade mazinnnnnnnnnnnn",
            price: 99000,
            sold:"7.7k",
            list:["/product/bs8.jpg","/product/bs6.jpg","/product/bs5.jpg","/product/bs7.jpg","/product/bs7.jpg"]
          },
          {
            id: 'c36',
            link: "/product/anh19.jpg",
            reduce:"15%",
            describe: "[Mã COSXANH100 giảm 10% đơn 250K] Son Handmade mazinnnnnnnnnnnn",
            price: 199000,
            sold:"1.7k",
            list:["/product/bs5.jpg","/product/bs6.jpg","/product/bs8.jpg","/product/bs7.jpg","/product/bs6.jpg"]
          },
          
      ],
    };
  },
    getters,
    actions,
});

export default useProStore;