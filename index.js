"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = __importDefault(require("vue"));
// import ApolloClient from 'apollo-boost';
// import VueApollo from 'vue-apollo';
const App_vue_1 = __importDefault(require("./components/App.vue"));
const el = document.createElement('div');
document.body.appendChild(el);
new vue_1.default({ el, render: h => h(App_vue_1.default) });
// Vue.use(VueApollo);
// const apolloProvider = new VueApollo({
//   defaultClient: new ApolloClient({
//     uri: '/graphql',
//   }),
// });
// new Vue({ el, apolloProvider, render: h => h(App) });
//# sourceMappingURL=index.js.map