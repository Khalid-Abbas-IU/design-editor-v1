import { createStore } from "vuex";

const store = createStore({
    state:{
        count:1,
    },
    mutations:{
        setCount(state,payload){
            state.count = payload;
        }
    }
})
export default store;