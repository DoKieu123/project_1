import getters from "./getters";
import actions from "./actions";
import { defineStore } from "pinia";

const useCartStore = defineStore("cart",{
    state:()=>{
        return{
            cart :[],
        }
    },
    getters,
    actions
});
export default useCartStore