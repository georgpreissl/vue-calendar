import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';


Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
    apiKey: "AIzaSyCpzuxOg9QTOihtAhnu9SEiyyh2r6AJgUw",
    authDomain: "vue-calendar-9d401.firebaseapp.com",
    databaseURL: "https://vue-calendar-9d401.firebaseio.com",
    projectId: "vue-calendar-9d401",
    storageBucket: "vue-calendar-9d401.appspot.com",
    messagingSenderId: "413058067192",
    appId: "1:413058067192:web:7dabff76502b944ee2e90d"	
})


export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
