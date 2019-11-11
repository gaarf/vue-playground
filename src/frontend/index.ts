import Vue from 'vue';
// import ApolloClient from 'apollo-boost';
// import VueApollo from 'vue-apollo';
import App from './components/App.vue';

const el = document.createElement('div');
document.body.appendChild(el);

new Vue({ el, render: h => h(App) });

// Vue.use(VueApollo);

// const apolloProvider = new VueApollo({
//   defaultClient: new ApolloClient({
//     uri: '/graphql',
//   }),
// });

// new Vue({ el, apolloProvider, render: h => h(App) });
