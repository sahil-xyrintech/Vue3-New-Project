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
            favFilters: null,
        }
    },
    mutations: {
        SET_FILTER(state, data) {
            state.filters = data.data
            // state.favFilters = data.data.filter(f => f.fav === true)
        },
        // SET_FAVORITE_FILTER(state, filter, index) {
        //     state.filters[index].fav = filter.fav
        // }
    },
    actions: {
        async getFilter(context) {
            await axios
                .get(
                    "https://first-vue-app-844d4-default-rtdb.asia-southeast1.firebasedatabase.app/filters/.json"
                )
                .then((response) => {
                    context.commit('SET_FILTER', response)
                });

        },
        async setFilter(context, filters) {
            await axios.post(
                "https://first-vue-app-844d4-default-rtdb.asia-southeast1.firebasedatabase.app/filters/.json", { name: filters.name, fav: filters.fav }
            )
        },
        // setFavFilter(context, filterIndex) {
        //     axios
        //     .post(
        //         "https://first-vue-app-844d4-default-rtdb.asia-southeast1.firebasedatabase.app/.json",
        //     )


        // },
        // deleteFilter(context, filterIndex) {
        //     axios.delete("https://first-vue-app-844d4-default-rtdb.asia-southeast1.firebasedatabase.app/.json",${filterIndex})
        // }

    },
    getters: {
        showFilters(state) {
            return state.filters
        },
        showFavFilter(state) {
            return state.favFilters
        }
    }
});
export default store;