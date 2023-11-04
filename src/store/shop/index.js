import getters from "./getters";
import actions from "./actions";
import { defineStore } from "pinia";

const useShopStore = defineStore("shop",{
    state: ()=>{
        return {
            shop: [
                {
                    id:1,
                    code:"shop01",
                    name:"ShopXinh",
                    products:[],
                    choone: false
                },
                {
                    id:2,
                    code:"shop02",
                    name:"Shop MeMe",
                    products:[],
                    choone: false
                },
                {
                    id:3,
                    code:"shop03",
                    name:"Beauty Gril.vn",
                    products:[],
                    choone: false
                },
                {
                    id:4,
                    code:"shop04",
                    name:"Shop Pam Mặt Vuông",
                    products:[],
                    choone: false
                },

            ],
        };
    },
    getters,
    actions
});
export default useShopStore;