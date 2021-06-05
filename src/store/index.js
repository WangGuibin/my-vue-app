import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        //定义字段
        inputText: '输入的文本'
    },
    getters: {
        //读取获取值
        getInputTextValue(state) {
            return state.inputText
        }
    },
    mutations: {
        // 定义更新值的方法
        setTextValue(state, text) {
            state.inputText = text
        }
    },
    actions: {
        // 调用更新值的方法
        setInputTextValue({ commit, state }, text) {
            commit('setTextValue', text)
        }
    },
    modules: {},
});

export default store;