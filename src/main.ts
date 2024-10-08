import { createApp, h, provide } from 'vue'
import './style.css'
import App from './App.vue'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'

const httpLink = createHttpLink({
    uri: 'https://countries.trevorblades.com/' // // URI del servidor GraphQL
})

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
    link: httpLink, cache})

createApp({ 
    setup(){
        provide(DefaultApolloClient, apolloClient);
    },
    render:()=>
        h(App),

}).mount('#app')

