import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        allData: [],
        egypt: null,
        world: null,
        loading: true
    },
    mutations: {
        getLoading(state, payload) {
            state.loading = payload;
        },
        set(state, payload) {
            // eslint-disable-next-line no-unused-vars
            let newARR = payload;
            state.allData = payload;
        },
        egypt(state, payload) {
            // eslint-disable-next-line no-unused-vars
            let egypt = payload;
            state.egypt = payload;
        },
        world(state, payload) {
            // eslint-disable-next-line no-unused-vars
            let world = payload;
            state.world = payload;
        },
    },
    getters: {
        all: (state) => {
            return state.allData;
        },
        egypt: (state) => {
            return state.egypt;
        },
        world: (state) => {
            return state.world;
        },
        loading: (state) => {
            return state.loading;
        },

    },
    actions: {
        fetchEgypt({
            commit
        }) {
            axios
                .get(`https://covid19.mathdro.id/api/countries/egypt`)
                .then((res) => {
                    commit('egypt', res.data);

                }).catch(err => {
                    console.log(err)
                });
        },
        fetchUsers({
            commit
        }) {
            axios
                .get(`https://coronavirus-19-api.herokuapp.com/all`)
                .then((res) => {
                    commit('world', res.data);

                }).catch(err => {
                    console.log(err)
                });
        },
        fetchWorld({
            commit
        }) {
            axios
                .get(`https://disease.sh/v3/covid-19/countries`)
                .then((res) => {
                    commit('set', res.data);
                    commit('getLoading', false);

                }).catch(err => {
                    console.log(err)
                });
        },

    }
})