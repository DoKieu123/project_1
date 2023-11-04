import getters from "./getters";
import actions from "./actions";
import { defineStore } from "pinia";

const useUserStore = defineStore("user",{
    state: ()=>{
        return{
            user: []
        }
    },
    getters,
    actions
});
export default useUserStore