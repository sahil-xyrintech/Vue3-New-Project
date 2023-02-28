import { createStore } from 'vuex';
import axios from 'axios'
// import { filter } from 'core-js/core/array';
const store = createStore({
    state() {
        return {
            // filters: [
            //     {
            //         id: 1,
            //         name: "filter 1",
            //         value: "abcdef",
            //         fav: false,
            //     },
            //     {
            //         id: 2,
            //         name: "filter 2",
            //         value: "abcdef",
            //         fav: false,
            //     },
            //     {
            //         id: 3,
            //         name: "filter 3",
            //         value: "abcdef",
            //         fav: false,
            //     },
            //     {
            //         id: 4,
            //         name: "filter 4",
            //         value: "abcdef",
            //         fav: false,
            //     },
            // ]
            filters: null,
        }
    },
    mutations: {
        SET_FILTER(state, data) {
            state.filters = data.data
        },
        SET_FAVORITE_FILTER(isFav) {
            isFav.fav = !isFav.fav
            console.log(isFav)
        }
    },
    actions: {
        getFilter(context) {
            axios
                .get(
                    "https://first-vue-app-844d4-default-rtdb.asia-southeast1.firebasedatabase.app/Filter.json"
                )
                .then((response) => {
                    context.commit('SET_FILTER', response)
                });

        },
        setFavFilter() {
            axios.post(
                "https://first-vue-app-844d4-default-rtdb.asia-southeast1.firebasedatabase.app/Filter.json",
            ).then((response) => {
                // context.commit('SET_FAVORITE_FILTER', response.data[payload.index])

                console.log(response)
            });
        }

    },
    getters: {
        showFilters(state) {
            return state.filters
        }
    }
});
export default store;