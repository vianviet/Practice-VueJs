import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueAxios from "vue-axios";
import axios from "axios";
import VueSocketIO from "vue-socket.io";

Vue.config.productionTip = false;

// console.log(VueSocketIO);
Vue.use(
  new VueSocketIO({
    connection: "http://localhost:3000",
  })
);

Vue.use(VueAxios, axios);
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
